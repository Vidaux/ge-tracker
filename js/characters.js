// js/characters.js
// Regions are grouped (in your order) and characters are alphabetical within each region.
// Portraits should live at: /images/characters/<id>.png

export const CHARACTERS = [
  // =========================
  // Stock Characters:
  // =========================
  {
    id: "fighter",
    name: "Fighter",
    region: "Stock Characters",
    portrait: "images/characters/fighter.png",
    stances: [
      { name: "Bare Knuckle", weapon: "None", acquisition: "-", level: "-" },
      { name: "Back-Guard", weapon: "Sword / Blunt / Sword+Shield / Blunt+Shield", acquisition: "-", level: "-" },
      { name: "High-Guard", weapon: "Sword + Shield", acquisition: "-", level: "-" },
      { name: "Hack and Slash", weapon: "Sword + Sword", acquisition: "-", level: "-" },
      { name: "Heaven or Hell", weapon: "Sword + Pistol", acquisition: "-", level: "-" },
      { name: "Epee Garde", weapon: "Rapier", acquisition: "-", level: "-" },
      { name: "Sabre Garde", weapon: "Rapier", acquisition: "-", level: "-" },
      { name: "Middle-Guard", weapon: "Sabre", acquisition: "-", level: "-" },
      { name: "Low-Guard", weapon: "Sabre", acquisition: "-", level: "-" },
      { name: "Plow-Guard", weapon: "Great Sword", acquisition: "-", level: "-" },
      { name: "Roof-Guard", weapon: "Great Sword", acquisition: "-", level: "-" },
      { name: "Sidewinder", weapon: "Great Sword", acquisition: "-", level: "-" },
      { name: "Blandir Cruz", weapon: "Polearm", acquisition: "-", level: "-" },
      { name: "Mighty Cruz", weapon: "Polearm", acquisition: "-", level: "-" },
      { name: "Escrima", weapon: "Dagger", acquisition: "-", level: "-" },
      { name: "Freestyle Shot", weapon: "Pistol", acquisition: "-", level: "-" },
      { name: "Double-Gun Shot", weapon: "Pistol + Pistol", acquisition: "-", level: "-" },
      { name: "Advance Garde", weapon: "Rapier + Pistol", acquisition: "-", level: "-" },
      { name: "Defender", weapon: "Blunt + Shield", acquisition: "-", level: "-" },
      { name: "Stave Guard", weapon: "Javelin / Javelin + Shield", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 60, "AGI": 60, "HP": 60, "DEX": 60, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Provoke - Taunts up to 8 enemies within 8m. (Self-buff) Cast: 0s, Cooldown: 0s, Duration: 1.2s, SP: 100",
        "Lv1":  "Duration 15s; Enemy DEF -11; Enemy ATK +10%",
        "Lv10": "Duration 15s; Enemy DEF -20; Enemy ATK +10%",
        "Lv11": "Duration 15s; Enemy DEF -21; Enemy ATK +10%",
        "Lv12": "Duration 15s; Enemy DEF -22; Enemy ATK +10%",
        "Lv13": "Duration 15s; Enemy DEF -23; Enemy ATK +10%",
        "image": "/images/skills/job_provoke.png"
      },
      equipment: {
        "Armor": "Leather; Metal"
      }
    },
    quests: []
  },
  {
    id: "musketeer",
    name: "Musketeer",
    region: "Stock Characters",
    portrait: "images/characters/musketeer.png",
    stances: [
      { name: "Bare Knuckle", weapon: "None", acquisition: "-", level: "-" },
      { name: "Aiming Shot", weapon: "Pistol", acquisition: "-", level: "-" },
      { name: "Freestyle Shot", weapon: "Pistol", acquisition: "-", level: "-" },
      { name: "Sight Shot", weapon: "Pistol", acquisition: "-", level: "-" },
      { name: "Double-Gun Shot", weapon: "Pistol + Pistol", acquisition: "-", level: "-" },
      { name: "Outrage Shot", weapon: "Pistol + Pistol", acquisition: "-", level: "-" },
      { name: "Standing Shot", weapon: "Rifle / Bayonet", acquisition: "-", level: "-" },
      { name: "Kneeling Shot", weapon: "Rifle / Bayonet", acquisition: "-", level: "-" },
      { name: "Encounter Shot", weapon: "Bayonet", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 50, "AGI": 60, "HP": 50, "DEX": 80, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Concentration - Improves shooting accuracy. (Self-buff) Cast: 0s, Cooldown: 0s, Duration: 1.87s, SP: 100 + Mithridart ×5",
        "Lv1":  "Duration 300s; Monster Blow +1%; Accuracy +12; Crit +1%",
        "Lv10": "Duration 570s; Monster Blow +10%; Accuracy +30; Crit +15%",
        "Lv11": "Duration 600s; Monster Blow +11%; Accuracy +32; Crit +16%; A.R. +1",
        "Lv12": "Duration 630s; Monster Blow +12%; Accuracy +34; Crit +18%; A.R. +1",
        "Lv13": "Duration 660s; Monster Blow +13%; Accuracy +36; Crit +19%; A.R. +1",
        "image": "/images/skills/job_concentrate.png"
      },
      equipment: {
        "Armor": "Coat"
      }
    },
    quests: []
  },
  {
    id: "scout",
    name: "Scout",
    region: "Stock Characters",
    portrait: "images/characters/scout.png",
    stances: [
      { name: "First Aid", weapon: "None / Rosario", acquisition: "-", level: "-" },
      { name: "Fortitudo", weapon: "None / Rosario", acquisition: "-", level: "-" },
      { name: "Install Trap", weapon: "None", acquisition: "-", level: "-" },
      { name: "Escrima", weapon: "Dagger", acquisition: "-", level: "-" },
      { name: "Dobalada Corte", weapon: "Dagger + Dagger", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 30, "AGI": 70, "HP": 50, "DEX": 70, "INT": 50, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Healing - Restores HP of one appointed character. (Self-buff) Cast: 0s, Cooldown: 0s, Duration: 1.5s, SP: 25",
        "image": "/images/skills/job_healing.png"
      },
      equipment: {
        "Armor": "Leather"
      }
    },
    quests: []
  },
  {
    id: "warlock",
    name: "Warlock",
    region: "Stock Characters",
    portrait: "images/characters/warlock.png",
    stances: [
      { name: "Elemental Lord", weapon: "Special Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Fire", weapon: "Fire Bracelet / Bone Bracelet / Special Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Fire", weapon: "Fire Bracelet / Bone Bracelet / Special Bracelet", acquisition: "-", level: "-" },
      { name: "Domination Fire", weapon: "Fire Bracelet / Bone Bracelet / Special Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Ice", weapon: "Ice Bracelet / Bone Bracelet / Special Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Ice", weapon: "Ice Bracelet / Bone Bracelet / Special Bracelet", acquisition: "-", level: "-" },
      { name: "Domination Ice", weapon: "Ice Bracelet / Bone Bracelet / Special Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Lightning", weapon: "Lightning Bracelet / Bone Bracelet / Special Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Lightning", weapon: "Lightning Bracelet / Bone Bracelet / Special Bracelet", acquisition: "-", level: "-" },
      { name: "Domination Lightning", weapon: "Lightning Bracelet / Bone Bracelet / Special Bracelet", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 30, "AGI": 30, "HP": 40, "DEX": 50, "INT": 80, "SEN": 70,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Elemental Penetration - Reduces enemy RES with elemental power. (Self-buff) Cast: 1.133s, Cooldown: 5s, Duration: 1.63s, SP: 100 + Elemental Orb ×20",
        "Lv1":  "Duration 30s; Casting Time -0.5%; Ignores 1 RES",
        "Lv10": "Duration 300s; Casting Time -5%; Ignores 10 RES",
        "Lv11": "Duration 330s; Casting Time -5.5%; Ignores 11 RES; A.R. +1",
        "Lv12": "Duration 360s; Casting Time -6%; Ignores 12 RES; A.R. +1",
        "Lv13": "Duration 390s; Casting Time -6.5%; Ignores 13 RES; A.R. +1",
        "image": "/images/skills/job_manaactivation.png"
      },
      equipment: {
        "Armor": "Robe"
      }
    },
    quests: []
  },
  {
    id: "wizard",
    name: "Wizard",
    region: "Stock Characters",
    portrait: "images/characters/wizard.png",
    stances: [
      { name: "Psychokinesis", weapon: "None / Staff / Rod", acquisition: "-", level: "-" },
      { name: "Illusionist", weapon: "Staff", acquisition: "-", level: "-" },
      { name: "Levitation", weapon: "Staff / Rod", acquisition: "-", level: "-" },
      { name: "Anathema", weapon: "Staff", acquisition: "-", level: "-" },
      { name: "ESP", weapon: "Rod", acquisition: "-", level: "-" },
      { name: "Incantation", weapon: "Rod", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 30, "AGI": 50, "HP": 40, "DEX": 40, "INT": 70, "SEN": 70,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Energy Shield - Absorbs damage at a fixed SP rate. (Self-buff) Cast: 1s, Cooldown: 30s, Duration: 1.1s, SP: 60 + Magical Orb ×1",
        "Lv1":  "Duration 24s; Absorb 12% ATK with 14.5% SP",
        "Lv10": "Duration 60s; Absorb 30% ATK with 10.0% SP",
        "Lv11": "Duration 64s; Absorb 32% ATK with 9.5% SP; D.R. +1",
        "Lv12": "Duration 68s; Absorb 34% ATK with 9.0% SP; D.R. +1",
        "Lv13": "Duration 64s; Absorb 32% ATK with 9.5% SP; D.R. +1",
        "image": "/images/skills/job_reflection.png"
      },
      equipment: {
        "Armor": "Coat"
      }
    },
    quests: []
  },

  // =========================
  // Reboldeaux:
  // =========================
  {
    id: "andre",
    name: "Andre Janzur",
    region: "Reboldeaux",
    portrait: "images/characters/andre.png",

    // Structured stances
    stances: [
      { name: "Bare Knuckle",       weapon: "None",                    acquisition: "Default", level: "-"     },
      { name: "Epee Garde",         weapon: "Rapier",                  acquisition: "Default", level: "Lv 48"  },
      { name: "Sabre Garde",        weapon: "Rapier",                  acquisition: "Default", level: "Lv 48"  },
      { name: "Main-Gauche Garde",  weapon: "Rapier + Main Gauche",    acquisition: "Default", level: "Lv 60"  }
      // { name: "Rapiere", weapon: "Rapier + Rapier", acquisition: "Emilia quest; Symbol of Taurus + 6 Great Stone", level: "Expert" }
    ],

    stats: {
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
      personal: {
        "Personal Skill": "Clothing Design - Allows you to manufacture coats and robes. Use it then drag cloth recipe to Andre in Reboldeaux to start manufacturing. (Cast: 0s, Cooldown: 1s, Duration: 1.1s, SP: None, Level 10)",
        "image": "/images/skills/job_craftarmor.png"
      },
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
    portrait: "images/characters/brunie.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "claude",
    name: "Claude",
    region: "Reboldeaux",
    portrait: "images/characters/claude.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "diego",
    name: "Diego",
    region: "Reboldeaux",
    portrait: "images/characters/diego.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "idge-imbrulia",
    name: "Idge Imbrulia",
    region: "Reboldeaux",
    portrait: "images/characters/idge.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "najib-sharif",
    name: "Najib Sharif",
    region: "Reboldeaux",
    portrait: "images/characters/najib.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "panfilo-de-narvaez",
    name: "Panfilo de Narvaez",
    region: "Reboldeaux",
    portrait: "images/characters/panfilo.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "soldier-of-reboldoeux",
    name: "Soldier of Reboldoeux",
    region: "Reboldeaux",
    portrait: "images/characters/soldier.png",
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
    portrait: "images/characters/angie.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "ramiro",
    name: "Ramiro",
    region: "Rebouldeaux Queen's Gate",
    portrait: "images/characters/ramiro.png",
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
    portrait: "images/characters/jack.png",
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
    portrait: "images/characters/adelina.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "alejandro",
    name: "Alejandro",
    region: "The Port of Coimbra",
    portrait: "images/characters/alejandro.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "coimbra-trooper",
    name: "Coimbra Trooper",
    region: "The Port of Coimbra",
    portrait: "images/characters/trooper.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "emilia-guliano",
    name: "Emilia Guliano",
    region: "The Port of Coimbra",
    portrait: "images/characters/emilia.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "grace-bernelli",
    name: "Grace Bernelli",
    region: "The Port of Coimbra",
    portrait: "images/characters/grace.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "gracielo",
    name: "Gracielo",
    region: "The Port of Coimbra",
    portrait: "images/characters/gracielo.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "irawan",
    name: "Irawan",
    region: "The Port of Coimbra",
    portrait: "images/characters/irawan.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "jose-corthasar",
    name: "Jose Corthasar",
    region: "The Port of Coimbra",
    portrait: "images/characters/jose.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "lisa-lynway",
    name: "Lisa Lynway",
    region: "The Port of Coimbra",
    portrait: "images/characters/lisa.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "mboma",
    name: "MBoma",
    region: "The Port of Coimbra",
    portrait: "images/characters/mboma.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "soho",
    name: "Soho",
    region: "The Port of Coimbra",
    portrait: "images/characters/soho.png",
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
    portrait: "images/characters/soso.png",
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
    portrait: "images/characters/infantry.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "grutrude",
    name: "Grutrude",
    region: "City of Auch",
    portrait: "images/characters/grutrude.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "karjalainen",
    name: "Karjalainen",
    region: "City of Auch",
    portrait: "images/characters/karjalainen.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "lorch",
    name: "Lorch",
    region: "City of Auch",
    portrait: "images/characters/lorch.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "tiburon",
    name: "Tiburon",
    region: "City of Auch",
    portrait: "images/characters/tiburon.png",
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
    portrait: "images/characters/viki.png",
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
    portrait: "images/characters/catherine.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "catherine-dex",
    name: "Catherine (DEX)",
    region: "Dr Torsche's Mansion",
    portrait: "images/characters/catherine.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "catherine-int",
    name: "Catherine (INT)",
    region: "Dr Torsche's Mansion",
    portrait: "images/characters/catherine.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "catherine-str",
    name: "Catherine (STR)",
    region: "Dr Torsche's Mansion",
    portrait: "images/characters/catherine.png",
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
    portrait: "images/characters/edward.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "kurt",
    name: "Kurt",
    region: "Los Toldos",
    portrait: "images/characters/kurt.png",
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
    portrait: "images/characters/grandma.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "rescue-knight",
    name: "Rescue Knight",
    region: "Ustiur Base Camp",
    portrait: "images/characters/rescue.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "romina",
    name: "Romina",
    region: "Ustiur Base Camp",
    portrait: "images/characters/romina.png",
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
    portrait: "images/characters/icp.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "battle-smith-idge",
    name: "Battle Smith Idge",
    region: "Promo",
    portrait: "images/characters/bsi.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "pirate-adelina",
    name: "Pirate Adelina",
    region: "Promo",
    portrait: "images/characters/atp.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "sage-emilia",
    name: "Sage Emilia",
    region: "Promo",
    portrait: "images/characters/ets.png",
    stances: [],
    stats: { core: {}, personal: {}, equipment: {} },
    quests: []
  },
  {
    id: "soho-the-wind",
    name: "Soho The Wind",
    region: "Promo",
    portrait: "images/characters/stw.png",
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
