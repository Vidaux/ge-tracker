import { slugify } from "./utils.js";
import { isOwned, setOwned } from "./storage.js";
import { CHARACTERS, allRegions } from "./characters.js";

const cardsEl = document.getElementById("cards");
const searchEl = document.getElementById("searchInput");
const regionEl = document.getElementById("regionFilter");
const ownedEl = document.getElementById("ownedFilter");

(function init() {
  // Populate region filter
  for (const r of allRegions()) {
    const opt = document.createElement("option");
    opt.value = r; opt.textContent = r;
    regionEl.appendChild(opt);
  }

  // Wire filters
  [searchEl, regionEl, ownedEl].forEach(el => el.addEventListener("input", render));
  render();
})();

function render() {
  const term = (searchEl.value || "").toLowerCase().trim();
  const region = regionEl.value || "";
  const ownedFilter = ownedEl.value || "";

  const list = CHARACTERS.filter(c => {
    const matchesText = !term || [c.name, c.region, (c.stances || []).join(" ")].join(" ").toLowerCase().includes(term);
    const matchesRegion = !region || c.region === region;
    const ownedState = isOwned(c.id);
    const matchesOwned =
      !ownedFilter || (ownedFilter === "owned" ? ownedState : !ownedState);
    return matchesText && matchesRegion && matchesOwned;
  });

  cardsEl.innerHTML = "";
  if (!list.length) {
    const empty = document.createElement("p");
    empty.textContent = "No characters match your filters.";
    empty.style.color = "#98a2b3";
    cardsEl.appendChild(empty);
    return;
  }

  for (const c of list) {
    cardsEl.appendChild(cardNode(c));
  }
}

function cardNode(c) {
  const a = document.createElement("a");
  a.href = `characters/character.html?id=${encodeURIComponent(c.id)}`;
  a.className = "card";

  const img = document.createElement("img");
  img.className = "circle";
  img.src = c.portrait;
  img.alt = `${c.name} portrait`;

  const name = document.createElement("div");
  name.className = "name";
  name.textContent = c.name;

  const meta = document.createElement("div");
  meta.className = "meta";
  meta.innerHTML = `
    <span>Region: ${c.region}</span>
    <span>Stances: ${(c.stances||[]).join(", ") || "—"}</span>
  `;

  const pill = document.createElement("span");
  const ownedState = isOwned(c.id);
  pill.className = "owned-pill " + (ownedState ? "owned" : "unowned");
  pill.textContent = ownedState ? "Owned" : "Not owned";

  // Allow quick toggle without leaving page (stop link)
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
