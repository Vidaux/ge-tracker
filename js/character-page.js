import { getParam } from "./utils.js";
import { CHARACTERS } from "./characters.js";
import {
  isOwned,
  setOwned,
  getQuestProgress,
  setQuestProgress,
  resetQuestProgress
} from "./storage.js";

const id = getParam("id");
const character = CHARACTERS.find(c => c.id === id);

const nameEl = document.getElementById("charName");
const regionEl = document.getElementById("charRegion");
const stancesEl = document.getElementById("charStances");
const portraitEl = document.getElementById("charPortrait");
const ownedEl = document.getElementById("ownedCheckbox");
const questListEl = document.getElementById("questList");
const statsGridEl = document.getElementById("statsGrid");
const resetBtn = document.getElementById("resetQuestsBtn");

if (!character) {
  document.title = "Not Found — Granado Espada";
  nameEl.textContent = "Character not found";
} else {
  document.title = `${character.name} — Granado Espada`;
  nameEl.textContent = character.name;
  regionEl.textContent = character.region || "—";
  portraitEl.src = `../${character.portrait}`;
  portraitEl.alt = `${character.name} portrait`;

  // Owned checkbox manual toggle (still allowed)
  ownedEl.checked = isOwned(character.id);
  ownedEl.addEventListener("change", () => setOwned(character.id, ownedEl.checked));

  // Stances (new table + legacy fallback)
  renderStances();

  // Quests
  renderQuests();

  // Stats (grouped: core / personal / equipment, with fallbacks)
  renderStats();
}

