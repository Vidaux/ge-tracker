// js/main.js
import { isOwned, setOwned } from "./storage.js";
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

// Order banners: your 3 meta groups first, then any others A→Z
const META_ORDER = ["Stock Characters", "Reboldeaux", "City of Auch", "The Port of Coimbra", "Ustiur Base Camp"];

/* -----------------------------
   UI refs
------------------------------*/
const cardsEl = document.getElementById("cards");
const searchEl = document.getElementById("searchInput");
const regionEl = document.getElementById("regionFilter");
const ownedEl = document.getElementById("ownedFilter");

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

  // Wire filters
  [searchEl, regionEl, ownedEl].forEach(el => el.addEventListener("input", render));

  render();
})();

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

function filteredList() {
  const term = (searchEl.value || "").toLowerCase().trim();
  const regionFilter = regionEl.value || "";
  const ownedFilter = ownedEl.value || "";

  return CHARACTERS.filter(c => {
    // text search across name, region, stance names (supports string[] and object[] stances)
    const stanceText = Array.isArray(c.stances)
      ? c.stances.map(s => (typeof s === "string" ? s : (s.name || ""))).join(" ")
      : "";

    const matchesText =
      !term ||
      [c.name, c.region, stanceText].join(" ").toLowerCase().includes(term);

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

    // --- Banner header (horizontal, full width) ---
    const banner = document.createElement("div");
    banner.className = "region-banner";
    banner.textContent = groupName;
    cardsEl.appendChild(banner);

    // --- Grid for this group, directly under banner ---
    const grid = document.createElement("div");
    grid.className = "card-grid";
    cardsEl.appendChild(grid);

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

  // Meta: original region + (optional) stance names
  const meta = document.createElement("div");
  meta.className = "meta";
  const stanceText = Array.isArray(c.stances)
    ? c.stances
        .map(s => (typeof s === "string" ? s : (s.name || "")))
        .filter(Boolean)
        .slice(0, 2)
        .join(", ")
    : "";
  meta.innerHTML = `
    <span>Region: ${c.region}</span>
    ${stanceText ? `<span>Stances: ${stanceText}</span>` : ""}
  `;

  // Owned pill with quick toggle
  const pill = document.createElement("span");
  const ownedState = isOwned(c.id);
  pill.className = "owned-pill " + (ownedState ? "owned" : "unowned");
  pill.textContent = ownedState ? "Owned" : "Not owned";
  pill.addEventListener("click", (e) => {
    e.preventDefault(); e.stopPropagation();
    const now = !isOwned(c.id);
    setOwned(c.id, now);
    pill.textContent = now ? "Owned" : "Not owned";
    pill.classList.toggle("unowned", !now);
    pill.classList.toggle("owned", now);
  });

  a.appendChild(img);
  a.appendChild(name);
  a.appendChild(meta);
  a.appendChild(pill);
  return a;
}
