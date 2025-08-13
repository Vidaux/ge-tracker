// js/main.js
import { isOwned, setOwned, getLevel, setLevel } from "./storage.js";
import { CHARACTERS, allRegions } from "./characters.js";

/* -----------------------------
   Meta region groups (your map)
------------------------------*/
const META_REGION_MAP = {
  "Reboldeaux": [
    "Reboldeaux",
    "Rebouldeaux Queen's Gate",
    "Rebouldeaux Stone Pit"
  ],
  "City of Auch": [
    "City of Auch",
    "Mysterious Hut El Tejado Verde",
    "Dr Torsche's Mansion"
  ],
  "The Port of Coimbra": [
    "The Port of Coimbra",
    "Gigante Dock",
    "Los Toldos"
  ]
};

// Optional explicit image map (use if your filenames differ)
const BANNER_IMAGES = {
  "Stock Characters": "images/regions/stock.png",
  "Reboldeaux": "images/regions/reboldeaux.png",
  "City of Auch": "images/regions/auch.png",
  "The Port of Coimbra": "images/regions/coimbra.png",
  "Ustiur Base Camp": "images/regions/ustiur.png",
  "Promo": "images/regions/promo.png"
};

// Order banners: your 3 meta groups first, then any others A→Z
const META_ORDER = ["Stock Characters", "Reboldeaux", "The Port of Coimbra", "City of Auch", "Ustiur Base Camp"];

/* -----------------------------
   UI refs
------------------------------*/
const cardsEl  = document.getElementById("cards");
const searchEl = document.getElementById("searchInput");
const regionEl = document.getElementById("regionFilter");
const ownedEl  = document.getElementById("ownedFilter");

/* -----------------------------
   Filter persistence (per-tab)
------------------------------*/
const FILTER_KEY = "ge:listFilters:v1";

function saveFiltersToSession() {
  const data = {
    q: searchEl?.value ?? "",
    r: regionEl?.value ?? "",
    o: ownedEl?.value ?? ""
  };
  try { sessionStorage.setItem(FILTER_KEY, JSON.stringify(data)); } catch {}
}

