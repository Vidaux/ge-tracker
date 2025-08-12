// characters/character-page.js
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

// Core elements
const nameEl = document.getElementById("charName");
const regionEl = document.getElementById("charRegion");
const stancesEl = document.getElementById("charStances");
const portraitEl = document.getElementById("charPortrait");
const ownedEl = document.getElementById("ownedCheckbox");

// Quests UI
const questListEl = document.getElementById("questList");
const resetBtn = document.getElementById("resetQuestsBtn");

// Try to find a wrapper section to hide when there are no quests
// Prefer an explicit #recruitmentSection if present; otherwise climb up to common containers.
const recruitmentWrap =
  document.getElementById("recruitmentSection") ||
  (questListEl && questListEl.closest(".section, .card, section, .panel, .block")) ||
  (resetBtn && resetBtn.closest(".section, .card, section, .panel, .block"));

// Stats UI (support new split layout if present, else fallback to old #statsGrid)
const statsGridEl = document.getElementById("statsGrid"); // legacy single grid (fallback)
const coreGridEl = document.getElementById("coreStatsGrid");
const personalGridEl = document.getElementById("personalStatsGrid");
const equipmentGridEl = document.getElementById("equipmentStatsGrid");
const personalImgEl = document.getElementById("personalSkillImage"); // optional <img> if you use one

if (!character) {
  document.title = "Not Found — Granado Espada";
  if (nameEl) nameEl.textContent = "Character not found";
} else {
  document.title = `${character.name} — Granado Espada`;
  if (nameEl) nameEl.textContent = character.name;
  if (regionEl) regionEl.textContent = character.region || "—";

  // Support object stances (with {name}) or string stances
  if (stancesEl) {
    const names = (character.stances || [])
      .map(s => (typeof s === "string" ? s : s?.name))
      .filter(Boolean);
    stancesEl.textContent = names.length ? names.join(", ") : "—";
  }

  if (portraitEl) {
    portraitEl.src = `../${character.portrait}`;
    portraitEl.alt = `${character.name} portrait`;
  }

  // Owned checkbox manual toggle (still allowed)
  if (ownedEl) {
    ownedEl.checked = isOwned(character.id);
    ownedEl.addEventListener("change", () => setOwned(character.id, ownedEl.checked));
  }

  // Render Quests (and auto-hide section if none)
  renderQuests();

  // Render Stats
  renderStats();
}

function renderQuests() {
  const quests = character.quests || [];

  // If there are no quests, hide the recruitment UI cleanly and bail.
  if (!quests.length) {
    hideRecruitmentUI();
    return;
  }

  // Ensure recruitment UI is visible if it was hidden previously
  showRecruitmentUI();

  // Render list with saved progress + auto-sync ownership
  const progress = getQuestProgress(character.id);
  if (questListEl) questListEl.innerHTML = "";

  for (const q of quests) {
    const li = document.createElement("li");
    li.className = "quest-item";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!progress[q.id];
    cb.addEventListener("change", () => {
      const latest = getQuestProgress(character.id);
      latest[q.id] = cb.checked;
      setQuestProgress(character.id, latest);
      syncOwnershipBasedOnQuests(); // auto-sync on each change
    });

    const label = document.createElement("label");
    label.textContent = q.name;

    li.appendChild(cb);
    li.appendChild(label);
    questListEl && questListEl.appendChild(li);
  }

  // Initial sync in case all were already completed
  syncOwnershipBasedOnQuests();

  // Reset handler
  if (resetBtn) {
    resetBtn.style.display = ""; // ensure visible when quests exist
    // Avoid accumulating multiple listeners
    resetBtn.onclick = () => {
      resetQuestProgress(character.id);
      document
        .querySelectorAll("#questList input[type=checkbox]")
        .forEach(cb => (cb.checked = false));
      setOwned(character.id, false);
      if (ownedEl) ownedEl.checked = false;
    };
  }
}

/**
 * If all recruitment quests are completed, mark as Owned.
 * If any quest is not completed, mark as Not Owned.
 * (No quests: do nothing — manual ownership remains.)
 */
function syncOwnershipBasedOnQuests() {
  const quests = character.quests || [];
  if (!quests.length) return; // nothing to auto-sync

  const progress = getQuestProgress(character.id);
  const allDone = quests.every(q => !!progress[q.id]);

  setOwned(character.id, allDone);
  if (ownedEl) ownedEl.checked = allDone;
}

function hideRecruitmentUI() {
  // Hide wrapper if we found one
  if (recruitmentWrap) recruitmentWrap.style.display = "none";
  // Fallbacks: hide just the list and reset button
  if (questListEl) questListEl.style.display = "none";
  if (resetBtn) resetBtn.style.display = "none";
}

function showRecruitmentUI() {
  if (recruitmentWrap) recruitmentWrap.style.display = "";
  if (questListEl) questListEl.style.display = "";
  if (resetBtn) resetBtn.style.display = "";
}

function renderStats() {
  const stats = character.stats || {};
  const core = stats.core || {};
  const personal = stats.personal || {};
  const equipment = stats.equipment || {};

  // If you have split grids present, fill them
  const usingSplit =
    (coreGridEl || personalGridEl || equipmentGridEl) ? true : false;

  if (usingSplit) {
    if (coreGridEl) {
      coreGridEl.innerHTML = "";
      for (const [k, v] of Object.entries(core)) {
        coreGridEl.appendChild(statCard(k, v));
      }
    }

    if (personalGridEl) {
      personalGridEl.innerHTML = "";
      // "Personal Skill" is a description; Lv1/10/11/12/13 are level lines; "image" optional
      for (const [k, v] of Object.entries(personal)) {
        if (k === "image") continue; // image handled separately
        personalGridEl.appendChild(statCard(k, v));
      }
      if (personalImgEl && personal.image) {
        personalImgEl.src = `../${personal.image}`;
        personalImgEl.alt = `${character.name} personal skill`;
        personalImgEl.style.display = "";
      } else if (personalImgEl) {
        personalImgEl.style.display = "none";
      }
    }

    if (equipmentGridEl) {
      equipmentGridEl.innerHTML = "";
      for (const [k, v] of Object.entries(equipment)) {
        equipmentGridEl.appendChild(statCard(k, v));
      }
    }
    return;
  }

  // Fallback: legacy single grid (flattens sections)
  if (statsGridEl) {
    statsGridEl.innerHTML = "";
    const flat = { ...core, ...personal, ...equipment };
    for (const [k, v] of Object.entries(flat)) {
      if (k === "image") continue;
      statsGridEl.appendChild(statCard(k, v));
    }
  }
}

function statCard(label, value) {
  const card = document.createElement("div");
  card.className = "stat-card";

  const name = document.createElement("div");
  name.className = "stat-name";
  name.textContent = label;

  const val = document.createElement("div");
  val.className = "stat-value";
  val.textContent = value;

  card.appendChild(name);
  card.appendChild(val);
  return card;
}