function renderStances() {
  const st = character.stances || [];

  // If stances are objects -> render a table section
  const looksStructured =
    Array.isArray(st) &&
    st.length &&
    typeof st[0] === "object" &&
    ("name" in st[0] || "weapon" in st[0] || "acquisition" in st[0] || "level" in st[0]);

  if (looksStructured) {
    // Show a compact comma-separated list in the header meta
    stancesEl.textContent = st.map(s => s.name).filter(Boolean).join(", ");

    // Insert a full Stances section before the Quests section
    const questsSection = questListEl.closest("section");
    const stancesSection = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = "Stances";
    stancesSection.appendChild(h2);

    // Card wrapper for the table, to match styling
    const tableCard = document.createElement("div");
    tableCard.className = "stat-card";
    tableCard.style.overflowX = "auto";
    tableCard.style.padding = "0";

    const table = document.createElement("table");
    table.style.width = "100%";
    table.style.borderCollapse = "collapse";
    table.style.fontSize = "14px";

    // Build columns dynamically based on available keys
    const columns = ["name", "weapon", "acquisition", "level"]
      .filter(k => st.some(row => row[k]));

    const thead = document.createElement("thead");
    const trh = document.createElement("tr");
    for (const col of columns) {
      const th = document.createElement("th");
      th.textContent = headerLabel(col);
      th.style.textAlign = "left";
      th.style.padding = "10px 12px";
      th.style.borderBottom = "1px solid #263041";
      trh.appendChild(th);
    }
    thead.appendChild(trh);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    for (const row of st) {
      const tr = document.createElement("tr");
      for (const col of columns) {
        const td = document.createElement("td");
        td.textContent = row[col] || "—";
        td.style.padding = "10px 12px";
        td.style.borderBottom = "1px solid rgba(38,48,65,0.5)";
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);

    tableCard.appendChild(table);
    stancesSection.appendChild(tableCard);

    questsSection.parentNode.insertBefore(stancesSection, questsSection);

  } else {
    // Legacy fallback: stances as strings
    stancesEl.textContent = st.join(", ") || "—";
  }
}

function headerLabel(key) {
  switch (key) {
    case "name": return "Name";
    case "weapon": return "Weapon";
    case "acquisition": return "Acquisition";
    case "level": return "Level";
    default: return key;
  }
}

function renderQuests() {
  const progress = getQuestProgress(character.id);
  questListEl.innerHTML = "";

  for (const q of (character.quests || [])) {
    const li = document.createElement("li");
    li.className = "quest-item";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!progress[q.id];
    cb.addEventListener("change", () => {
      const latest = getQuestProgress(character.id);
      latest[q.id] = cb.checked;
      setQuestProgress(character.id, latest);
      syncOwnershipBasedOnQuests();
    });

    const label = document.createElement("label");
    label.textContent = q.name;

    li.appendChild(cb);
    li.appendChild(label);
    questListEl.appendChild(li);
  }

  // Initial sync in case all were already completed
  syncOwnershipBasedOnQuests();
}

function renderStats() {
  statsGridEl.innerHTML = "";

  const stats = character.stats || {};
  const isGrouped = stats && typeof stats === "object" && (
    "core" in stats || "personal" in stats || "equipment" in stats
  );

  // helpers
  const addSectionTitle = (text) => {
    const h = document.createElement("h3");
    h.textContent = text;
    h.style.margin = "14px 0 6px";
    h.style.color = "#eaeef5";
    h.style.gridColumn = "1 / -1";
    statsGridEl.appendChild(h);
  };

  const addStatCardsFromObject = (obj, { ignore = [] } = {}) => {
    const keys = Object.keys(obj || {}).filter(k => !ignore.includes(k));
    for (const k of keys) {
      const v = obj[k];
      const card = document.createElement("div");
      card.className = "stat-card";
      const name = document.createElement("div");
      name.className = "stat-name";
      name.textContent = k;
      const val = document.createElement("div");
      val.className = "stat-value";
      val.textContent = v;
      card.appendChild(name);
      card.appendChild(val);
      statsGridEl.appendChild(card);
    }
  };

  if (isGrouped) {
    let { core = null, personal = null, equipment = null } = stats;

    // If equipment section isn't provided but personal has "Armor",
    // extract it to show separately
    let extractedArmor = null;
    if (!equipment && personal && typeof personal === "object" && "Armor" in personal) {
      extractedArmor = { Armor: personal["Armor"] };
    }

    // 1) Core Stats
    if (core && Object.keys(core).length) {
      addSectionTitle("Stats");
      addStatCardsFromObject(core);
    }

    // 2) Personal Buffs (and optional image)
    if (personal && Object.keys(personal).length) {
      addSectionTitle("Personal Buffs");
      if (personal.image) {
        const imgCard = document.createElement("div");
        imgCard.className = "stat-card";
        imgCard.style.display = "flex";
        imgCard.style.justifyContent = "center";
        imgCard.style.alignItems = "center";
        imgCard.style.padding = "8px";
        const img = document.createElement("img");
        img.src = personal.image;
        img.alt = `${character.name} personal skill`;
        img.style.maxWidth = "100%";
        img.style.borderRadius = "8px";
        imgCard.appendChild(img);
        statsGridEl.appendChild(imgCard);
      }
      const ignore = ["image", "Armor"]; // Armor will appear under Equipment
      addStatCardsFromObject(personal, { ignore });
    }

    // 3) Equipment (preferred: stats.equipment; fallback: extracted "Armor")
    const equipSource = (equipment && Object.keys(equipment).length) ? equipment
                      : (extractedArmor ? extractedArmor : null);

    if (equipSource) {
      addSectionTitle("Equipment");
      addStatCardsFromObject(equipSource);
    }

    if (
      (!core || !Object.keys(core).length) &&
      (!personal || !Object.keys(personal).length) &&
      !equipSource
    ) {
      const empty = document.createElement("div");
      empty.className = "stat-card";
      empty.textContent = "No stats available.";
      statsGridEl.appendChild(empty);
    }

  } else {
    // Fallback to original flat rendering
    for (const [k, v] of Object.entries(stats)) {
      const card = document.createElement("div");
      card.className = "stat-card";
      const name = document.createElement("div");
      name.className = "stat-name";
      name.textContent = k;
      const val = document.createElement("div");
      val.className = "stat-value";
      val.textContent = v;
      card.appendChild(name);
      card.appendChild(val);
      statsGridEl.appendChild(card);
    }
  }
}

/**
 * If all recruitment quests are completed, mark as Owned.
 * If any quest is not completed, mark as Not Owned.
 * (No quests: do nothing — manual ownership remains.)
 */
function syncOwnershipBasedOnQuests() {
  const quests = character.quests || [];
  if (!quests.length) return;

  const progress = getQuestProgress(character.id);
  const allDone = quests.every(q => !!progress[q.id]);

  setOwned(character.id, allDone);
  ownedEl.checked = allDone;
}

// Reset quests also unsets ownership
resetBtn.addEventListener("click", () => {
  resetQuestProgress(character.id);
  document
    .querySelectorAll("#questList input[type=checkbox]")
    .forEach(cb => (cb.checked = false));
  setOwned(character.id, false);
  ownedEl.checked = false;
});
