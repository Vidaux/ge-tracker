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

// Recruitment UI
const questListEl = document.getElementById("questList");
const resetBtn = document.getElementById("resetQuestsBtn");
const recruitmentWrap =
  document.getElementById("recruitmentSection") ||
  (questListEl && questListEl.closest(".section, .card, section, .panel, .block")) ||
  (resetBtn && resetBtn.closest(".section, .card, section, .panel, .block"));

// Stats UI (split layout)
const startLevelEl = document.getElementById("startLevel");
const coreGridEl = document.getElementById("coreStatsGrid");
const totalPointsEl = document.getElementById("totalStatPoints");
const personalGridEl = document.getElementById("personalStatsGrid");
const equipmentGridEl = document.getElementById("equipmentStatsGrid");
const personalImgEl = document.getElementById("personalSkillImage");

// Fallback legacy grid (if split not present)
const statsGridEl = document.getElementById("statsGrid");

// Back button: prefer real browser back, otherwise go to list
const backLink = document.querySelector(".back");
if (backLink) {
  backLink.addEventListener("click", (e) => {
    const hasHistory = window.history.length > 1;
    const sameOriginReferrer =
      document.referrer && new URL(document.referrer).origin === location.origin;

    if (hasHistory && sameOriginReferrer) {
      e.preventDefault();
      window.history.back();
    }
  });
}


if (!character) {
  document.title = "Not Found — Granado Espada";
  if (nameEl) nameEl.textContent = "Character not found";
} else {
  document.title = `${character.name} — Granado Espada`;
  if (nameEl) nameEl.textContent = character.name;
  if (regionEl) regionEl.textContent = character.region || "—";

  // Stances: support string or object form
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

  // Owned checkbox toggle
  if (ownedEl) {
    ownedEl.checked = isOwned(character.id);
    ownedEl.addEventListener("change", () => setOwned(character.id, ownedEl.checked));
  }

  // Render Recruitment & Stats
  renderQuests();
  renderStats();
}

function renderQuests() {
  const quests = character.quests || [];

  if (!quests.length) {
    hideRecruitmentUI();
    return;
  }
  showRecruitmentUI();

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
      syncOwnershipBasedOnQuests();
    });

    const label = document.createElement("label");
    label.textContent = q.name;

    li.appendChild(cb);
    li.appendChild(label);
    questListEl && questListEl.appendChild(li);
  }

  syncOwnershipBasedOnQuests();

  if (resetBtn) {
    resetBtn.style.display = "";
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

/** Auto-ownership sync: all quests done -> owned */
function syncOwnershipBasedOnQuests() {
  const quests = character.quests || [];
  if (!quests.length) return;

  const progress = getQuestProgress(character.id);
  const allDone = quests.every(q => !!progress[q.id]);

  setOwned(character.id, allDone);
  if (ownedEl) ownedEl.checked = allDone;
}

function hideRecruitmentUI() {
  if (recruitmentWrap) recruitmentWrap.style.display = "none";
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

  const usingSplit = !!(coreGridEl || personalGridEl || equipmentGridEl || startLevelEl || totalPointsEl);

  if (usingSplit) {
    // Starting Level (solo)
    if (startLevelEl) {
      const sl = core["Starting Level"];
      startLevelEl.textContent = sl != null ? `Starting Level: ${sl}` : "Starting Level: —";
    }

    // 2×3 grid for core stats (fixed order)
    const coreOrder = ["STR", "AGI", "HP", "DEX", "INT", "SEN"];
    if (coreGridEl) {
      coreGridEl.innerHTML = "";
      coreOrder.forEach(key => {
        if (key in core) coreGridEl.appendChild(statCard(key, core[key]));
      });
    }

    // Total Stat Points underneath
    if (totalPointsEl) {
      const tsp = core["Total Stat Points"];
      totalPointsEl.textContent = tsp != null ? `Total Stat Points: ${tsp}` : "";
    }

    // Personal Skill (ordered: desc -> Lv1 -> Lv10 -> Lv11 -> Lv12 -> Lv13)
    if (personalGridEl) {
      personalGridEl.innerHTML = "";
      const order = ["Personal Skill", "Lv1", "Lv10", "Lv11", "Lv12", "Lv13"];
      order.forEach(k => {
        if (k in personal) personalGridEl.appendChild(statCard(k, personal[k]));
      });
      // Render any other keys that might exist (but weren’t in the preferred order)
      Object.entries(personal).forEach(([k, v]) => {
        if (k === "image" || order.includes(k)) return;
        personalGridEl.appendChild(statCard(k, v));
      });
    }

    // Personal skill image (optional)
    if (personalImgEl) {
      if (personal.image) {
        personalImgEl.src = `../${personal.image}`;
        personalImgEl.alt = `${character.name} personal skill`;
        personalImgEl.style.display = "";
      } else {
        personalImgEl.style.display = "none";
      }
    }

    // Equipment
    if (equipmentGridEl) {
      equipmentGridEl.innerHTML = "";
      for (const [k, v] of Object.entries(equipment)) {
        equipmentGridEl.appendChild(statCard(k, v));
      }
    }

    return;
  }

  // Fallback: legacy single grid
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
