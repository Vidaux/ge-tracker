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
  stancesEl.textContent = (character.stances || []).join(", ") || "—";
  portraitEl.src = `../${character.portrait}`;
  portraitEl.alt = `${character.name} portrait`;

  // Owned checkbox manual toggle (still allowed)
  ownedEl.checked = isOwned(character.id);
  ownedEl.addEventListener("change", () => setOwned(character.id, ownedEl.checked));

  // Quests
  renderQuests();

  // Stats
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
      syncOwnershipBasedOnQuests(); // <-- auto-sync ownership on each quest change
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
  for (const [k, v] of Object.entries(character.stats || {})) {
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
