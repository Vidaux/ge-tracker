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
  document.title = "Not Found - Granado Espada";
  nameEl.textContent = "Character not found";
} else {
  document.title = `${character.name} - Granado Espada`;
  nameEl.textContent = character.name;
  regionEl.textContent = character.region || "-";
  stancesEl.textContent = (character.stances || []).join(", ") || "-";
  portraitEl.src = `../${character.portrait}`;
  portraitEl.alt = `${character.name} portrait`;

  // Owned checkbox manual toggle (still allowed)
  ownedEl.checked = isOwned(character.id);
  ownedEl.addEventListener("change", () => setOwned(character.id, ownedEl.checked));

  // Quests
  renderQuests();

  // Stats (grouped: core / personal / equipment, with fallbacks)
  renderStats();
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
    h.style.gridColumn = "1 / -1"; // span full width of the grid
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
      // Optional image
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
      // Render everything in personal EXCEPT "image" and (if present) "Armor"
      const ignore = ["image"];
      if (extractedArmor) ignore.push("Armor");
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
 * (No quests: do nothing - manual ownership remains.)
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
