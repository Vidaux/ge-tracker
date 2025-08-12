// js/characters.js
// Regions are grouped (in your order) and characters are alphabetical within each region.
// Portraits should live at: /images/characters/<id>.jpg

export const CHARACTERS = [
  // =========================
  // Stock Characters:
  // =========================
  { id: "fighter", name: "Fighter", region: "Stock Characters", portrait: "images/characters/fighter.jpg", stances: [], stats: {}, quests: [] },
  { id: "musketeer", name: "Musketeer", region: "Stock Characters", portrait: "images/characters/musketeer.jpg", stances: [], stats: {}, quests: [] },
  { id: "scout", name: "Scout", region: "Stock Characters", portrait: "images/characters/scout.jpg", stances: [], stats: {}, quests: [] },
  { id: "warlock", name: "Warlock", region: "Stock Characters", portrait: "images/characters/warlock.jpg", stances: [], stats: {}, quests: [] },
  { id: "wizard", name: "Wizard", region: "Stock Characters", portrait: "images/characters/wizard.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // Reboldeaux:
  // =========================
  { id: "andre", name: "Andre", region: "Reboldeaux", portrait: "images/characters/andre.jpg", stances: [], stats: {}, quests: [] },
  { id: "brunie", name: "Brunie", region: "Reboldeaux", portrait: "images/characters/brunie.jpg", stances: [], stats: {}, quests: [] },
  { id: "claude", name: "Claude", region: "Reboldeaux", portrait: "images/characters/claude.jpg", stances: [], stats: {}, quests: [] },
  { id: "diego", name: "Diego", region: "Reboldeaux", portrait: "images/characters/diego.jpg", stances: [], stats: {}, quests: [] },
  { id: "idge-imbrulia", name: "Idge Imbrulia", region: "Reboldeaux", portrait: "images/characters/idge-imbrulia.jpg", stances: [], stats: {}, quests: [] },
  { id: "najib-sharif", name: "Najib Sharif", region: "Reboldeaux", portrait: "images/characters/najib-sharif.jpg", stances: [], stats: {}, quests: [] },
  { id: "panfilo-de-narvaez", name: "Panfilo de Narvaez", region: "Reboldeaux", portrait: "images/characters/panfilo-de-narvaez.jpg", stances: [], stats: {}, quests: [] },
  { id: "soldier-of-reboldoeux", name: "Soldier of Reboldoeux", region: "Reboldeaux", portrait: "images/characters/soldier-of-reboldoeux.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // Rebouldeaux Queen's Gate:
  // =========================
  { id: "angie", name: "Angie", region: "Rebouldeaux Queen's Gate", portrait: "images/characters/angie.jpg", stances: [], stats: {}, quests: [] },
  { id: "ramiro", name: "Ramiro", region: "Rebouldeaux Queen's Gate", portrait: "images/characters/ramiro.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // Rebouldeaux Stone Pit:
  // =========================
  { id: "jack", name: "Jack", region: "Rebouldeaux Stone Pit", portrait: "images/characters/jack.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // The Port of Coimbra:
  // =========================
  { id: "adelina-esperanza", name: "Adelina Esperanza", region: "The Port of Coimbra", portrait: "images/characters/adelina-esperanza.jpg", stances: [], stats: {}, quests: [] },
  { id: "alejandro", name: "Alejandro", region: "The Port of Coimbra", portrait: "images/characters/alejandro.jpg", stances: [], stats: {}, quests: [] },
  { id: "coimbra-trooper", name: "Coimbra Trooper", region: "The Port of Coimbra", portrait: "images/characters/coimbra-trooper.jpg", stances: [], stats: {}, quests: [] },
  { id: "emilia-guliano", name: "Emilia Guliano", region: "The Port of Coimbra", portrait: "images/characters/emilia-guliano.jpg", stances: [], stats: {}, quests: [] },
  { id: "grace-bernelli", name: "Grace Bernelli", region: "The Port of Coimbra", portrait: "images/characters/grace-bernelli.jpg", stances: [], stats: {}, quests: [] },
  { id: "gracielo", name: "Gracielo", region: "The Port of Coimbra", portrait: "images/characters/gracielo.jpg", stances: [], stats: {}, quests: [] },
  { id: "irawan", name: "Irawan", region: "The Port of Coimbra", portrait: "images/characters/irawan.jpg", stances: [], stats: {}, quests: [] },
  { id: "jose-corthasar", name: "Jose Corthasar", region: "The Port of Coimbra", portrait: "images/characters/jose-corthasar.jpg", stances: [], stats: {}, quests: [] },
  { id: "lisa-lynway", name: "Lisa Lynway", region: "The Port of Coimbra", portrait: "images/characters/lisa-lynway.jpg", stances: [], stats: {}, quests: [] },
  { id: "mboma", name: "MBoma", region: "The Port of Coimbra", portrait: "images/characters/mboma.jpg", stances: [], stats: {}, quests: [] },
  { id: "soho", name: "Soho", region: "The Port of Coimbra", portrait: "images/characters/soho.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // Gigante Dock:
  // =========================
  { id: "feng-ling", name: "Feng Ling", region: "Gigante Dock", portrait: "images/characters/feng-ling.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // City of Auch:
  // =========================
  { id: "city-of-auch-infantry", name: "City of Auch Infantry", region: "City of Auch", portrait: "images/characters/city-of-auch-infantry.jpg", stances: [], stats: {}, quests: [] },
  { id: "grutrude", name: "Grutrude", region: "City of Auch", portrait: "images/characters/grutrude.jpg", stances: [], stats: {}, quests: [] },
  { id: "karjalainen", name: "Karjalainen", region: "City of Auch", portrait: "images/characters/karjalainen.jpg", stances: [], stats: {}, quests: [] },
  { id: "lorch", name: "Lorch", region: "City of Auch", portrait: "images/characters/lorch.jpg", stances: [], stats: {}, quests: [] },
  { id: "tiburon", name: "Tiburon", region: "City of Auch", portrait: "images/characters/tiburon.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // Mysterious Hut El Tejado Verde:
  // =========================
  { id: "viki", name: "Viki", region: "Mysterious Hut El Tejado Verde", portrait: "images/characters/viki.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // Dr Torsche's Mansion:
  // =========================
  { id: "catherine", name: "Catherine", region: "Dr Torsche's Mansion", portrait: "images/characters/catherine.jpg", stances: [], stats: {}, quests: [] },
  { id: "catherine-dex", name: "Catherine (DEX)", region: "Dr Torsche's Mansion", portrait: "images/characters/catherine-dex.jpg", stances: [], stats: {}, quests: [] },
  { id: "catherine-int", name: "Catherine (INT)", region: "Dr Torsche's Mansion", portrait: "images/characters/catherine-int.jpg", stances: [], stats: {}, quests: [] },
  { id: "catherine-str", name: "Catherine (STR)", region: "Dr Torsche's Mansion", portrait: "images/characters/catherine-str.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // Los Toldos:
  // =========================
  { id: "edward", name: "Edward", region: "Los Toldos", portrait: "images/characters/edward.jpg", stances: [], stats: {}, quests: [] },
  { id: "kurt", name: "Kurt", region: "Los Toldos", portrait: "images/characters/kurt.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // Ustiur Base Camp:
  // =========================
  { id: "grandma", name: "Grandma", region: "Ustiur Base Camp", portrait: "images/characters/grandma.jpg", stances: [], stats: {}, quests: [] },
  { id: "rescue-knight", name: "Rescue Knight", region: "Ustiur Base Camp", portrait: "images/characters/rescue-knight.jpg", stances: [], stats: {}, quests: [] },
  { id: "romina", name: "Romina", region: "Ustiur Base Camp", portrait: "images/characters/romina.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // Promo:
  // =========================
  { id: "battle-cook-panfilo", name: "Battle Cook Panfilo", region: "Promo", portrait: "images/characters/battle-cook-panfilo.jpg", stances: [], stats: {}, quests: [] },
  { id: "battle-smith-idge", name: "Battle Smith Idge", region: "Promo", portrait: "images/characters/battle-smith-idge.jpg", stances: [], stats: {}, quests: [] },
  { id: "pirate-adelina", name: "Pirate Adelina", region: "Promo", portrait: "images/characters/pirate-adelina.jpg", stances: [], stats: {}, quests: [] },
  { id: "sage-emilia", name: "Sage Emilia", region: "Promo", portrait: "images/characters/sage-emilia.jpg", stances: [], stats: {}, quests: [] },
  { id: "soho-the-wind", name: "Soho The Wind", region: "Promo", portrait: "images/characters/soho-the-wind.jpg", stances: [], stats: {}, quests: [] },

  // =========================
  // Viron:
  // (no entries yet)
  // =========================

  // =========================
  // El Dorado:
  // (no entries yet)
  // =========================

  // =========================
  // Castilla:
  // (no entries yet)
  // =========================

  // =========================
  // Bahamar:
  // (no entries yet)
  // =========================

  // =========================
  // Kielce:
  // (no entries yet)
  // =========================
];

export function allRegions() {
  const set = new Set(CHARACTERS.map(c => c.region).filter(Boolean));
  return Array.from(set).sort();
}
