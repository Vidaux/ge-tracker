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

// ===== Current-level UI (created dynamically) =====
let levelRowEl;           // wrapper that holds starting-level (left) + current-level (right)
let levelWrapEl;          // right-side container
let tierSelectEl;         // Pre-Veteran / Veteran / Expert
let numberSelectEl;       // 1-100 or 1-10 depending on tier
let levelLabelEl;         // "Current Level" label

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
      // Seed level to Starting Level the first time it's set to owned (or if no level saved yet)
      if (ownedEl.checked && !getLevel(character.id)) {
        const sl = character.stats?.core?.["Starting Level"];
        setLevel(character.id, sl != null ? String(sl) : "1");
      }
      refreshLevelControls(); // enable/disable + reflect latest
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
      refreshLevelControls(); // ensure level UI disables if no longer owned
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

  // Seed level once upon becoming owned via quests
  if (allDone && !getLevel(character.id)) {
    const sl = character.stats?.core?.["Starting Level"];
    setLevel(character.id, sl != null ? String(sl) : "1");
  }
  refreshLevelControls();
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
    // Insert "current level" controls on the same row as starting level (left vs right)
    buildLevelRow();

    // Starting Level text
    if (startLevelEl) {
      const sl = core["Starting Level"];
      startLevelEl.textContent = sl != null ? `Starting Level: ${sl}` : "Starting Level: -";
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

    // Make sure current-level UI reflects persisted value & ownership
    refreshLevelControls();

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

/* =============================== Level UI =============================== */

function buildLevelRow() {
  if (!startLevelEl || levelRowEl) return;

  // Wrap the existing startLevelEl + our new right-side current-level UI
  const statsBlockEl = startLevelEl.parentElement; // .stats-block
  levelRowEl = document.createElement("div");
  levelRowEl.className = "level-row";
  // minimal inline layout so it works without CSS edits
  levelRowEl.style.display = "flex";
  levelRowEl.style.alignItems = "center";
  levelRowEl.style.gap = "12px";
  levelRowEl.style.marginBottom = "12px";

  // Move the existing startLevelEl into the row (left side)
  startLevelEl.parentElement.insertBefore(levelRowEl, startLevelEl);
  levelRowEl.appendChild(startLevelEl);

  // Right-side current level control group
  levelWrapEl = document.createElement("div");
  levelWrapEl.className = "current-level-wrap";
  levelWrapEl.style.marginLeft = "auto";
  levelWrapEl.style.display = "flex";
  levelWrapEl.style.alignItems = "center";
  levelWrapEl.style.gap = "8px";

  levelLabelEl = document.createElement("strong");
  levelLabelEl.textContent = "Current Level";

  tierSelectEl = document.createElement("select");
  tierSelectEl.id = "levelTier";
  addOptions(tierSelectEl, ["Pre-Veteran", "Veteran", "Expert"]);

  numberSelectEl = document.createElement("select");
  numberSelectEl.id = "levelNumber";

  // Change handlers
  tierSelectEl.addEventListener("change", () => {
    populateNumberOptions();
    persistLevelFromUI();
  });
  numberSelectEl.addEventListener("change", persistLevelFromUI);

  levelWrapEl.appendChild(levelLabelEl);
  levelWrapEl.appendChild(tierSelectEl);
  levelWrapEl.appendChild(numberSelectEl);

  levelRowEl.appendChild(levelWrapEl);
}

function addOptions(select, items) {
  select.innerHTML = "";
  for (const item of items) {
    const opt = document.createElement("option");
    opt.value = item;
    opt.textContent = item;
    select.appendChild(opt);
  }
}

function populateNumberOptions() {
  const tier = tierSelectEl.value;
  const max = tier === "Pre-Veteran" ? 100 : 10;
  const prev = numberSelectEl.value;
  numberSelectEl.innerHTML = "";
  for (let i = 1; i <= max; i++) {
    const opt = document.createElement("option");
    opt.value = String(i);
    opt.textContent = String(i);
    numberSelectEl.appendChild(opt);
  }
  // try to keep previous value if in range, else clamp to max
  if (prev && Number(prev) >= 1 && Number(prev) <= max) {
    numberSelectEl.value = prev;
  } else {
    numberSelectEl.value = String(Math.min(max, Math.max(1, Number(prev) || 1)));
  }
}

function refreshLevelControls() {
  if (!tierSelectEl || !numberSelectEl) return;

  const owned = isOwned(character.id);
  const sl = character.stats?.core?.["Starting Level"];
  const saved = getLevel(character.id);

  const { tier, num } = parseLevel(saved, sl);

  // set selects
  tierSelectEl.value = tier;
  populateNumberOptions();
  numberSelectEl.value = String(num);

  // enable/disable based on ownership
  tierSelectEl.disabled = !owned;
  numberSelectEl.disabled = !owned;
  levelLabelEl.style.opacity = owned ? "1" : ".6";
  levelWrapEl.title = owned ? "" : "Mark as Owned to edit level";
}

function persistLevelFromUI() {
  const tier = tierSelectEl.value;
  const num = Number(numberSelectEl.value || 1);
  const value = formatLevel(tier, num);
  setLevel(character.id, value);
}

function parseLevel(str, startingLevel) {
  // Accept formats: "45" -> Pre-Veteran 45, "Veteran 3", "Expert 7"
  const defNum = startingLevel != null ? Number(startingLevel) : 1;

  if (!str || typeof str !== "string") {
    return { tier: "Pre-Veteran", num: clamp(defNum, 1, 100) };
  }

  const trimmed = str.trim();

  // Veteran / Expert
  const vMatch = /^Veteran\s+(\d{1,2})$/i.exec(trimmed);
  if (vMatch) return { tier: "Veteran", num: clamp(Number(vMatch[1]), 1, 10) };

  const eMatch = /^Expert\s+(\d{1,2})$/i.exec(trimmed);
  if (eMatch) return { tier: "Expert", num: clamp(Number(eMatch[1]), 1, 10) };

  // Pre-Veteran pure number
  const n = Number(trimmed);
  if (!Number.isNaN(n)) {
    return { tier: "Pre-Veteran", num: clamp(n, 1, 100) };
  }

  // Fallback
  return { tier: "Pre-Veteran", num: clamp(defNum, 1, 100) };
}

function formatLevel(tier, num) {
  if (tier === "Pre-Veteran") return String(clamp(num, 1, 100));
  return `${tier} ${clamp(num, 1, 10)}`;
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
