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

if (!character) {
  document.title = "Not Found - Granado Espada";
  if (nameEl) nameEl.textContent = "Character not found";
} else {
  document.title = `${character.name} - Granado Espada`;
  if (nameEl) nameEl.textContent = character.name;
  if (regionEl) regionEl.textContent = character.region || "-";

  // Stances: support string or object form
  if (stancesEl) {
    const names = (character.stances || [])
      .map(s => (typeof s === "string" ? s : s?.name))
      .filter(Boolean);
    stancesEl.textContent = names.length ? names.join(", ") : "-";
  }

  if (portraitEl) {
    // Prefer largePortrait if available, else fall back to portrait
    const portraitPath = character.largePortrait || character.portrait;
    portraitEl.src = `../${portraitPath}`;
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

/* ===================== Recruitment (progressive steps) ===================== */
function renderQuests() {
  const quests = character.quests || [];

  if (!quests.length) {
    hideRecruitmentUI();
    return;
  }
  showRecruitmentUI();

  const progress = getQuestProgress(character.id);
  if (questListEl) questListEl.innerHTML = "";

  // find first incomplete step
  const total = quests.length;
  const nextIndex = quests.findIndex(q => !progress[q.id]);

  if (nextIndex === -1) {
    // All steps complete – show a friendly “done” state
    const li = document.createElement("li");
    li.className = "quest-item quest-complete";
    li.innerHTML = `
      <div class="quest-done-wrap">
        <span class="quest-badge success">All steps complete</span>
        <div class="quest-done-title">Recruitment complete for ${character.name}.</div>
        <div class="quest-done-sub">You can reset progress if you’d like to run it again.</div>
      </div>
    `;
    questListEl && questListEl.appendChild(li);
  } else {
    // Show only the next step
    const q = quests[nextIndex];
    const li = document.createElement("li");
    li.className = "quest-item quest-active";

    const header = document.createElement("div");
    header.className = "quest-step-head";
    header.innerHTML = `
      <span class="quest-badge">Step ${nextIndex + 1} of ${total}</span>
    `;

    const body = document.createElement("div");
    body.className = "quest-step-body";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.id = `quest_${q.id}`;
    cb.className = "quest-checkbox";

    const label = document.createElement("label");
    label.setAttribute("for", cb.id);
    label.className = "quest-label";
    label.textContent = q.name;

    cb.addEventListener("change", () => {
      const latest = getQuestProgress(character.id);
      latest[q.id] = cb.checked;
      setQuestProgress(character.id, latest);
      syncOwnershipBasedOnQuests();
      renderQuests();
    });

    body.appendChild(cb);
    body.appendChild(label);
    li.appendChild(header);
    li.appendChild(body);
    questListEl && questListEl.appendChild(li);
  }

  syncOwnershipBasedOnQuests();

  if (resetBtn) {
    resetBtn.style.display = "";
    resetBtn.onclick = () => {
      resetQuestProgress(character.id);
      setOwned(character.id, false);
      if (ownedEl) ownedEl.checked = false;
      renderQuests();
    };
  }
}

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

/* =============================== Stats =============================== */
function renderStats() {
  const stats = character.stats || {};
  const core = stats.core || {};
  const personal = stats.personal || {};
  const equipment = stats.equipment || {};

  const usingSplit = !!(coreGridEl || personalGridEl || equipmentGridEl || startLevelEl || totalPointsEl);

  if (usingSplit) {
    if (startLevelEl) {
      const sl = core["Starting Level"];
      startLevelEl.textContent = sl != null ? `Starting Level: ${sl}` : "Starting Level: -";
    }

    const coreOrder = ["STR", "AGI", "HP", "DEX", "INT", "SEN"];
    if (coreGridEl) {
      coreGridEl.innerHTML = "";
      coreOrder.forEach(key => {
        if (key in core) coreGridEl.appendChild(statCard(key, core[key]));
      });
    }

    if (totalPointsEl) {
      const tsp = core["Total Stat Points"];
      totalPointsEl.textContent = tsp != null ? `Total Stat Points: ${tsp}` : "";
    }

    if (personalGridEl) {
      personalGridEl.innerHTML = "";
      const order = ["Personal Skill", "Lv1", "Lv10", "Lv11", "Lv12", "Lv13"];
      order.forEach(k => {
        if (k in personal) personalGridEl.appendChild(statCard(k, personal[k]));
      });
      Object.entries(personal).forEach(([k, v]) => {
        if (k === "image" || order.includes(k)) return;
        personalGridEl.appendChild(statCard(k, v));
      });
    }

    if (personalImgEl) {
      if (personal.image) {
        personalImgEl.src = `../${personal.image}`;
        personalImgEl.alt = `${character.name} personal skill`;
        personalImgEl.style.display = "";
      } else {
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
