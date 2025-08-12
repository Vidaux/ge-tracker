// js/characters.js
// Regions are grouped (in your order) and characters are alphabetical within each region.
// Portraits should live at: /images/characters/<id>.jpg

export const CHARACTERS = [
  // =========================
  // Stock Characters:
  // =========================
  {
    id: "fighter",
    name: "Fighter",
    region: "Stock Characters",
    portrait: "images/characters/fighter.jpg",
    stances: [], // use [{ name, weapon, acquisition, level }]
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "musketeer",
    name: "Musketeer",
    region: "Stock Characters",
    portrait: "images/characters/musketeer.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "scout",
    name: "Scout",
    region: "Stock Characters",
    portrait: "images/characters/scout.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "warlock",
    name: "Warlock",
    region: "Stock Characters",
    portrait: "images/characters/warlock.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "wizard",
    name: "Wizard",
    region: "Stock Characters",
    portrait: "images/characters/wizard.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

  // =========================
  // Reboldeaux:
  // =========================
  {
    id: "andre",
    name: "Andre Janzur",
    region: "Reboldeaux",
    portrait: "images/characters/andre.jpg",

    // Structured stances
    stances: [
      { name: "Bare Knuckle",       weapon: "None",                    acquisition: "Default", level: "—"     },
      { name: "Epee Garde",         weapon: "Rapier",                  acquisition: "Default", level: "Lv 48"  },
      { name: "Sabre Garde",        weapon: "Rapier",                  acquisition: "Default", level: "Lv 48"  },
      { name: "Main-Gauche Garde",  weapon: "Rapier + Main Gauche",    acquisition: "Default", level: "Lv 60"  }
      // If you add later:
      // { name: "Rapiere", weapon: "Rapier + Rapier", acquisition: "Emilia quest; Symbol of Taurus + 6 Great Stone", level: "Expert" }
    ],

    stats: {
      // --- Core stat section ---
      core: {
        "Starting Level": 56,
        "STR": 70,
        "AGI": 60,
        "HP": 70,
        "DEX": 60,
        "INT": 40,
        "SEN": 30,
        "Total Stat Points": 330
      },

      // --- Personal buff section ---
      personal: {
        "Character Buff": "[None] Level 2",
        "Personal Skill": "Clothing Design - Allows you to manufacture coats and robes. Use it then drag cloth recipe to Andre in Reboldeaux to start manufacturing. (Cast: 0s, Cooldown: 1s, Duration: 1.1s, SP: None, Level 10)",
        "image": "images/skills/clothing-design.png" // optional
      },

      // --- Equipment section ---
      equipment: {
        "Armor": "Coat; Robe; Leather"
      }
    },

    quests: [
      { id: "q1", name: "Shattered Dreams and Fantazzies - Speak to Andre (D-8), go to Stone Pit, kill 5 Mandradora, return" },
      { id: "q2", name: "The Secret Behind the Holy Water - (Requires 'Source of the Taint') Talk to Panfilo, return to Andre" },
      { id: "q3", name: "Andre Janzur's Gone Crazy - Enter instance, duel and defeat Andre, return" },
      { id: "q4", name: "Sympathy for Dilos Latemn - Go to Al Quelt Moreza Arcade, use altar at G4, destroy 3 portals, return" },
      { id: "q5", name: "Andre In Despair - Talk to Panfilo, complete 'Pure White Food', return (Reward: Irolina Hat)" },
      { id: "q6", name: "Birds of a Feather Flock Together (Req Lv 72) - Bonavista River, farm Cockatrice drops (rare), return for Character Card" }
    ]
  },
  {
    id: "brunie",
    name: "Brunie",
    region: "Reboldeaux",
    portrait: "images/characters/brunie.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "claude",
    name: "Claude",
    region: "Reboldeaux",
    portrait: "images/characters/claude.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "diego",
    name: "Diego",
    region: "Reboldeaux",
    portrait: "images/characters/diego.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "idge-imbrulia",
    name: "Idge Imbrulia",
    region: "Reboldeaux",
    portrait: "images/characters/idge-imbrulia.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "najib-sharif",
    name: "Najib Sharif",
    region: "Reboldeaux",
    portrait: "images/characters/najib-sharif.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "panfilo-de-narvaez",
    name: "Panfilo de Narvaez",
    region: "Reboldeaux",
    portrait: "images/characters/panfilo-de-narvaez.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "soldier-of-reboldoeux",
    name: "Soldier of Reboldoeux",
    region: "Reboldeaux",
    portrait: "images/characters/soldier-of-reboldoeux.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

  // =========================
  // Rebouldeaux Queen's Gate:
  // =========================
  {
    id: "angie",
    name: "Angie",
    region: "Rebouldeaux Queen's Gate",
    portrait: "images/characters/angie.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "ramiro",
    name: "Ramiro",
    region: "Rebouldeaux Queen's Gate",
    portrait: "images/characters/ramiro.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

  // =========================
  // Rebouldeaux Stone Pit:
  // =========================
  {
    id: "jack",
    name: "Jack",
    region: "Rebouldeaux Stone Pit",
    portrait: "images/characters/jack.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

  // =========================
  // The Port of Coimbra:
  // =========================
  {
    id: "adelina-esperanza",
    name: "Adelina Esperanza",
    region: "The Port of Coimbra",
    portrait: "images/characters/adelina-esperanza.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "alejandro",
    name: "Alejandro",
    region: "The Port of Coimbra",
    portrait: "images/characters/alejandro.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "coimbra-trooper",
    name: "Coimbra Trooper",
    region: "The Port of Coimbra",
    portrait: "images/characters/coimbra-trooper.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "emilia-guliano",
    name: "Emilia Guliano",
    region: "The Port of Coimbra",
    portrait: "images/characters/emilia-guliano.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "grace-bernelli",
    name: "Grace Bernelli",
    region: "The Port of Coimbra",
    portrait: "images/characters/grace-bernelli.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "gracielo",
    name: "Gracielo",
    region: "The Port of Coimbra",
    portrait: "images/characters/gracielo.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "irawan",
    name: "Irawan",
    region: "The Port of Coimbra",
    portrait: "images/characters/irawan.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "jose-corthasar",
    name: "Jose Corthasar",
    region: "The Port of Coimbra",
    portrait: "images/characters/jose-corthasar.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "lisa-lynway",
    name: "Lisa Lynway",
    region: "The Port of Coimbra",
    portrait: "images/characters/lisa-lynway.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "mboma",
    name: "MBoma",
    region: "The Port of Coimbra",
    portrait: "images/characters/mboma.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "soho",
    name: "Soho",
    region: "The Port of Coimbra",
    portrait: "images/characters/soho.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

  // =========================
  // Gigante Dock:
  // =========================
  {
    id: "feng-ling",
    name: "Feng Ling",
    region: "Gigante Dock",
    portrait: "images/characters/feng-ling.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

  // =========================
  // City of Auch:
  // =========================
  {
    id: "city-of-auch-infantry",
    name: "City of Auch Infantry",
    region: "City of Auch",
    portrait: "images/characters/city-of-auch-infantry.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "grutrude",
    name: "Grutrude",
    region: "City of Auch",
    portrait: "images/characters/grutrude.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "karjalainen",
    name: "Karjalainen",
    region: "City of Auch",
    portrait: "images/characters/karjalainen.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "lorch",
    name: "Lorch",
    region: "City of Auch",
    portrait: "images/characters/lorch.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "tiburon",
    name: "Tiburon",
    region: "City of Auch",
    portrait: "images/characters/tiburon.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

  // =========================
  // Mysterious Hut El Tejado Verde:
  // =========================
  {
    id: "viki",
    name: "Viki",
    region: "Mysterious Hut El Tejado Verde",
    portrait: "images/characters/viki.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

  // =========================
  // Dr Torsche's Mansion:
  // =========================
  {
    id: "catherine",
    name: "Catherine",
    region: "Dr Torsche's Mansion",
    portrait: "images/characters/catherine.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "catherine-dex",
    name: "Catherine (DEX)",
    region: "Dr Torsche's Mansion",
    portrait: "images/characters/catherine-dex.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "catherine-int",
    name: "Catherine (INT)",
    region: "Dr Torsche's Mansion",
    portrait: "images/characters/catherine-int.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "catherine-str",
    name: "Catherine (STR)",
    region: "Dr Torsche's Mansion",
    portrait: "images/characters/catherine-str.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

  // =========================
  // Los Toldos:
  // =========================
  {
    id: "edward",
    name: "Edward",
    region: "Los Toldos",
    portrait: "images/characters/edward.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "kurt",
    name: "Kurt",
    region: "Los Toldos",
    portrait: "images/characters/kurt.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

  // =========================
  // Ustiur Base Camp:
  // =========================
  {
    id: "grandma",
    name: "Grandma",
    region: "Ustiur Base Camp",
    portrait: "images/characters/grandma.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "rescue-knight",
    name: "Rescue Knight",
    region: "Ustiur Base Camp",
    portrait: "images/characters/rescue-knight.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "romina",
    name: "Romina",
    region: "Ustiur Base Camp",
    portrait: "images/characters/romina.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

  // =========================
  // Promo:
  // =========================
  {
    id: "battle-cook-panfilo",
    name: "Battle Cook Panfilo",
    region: "Promo",
    portrait: "images/characters/battle-cook-panfilo.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "battle-smith-idge",
    name: "Battle Smith Idge",
    region: "Promo",
    portrait: "images/characters/battle-smith-idge.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "pirate-adelina",
    name: "Pirate Adelina",
    region: "Promo",
    portrait: "images/characters/pirate-adelina.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "sage-emilia",
    name: "Sage Emilia",
    region: "Promo",
    portrait: "images/characters/sage-emilia.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "soho-the-wind",
    name: "Soho The Wind",
    region: "Promo",
    portrait: "images/characters/soho-the-wind.jpg",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },

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
