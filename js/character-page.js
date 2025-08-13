// characters/character-page.js
import { getParam } from "./utils.js";
import { CHARACTERS } from "./characters.js";
import {
  isOwned,
  setOwned,
  getQuestProgress,
  setQuestProgress,
  resetQuestProgress,
  getLevel,
  setLevel
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
    ownedEl.addEventListener("change", () => {
      setOwned(character.id, ownedEl.checked);
      // If just owned and level is not set yet, seed it to Starting Level
      if (ownedEl.checked) ensureLevelInitialized();
      renderLevelRow(); // refresh right-side "Level" pill
    });
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
      renderLevelRow(); // reflect potential level init removal
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

  if (allDone) {
    ensureLevelInitialized();
    renderLevelRow();
  }
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

/* =============================== Level helpers (character page) =============================== */

function normalizeLevelInput(input) {
  if (!input) return null;
  const s = String(input).trim().toLowerCase();

  const n = Number(s);
  if (Number.isInteger(n) && n >= 1 && n <= 100) return String(n);

  const v = s.match(/^(v(?:et|eteran)?)[\s\-]*([1-9]|10)$/i);
  if (v) return `Veteran ${Number(v[2])}`;

  const e = s.match(/^(e(?:xp|xpert)?)[\s\-]*([1-9]|10)$/i);
  if (e) return `Expert ${Number(e[2])}`;

  const full = s.match(/^(veteran|expert)\s+([1-9]|10)$/i);
  if (full) return `${full[1][0].toUpperCase()}${full[1].slice(1)} ${Number(full[2])}`;

  return null;
}

function ensureLevelInitialized() {
  const has = getLevel(character.id);
  const start = character.stats?.core?.["Starting Level"];
  if (!has && start != null && isOwned(character.id)) {
    setLevel(character.id, String(start));
  }
}

function getOrCreateLevelRow() {
  if (!startLevelEl) return null;
  const block = startLevelEl.parentElement; // .stats-block
  if (!block) return null;

  let row = block.querySelector(".level-row");
  if (!row) {
    row = document.createElement("div");
    row.className = "level-row";
    // place the row where the startLevel used to be
    block.insertBefore(row, startLevelEl);
    row.appendChild(startLevelEl);
    const cur = document.createElement("button");
    cur.id = "currentLevel";
    cur.type = "button";
    cur.className = "current-level-badge";
    row.appendChild(cur);
  }
  return row;
}

function renderLevelRow() {
  const row = getOrCreateLevelRow();
  if (!row || !startLevelEl) return;

  // left: Starting Level
  const start = character.stats?.core?.["Starting Level"];
  startLevelEl.textContent =
    start != null ? `Starting Level: ${start}` : "Starting Level: -";

  // right: Current Level
  const curBtn = row.querySelector("#currentLevel");
  const current = getLevel(character.id);
  curBtn.textContent = `Level: ${current ?? "—"}`;
  curBtn.title = "Click to set current level";

  curBtn.onclick = () => {
    const def = current ?? (start != null ? String(start) : "");
    const input = prompt(
      `Enter current level for ${character.name}:\n- 1 to 100\n- Veteran 1..10 (V10)\n- Expert 1..10 (E10)`,
      def
    );
    if (input == null) return;
    const normalized = normalizeLevelInput(input);
    if (!normalized) {
      alert("Invalid level. Use 1–100, Veteran 1–10, or Expert 1–10.");
      return;
    }
    setLevel(character.id, normalized);
    renderLevelRow();
  };
}

/* =============================== Stats =============================== */
function renderStats() {
  const stats = character.stats || {};
  const core = stats.core || {};
  const personal = stats.personal || {};
  const equipment = stats.equipment || {};

  const usingSplit = !!(coreGridEl || personalGridEl || equipmentGridEl || startLevelEl || totalPointsEl);

  if (usingSplit) {
    // Ensure the right-side level pill exists and is updated
    ensureLevelInitialized();
    renderLevelRow();

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

    // Personal Skill (ordered)
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
