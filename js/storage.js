// Local storage keys are namespaced to avoid conflicts.
const NS = "ge-tracker";

function getJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
}
function setJSON(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

export function getOwnedMap() {
  return getJSON(`${NS}:owned`, {});
}
export function setOwned(charId, isOwned) {
  const map = getOwnedMap();
  map[charId] = !!isOwned;
  setJSON(`${NS}:owned`, map);
}
export function isOwned(charId) {
  return !!getOwnedMap()[charId];
}

export function getQuestProgress(charId) {
  return getJSON(`${NS}:q:${charId}`, {});
}
export function setQuestProgress(charId, progressMap) {
  setJSON(`${NS}:q:${charId}`, progressMap);
}
export function resetQuestProgress(charId) {
  localStorage.removeItem(`${NS}:q:${charId}`);
}

/* ===================== Levels (persistent) ===================== */
// Stored as map: { [charId]: "1" | "100" | "Veteran 3" | "Expert 7" | ... }
export function getLevelMap() {
  return getJSON(`${NS}:levels`, {});
}
export function getLevel(charId) {
  const map = getLevelMap();
  return map[charId] || null;
}
export function setLevel(charId, levelDisplay) {
  const map = getLevelMap();
  map[charId] = levelDisplay; // keep as human-friendly string
  setJSON(`${NS}:levels`, map);
}