function restoreFiltersFromSession() {
  try {
    const raw = sessionStorage.getItem(FILTER_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (searchEl && typeof data.q === "string") searchEl.value = data.q;
    if (regionEl && typeof data.r === "string") regionEl.value = data.r;
    if (ownedEl && typeof data.o === "string")  ownedEl.value  = data.o;
  } catch {
    sessionStorage.removeItem(FILTER_KEY);
  }
}

/* -----------------------------
   Init
------------------------------*/
(function init() {
  // Populate region filter
  regionEl.innerHTML = "";
  const allOpt = document.createElement("option");
  allOpt.value = "";
  allOpt.textContent = "All regions";
  regionEl.appendChild(allOpt);

  for (const r of allRegions()) {
    const opt = document.createElement("option");
    opt.value = r;
    opt.textContent = r;
    regionEl.appendChild(opt);
  }

  // Wire filters: save + render on input/change
  [searchEl, regionEl, ownedEl].forEach(el => {
    ["input", "change"].forEach(evt =>
      el.addEventListener(evt, () => { saveFiltersToSession(); render(); })
    );
  });

  // Restore saved filters for this tab (e.g., when returning from a character page)
  restoreFiltersFromSession();

  render();
})();

// Also re-apply when page is shown from bfcache or reloaded in the same tab
window.addEventListener("pageshow", () => {
  restoreFiltersFromSession();
  render();
});

/* -----------------------------
   Helpers
------------------------------*/
function getMetaRegion(region) {
  for (const [meta, list] of Object.entries(META_REGION_MAP)) {
    if (list.includes(region)) return meta;
  }
  return region; // regions not mapped become their own banner
}

function bannerOrderKey(name) {
  const idx = META_ORDER.indexOf(name);
  return idx === -1 ? `zz_${name.toLowerCase()}` : `aa_${String(idx).padStart(2, "0")}`;
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function getBannerImage(metaRegion) {
  // Prefer explicit mapping, else fallback to images/regions/<slug>.png
  return BANNER_IMAGES[metaRegion] || `images/regions/${slugify(metaRegion)}.png`;
}

/* ---------- NEW: helpers for richer search ---------- */
function buildWeaponKeywords(stances) {
  const set = new Set();
  if (!Array.isArray(stances)) return "";

  for (const s of stances) {
    const weapon = (s && typeof s === "object") ? s.weapon : null;
    if (!weapon) continue;

    // split on "/" or "+" and normalize
    const parts = String(weapon).split(/[\/+]/);
    for (let p of parts) {
      const t = p.trim().toLowerCase();
      if (!t || t === "none") continue;

      // add the full phrase (e.g., "two-handed sword")
      set.add(t);
      // also add each word inside (so "sword" alone matches)
      t.split(/\s+/).forEach(w => {
        if (w && w !== "none") set.add(w);
      });
    }
  }
  return Array.from(set).join(" ");
}

function buildPersonalKeywords(stats) {
  const personal = stats?.personal || {};
  const ps = typeof personal["Personal Skill"] === "string" ? personal["Personal Skill"] : "";

  // pull out the skill name before " - " if present (e.g., "Concentration")
  const skillName = ps.split(" - ")[0] || "";

  // include all LvX text so searching “accuracy”, “crit”, etc. can work
  const levelBits = [];
  for (let i = 1; i <= 13; i++) {
    const k = `Lv${i}`;
    if (typeof personal[k] === "string") levelBits.push(personal[k]);
  }

  return [ps, skillName, ...levelBits].filter(Boolean).join(" ");
}

/* ---------- Armor search helper ---------- */
function buildArmorKeywords(stats) {
  const armor = stats?.equipment?.["Armor"];
  if (!armor) return "";

  // Support "Coat, Leather", "Coat; Leather", "Coat/Leather" etc.
  const parts = String(armor).split(/[;,/|]+/).map(s => s.trim()).filter(Boolean);

  const set = new Set();
  for (const p of parts) {
    const low = p.toLowerCase();
    set.add(low);                    // "coat", "leather"
    // also index individual words e.g., "leather armor" -> "leather", "armor"
    low.split(/\s+/).forEach(w => { if (w) set.add(w); });
  }
  return Array.from(set).join(" ");
}

/* ----------------------------- */
function filteredList() {
  const term = (searchEl.value || "").toLowerCase().trim();
  const regionFilter = regionEl.value || "";
  const ownedFilter = ownedEl.value || "";

  return CHARACTERS.filter(c => {
    // stance names (as before)
    const stanceText = Array.isArray(c.stances)
      ? c.stances.map(s => (typeof s === "string" ? s : (s.name || ""))).join(" ")
      : "";

    const armorText = buildArmorKeywords(c.stats);

    // NEW: weapon keywords (split + normalize)
    const weaponText = buildWeaponKeywords(c.stances);

    // NEW: personal buff keywords (Personal Skill name + text + Lv lines)ee
    const personalText = buildPersonalKeywords(c.stats);

    // starting level text for convenience
    const startLvl = c.stats?.core?.["Starting Level"];
    const startText = startLvl != null ? String(startLvl) : "";

    // one big haystack to search in
    const haystack = [
      c.name,
      c.region,
      stanceText,
      weaponText,
      armorText,
      personalText,
      startText
    ].join(" ").toLowerCase();

    const matchesText = !term || haystack.includes(term);
    const matchesRegion = !regionFilter || c.region === regionFilter;

    const ownedState = isOwned(c.id);
    const matchesOwned =
      !ownedFilter || (ownedFilter === "owned" ? ownedState : !ownedState);

    return matchesText && matchesRegion && matchesOwned;
  });
}

/* -----------------------------
   Rendering
------------------------------*/
function render() {
  const list = filteredList();
  cardsEl.innerHTML = "";

  if (!list.length) {
    const empty = document.createElement("p");
    empty.textContent = "No characters match your filters.";
    empty.className = "empty-state";
    cardsEl.appendChild(empty);
    return;
  }

  // Group by meta region
  const groups = new Map();
  for (const c of list) {
    const meta = getMetaRegion(c.region);
    if (!groups.has(meta)) groups.set(meta, []);
    groups.get(meta).push(c);
  }

  // Sort groups and items
  const sortedGroupNames = Array.from(groups.keys()).sort((a, b) =>
    bannerOrderKey(a).localeCompare(bannerOrderKey(b))
  );

  for (const groupName of sortedGroupNames) {
    const groupChars = groups.get(groupName).sort((a, b) => a.name.localeCompare(b.name));

    // Wrap each group so banner sits on top of its grid
    const section = document.createElement("section");
    section.className = "region-section";
    cardsEl.appendChild(section);

    // --- Banner with background image and title overlay ---
    const banner = document.createElement("div");
    banner.className = "region-banner";
    banner.setAttribute("aria-label", `${groupName} section`);

    const bg = document.createElement("div");
    bg.className = "banner-bg";
    bg.style.backgroundImage = `url('${getBannerImage(groupName)}')`;

    const title = document.createElement("div");
    title.className = "banner-title";
    title.textContent = groupName;

    banner.appendChild(bg);
    banner.appendChild(title);
    section.appendChild(banner);

    // --- Grid for this group, directly under banner ---
    const grid = document.createElement("div");
    grid.className = "card-grid";
    section.appendChild(grid);

    for (const c of groupChars) {
      grid.appendChild(cardNode(c));
    }
  }
}

function cardNode(c) {
  const a = document.createElement("a");
  a.href = `characters/character.html?id=${encodeURIComponent(c.id)}`;
  a.className = "card";

  // Portrait
  const img = document.createElement("img");
  img.className = "circle";
  img.src = c.portrait;
  img.alt = `${c.name} portrait`;

  // Name
  const name = document.createElement("div");
  name.className = "name";
  name.textContent = c.name;

  // Meta: Region + Starting Level + (Level only if owned)
  const meta = document.createElement("div");
  meta.className = "meta";

  const startLvl = c.stats?.core?.["Starting Level"];
  const ownedState = isOwned(c.id);
  const currentLevel = ownedState ? getLevel(c.id) : null;

  meta.innerHTML = `
    <span>Region: ${c.region}</span>
    ${startLvl != null ? `<span>Starting Level: ${startLvl}</span>` : ""}
    ${ownedState && currentLevel ? `<span>Level: ${currentLevel}</span>` : ""}
  `;

  // Owned pill with quick toggle
  const pill = document.createElement("span");
  pill.className = "owned-pill " + (ownedState ? "owned" : "unowned");
  pill.textContent = ownedState ? "Owned" : "Not owned";
  pill.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const now = !isOwned(c.id);
    setOwned(c.id, now);

    // Seed level on first own
    if (now && !getLevel(c.id)) {
      const def = startLvl != null ? String(startLvl) : "1";
      setLevel(c.id, def);
    }

    // Refresh pill + meta (show/hide Level line)
    pill.textContent = now ? "Owned" : "Not owned";
    pill.classList.toggle("unowned", !now);
    pill.classList.toggle("owned", now);

    const updatedLevel = now ? getLevel(c.id) : null;
    meta.innerHTML = `
      <span>Region: ${c.region}</span>
      ${startLvl != null ? `<span>Starting Level: ${startLvl}</span>` : ""}
      ${now && updatedLevel ? `<span>Level: ${updatedLevel}</span>` : ""}
    `;

    // keep current filters persisted as-is
    saveFiltersToSession();
  });

  a.appendChild(img);
  a.appendChild(name);
  a.appendChild(meta);
  a.appendChild(pill);
  return a;
}

