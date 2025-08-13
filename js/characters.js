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
    largePortrait: "images/characters/fighter-large.png",
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
        "Lv1":  "Duration 15s, Enemy DEF -11, Enemy ATK +10%",
        "Lv10": "Duration 15s, Enemy DEF -20, Enemy ATK +10%",
        "Lv11": "Duration 15s, Enemy DEF -21, Enemy ATK +10%",
        "Lv12": "Duration 15s, Enemy DEF -22, Enemy ATK +10%",
        "Lv13": "Duration 15s, Enemy DEF -23, Enemy ATK +10%",
        "image": "/images/skills/job_provoke.png"
      },
      equipment: {
        "Armor": "Leather, Metal"
      }
    },
    quests: []
  },
  {
    id: "musketeer",
    name: "Musketeer",
    region: "Stock Characters",
    portrait: "images/characters/musketeer.png",
    largePortrait: "images/characters/musketeer-large.png",
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
        "Lv1":  "Duration 300s, Monster Blow +1%, Accuracy +12, Crit +1%",
        "Lv10": "Duration 570s, Monster Blow +10%, Accuracy +30, Crit +15%",
        "Lv11": "Duration 600s, Monster Blow +11%, Accuracy +32, Crit +16%, A.R. +1",
        "Lv12": "Duration 630s, Monster Blow +12%, Accuracy +34, Crit +18%, A.R. +1",
        "Lv13": "Duration 660s, Monster Blow +13%, Accuracy +36, Crit +19%, A.R. +1",
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
    largePortrait: "images/characters/scout-large.png",
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
    largePortrait: "images/characters/warlock-large.png",
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
        "Lv1":  "Duration 30s, Casting Time -0.5%, Ignores 1 RES",
        "Lv10": "Duration 300s, Casting Time -5%, Ignores 10 RES",
        "Lv11": "Duration 330s, Casting Time -5.5%, Ignores 11 RES, A.R. +1",
        "Lv12": "Duration 360s, Casting Time -6%, Ignores 12 RES, A.R. +1",
        "Lv13": "Duration 390s, Casting Time -6.5%, Ignores 13 RES, A.R. +1",
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
    largePortrait: "images/characters/wizard-large.png",
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
        "Lv1":  "Duration 24s, Absorb 12% ATK with 14.5% SP",
        "Lv10": "Duration 60s, Absorb 30% ATK with 10.0% SP",
        "Lv11": "Duration 64s, Absorb 32% ATK with 9.5% SP, D.R. +1",
        "Lv12": "Duration 68s, Absorb 34% ATK with 9.0% SP, D.R. +1",
        "Lv13": "Duration 64s, Absorb 32% ATK with 9.5% SP, D.R. +1",
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
    largePortrait: "images/characters/andre-large.png",

    // Structured stances
    stances: [
      { name: "Bare Knuckle",       weapon: "None",                 acquisition: "Default", level: "-"     },
      { name: "Epee Garde",         weapon: "Rapier",               acquisition: "Default", level: "Lv 48"  },
      { name: "Sabre Garde",        weapon: "Rapier",               acquisition: "Default", level: "Lv 48"  },
      { name: "Main-Gauche Garde",  weapon: "Rapier + Main Gauche", acquisition: "Default", level: "Lv 60"  }
      // { name: "Rapiere", weapon: "Rapier + Rapier", acquisition: "Emilia quest, Symbol of Taurus + 6 Great Stone", level: "Expert" }
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
        "Personal Skill": "Clothing Design - Allows you to manufacture coats and robes. Use it then drag cloth recipe to Andre in Reboldeaux to start manufacturing. Cast: 0s, Cooldown: 1s, Duration: 1.1s, SP: None",
        "image": "/images/skills/job_craftarmor.png"
      },

      equipment: {
        "Armor": "Coat, Robe, Leather"
      }
    },

    quests: [
      { id: "q1", name: "Shattered Dreams and Fantazzies - Speak to Andre (D-8), go to Stone Pit, kill 5 Mandradora, return." },
      { id: "q2", name: "The Secret Behind the Holy Water - (Requires 'Source of the Taint') Talk to Panfilo, return to Andre." },
      { id: "q3", name: "Andre Janzur's Gone Crazy - Enter instance, duel and defeat Andre, return." },
      { id: "q4", name: "Sympathy for Dilos Latemn - Al Quelt Moreza Arcade: use altar at G-4, destroy 3 portals, return." },
      { id: "q5", name: "Andre In Despair - Talk to Panfilo, complete 'Pure White Food', return. (Reward: Irolina Hat)" },
      { id: "q6", name: "Birds of a Feather Flock Together (Req Lv 72) - Bonavista River: farm Cockatrice drops (rare), return for Character Card." }
    ]
  },
  {
    id: "brunie",
    name: "Brunie",
    region: "Reboldeaux",
    portrait: "images/characters/brunie.png",
    largePortrait: "images/characters/brunie-large.png",
    stances: [
      { name: "Bare Knuckle",    weapon: "None",             acquisition: "-", level: "-" },
      { name: "Aiming Shot",     weapon: "Pistol",           acquisition: "-", level: "-" },
      { name: "Freestyle Shot",  weapon: "Pistol",           acquisition: "-", level: "-" },
      { name: "Sight Shot",      weapon: "Pistol",           acquisition: "-", level: "-" },
      { name: "Double-Gun Shot", weapon: "Pistol + Pistol",  acquisition: "-", level: "-" },
      { name: "Outrage Shot",    weapon: "Pistol + Pistol",  acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 40,
        "STR": 40, "AGI": 90, "HP": 40, "DEX": 70, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: {
        "Armor": "Coat"
      }
    },
    quests: [
      { id: "q1", name: "Brunie Etienne's Errand (Req Lv 32) - Tetra Catacombs: break 8 Wooden Casks, return to Brunie." },
      { id: "q2", name: "Horn of the Gold Horned Gargoyle (Req Lv 36) - Tetra Golden Road > Door to Avernus, defeat Gold Horned Gargoyle, return to Brunie for Character Card." }
    ]
  },
  {
    id: "claude",
    name: "Claude",
    region: "Reboldeaux",
    portrait: "images/characters/claude.png",
    largePortrait: "images/characters/claude-large.png",
    stances: [
      { name: "Bare Knuckle",   weapon: "None",              acquisition: "-", level: "-" },
      { name: "Back-Guard",     weapon: "Sword",             acquisition: "-", level: "-" },
      { name: "Hack and Slash", weapon: "Sword + Sword",     acquisition: "-", level: "-" },
      { name: "Middle-Guard",   weapon: "Sabre",             acquisition: "-", level: "-" },
      { name: "Back-Guard",     weapon: "Sabre",             acquisition: "-", level: "-" },
      { name: "Twin Blades",    weapon: "Sabre + Sabre",     acquisition: "-", level: "-" },
      { name: "Plow-Guard",     weapon: "Great Sword",       acquisition: "-", level: "-" },
      { name: "Tail-Guard",     weapon: "Great Sword",       acquisition: "-", level: "-" },
      { name: "Blandir Cruz",   weapon: "Polearm",           acquisition: "-", level: "-" },
      { name: "Penetrar Cruz",  weapon: "Polearm",           acquisition: "-", level: "-" },
      { name: "Mighty Cruz",    weapon: "Polearm",           acquisition: "-", level: "-" },
      { name: "Back-Guard",     weapon: "Blunt",             acquisition: "-", level: "-" },
      { name: "Stave Guard",    weapon: "Javelin",           acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 56,
        "STR": 80, "AGI": 50, "HP": 80, "DEX": 50, "INT": 30, "SEN": 40,
        "Total Stat Points": 330
      },
      personal: {
        "Personal Skill": "Blunt Weapon Crafting - Manufacture blunts, polearms, javelins, leg-guards, knuckles and greatswords. Use it then drag weapon recipe to Claude in Reboldeaux to start manufacturing. Cast: 0s, Cooldown: 1s, Duration: 1.1s, SP: None",
        "image": "/images/skills/job_craftweapon.png"
      },
      equipment: {
        "Armor": "Leather, Metal"
      }
    },
    quests: [
      { id: "q1", name: "Gathering Weapon Materials (Req Lv 4) - Al Quelt Moreza: get 20 Sulfur from Striped Spiders, return. (EXP Card (3), Polish Initiate (3))" },
      { id: "q2", name: "Guardian Deity of Reboldeaux (Req Lv 10) - Instance: defend Queen's Gate for 5 minutes, reward Stance Book High Guard, Polish Initiate (3)." },
      { id: "q3", name: "Training - Requires 'Source of the Taint', duel and defeat Claude, return. (EXP Card (3), Polish Disciple (3))" },
      { id: "q4", name: "The Renowned Sword! Silver Baron - Porto Bello: The Hold (J-5) chest, then Deck: kill Gavi di Gavi, return for Silver Baron & Polish Disciple (3)." },
      { id: "q5", name: "Learning By Close Application! Claude Baudez (Req Lv 60) - Deserted Quay: Bomber Turtles, Thueringenwald/El Lago: Corlien Dynamiters & Dandelion Gorillas, reward Durandal, Trooper's Saber, EXP Card (1)." },
      { id: "q6", name: "Learning By Close Application! Claude Baudez 2 - Dr. Torsche’s Mansion: Savage Garden mobs, return for Claude Baudez Character Card, Slayer, Brandistock, Polish Explorer (3)." }
    ]
  },
  {
    id: "diego",
    name: "Diego",
    region: "Reboldeaux",
    portrait: "images/characters/diego.png",
    largePortrait: "images/characters/diego-large.png",
    stances: [
      { name: "Install Trap",           weapon: "None", acquisition: "-", level: "-" },
      { name: "Defensive Construction", weapon: "None", acquisition: "-", level: "-" },
      { name: "Back-Guard",             weapon: "Sword", acquisition: "-", level: "-" },
      { name: "Hack and Slash",         weapon: "Sword + Sword", acquisition: "-", level: "-" },
      { name: "Install Trap",           weapon: "Tool", acquisition: "-", level: "-" },
      { name: "Defensive Construction", weapon: "Tool", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 24,
        "STR": 60, "AGI": 50, "HP": 50, "DEX": 70, "INT": 40, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Remove Construction - Removes constructions, some summons (e.g., Amber) will be released. (Self-buff) Cast: 0s, Cooldown: 60s, Duration: 1.5s, SP: None",
        "image": "/images/skills/job_cancelsummon.png"
      },
      equipment: {
        "Armor": "Leather"
      }
    },
    quests: [
      { id: "q1", name: "Advertising for Diego the Carpenter (Req Lv 17) - Post on Reboldeaux (G-7) & Coimbra (H-5) boards (200 vis via warp), return. (EXP Card (3), Polish Initiate (3))" },
      { id: "q2", name: "Revenge on Diego (Req Lv 20) - Talk to Diego in Reboldeaux, choose to fight and defeat him, return to Andrew (Coimbra J-8). (Diego's Sword, EXP Card (6), Polish Novice (3))" },
      { id: "q3", name: "Construction Equipment (25) (Req Lv 25) - Stone Pit: speak to Jack, return. (EXP Card (3), Polish Novice (3))" },
      { id: "q4", name: "Securing Areas For the Construction - Tetra Hill: kill 25 Phobitan Imp, 20 Little Plaque Rogue, 20 Little Plaque Noir, return. (EXP Card (3), Healing Potion, Polish Novice (3))" },
      { id: "q5", name: "Rubber and Steel (Req Lv 28) - Tetra Ruins: gather items from Phobitan Warriors/Rogues, return. (EXP Card (3), Healing Potion (10), New Construction Equipment, Polish Novice (3))" },
      { id: "q6", name: "Construction Certificate - Reboldeaux: speak to Domingo, Coimbra: speak to Nunez, complete 'Nunez's Mistake', return for Diego Character Card. (EXP Card (3), Polish Novice (3))" },
      { id: "q7", name: "Nunez's Mistake - Tetra Ruins: kill Little Plaque Rogue Etons, return to Nunez for Coimbra License, Polish Initiate (3)." }
    ]
  },
  {
    id: "idge-imbrulia",
    name: "Idge Imbrulia",
    region: "Reboldeaux",
    portrait: "images/characters/idge.png",
    largePortrait: "images/characters/idge-large.png",
    stances: [
      { name: "Bare Knuckle",  weapon: "None",         acquisition: "-", level: "-" },
      { name: "Plow-Guard",    weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Tail-Guard",    weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Roof-Guard",    weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Sidewinder",    weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Blandir Cruz",  weapon: "Polearm",      acquisition: "-", level: "-" },
      { name: "Penetrar Cruz", weapon: "Polearm",      acquisition: "-", level: "-" },
      { name: "Mighty Cruz",   weapon: "Polearm",      acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 40,
        "STR": 60, "AGI": 70, "HP": 50, "DEX": 60, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Armor Crafting - Manufacture leather/metal armors and shields. Use it then drag armor/shield recipe to Idge in Reboldeaux. Cast: 0s, Cooldown: 1s, Duration: 1.1s, SP: None",
        "image": "/images/skills/job_craftarmor.png"
      },
      equipment: { "Armor": "Leather, Metal" }
    },
    quests: [
      { id: "q1", name: "An Old Armor (Req Lv 4) - Ferruccio Junction G-7 flat stone, return. (EXP Card (3), Polish Novice (3))" },
      { id: "q2", name: "Fanatic Mail (Req Lv 17, post 'Source of the Taint') - Al Quelt Moreza Arcade fanatics for parts, return. (Fanatic Mail, EXP Card (3), Polish Novice (3))" },
      { id: "q3", name: "The Lost Drawing (Req Lv 30) - Multi-step investigation across Auch/Reboldeaux/Tetra, defeat Claude, find cottage key, thieves instance (Tetra Grand Corridor I-8), return. (EXP Card (3), Polish Disciple (3))" },
      { id: "q4", name: "Idge's Series (Req Lv 35) - Complete 'Raw Materials for Silver Bar' then return for Idge's Boots/Gloves/Helmet. (EXP Card (3), Polish Disciple (3))" },
      { id: "q5", name: "Raw Materials for Silver Bar - Horned Gargoyle, Nevare, Box Octopus drops, smelt at bonfires, return. (60 Silver Bar)" },
      { id: "q6", name: "Idge's Breastplate (Req Lv 38) - Eusebio, then Jezebel Glen E-11 instance vs Grim Reaper, Porto Bello mermen drops, return for Idge Card & Breastplate. (EXP Card (3), Polish Disciple (3))" }
    ]
  },
  {
    id: "najib-sharif",
    name: "Najib Sharif",
    region: "Reboldeaux",
    portrait: "images/characters/najib.png",
    largePortrait: "images/characters/najib-large.png",
    stances: [
      { name: "Bare Knuckle",   weapon: "None",            acquisition: "-", level: "-" },
      { name: "Standing Shot",  weapon: "Rifle",           acquisition: "-", level: "-" },
      { name: "Kneeling Shot",  weapon: "Rifle",           acquisition: "-", level: "-" },
      { name: "Middle-Guard",   weapon: "Sabre",           acquisition: "-", level: "-" },
      { name: "Low-Guard",      weapon: "Sabre",           acquisition: "-", level: "-" },
      { name: "Twin Blades",    weapon: "Sabre + Sabre",   acquisition: "-", level: "-" },
      { name: "Standing Shot",  weapon: "Bayonet",         acquisition: "-", level: "-" },
      { name: "Kneeling Shot",  weapon: "Bayonet",         acquisition: "-", level: "-" },
      { name: "Encounter Shot", weapon: "Bayonet",         acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 44,
        "STR": 60, "AGI": 70, "HP": 50, "DEX": 70, "INT": 30, "SEN": 30,
        "Total Stat Points": 310
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "The Opolutan Tea Box - Appraise with Vera, return. (EXP Card (3), Polish Initiate (3))" },
      { id: "q2", name: "What a Foreign Merchant Wants (Req Lv 12) - Al Quelt Moreza: 15 Vedanium from Vedanobah, reward Freestyle Shot book. (EXP Card (3), Polish Initiate (3))" },
      { id: "q3", name: "Firearm Merchant's Hobby (Req Lv 36) - Tetra Golden Road: Rufus Reaper drops, return. (EXP Card (3), Polish Novice (3))" },
      { id: "q4", name: "Barken Rifle (Req Lv 41) - Porto Bello Deck: Mermen drops, return for Barken Rifle. (EXP Card (3), Polish Disciple (3))" },
      { id: "q5", name: "Swamp Monkey Pigment (Req Lv 51) - Thueringenwald gorilla/flower drops, stone at F-7 to spawn Sunflower Dandelion Gorilla, return. (EXP Card (3), Polish Disciple (3))" },
      { id: "q6", name: "Antique Trade (Req Lv 55) - Multi-NPC chain (Vera, Greg, Thikha, Nunez) + PB Hold bosses, return. (10,000 Vis, Enchant Chip 60, EXP Card (3), Polish Disciple (3))" },
      { id: "q7", name: "Illier's Rococo Furniture (Req Lv 60) - Torsche Mansion: Haunted Candles/Desks, return. (EXP Card (3), Polish Explorer (3))" },
      { id: "q8", name: "Vera, the Furniture Connoisseur - Instance clear, return. (EXP Card (3), Polish Explorer (3))" },
      { id: "q9", name: "Fix Furniture - El Tejado Verde drops, return for Najib Sharif Character Card. (Enchant Chip 60, EXP Card (3), Polish Explorer (3))" }
    ]
  },
  {
    id: "panfilo-de-narvaez",
    name: "Panfilo de Narvaez",
    region: "Reboldeaux",
    portrait: "images/characters/panfilo.png",
    largePortrait: "images/characters/panfilo-large.png",
    stances: [
      { name: "Bare Knuckle",      weapon: "None",                         acquisition: "-", level: "-" },
      { name: "Back-Guard",        weapon: "Sword",                        acquisition: "-", level: "-" },
      { name: "Hack and Slash",    weapon: "Sword + Sword",                acquisition: "-", level: "-" },
      { name: "Flame-Guard",       weapon: "Sword + Fire Bracelet",        acquisition: "-", level: "-" },
      { name: "Middle-Guard",      weapon: "Sabre",                        acquisition: "-", level: "-" },
      { name: "Low-Guard",         weapon: "Sabre",                        acquisition: "-", level: "-" },
      { name: "Flame-Guard",       weapon: "Sabre + Fire Bracelet",        acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 40,
        "STR": 60, "AGI": 50, "HP": 60, "DEX": 40, "INT": 60, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "Lunch Delivery - Deliver lunch to Queen's Gate guard (E-11), return. (EXP Card (3), Polish Initiate (3), 200 Vis)" },
      { id: "q2", name: "Al Quelt Moreza Holy Water (Req Lv 10) - Fill vial at Holy Fountain (Narthex B-9), return. (EXP Card (3), Polish Initiate (3))" },
      { id: "q3", name: "Pure White Food - Milk (Mary), 20 Saber Boar Pork (Cathari Falls), Pasta & Parmesan (Camille), return. (Carbonara)" },
      { id: "q4", name: "Percha Inzella - Box Octopus drops from Porto Bello or Jezebel Glen, return. (Percha Inzella, Polish Novice)" },
      { id: "q5", name: "Protector of the Cows (Req Lv 50) - Instance: defend bison (≤3 deaths), return for Panfilo Character Card. (Polish Disciple (3))" }
    ]
  },
  {
    id: "soldier-of-reboldoeux",
    name: "Soldier of Reboldoeux",
    region: "Reboldeaux",
    portrait: "images/characters/soldier.png",
    largePortrait: "images/characters/soldier-large.png",
    stances: [
      { name: "Bare Knuckle",    weapon: "None",                 acquisition: "-", level: "-" },
      { name: "Blandir Cruz",    weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Penetrar Cruz",   weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Mighty Cruz",     weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Back-Guard",      weapon: "Sword",                acquisition: "-", level: "-" },
      { name: "Back-Guard",      weapon: "Blunt",                acquisition: "-", level: "-" },
      { name: "Back-Guard",      weapon: "Sword + Shield",       acquisition: "-", level: "-" },
      { name: "High-Guard",      weapon: "Sword + Shield",       acquisition: "-", level: "-" },
      { name: "Back-Guard",      weapon: "Blunt + Shield",       acquisition: "-", level: "-" },
      { name: "Defender",        weapon: "Blunt + Shield",       acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 60, "AGI": 50, "HP": 60, "DEX": 40, "INT": 30, "SEN": 30,
        "Total Stat Points": 270
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: { "Armor": "Leather, Metal" }
    },
    quests: [
      { id: "q1", name: "Basic Combat Education - Training instance: defeat 5 soldiers, practice modes, exit via Gate Control Officer, talk to instructor for Character Card." }
    ]
  },

  // =========================
  // Rebouldeaux Queen's Gate:
  // =========================
  {
    id: "angie",
    name: "Angie",
    region: "Rebouldeaux Queen's Gate",
    portrait: "images/characters/angie.png",
    largePortrait: "images/characters/angie-large.png",
    stances: [
      { name: "Install Trap",           weapon: "Tool", acquisition: "-", level: "-" },
      { name: "Construction",           weapon: "Tool", acquisition: "-", level: "-" },
      { name: "Defensive Construction", weapon: "Tool", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 20,
        "STR": 40, "AGI": 60, "HP": 50, "DEX": 60, "INT": 50, "SEN": 40,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Remove Construction - Removes constructions, some summons (e.g., Amber) will be released. (Self-buff) Cast: 0s, Cooldown: 60s, Duration: 1.5s, SP: None",
        "image": "/images/skills/job_cancelsummon.png"
      },
      equipment: {
        "Armor": "Leather"
      }
    },
    quests: [
      { id: "q1", name: "Angie Card (Req Lv 16) - Queen's Gate (F-9): talk to Angie, collect 30 Skeleton Bones (King's Garden), defend instance, break stones, hand over 20 Ionium/Quartz/Aidanium, collect 10 Lazim Lam's Red Wings, speak to Gertrude (Auch), watch scenes, receive card." }
    ]
  },
  {
    id: "ramiro",
    name: "Ramiro",
    region: "Rebouldeaux Queen's Gate",
    portrait: "images/characters/ramiro.png",
    largePortrait: "images/characters/ramiro-large.png",
    stances: [
      { name: "Bare Knuckle",  weapon: "None",           acquisition: "-", level: "-" },
      { name: "Plow-Guard",    weapon: "Sword",          acquisition: "-", level: "-" },
      { name: "Roof-Guard",    weapon: "Sword",          acquisition: "-", level: "-" },
      { name: "Sidewinder",    weapon: "Sword",          acquisition: "-", level: "-" },
      { name: "Middle-Guard",  weapon: "Main Gauche",    acquisition: "-", level: "-" },
      { name: "Back-Guard",    weapon: "Main Gauche",    acquisition: "-", level: "-" },
      { name: "Low-Guard",     weapon: "Main Gauche",    acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 16,
        "STR": 50, "AGI": 80, "HP": 40, "DEX": 50, "INT": 30, "SEN": 30,
        "Total Stat Points": 280
      },
      personal: {
        "Personal Skill": "Sprint - Sudden burst of speed. (Self-buff) Cast: 1.133s, Cooldown: 30s, Duration: 1.13s, SP: 100 + Mithridart ×3",
        "Lv1": "Duration 6s, Move SPD +55%",
        "Lv10": "Duration 15s, Move SPD +100%",
        "Lv11": "Duration 16s, Move SPD +105%",
        "Lv12": "Duration 17s, Move SPD +110%",
        "Lv13": "Duration 18s, Move SPD +115%",
        "image": "/images/skills/job_sprint.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "Girl In Danger - Instance defense, protect Ramiro's girlfriend 5 minutes, return. (EXP Card (3), Polish Initiate (3))" },
      { id: "q2", name: "Her Photo (Req Lv 8) - Duel & defeat Ramiro, receive Ramiro Character Card. (Polish Initiate (3))" },
      { id: "q3", name: "A True Man (Veteran) - Long upgrade chain via Lisa → Jack → Andre → Claude → Emilia → Lisa, ends with +1 STR costume reward." }
    ]
  },

  // =========================
  // Rebouldeaux Stone Pit:
  // =========================
  {
    id: "jack",
    name: "Jack",
    region: "Rebouldeaux Stone Pit",
    portrait: "images/characters/jack.png",
    largePortrait: "images/characters/jack-large.png",
    stances: [
      { name: "Install Trap",  weapon: "None", acquisition: "-", level: "-" },
      { name: "Construction",  weapon: "None", acquisition: "-", level: "-" },
      { name: "Penetrar Cruz", weapon: "Polearm", acquisition: "-", level: "-" },
      { name: "Install Trap",  weapon: "Tool", acquisition: "-", level: "-" },
      { name: "Construction",  weapon: "Tool", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 16,
        "STR": 50, "AGI": 70, "HP": 50, "DEX": 60, "INT": 40, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Remove Construction - Removes constructions, some summons (e.g., Amber) will be released. (Self-buff) Cast: 0s, Cooldown: 60s, Duration: 1.5s, SP: None",
        "image": "/images/skills/job_cancelsummon.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "Request From Jack (Req Lv 4) - Stone Pit instance: reach red square, kill 5 bears, return. (EXP Card (3), Polish Initiate (3))" },
      { id: "q2", name: "Recovery Work on the Stone Pit - Ferruccio Junction: kill Leaping Crocs for 10 Limestone, return for Jack Card. (Polish Initiate (3))" }
    ]
  },

  // =========================
  // The Port of Coimbra:
  // =========================
  {
    id: "adelina-esperanza",
    name: "Adelina Esperanza",
    region: "The Port of Coimbra",
    portrait: "images/characters/adelina.png",
    largePortrait: "images/characters/adelina-large.png",
    stances: [
      { name: "Bare Knuckle",    weapon: "None",             acquisition: "-", level: "-" },
      { name: "Middle-Guard",    weapon: "Sabre",            acquisition: "-", level: "-" },
      { name: "Back-Guard",      weapon: "Sabre",            acquisition: "-", level: "-" },
      { name: "Low-Guard",       weapon: "Sabre",            acquisition: "-", level: "-" },
      { name: "Twin Blades",     weapon: "Sabre + Sabre",    acquisition: "-", level: "-" },
      { name: "Heaven or Hell",  weapon: "Sabre + Pistol",   acquisition: "-", level: "-" },
      { name: "Freestyle Shot",  weapon: "Pistol",           acquisition: "-", level: "-" },
      { name: "Double-Gun Shot", weapon: "Pistol + Pistol",  acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 36,
        "STR": 60, "AGI": 80, "HP": 60, "DEX": 60, "INT": 30, "SEN": 40,
        "Total Stat Points": 330
      },
      personal: {
        "Personal Skill": "Sword Crafting - Manufacture swords, daggers, rapiers, sabres and main-gauches. Use with weapon recipes at Adelina in Coimbra. Cast: 0s, Cooldown: 1s, Duration: 1.1s, SP: None",
        "image": "/images/skills/job_craftweapon.png"
      },
      equipment: {
        "Armor": "Leather"
      }
    },
    quests: [
      { id: "q1", name: "Adelina's Grim Task (Req Lv 36) - Porto Bello: click skeletons at Deck J-7, Cabin K-8, Hold G-9, return to Adelina for card." },
      { id: "q2", name: "Adelina's Journey of Revenge - From barrel behind Adelina: visit Coimbra Nimraldi Bridge (tombstone K-6), talk to Ricardo (J-9), complete instances (Bardi, Benito, 3 pirates & Guillarmo), return to tombstone for reward. (Leader must be Adelina.)" }
    ]
  },
  {
    id: "alejandro",
    name: "Alejandro",
    region: "The Port of Coimbra",
    portrait: "images/characters/alejandro.png",
    largePortrait: "images/characters/alejandro-large.png",
    stances: [
      { name: "Bare Knuckle",  weapon: "None",         acquisition: "-", level: "-" },
      { name: "Plow-Guard",    weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Tail-Guard",    weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Blandir Cruz",  weapon: "Polearm",      acquisition: "-", level: "-" },
      { name: "Penetrar Cruz", weapon: "Polearm",      acquisition: "-", level: "-" },
      { name: "Mighty Cruz",   weapon: "Polearm",      acquisition: "-", level: "-" },
      { name: "Stave Guard",   weapon: "Javelin",      acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 44,
        "STR": 90, "AGI": 40, "HP": 70, "DEX": 40, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: {
        "Armor": "Leather"
      }
    },
    quests: [
      { id: "q1", name: "Escudo Pecher's Attack (Req Lv 24) - Instance: defeat Escudo Pecher in marked area, return for rewards." },
      { id: "q2", name: "Escudo Pecher Hunt (Req Lv 40) - Porto Bello (Deck): defeat Escudo Pecher (rare) or farm Trinity 2 Lobby for 10 Arms, return to Alejandro." },
      { id: "q3", name: "The Daemon of the Sea - Doby Rick (Req Lv 46) - Instance with Alejandro assisting, defeat Doby Rick, return for Character Card." }
    ]
  },
  {
    id: "coimbra-trooper",
    name: "Coimbra Trooper",
    region: "The Port of Coimbra",
    portrait: "images/characters/trooper.png",
    largePortrait: "images/characters/trooper-large.png",
    stances: [
      { name: "Bare Knuckle",   weapon: "None",                 acquisition: "-", level: "-" },
      { name: "Back-Guard",     weapon: "Sword",                acquisition: "-", level: "-" },
      { name: "Back-Guard",     weapon: "Sword + Shield",       acquisition: "-", level: "-" },
      { name: "High-Guard",     weapon: "Sword + Shield",       acquisition: "-", level: "-" },
      { name: "Hack and Slash", weapon: "Sword + Sword",        acquisition: "-", level: "-" },
      { name: "Blandir Cruz",   weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Penetrar Cruz",  weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Mighty Cruz",    weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Back-Guard",     weapon: "Blunt",                acquisition: "-", level: "-" },
      { name: "Defender",       weapon: "Blunt + Shield",       acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 16,
        "STR": 50, "AGI": 50, "HP": 70, "DEX": 50, "INT": 30, "SEN": 30,
        "Total Stat Points": 280
      },
      personal: {
        "Personal Skill": "Provoke - Taunts up to 8 enemies within 8m. (Self-buff) Cast: 0s, Cooldown: 0s, Duration: 1.2s, SP: 100",
        "Lv1":  "Duration 15s, Enemy DEF -11, Enemy ATK +10%",
        "Lv10": "Duration 15s, Enemy DEF -20, Enemy ATK +10%",
        "Lv11": "Duration 15s, Enemy DEF -21, Enemy ATK +10%",
        "Lv12": "Duration 15s, Enemy DEF -22, Enemy ATK +10%",
        "Lv13": "Duration 15s, Enemy DEF -23, Enemy ATK +10%",
        "image": "/images/skills/job_provoke.png"
      },
      equipment: {
        "Armor": "Leather, Metal"
      }
    },
    quests: [
      { id: "q1", name: "Angel Fruit (Req Lv 20) - Port of Coimbra (Lisa Lynway G-9): pick avocado at King's Garden (K-6), return for Avocado Sandwich, Coimbra Trooper Character Card, Polish Novice (3)." }
    ]
  },
  {
    id: "emilia-guliano",
    name: "Emilia Guliano",
    region: "The Port of Coimbra",
    portrait: "images/characters/emilia.png",
    largePortrait: "images/characters/emilia-large.png",
    stances: [
      { name: "First Aid",   weapon: "None / Rosario", acquisition: "-", level: "-" },
      { name: "Fortitudo",   weapon: "None / Rosario", acquisition: "-", level: "-" },
      { name: "ESP",         weapon: "None / Rod",     acquisition: "-", level: "-" },
      { name: "Incantation", weapon: "Rod",            acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 24,
        "STR": 40, "AGI": 50, "HP": 40, "DEX": 50, "INT": 60, "SEN": 60,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Healing - Restores HP of one appointed character. (Self-buff) Cast: 0s, Cooldown: 0s, Duration: 1.5s, SP: 25",
        "image": "/images/skills/job_healing.png"
      },
      equipment: {
        "Armor": "Coat, Leather"
      }
    },
    quests: [
      { id: "q1", name: "Dr. Lorenzo Giannino and His Diary (Req Lv 25) - Tetra Grand Corridor (J-10) strange cask, return. (EXP Card (3), Polish Novice (3))" },
      { id: "q2", name: "It Lives Inside the Hand - Reboldeaux: speak to Eunho (E9-10), return to Emilia for Emilia Guliano Character Card, EXP Card (3), Polish Novice (3)." }
    ]
  },
  {
    id: "grace-bernelli",
    name: "Grace Bernelli",
    region: "The Port of Coimbra",
    portrait: "images/characters/grace.png",
    largePortrait: "images/characters/grace-large.png",
    stances: [
      { name: "Bare Knuckle",    weapon: "None",            acquisition: "-", level: "-" },
      { name: "Aiming Shot",     weapon: "Pistol",          acquisition: "-", level: "-" },
      { name: "Freestyle Shot",  weapon: "Pistol",          acquisition: "-", level: "-" },
      { name: "Double-Gun Shot", weapon: "Pistol + Pistol", acquisition: "-", level: "-" },
      { name: "Standing Shot",   weapon: "Rifle / Bayonet", acquisition: "-", level: "-" },
      { name: "Kneeling Shot",   weapon: "Rifle / Bayonet", acquisition: "-", level: "-" },
      { name: "Encounter Shot",  weapon: "Bayonet",         acquisition: "-", level: "-" },
      { name: "Shotgun Blaster", weapon: "Shotgun",         acquisition: "-", level: "-" },
      { name: "Gigantic Blaster",weapon: "Shotgun",         acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 32,
        "STR": 40, "AGI": 70, "HP": 40, "DEX": 90, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Gun Manufacture - Manufacture rifles, pistols and bayonets. Use with weapon recipes at Bernelli in Coimbra. Cast: 0s, Cooldown: 1s, Duration: 1.1s, SP: None",
        "image": "/images/skills/job_craftguns.png"
      },
      equipment: {
        "Armor": "Coat, Leather"
      }
    },
    quests: [
      { id: "q1", name: "Bernelli's Challenge (Req Lv 32) - Instance: duel and defeat Grace, return." },
      { id: "q2", name: "The Suspicion of the Tetra Ruins - Tetra Catacombs > door to Tetra Golden Road, defeat Treasure Golem, return." },
      { id: "q3", name: "The Sorceress Cherlyn - Tetra Golden Road: defeat Treasure Golem & Cherlyn (Grace assists), return for Character Card." },
      { id: "q4", name: "Prison de Joaquin's Secret (Rec Lv 80) - Multi-map hunt for items, instance waves & rotating blades, defeat Garcia, turn in to Grace." },
      { id: "q5", name: "Prison de Joaquin's Secret_1 - Theuringenwald tombstone instance, Mohrgus secret door instance, story with Dr. Fran, return to Grace." }
    ]
  },
  {
    id: "gracielo",
    name: "Gracielo",
    region: "The Port of Coimbra",
    portrait: "images/characters/gracielo.png",
    largePortrait: "images/characters/gracielo-large.png",
    stances: [
      { name: "Bare Knuckle",               weapon: "None",      acquisition: "-", level: "-" },
      { name: "Bare Knuckle",               weapon: "Knuckle",   acquisition: "-", level: "-" },
      { name: "Martial Arts - Chap. of Wind", weapon: "Legguard", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 40,
        "STR": 60, "AGI": 70, "HP": 60, "DEX": 50, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Violent Wind Attack - Increases physical ability like lightning. (Self-buff) Cast: 0s, Cooldown: 30s, Duration: 1.2s, SP: 300 + Mithridart ×1",
        "Lv1":  "Duration 45s, ATK SPD & Move SPD +5.5%, Lightning ATK +16, DEF -20",
        "Lv10": "Duration 180s, ATK SPD & Move SPD +10%, Lightning ATK +70, DEF -20",
        "Lv11": "Duration 195s, ATK SPD & Move SPD +10.5%, Lightning ATK +76, DEF -20, A.R. +1",
        "Lv12": "Duration 210s, ATK SPD & Move SPD +11%, Lightning ATK +82, DEF -20, A.R. +1",
        "Lv13": "Duration 225s, ATK SPD & Move SPD +11.5%, Lightning ATK +88, DEF -20, A.R. +1",
        "image": "/images/skills/job_chapterofwind.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "Hungry Hungry Gracielo - Buy Chocolate (Lisa), Ferruccio Milk & Bread (Mary at Queen's Gate), return. (Polish Disciple (3))" },
      { id: "q2", name: "Gracielo's Mission (Rec Lv 25) - Talk to Camille, instance duel vs Gracielo, return for Character Card. (EXP Card (3), Polish Disciple (6))" },
      { id: "q3", name: "Coimbra Showdown (Req Lv 40) - Observation Deck F-7 instance, defeat 3 thugs, then Fritz, talk to Camille. (Health Filler (1), Polish Initiate (3))" },
      { id: "q4", name: "A Warrior's Path to Humility Part 1 - Reboldeaux Menendez: defeat 100 soldiers, destroy Insignia. (Gaiters Lv48, EXP Card (3), Polish Initiate (3))" },
      { id: "q5", name: "A Warrior's Path to Humility Part 2 (Req Lv 42) - Coimbra instances & tombstone, defeat Hippolite & thugs, get pointer to Porto Bello Deserted Quay. (Polish Disciple (6))" },
      { id: "q6", name: "A Warrior's Path to Understanding (Req Lv 46) - PB Deserted Quay hut G-6 > trials vs Tortoise/Wolves/Scavenger, break stone, talk to Fritz. (EXP Card (6), Polish Disciple (9))" },
      { id: "q7", name: "A Warrior's Path to Strength: The First Disciple - Lascasas (Coimbra) instance, Reen (Stone Pit), Seldan (Ferruccio Jct), rewards Skill Book: Chapter of Wind, Dragon Kick, Soul Filler (2), EXP Card (3)." },
      { id: "q8", name: "A Warrior's Path to Honor: Be the Wind - PB Deserted Quay hut: stance book 'Martial Elements: Wind'. (Polish Disciple (3))" },
      { id: "q9", name: "A Bull Amongst the Storm - Reboldeaux streets: instance vs Bison, obtain Bison Horn." },
      { id: "q10", name: "Educate the Robot (57) - Torsche Mansion Maid's Quarters: instance vs Roseanne, talk to her. (EXP Card (3), Polish Explorer (3))" }
    ]
  },
  {
    id: "irawan",
    name: "Irawan",
    region: "The Port of Coimbra",
    portrait: "images/characters/irawan.png",
    largePortrait: "images/characters/irawan-large.png",
    stances: [
      { name: "Bare Knuckle",                    weapon: "None",      acquisition: "-", level: "-" },
      { name: "Muathai",                         weapon: "Knuckle",   acquisition: "-", level: "-" },
      { name: "Martial Arts - Chap. of Earth",   weapon: "Knuckle",   acquisition: "-", level: "-" },
      { name: "Muathai",                         weapon: "Legguard",  acquisition: "-", level: "-" },
      { name: "Martial Arts - Chap. of Wind",    weapon: "Legguard",  acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 80, "AGI": 60, "HP": 50, "DEX": 50, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "Attacked by Gangsters - Pay 1,000 Vis to enter instance, assist vs thugs, give 10 Soul Crystals (see pioneer quest chain for 5 free). (Polish Initiate (6))" },
      { id: "q2", name: "Gracielo's Counterattack - Instance cutscene, give 10 Triumph Filler & 10 AM Boost (5 of each available via pioneer quests). (Polish Initiate (3))" },
      { id: "q3", name: "Meet with Fritz - Instance dialogue, receive Irawan Character Card. (Polish Initiate (3))" }
    ]
  },
  {
    id: "jose-corthasar",
    name: "Jose Corthasar",
    region: "The Port of Coimbra",
    portrait: "images/characters/jose.png",
    largePortrait: "images/characters/jose-large.png",
    stances: [
      { name: "Bare Knuckle",     weapon: "None",        acquisition: "-", level: "-" },
      { name: "Blandir Cruz",     weapon: "Polearm",     acquisition: "-", level: "-" },
      { name: "Penetrar Cruz",    weapon: "Polearm",     acquisition: "-", level: "-" },
      { name: "Mighty Cruz",      weapon: "Polearm",     acquisition: "-", level: "-" },
      { name: "Siege Burst",      weapon: "Cannon",      acquisition: "-", level: "-" },
      { name: "Gigantic Marksmanship", weapon: "Cannon", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 48,
        "STR": 50, "AGI": 40, "HP": 50, "DEX": 70, "INT": 50, "SEN": 40,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Cannon Manufacture - Allows you to manufacture cannons. Use it then drag cannon recipe to Jose in Coimbra. Cast: 0s, Cooldown: 1s, Duration: 1.1s, SP: None",
        "image": "/images/skills/job_craftguns.png"
      },
      equipment: { "Armor": "Leather, Metal" }
    },
    quests: [
      { id: "q1", name: "Porsair's Cannon Ball (Req Lv 40) - Porto Bello: Cabin/Hold kill Porsair, return. (EXP Card (3), Polish Disciple (3))" },
      { id: "q2", name: "Supply T.N.T (Req Lv 44) - Deserted Quay: kill Armed Tortoise for items, return. (EXP Card (3), Polish Disciple (3))" },
      { id: "q3", name: "Return of the Cannon Trooper (Req Lv 48) - Instance: defeat Jose (Claude may appear but not required), return for Jose Card. (EXP Card (3), Polish Disciple (3))" }
    ]
  },
  {
    id: "lisa-lynway",
    name: "Lisa Lynway",
    region: "The Port of Coimbra",
    portrait: "images/characters/lisa.png",
    largePortrait: "images/characters/lisa-large.png",
    stances: [
      { name: "Bare Knuckle",    weapon: "None",              acquisition: "-", level: "-" },
      { name: "Escrima",         weapon: "Dagger",            acquisition: "-", level: "-" },
      { name: "Dobalada Corte",  weapon: "Dagger + Dagger",   acquisition: "-", level: "-" },
      { name: "Raid Assault",    weapon: "Dagger + Dagger",   acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 24,
        "STR": 50, "AGI": 80, "HP": 50, "DEX": 60, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "Chocolate Lady (Req Lv 20 & 'Angel Fruit') - Farm 50 High Quality Cabosse (Tetra), choose Evocation (Fire/Ice/Lightning) stance book. (Polish Novice (3))" },
      { id: "q2", name: "The Stolen Warehouse - Tetra Grand Corridor: 25 Comodo Meat, Tetra Catacombs: 20 Daemon Horns, return for Lisa Card & Dobalada Corte book. (Polish Novice (3))" }
    ]
  },
  {
    id: "mboma",
    name: "MBoma",
    region: "The Port of Coimbra",
    portrait: "images/characters/mboma.png",
    largePortrait: "images/characters/mboma-large.png",
    stances: [
      { name: "Illusionist",       weapon: "None",           acquisition: "-", level: "-" },
      { name: "Possession Fire",   weapon: "None",           acquisition: "-", level: "-" },
      { name: "Illusionist",       weapon: "Staff",          acquisition: "-", level: "-" },
      { name: "Levitation",        weapon: "Staff",          acquisition: "-", level: "-" },
      { name: "Anathema",          weapon: "Staff",          acquisition: "-", level: "-" },
      { name: "Possession Fire",   weapon: "Fire Bracelet",  acquisition: "-", level: "-" },
      { name: "Possession Fire",   weapon: "Fire Bracelet + Fire Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Fire",    weapon: "Fire Bracelet + Fire Bracelet", acquisition: "-", level: "-" },
      { name: "Domination Fire",   weapon: "Fire Bracelet + Fire Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Fire",   weapon: "Fire Bracelet + Special Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Fire",    weapon: "Fire Bracelet + Special Bracelet", acquisition: "-", level: "-" },
      { name: "Domination Fire",   weapon: "Fire Bracelet + Special Bracelet", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 44,
        "STR": 30, "AGI": 30, "HP": 60, "DEX": 40, "INT": 70, "SEN": 70,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Magical Weapon Crafting - Manufacture rods, staffs and bracelets. Use it then drag weapon recipe to MBoma in Coimbra. Cast: 0s, Cooldown: 1s, Duration: 1.1s, SP: None",
        "image": "/images/skills/job_craftweapon.png"
      },
      equipment: { "Armor": "Coat, Robe" }
    },
    quests: [
      { id: "q1", name: "Taste of the Homeland (Req Lv 44) - Speak to Panfilo & complete 'Percha Inzella', return. (EXP Card (3), Polish Disciple (3))" },
      { id: "q2", name: "An Absinian Warrior - Instance duel vs MBoma (Claude may intrude, ignore), return for MBoma Character Card. (Polish Disciple (3))" }
    ]
  },
  {
    id: "soho",
    name: "Soho",
    region: "The Port of Coimbra",
    portrait: "images/characters/soho.png",
    largePortrait: "images/characters/soho-large.png",
    stances: [
      { name: "Fortitudo", weapon: "None / Rosario", acquisition: "-", level: "-" },
      { name: "Escrima",   weapon: "Dagger",         acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 20,
        "STR": 60, "AGI": 70, "HP": 50, "DEX": 60, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Healing - Restores HP of one appointed character. (Target: ally) Cast: 0s, Cooldown: 0s, Duration: 1.5s, SP: 25",
        "image": "/images/skills/job_healing.png"
      },
      equipment: {
        "Armor": "Leather"
      }
    },
    quests: [
      { id: "q1", name: "Bison Horn (Req Lv 25) — Port of Coimbra (Soho I-6): go to King's Garden, collect 25 Bison Horns from Brown Bison, return. (1,000 Vis, Polish Initiate (3))" },
      { id: "q2", name: "Gargoyle Wing — Tetra Grand Corridor: collect Flying Daemon Wings; return to Soho for Soho Character Card. (Polish Novice (3))" },
      { id: "q3", name: "Mystery of Enchanting (Req Lv 36) — Jezebel Glen: gather items from Elite Pirate Swordsmen, Elite Milhou Thugs, Elite Milhou Axemen; return. (Enchantment Chip 36, EXP Card (3), Polish Novice)" },
      { id: "q4", name: "Secret of Enchanting (Req Lv 40) — Porto Bello: The Deck: defeat Elite Scarlet Claws; return. (3,000 Vis, Enchantment Chip 40, EXP Card (3), Polish Disciple (3))" },
      { id: "q5", name: "Soho's Gift (Req Lv 44) — Porto Bello: The Hold: defeat Elite Abyssal Claw & Elite Zavi di Gavi; return. (5,000 Vis, Enchantment Chip 44, EXP Card (3), Polish Disciple (3))" },
      { id: "q6", name: "Forgettable (Req Lv 48) — Porto Bello: The Deck → Forgotten Territory entrance (B-6): use 1-Day Pass, defeat Forgotten mobs, return. (Forgotten Territory Pass (1 Day), 10,000 Vis, Enchantment Chip 48, EXP Card (3), Polish Disciple (3))" }
    ]
  },

  // =========================
  // Gigante Dock:
  // =========================
  {
    id: "feng-ling",
    name: "Feng Ling",
    region: "Gigante Dock",
    portrait: "images/characters/soso.png",
    largePortrait: "images/characters/soso-large.png",
    stances: [
      { name: "Bare Knuckle",                      weapon: "None",     acquisition: "-", level: "-" },
      { name: "Martial Arts Book - Chap. of Ice",  weapon: "Knuckle",  acquisition: "-", level: "-" },
      { name: "Martial Arts Book - Chap. of Earth",weapon: "Knuckle",  acquisition: "-", level: "-" },
      { name: "Martial Arts Book - Chap. of Ice",  weapon: "Legguard", acquisition: "-", level: "-" },
      { name: "Martial Arts Book - Chap. of Wind", weapon: "Legguard", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 60, "AGI": 80, "HP": 50, "DEX": 50, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: {
        "Armor": "Leather"
      }
    },
    quests: [
      { id: "q1", name: "Gigante Island - Buy 'Ticket to Gigante Island' from the Ustiur teleporter in Coimbra, travel to Gigante, duel Soso (Feng Ling) and either give 50 Mysterious Powders OR defeat Jack-o'-Lantern (Fire Isle) to receive Feng Ling Card." }
    ]
  },

  // =========================
  // City of Auch:
  // =========================

  {
    id: "baek-ho",
    name: "Baek Ho",
    region: "City of Auch",
    portrait: "images/characters/baek.png",
    largePortrait: "images/characters/baek-large.png",
    stances: [
      { name: "Bare Knuckle", weapon: "None", acquisition: "-", level: "-" },
      { name: "Martial Arts Book-Chap. of Mind", weapon: "Knuckle", acquisition: "-", level: "-" },
      { name: "Martial Arts Book-Chap. of Earth", weapon: "Knuckle", acquisition: "-", level: "-" },
      { name: "Martial Arts Book-Chap. of Wind", weapon: "Knuckle", acquisition: "-", level: "-" },
      { name: "Master Martial Arts", weapon: "Knuckle", acquisition: "-", level: "-" },
      { name: "AoA", weapon: "Knuckle", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 40,
        "STR": 75, "AGI": 75, "HP": 50, "DEX": 50, "INT": 30, "SEN": 50,
        "Total Stat Points": 330
      },
      personal: {
        "Personal Skill": "Spirit of Arange - Skills from an ancient warrior group, boosts mental ATK/RES and more. (Self-buff) Cast: 0s, Cooldown: 30s, Duration: 2.57s, SP: 300 + Ancient Star Orb ×4",
        "Lv1":  "Duration 30s, Mental ATK +15, Mental RES +5, Pen +1, Imm +1, Reset all cooldowns",
        "Lv10": "Duration 120s, Mental ATK +150, Mental RES +50, Pen +10, Imm +10, -5% skill-shot dmg taken, 6% chance to inflict [Stun] on attack, On use: reset all cooldowns",
        "Lv11": "Duration 130s, Mental ATK +165, Mental RES +55, Pen +11, Imm +11, -5% skill-shot dmg taken, 7% [Stun] on attack, On use: reset all cooldowns, A.R. +1",
        "Lv12": "Duration 140s, Mental ATK +180, Mental RES +60, Pen +12, Imm +12, -6% skill-shot dmg taken, 8% [Stun] on attack, On use: reset all cooldowns, A.R. +1",
        "Lv13": "Duration 150s, Mental ATK +195, Mental RES +65, Pen +13, Imm +13, -7% skill-shot dmg taken, 8% [Stun] on attack, On use: reset all cooldowns, A.R. +1",
        "image": "/images/skills/com_hwoarangsspirits.png"
      },
      equipment: {
        "Armor": "Leather"
      }
    },
    quests: [
      { id: "q1", name: "Byakko of Coria - Speak to Baek Ho (Auch G-10) and enter the duel instance (win or lose advances)." },
      { id: "q2", name: "Consult the Martial Artists - Talk to Gertrude (Auch), Feng Ling (Gigante), Irawan (Coimbra), and Gracielo (Coimbra), return to Baek Ho." },
      { id: "q3", name: "Choose the Way - Either hand over 25 Mysterious Powders, or defeat Dr. Fran in Prison de Joaquin: Corridor of Assize (Coimbra Nimrod Bridge daily)." },
      { id: "q4", name: "Baek Ho Joins - Report back to receive the Baek Ho Character Card." }
    ]
  },
  {
    id: "city-of-auch-infantry",
    name: "City of Auch Infantry",
    region: "City of Auch",
    portrait: "images/characters/infantry.png",
    largePortrait: "images/characters/infantry-large.png",
    stances: [
      { name: "Bare Knuckle",  weapon: "None",                 acquisition: "-", level: "-" },
      { name: "Standing Shot", weapon: "Rifle / Bayonet",      acquisition: "-", level: "-" },
      { name: "Kneeling Shot", weapon: "Rifle / Bayonet",      acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 16,
        "STR": 40, "AGI": 50, "HP": 50, "DEX": 80, "INT": 30, "SEN": 30,
        "Total Stat Points": 280
      },
      personal: {
        "Personal Skill": "Concentration - Improves shooting accuracy. (Self-buff) Cast: 0s, Cooldown: 0s, Duration: 1.87s, SP: 100 + Mithridart ×5",
        "Lv1":  "Duration 300s, Monster Blow +1%, Accuracy +12, Crit +1%",
        "Lv10": "Duration 570s, Monster Blow +10%, Accuracy +30, Crit +15%",
        "Lv11": "Duration 600s, Monster Blow +11%, Accuracy +32, Crit +16%, A.R. +1",
        "Lv12": "Duration 630s, Monster Blow +12%, Accuracy +34, Crit +18%, A.R. +1",
        "Lv13": "Duration 660s, Monster Blow +13%, Accuracy +36, Crit +19%, A.R. +1",
        "image": "/images/skills/job_concentrate.png"
      },
      equipment: {
        "Armor": "Coat, Leather"
      }
    },
    quests: [
      { id: "q1", name: "Battle With City of Auch Soldier (Suggested Lv ~16) - City of Auch (H-11) Location Storage Soldier: instance, defeat 50 Auch soldiers in 3 minutes, return for Auch Infantry Character Card & Polish Novice (3)." }
    ]
  },
  {
    id: "grutrude",
    name: "Grutrude",
    region: "City of Auch",
    portrait: "images/characters/grutrude.png",
    largePortrait: "images/characters/grutrude-large.png",
    stances: [
      { name: "Bare Knuckle",                    weapon: "None",    acquisition: "-", level: "-" },
      { name: "Martial Arts - Chap. of Earth",  weapon: "Knuckle",  acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 40,
        "STR": 70, "AGI": 50, "HP": 70, "DEX": 50, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Earth Mental Attack - Imbues the body with the force of Earth. (Self-buff) Cast: 0s, Cooldown: 30s, Duration: 1.2s, SP: 300 + Mithridart ×1",
        "Lv1":  "Duration 45s, DEF +11, All RES +15, Move SPD -5.5%, Mental ATK +16",
        "Lv10": "Duration 180s, DEF +20, All RES +15, Move SPD -10%, Mental ATK +70",
        "Lv11": "Duration 195s, DEF +21, All RES +15, Move SPD -10.5%, Mental ATK +76, D.R. +1",
        "Lv12": "Duration 210s, DEF +22, All RES +15, Move SPD -11%, Mental ATK +82, D.R. +1",
        "Lv13": "Duration 225s, DEF +23, All RES +15, Move SPD -11.5%, Mental ATK +88, D.R. +1",
        "image": "/images/skills/job_chapterofearth.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "Investigation of Torsche's Mansion (Req Lv 57) - Unlock Grand Library, farm Haunted Desks for items, return. (30,000 Vis, EXP Card (3), Polish Adept (3))" },
      { id: "q2", name: "Investigation of the Joaquin Concentration Camp - Open Gulag Furnaces across Prison de Joaquin maps (multiple coords), return. (50,000 Vis, EXP Card (3), Polish Adept (3))" },
      { id: "q3", name: "Investigating Sir Lyndon - Reboldeaux: pay Brunie 5,000 Vis, talk to Eusebio twice (give 20 Bulk of Gold), talk to Domingo, return for Detective Gertrude Character Card. (Polish Adept (3))" }
    ]
  },
  {
    id: "karjalainen",
    name: "Karjalainen",
    region: "City of Auch",
    portrait: "images/characters/karjalainen.png",
    largePortrait: "images/characters/karjalainen-large.png",
    stances: [
      { name: "Bare Knuckle",  weapon: "None",                 acquisition: "-", level: "-" },
      { name: "Epee Garde",    weapon: "Rapier",               acquisition: "-", level: "-" },
      { name: "Sabre Garde",   weapon: "Rapier",               acquisition: "-", level: "-" },
      { name: "Epee Glacier",  weapon: "Rapier + Ice Bracelet",acquisition: "-", level: "-" },
      { name: "Sabre Glacier", weapon: "Rapier + Ice Bracelet",acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 56,
        "STR": 60, "AGI": 70, "HP": 50, "DEX": 50, "INT": 70, "SEN": 30,
        "Total Stat Points": 330
      },
      personal: {
        "Personal Skill": "Accessory Crafting - Manufacture accessories and gems. Use it then drag recipe to Karjalainen in Auch. Cast: 0s, Cooldown: 1s, Duration: 1.1s, SP: None",
        "image": "/images/skills/job_craftmisc.png"
      },
      equipment: { "Armor": "Robe, Leather" }
    },
    quests: [
      { id: "q1", name: "Explorers Wear Andre (Req Lv 84 gear) - Speak to Mia Karjalain (H-8) while leader wears L84 Andre armor and Andre is in team, instance duel, receive Mia Karjalain Character Card. (Polish Disciple (3))" }
    ]
  },
  {
    id: "lorch",
    name: "Lorch",
    region: "City of Auch",
    portrait: "images/characters/lorch.png",
    largePortrait: "images/characters/lorch-large.png",
    stances: [
      { name: "Install Trap",      weapon: "None",     acquisition: "-", level: "-" },
      { name: "Shotgun Blaster",   weapon: "Shotgun",  acquisition: "-", level: "-" },
      { name: "Gigantic Blaster",  weapon: "Shotgun",  acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 52,
        "STR": 40, "AGI": 60, "HP": 50, "DEX": 80, "INT": 50, "SEN": 30,
        "Total Stat Points": 310
      },
      personal: {
        "Personal Skill": "Shotgun Manufacture - Manufacture shotguns. Use it then drag shotgun recipe to Lorch in Auch. Cast: 0s, Cooldown: 1s, Duration: 1.1s, SP: None",
        "image": "/images/skills/job_craftguns.png"
      },
      equipment: { "Armor": "Coat, Leather" }
    },
    quests: [
      { id: "q1", name: "Old Memories of a Watch (Req Lv 50) - Watch chain by Meung, then Sidal & Sean, complete Tiburon's 'Finders Keepers', return. (Enchant Chip 68×3, Polish Disciple (3))" },
      { id: "q2", name: "Tortoise Powder - Deserted Quay: Steel Armed Tortoise drops, return. (EXP Card (3), Polish Disciple (3))" },
      { id: "q3", name: "Road to Independence (1) - Trigger H-10 instance, defeat Reboldeaux soldiers, return. (Tiramisu, Layered Cheesecake, Sacretorte, Polish Disciple (3))" },
      { id: "q4", name: "A Secret Admirer - Deliver/return letters with Jonella, instance duel, rewards. (1,000 Vis, Polish Disciple)" },
      { id: "q5", name: "Road to Independence (2) - Trigger G-7 instance, defeat Auch Infantry, return. (EXP Card (3), Polish Disciple (3))" },
      { id: "q6", name: "A Role in the Shotgun Making Process - Pick a variant (Poison/Fear/Stun) and farm listed drops, return. (Chocolate, Avocado Sandwich, EXP Card (3), Polish Explorer (3))" },
      { id: "q7", name: "Testing a New Toy - Trigger H-11 > instance vs Lorch, return. (Polish Explorer (3))" },
      { id: "q8", name: "Mors Sola - Trigger G-10 > instances, help Lorch defeat soldiers, talk at F-8, receive Shotgun & Lorch Character Card. (Polish Explorer (3))" }
    ]
  },
  {
    id: "tiburon",
    name: "Tiburon",
    region: "City of Auch",
    portrait: "images/characters/tiburon.png",
    largePortrait: "images/characters/tiburon-large.png",
    stances: [
      { name: "Bare Knuckle",  weapon: "None",         acquisition: "-", level: "-" },
      { name: "Plow-Guard",    weapon: "Sword",        acquisition: "-", level: "-" },
      { name: "Tail-Guard",    weapon: "Sword",        acquisition: "-", level: "-" },
      { name: "Sidewinder",    weapon: "Sword",        acquisition: "-", level: "-" },
      { name: "Middle-Guard",  weapon: "Main Gauche",  acquisition: "-", level: "-" },
      { name: "Back-Guard",    weapon: "Main Gauche",  acquisition: "-", level: "-" },
      { name: "Low-Guard",     weapon: "Main Gauche",  acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 16,
        "STR": 60, "AGI": 80, "HP": 40, "DEX": 50, "INT": 30, "SEN": 30,
        "Total Stat Points": 290
      },
      personal: {
        "Personal Skill": "Sprint - Sudden burst of speed. (Self-buff) Cast: 1.133s, Cooldown: 30s, Duration: 1.13s, SP: 100 + Mithridart ×3",
        "Lv1": "Duration 6s, Move SPD +55%",
        "Lv10": "Duration 15s, Move SPD +100%",
        "Lv11": "Duration 16s, Move SPD +105%",
        "Lv12": "Duration 17s, Move SPD +110%",
        "Lv13": "Duration 18s, Move SPD +115%",
        "image": "/images/skills/job_sprint.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "Finders Keepers, Losers Weepers (Req Lv 50) - Reject 200k offer, accept 20k offer, instance vs Tiburon/Ramiro/Jonella, receive Tiburon Character Card & Pocket Watch. (20,000 Vis)" },
      { id: "q2", name: "Veteran Upgrade - Long chain via Brunie → Jack → Andre → Claude → Emilia → Brunie, ends with +1 STR costume (shared with Ramiro)." }
    ]
  },

  // =========================
  // Mysterious Hut El Tejado Verde:
  // =========================
  {
    id: "viki",
    name: "Viki",
    region: "Mysterious Hut El Tejado Verde",
    portrait: "images/characters/viki.png",
    largePortrait: "images/characters/viki-large.png",
    stances: [
      { name: "First Aid",  weapon: "None / Rosario", acquisition: "-", level: "-" },
      { name: "Fortitudo",  weapon: "None / Rosario", acquisition: "-", level: "-" },
      { name: "Amicus",     weapon: "Pendant",         acquisition: "-", level: "-" },
      { name: "Testis",     weapon: "Pendant",         acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 16,
        "STR": 40, "AGI": 50, "HP": 40, "DEX": 50, "INT": 50, "SEN": 50,
        "Total Stat Points": 280
      },
      personal: {
        "Personal Skill": "Healing - Restores HP of one appointed character. (Self-buff) Cast: 0s, Cooldown: 0s, Duration: 1.5s, SP: 25",
        "image": "/images/skills/job_healing.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "A Boy and His Golem (Wed) - Start chain via Dr. Torsche (inside hut on Wednesdays) → Paul in Reboldeaux." },
      { id: "q2", name: "Viki, the Boy of Plateau - Complete 'Raw Taste' (300 Cabosse via Lisa) & 'Boy, Have a Dream' (various drops) for rewards." },
      { id: "q3", name: "Picnic-hut Attack - Instance with Cherlyn & Treasure Golem, kill, talk to Aratat, reward chips. (Polish Explorer (3))" },
      { id: "q4", name: "Aratat Repair 1–3 - Multi-zone farming + 'Torsche's Errand', rare Violent Gecho drop, turn in to Ulrich." },
      { id: "q5", name: "Resurrect Aratat - Instance vs Hill Giant, rewards: Summoning Stone ×10, Old Wooden Pendant, Amicus book, Viki Character Card." },
      { id: "q6", name: "Testis Book - 'Cherlyn's Conspiracy 1–2' (Viki leader) + 'Return of the Giant 1–2' material turn-ins, receive Mustang Core & Testis book." }
    ]
  },

  // =========================
  // Dr Torsche's Mansion:
  // =========================
  {
    id: "catherine",
    name: "Catherine",
    region: "Dr Torsche's Mansion",
    portrait: "images/characters/catherine.png",
    largePortrait: "images/characters/catherine-large.png",
    stances: [
      { name: "Marionette", weapon: "Controller", acquisition: "-", level: "-" },
      { name: "Marionette", weapon: "None",       acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 50, "AGI": 50, "HP": 50, "DEX": 50, "INT": 50, "SEN": 80,
        "Total Stat Points": 330
      },
      personal: {
        "Personal Skill": "Release Summons - All summons released. (Self-buff) Cast: 0s, Cooldown: 60s, Duration: 1.5s, SP: None",
        "image": "/images/skills/job_cancelsummon.png"
      },
      equipment: {
        "Armor": "Coat, Robe, Leather"
      }
    },
    quests: [
      { id: "q1",  name: "Intruder Alert (Req Lv 57) - Reception Hall (E-3): instance, defeat Victor, talk to Cayenne." },
      { id: "q2",  name: "Help Cayenne Cleanup the Place - Reception Hall: polish 5 armors (B-7, D-8, H-10, J-7, H-6), return to Cayenne." },
      { id: "q3",  name: "Otite Key - Kill Sasha/Lloyd/Walter for items, return to Roseanne for shop access & Grand Library." },
      { id: "q4",  name: "Humans Need Food Robots Need Otite - Open Grand Library (J-8), enter Butler's Quarters (G-6), talk to Kamen, complete 'A Power Storage Device for Kamen'." },
      { id: "q5",  name: "A Power Storage Device for Kamen - Grand Library: hunt Helena/Haunted Books/Desks, return to Roseanne." },
      { id: "q6",  name: "A Mysterious Crimson Ribbon - Reception Hall (I-10): examine painting, get ribbon, show to Kamen." },
      { id: "q7",  name: "The Alchemist Torsche - Grand Library door (F-4) instance, survive waves 5 min, show ribbon to Dr. Torsche." },
      { id: "q8",  name: "Catherine's Spine - Get spine from Kamen, talk to Dr. Torsche." },
      { id: "q9",  name: "Open Your Eyes Catherine - Story instance continues, speak to Dr. Torsche, return." },
      { id: "q10", name: "It Is Best To Prepare For A Rainy Day - Butler's Quarters: talk to Kamen, return Catherine's Head to Dr. Torsche." },
      { id: "q11", name: "A Plan to Revive Catherine - Farm robot parts (Reception Hall / Grand Library): Walter, Lloyd, Sasha, Helena, Victor. Return to Dr. Torsche." },
      { id: "q12", name: "A Heart for Catherine - Instance & dialogue, obtain Catherine Character Card." }
    ]
  },
  {
    id: "catherine-dex",
    name: "Catherine (DEX)",
    region: "Dr Torsche's Mansion",
    portrait: "images/characters/catherine.png",
    largePortrait: "images/characters/catherine-large.png",
    stances: [
      { name: "Bare Knuckle",       weapon: "None",                 acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Sword",                acquisition: "-", level: "-" },
      { name: "Hack and Slash",     weapon: "Sword + Sword",        acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Sword + Shield",       acquisition: "-", level: "-" },
      { name: "High-Guard",         weapon: "Sword + Shield",       acquisition: "-", level: "-" },
      { name: "Heaven or Hell",     weapon: "Sword + Pistol",       acquisition: "-", level: "-" },
      { name: "Epee Garde",         weapon: "Rapier",               acquisition: "-", level: "-" },
      { name: "Sabre Garde",        weapon: "Rapier",               acquisition: "-", level: "-" },
      { name: "Main-Gauche Garde",  weapon: "Rapier + Main Gauche", acquisition: "-", level: "-" },
      { name: "Middle-Guard",       weapon: "Sabre",                acquisition: "-", level: "-" },
      { name: "Twin Blades",        weapon: "Sabre + Sabre",        acquisition: "-", level: "-" },
      { name: "Plow-Guard",         weapon: "Great Sword",          acquisition: "-", level: "-" },
      { name: "Tail-Guard",         weapon: "Great Sword",          acquisition: "-", level: "-" },
      { name: "Roof-Guard",         weapon: "Great Sword",          acquisition: "-", level: "-" },
      { name: "Blandir Cruz",       weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Penetrar Cruz",      weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Escrima",            weapon: "Dagger",               acquisition: "-", level: "-" },
      { name: "Dobalada Corte",     weapon: "Dagger + Dagger",      acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Blunt",                acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Blunt + Shield",       acquisition: "-", level: "-" },
      { name: "High-Guard",         weapon: "Blunt + Shield",       acquisition: "-", level: "-" },
      { name: "Aiming Shot",        weapon: "Pistol",               acquisition: "-", level: "-" },
      { name: "Freestyle Shot",     weapon: "Pistol",               acquisition: "-", level: "-" },
      { name: "Double-Gun Shot",    weapon: "Pistol + Pistol",      acquisition: "-", level: "-" },
      { name: "Standing Shot",      weapon: "Rifle",                acquisition: "-", level: "-" },
      { name: "Kneeling Shot",      weapon: "Rifle",                acquisition: "-", level: "-" },
      { name: "Shotgun Blaster",    weapon: "Shotgun",              acquisition: "-", level: "-" },
      { name: "Standing Shot",      weapon: "Bayonet",              acquisition: "-", level: "-" },
      { name: "Kneeling Shot",      weapon: "Bayonet",              acquisition: "-", level: "-" },
      { name: "Possession Fire",    weapon: "Fire Bracelet",        acquisition: "-", level: "-" },
      { name: "Possession Fire",    weapon: "Fire Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Fire",     weapon: "Fire Bracelet + Fire Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Fire",     weapon: "Fire Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Ice",     weapon: "Ice Bracelet",         acquisition: "-", level: "-" },
      { name: "Possession Ice",     weapon: "Ice Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Ice",      weapon: "Ice Bracelet + Ice Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Ice",      weapon: "Ice Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Lightning", weapon: "Lightning Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Lightning", weapon: "Lightning Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Lightning",  weapon: "Lightning Bracelet + Lightning Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Lightning",  weapon: "Lightning Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Elemental Lord",     weapon: "Special Bracelet",     acquisition: "-", level: "-" },
      { name: "Possession Fire",    weapon: "Special Bracelet",     acquisition: "-", level: "-" },
      { name: "Possession Ice",     weapon: "Special Bracelet",     acquisition: "-", level: "-" },
      { name: "Possession Lightning", weapon: "Special Bracelet",   acquisition: "-", level: "-" },
      { name: "Psychokinesis",      weapon: "Rod",                  acquisition: "-", level: "-" },
      { name: "ESP",                weapon: "Rod",                  acquisition: "-", level: "-" },
      { name: "Illusionist",        weapon: "Staff",                acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 50, "AGI": 50, "HP": 50, "DEX": 80, "INT": 50, "SEN": 50,
        "Total Stat Points": 330
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: {
        "Armor": "Coat"
      }
    },
    quests: [
      { id: "q1", name: "Follow the 'Catherine' quest line in Dr. Torsche's Mansion, final step 'A Heart for Catherine' yields Character Card (DEX heart)." }
    ]
  },
  {
    id: "catherine-int",
    name: "Catherine (INT)",
    region: "Dr Torsche's Mansion",
    portrait: "images/characters/catherine.png",
    largePortrait: "images/characters/catherine-large.png",
    stances: [
      { name: "Bare Knuckle",       weapon: "None",                 acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Sword",                acquisition: "-", level: "-" },
      { name: "Hack and Slash",     weapon: "Sword + Sword",        acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Sword + Shield",       acquisition: "-", level: "-" },
      { name: "High-Guard",         weapon: "Sword + Shield",       acquisition: "-", level: "-" },
      { name: "Heaven or Hell",     weapon: "Sword + Pistol",       acquisition: "-", level: "-" },
      { name: "Epee Garde",         weapon: "Rapier",               acquisition: "-", level: "-" },
      { name: "Sabre Garde",        weapon: "Rapier",               acquisition: "-", level: "-" },
      { name: "Main-Gauche Garde",  weapon: "Rapier + Main Gauche", acquisition: "-", level: "-" },
      { name: "Middle-Guard",       weapon: "Sabre",                acquisition: "-", level: "-" },
      { name: "Twin Blades",        weapon: "Sabre + Sabre",        acquisition: "-", level: "-" },
      { name: "Plow-Guard",         weapon: "Great Sword",          acquisition: "-", level: "-" },
      { name: "Tail-Guard",         weapon: "Great Sword",          acquisition: "-", level: "-" },
      { name: "Roof-Guard",         weapon: "Great Sword",          acquisition: "-", level: "-" },
      { name: "Blandir Cruz",       weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Penetrar Cruz",      weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Escrima",            weapon: "Dagger",               acquisition: "-", level: "-" },
      { name: "Dobalada Corte",     weapon: "Dagger + Dagger",      acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Blunt",                acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Blunt + Shield",       acquisition: "-", level: "-" },
      { name: "High-Guard",         weapon: "Blunt + Shield",       acquisition: "-", level: "-" },
      { name: "Aiming Shot",        weapon: "Pistol",               acquisition: "-", level: "-" },
      { name: "Freestyle Shot",     weapon: "Pistol",               acquisition: "-", level: "-" },
      { name: "Double-Gun Shot",    weapon: "Pistol + Pistol",      acquisition: "-", level: "-" },
      { name: "Standing Shot",      weapon: "Rifle",                acquisition: "-", level: "-" },
      { name: "Kneeling Shot",      weapon: "Rifle",                acquisition: "-", level: "-" },
      { name: "Shotgun Blaster",    weapon: "Shotgun",              acquisition: "-", level: "-" },
      { name: "Standing Shot",      weapon: "Bayonet",              acquisition: "-", level: "-" },
      { name: "Kneeling Shot",      weapon: "Bayonet",              acquisition: "-", level: "-" },
      { name: "Possession Fire",    weapon: "Fire Bracelet",        acquisition: "-", level: "-" },
      { name: "Possession Fire",    weapon: "Fire Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Fire",     weapon: "Fire Bracelet + Fire Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Fire",     weapon: "Fire Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Ice",     weapon: "Ice Bracelet",         acquisition: "-", level: "-" },
      { name: "Possession Ice",     weapon: "Ice Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Ice",      weapon: "Ice Bracelet + Ice Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Ice",      weapon: "Ice Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Lightning", weapon: "Lightning Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Lightning", weapon: "Lightning Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Lightning",  weapon: "Lightning Bracelet + Lightning Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Lightning",  weapon: "Lightning Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Elemental Lord",     weapon: "Special Bracelet",     acquisition: "-", level: "-" },
      { name: "Possession Fire",    weapon: "Special Bracelet",     acquisition: "-", level: "-" },
      { name: "Possession Ice",     weapon: "Special Bracelet",     acquisition: "-", level: "-" },
      { name: "Possession Lightning", weapon: "Special Bracelet",   acquisition: "-", level: "-" },
      { name: "Psychokinesis",      weapon: "Rod",                  acquisition: "-", level: "-" },
      { name: "ESP",                weapon: "Rod",                  acquisition: "-", level: "-" },
      { name: "Illusionist",        weapon: "Staff",                acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 50, "AGI": 50, "HP": 50, "DEX": 50, "INT": 80, "SEN": 50,
        "Total Stat Points": 330
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: {
        "Armor": "Robe"
      }
    },
    quests: [
      { id: "q1", name: "Follow the 'Catherine' quest line in Dr. Torsche's Mansion, final step 'A Heart for Catherine' yields Character Card (INT heart)." }
    ]
  },
  {
    id: "catherine-str",
    name: "Catherine (STR)",
    region: "Dr Torsche's Mansion",
    portrait: "images/characters/catherine.png",
    largePortrait: "images/characters/catherine-large.png",
    stances: [
      { name: "Bare Knuckle",       weapon: "None",                 acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Sword",                acquisition: "-", level: "-" },
      { name: "Hack and Slash",     weapon: "Sword + Sword",        acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Sword + Shield",       acquisition: "-", level: "-" },
      { name: "High-Guard",         weapon: "Sword + Shield",       acquisition: "-", level: "-" },
      { name: "Heaven or Hell",     weapon: "Sword + Pistol",       acquisition: "-", level: "-" },
      { name: "Epee Garde",         weapon: "Rapier",               acquisition: "-", level: "-" },
      { name: "Sabre Garde",        weapon: "Rapier",               acquisition: "-", level: "-" },
      { name: "Main-Gauche Garde",  weapon: "Rapier + Main Gauche", acquisition: "-", level: "-" },
      { name: "Middle-Guard",       weapon: "Sabre",                acquisition: "-", level: "-" },
      { name: "Twin Blades",        weapon: "Sabre + Sabre",        acquisition: "-", level: "-" },
      { name: "Plow-Guard",         weapon: "Great Sword",          acquisition: "-", level: "-" },
      { name: "Tail-Guard",         weapon: "Great Sword",          acquisition: "-", level: "-" },
      { name: "Roof-Guard",         weapon: "Great Sword",          acquisition: "-", level: "-" },
      { name: "Blandir Cruz",       weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Penetrar Cruz",      weapon: "Polearm",              acquisition: "-", level: "-" },
      { name: "Escrima",            weapon: "Dagger",               acquisition: "-", level: "-" },
      { name: "Dobalada Corte",     weapon: "Dagger + Dagger",      acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Blunt",                acquisition: "-", level: "-" },
      { name: "Back-Guard",         weapon: "Blunt + Shield",       acquisition: "-", level: "-" },
      { name: "High-Guard",         weapon: "Blunt + Shield",       acquisition: "-", level: "-" },
      { name: "Aiming Shot",        weapon: "Pistol",               acquisition: "-", level: "-" },
      { name: "Freestyle Shot",     weapon: "Pistol",               acquisition: "-", level: "-" },
      { name: "Double-Gun Shot",    weapon: "Pistol + Pistol",      acquisition: "-", level: "-" },
      { name: "Standing Shot",      weapon: "Rifle",                acquisition: "-", level: "-" },
      { name: "Kneeling Shot",      weapon: "Rifle",                acquisition: "-", level: "-" },
      { name: "Shotgun Blaster",    weapon: "Shotgun",              acquisition: "-", level: "-" },
      { name: "Standing Shot",      weapon: "Bayonet",              acquisition: "-", level: "-" },
      { name: "Kneeling Shot",      weapon: "Bayonet",              acquisition: "-", level: "-" },
      { name: "Possession Fire",    weapon: "Fire Bracelet",        acquisition: "-", level: "-" },
      { name: "Possession Fire",    weapon: "Fire Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Fire",     weapon: "Fire Bracelet + Fire Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Fire",     weapon: "Fire Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Ice",     weapon: "Ice Bracelet",         acquisition: "-", level: "-" },
      { name: "Possession Ice",     weapon: "Ice Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Ice",      weapon: "Ice Bracelet + Ice Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Ice",      weapon: "Ice Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Lightning", weapon: "Lightning Bracelet", acquisition: "-", level: "-" },
      { name: "Possession Lightning", weapon: "Lightning Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Lightning",  weapon: "Lightning Bracelet + Lightning Bracelet", acquisition: "-", level: "-" },
      { name: "Evocation Lightning",  weapon: "Lightning Bracelet + Bone Bracelet", acquisition: "-", level: "-" },
      { name: "Elemental Lord",     weapon: "Special Bracelet",     acquisition: "-", level: "-" },
      { name: "Possession Fire",    weapon: "Special Bracelet",     acquisition: "-", level: "-" },
      { name: "Possession Ice",     weapon: "Special Bracelet",     acquisition: "-", level: "-" },
      { name: "Possession Lightning", weapon: "Special Bracelet",   acquisition: "-", level: "-" },
      { name: "Psychokinesis",      weapon: "Rod",                  acquisition: "-", level: "-" },
      { name: "ESP",                weapon: "Rod",                  acquisition: "-", level: "-" },
      { name: "Illusionist",        weapon: "Staff",                acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 80, "AGI": 50, "HP": 50, "DEX": 50, "INT": 50, "SEN": 50,
        "Total Stat Points": 330
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: {
        "Armor": "Leather"
      }
    },
    quests: [
      { id: "q1", name: "Follow the 'Catherine' quest line in Dr. Torsche's Mansion, final step 'A Heart for Catherine' yields Character Card (STR heart)." }
    ]
  },

  // =========================
  // Los Toldos:
  // =========================
  {
    id: "edward",
    name: "Edward",
    region: "Los Toldos",
    portrait: "images/characters/edward.png",
    largePortrait: "images/characters/edward-large.png",
    stances: [
      { name: "Bare Knuckle",              weapon: "None",                 acquisition: "-", level: "-" },
      { name: "Advance Garde of Grim",     weapon: "Rapier + Pistol",      acquisition: "-", level: "-" },
      { name: "Main-Gauche Garde of Grim", weapon: "Rapier + Main Gauche", acquisition: "-", level: "-" },
      { name: "Grim Guard",                weapon: "Sabre",                acquisition: "-", level: "-" },
      { name: "Heaven or Hell of Grim",    weapon: "Sabre + Pistol",       acquisition: "-", level: "-" },
      { name: "Epee Garde of Grim",        weapon: "Rapier",               acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 60,
        "STR": 70, "AGI": 70, "HP": 60, "DEX": 50, "INT": 30, "SEN": 50,
        "Total Stat Points": 330
      },
      personal: {
        "Personal Skill": "Soul Reaper - Summons Soul Reaper (requires [Soul of Grim] buff). (Self-buff) Cast: 0s, Cooldown: 120s, Duration: 1.5s, SP: 300 + Magical Orb ×10",
        "image": "/images/skills/job_summon_grim2.png"
      },
      equipment: {
        "Armor": "Leather"
      }
    },
    quests: [
      { id: "q1", name: "Wheel of Faith - Los Toldos (Broken Boat): talk to Sad Old Man to enter Land of the Dead, kill Cursed Undead, return to Kurt. (Polish Veteran (3), EXP Card (3))" },
      { id: "q2", name: "Power of the One with no Name - Kurt fights you (scripted loss), speak to Kurt." },
      { id: "q3", name: "The Best Baron - Land of the Dead: Old Stone (E-3), instance with Eduardo vs Muertos, speak to Eduardo." },
      { id: "q4", name: "Eduardo's Letter - Advance story via Kurt. (Polish Veteran (3), EXP Card (3))" },
      { id: "q5", name: "Defeat Muertos Chief - Land of the Dead: find & kill Muertos Chief (G-9/10), return to Kurt. (Polish Veteran (3), EXP Card (3))" },
      { id: "q6", name: "Land of Death Investigation - Collect Burnt Memo (G-6), Torn Memo (G-7), Old Letter (F-7), return." },
      { id: "q7", name: "Owner of Muertos - Village B-6: stealth/invisibility, instance vs Muertos & Montoro, return. (Polish Veteran (3), EXP Card (3), Invisible Potion (5))" },
      { id: "q8", name: "Counterattack - Repeat stealth entry, instance vs Montoro with Kurt & Eduardo, return. (Polish Veteran (3), EXP Card (3), Invisible Potion (5))" },
      { id: "q9", name: "Collect Pure Otites - Repeatable 'Cursed Undead Hunt' to craft 10 Pure Otite, return to Kurt for Letter for Eduardo." },
      { id: "q10", name: "Nameless Ones' Secret Letter - Old Stone (E-3): speak to Eduardo, bring his letter back to Kurt." },
      { id: "q11", name: "Lyndon's Stab - Place Otite bag at broken Colony Altar (G-7) to trigger branch: choose Kurt or Eduardo for final card reward path." }
    ]
  },
  {
    id: "kurt",
    name: "Kurt",
    region: "Los Toldos",
    portrait: "images/characters/kurt.png",
    largePortrait: "images/characters/kurt-large.png",
    stances: [
      { name: "Bare Knuckle",              weapon: "None",                 acquisition: "-", level: "-" },
      { name: "Advance Garde of Grim",     weapon: "Rapier + Pistol",      acquisition: "-", level: "-" },
      { name: "Main-Gauche Garde of Grim", weapon: "Rapier + Main Gauche", acquisition: "-", level: "-" },
      { name: "Grim Guard",                weapon: "Sabre",                acquisition: "-", level: "-" },
      { name: "Heaven or Hell of Grim",    weapon: "Sabre + Pistol",       acquisition: "-", level: "-" },
      { name: "Epee Garde of Grim",        weapon: "Rapier",               acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 60,
        "STR": 70, "AGI": 70, "HP": 60, "DEX": 50, "INT": 30, "SEN": 50,
        "Total Stat Points": 330
      },
      personal: {
        "Personal Skill": "Grim Reaper - Summons Grim Reaper (requires [Soul of Grim]). (Self-buff) Cast: 0s, Cooldown: 120s, Duration: 1.5s, SP: 300 + Magical Orb ×10",
        "image": "/images/skills/job_summon_grim1.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "Wheel of Faith - Land of the Dead: hunt Cursed Undead, return. (Polish Veteran (3), EXP Card (3))" },
      { id: "q2", name: "Power of the One with no Name - Story duel vs Kurt (unwinnable), talk again for Seal of Baron." },
      { id: "q3", name: "The Best Baron - Speak to Eduardo via Old Stone (E-3) instance, defeat Muertos, get Eduardo's letter." },
      { id: "q4", name: "Eduardo's Letter - Hand off/continue story. (Polish Veteran (3), EXP Card (3))" },
      { id: "q5", name: "Defeat Muertos Chief - Land of the Dead: find & kill Muertos Chief, return. (Polish Veteran (3), EXP Card (3))" },
      { id: "q6", name: "Land of Death Investigation - Find Burnt Memo (G-6), Torn Memo (G-7), Old Letter (F-7), return. (Polish Veteran (3), EXP Card (3))" },
      { id: "q7", name: "Owner of Muertos - Stealth to village (B-6) instance, defeat Muertos & Montoro, return. (Polish Veteran (3), EXP Card (3), Invisible Potion ×5)" },
      { id: "q8", name: "Counterattack - Repeat stealth route, defeat Montoro with Kurt & Eduardo, return. (Polish Veteran (3), EXP Card (3), Invisible Potion ×5)" },
      { id: "q9", name: "Collect Pure Otites - Complete repeatable Cursed Undead Hunt for 10 Pure Otite, return. (Polish Veteran (3), Letter for Eduardo)" },
      { id: "q10", name: "Nameless Ones' Secret Letter - Speak to Eduardo at Old Stone and report back." },
      { id: "q11", name: "Lyndon's Stab - Instance at broken Colony Altar (G-7), choose Baron." },
      { id: "q12", name: "Kurt's Proposal (branch) - Old Stone instance vs Eduardo, deliver 70 Mysterious Powders + Otite Bag for Kurt Lyndon Character Card. (EXP Card (3))" }
    ]
  },

  // =========================
  // Ustiur Base Camp:
  // =========================
  {
    id: "grandma",
    name: "Grandma",
    region: "Ustiur Base Camp",
    portrait: "images/characters/grandma.png",
    largePortrait: "images/characters/grandma-large.png",
    stances: [
      { name: "Bare Knuckle",  weapon: "None",         acquisition: "-", level: "-" },
      { name: "Plow-Guard",    weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Tail-Guard",    weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Roof-Guard",    weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Sidewinder",    weapon: "Great Sword",  acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 60,
        "STR": 70, "AGI": 60, "HP": 90, "DEX": 50, "INT": 30, "SEN": 40,
        "Total Stat Points": 340
      },
      personal: {
        "Personal Skill": "Provoke - Taunts up to 8 enemies within 8m. (Self-buff) Cast: 0s, Cooldown: 0s, Duration: 1.2s, SP: 100",
        "Lv1":  "Duration 15s, Enemy DEF -11, Enemy ATK +10%",
        "Lv10": "Duration 15s, Enemy DEF -20, Enemy ATK +10%",
        "Lv11": "Duration 15s, Enemy DEF -21, Enemy ATK +10%",
        "Lv12": "Duration 15s, Enemy DEF -22, Enemy ATK +10%",
        "Lv13": "Duration 15s, Enemy DEF -23, Enemy ATK +10%",
        "image": "/images/skills/job_provoke.png"
      },
      equipment: { "Armor": "Leather, Metal" }
    },
    quests: [
      { id: "q1", name: "Discover the Esperanza Falls (Req Lv 78) - Ustiur Zona Cuatro: at G-10 near tree stump, auto-trigger while walking north side, return to Grenmah. (EXP Card (3), Polish Adept (3))" },
      { id: "q2", name: "Grandma's Card - After Falls quest + Montoro's Skull Ring: duel Grenmah, win to receive Grandma Card." }
    ]
  },
  {
    id: "rescue-knight",
    name: "Rescue Knight",
    region: "Ustiur Base Camp",
    portrait: "images/characters/rescue.png",
    largePortrait: "images/characters/rescue-large.png",
    stances: [
      { name: "Bare Knuckle",    weapon: "None",   acquisition: "-", level: "-" },
      { name: "Defending Guard", weapon: "Sword",  acquisition: "-", level: "-" },
      { name: "Defending Shot",  weapon: "Rifle",  acquisition: "-", level: "-" },
      { name: "Defending Shot",  weapon: "Bayonet",acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 52,
        "STR": 60, "AGI": 50, "HP": 50, "DEX": 60, "INT": 30, "SEN": 30,
        "Total Stat Points": 280
      },
      personal: {
        "Personal Skill": "Resuscitation - Revives an incapacitated ally. (Target: ally incapable of combat) Cast: 0s, Cooldown: 0s, Duration: 1.5s, SP: 25 + Resurrect Potion ×1",
        "Lv1": "Restore 5% HP",
        "Lv10": "Restore 50% HP",
        "Lv11": "Restore 55% HP",
        "Lv12": "Restore 60% HP",
        "Lv13": "Restore 65% HP",
        "image": "/images/skills/aid_resuscitation.png"
      },
      equipment: { "Armor": "Leather, Metal" }
    },
    quests: [
      { id: "q1", name: "Pioneering Quests (Ustiur) - Reward for 'Conflict' step: Rescue Knight Character Card." }
    ]
  },
  {
    id: "romina",
    name: "Romina",
    region: "Ustiur Base Camp",
    portrait: "images/characters/romina.png",
    largePortrait: "images/characters/romina-large.png",
    stances: [
      { name: "Bare Knuckle",    weapon: "None",    acquisition: "-", level: "-" },
      { name: "Defending Shot",  weapon: "Rifle",   acquisition: "-", level: "-" },
      { name: "Defending Guard", weapon: "Sword",   acquisition: "-", level: "-" },
      { name: "Defending Shot",  weapon: "Bayonet", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 60,
        "STR": 70, "AGI": 60, "HP": 70, "DEX": 70, "INT": 30, "SEN": 30,
        "Total Stat Points": 330
      },
      personal: {
        "Personal Skill": "Resuscitation - Revives an incapacitated ally. (Target: ally incapable of combat) Cast: 0s, Cooldown: 0s, Duration: 1.5s, SP: 25 + Resurrect Potion ×1",
        "Lv1": "Restore 5% HP",
        "Lv10": "Restore 50% HP",
        "Lv11": "Restore 55% HP",
        "Lv12": "Restore 60% HP",
        "Lv13": "Restore 65% HP",
        "image": "/images/skills/aid_resuscitation.png"
      },
      equipment: { "Armor": "Leather, Metal" }
    },
    quests: [
      { id: "q1", name: "Battle with Romina - Unlock Zona Cuatro, complete Estevan to 'Delivery of a Lunchbox', kill Spinosaurus for skull, instance duel vs Romina (Lv100), obtain Character Card. (Polish Adept (3))" }
    ]
  },

  // =========================
  // Promo:
  // =========================
  {
    id: "battle-cook-panfilo",
    name: "Battle Cook Panfilo",
    region: "Promo",
    portrait: "images/characters/icp.png",
    largePortrait: "images/characters/icp-large.png",
    stances: [
      { name: "Bare Knuckle",   weapon: "None",                                   acquisition: "-", level: "-" },
      { name: "Back-Guard",     weapon: "Sword",                                  acquisition: "-", level: "-" },
      { name: "Hack and Slash", weapon: "Sword + Sword",                          acquisition: "-", level: "-" },
      { name: "Flame-Guard",    weapon: "Sword + Fire Bracelet",                  acquisition: "-", level: "-" },
      { name: "Flame-Guard",    weapon: "Sabre + Fire Bracelet",                  acquisition: "-", level: "-" },
      { name: "Middle-Guard",   weapon: "Sabre",                                  acquisition: "-", level: "-" },
      { name: "Low-Guard",      weapon: "Sabre",                                  acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 80, "AGI": 50, "HP": 70, "DEX": 40, "INT": 60, "SEN": 50,
        "Total Stat Points": 350
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: {
        "Armor": "Leather, Metal"
      }
    },
    quests: []
  },
  {
    id: "battle-smith-idge",
    name: "Battle Smith Idge",
    region: "Promo",
    portrait: "images/characters/bsi.png",
    largePortrait: "images/characters/bsi-large.png",
    stances: [
      { name: "Bare Knuckle",   weapon: "None",         acquisition: "-", level: "-" },
      { name: "Plow-Guard",     weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Tail-Guard",     weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Roof-Guard",     weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Sidewinder",     weapon: "Great Sword",  acquisition: "-", level: "-" },
      { name: "Blandir Cruz",   weapon: "Polearm",      acquisition: "-", level: "-" },
      { name: "Penetrar Cruz",  weapon: "Polearm",      acquisition: "-", level: "-" },
      { name: "Mighty Cruz",    weapon: "Polearm",      acquisition: "-", level: "-" },
      { name: "Back-Guard",     weapon: "Sword",        acquisition: "-", level: "-" },
      { name: "Back-Guard",     weapon: "Sword + Shield", acquisition: "-", level: "-" },
      { name: "High-Guard",     weapon: "Sword + Shield", acquisition: "-", level: "-" },
      { name: "Hack and Slash", weapon: "Sword + Sword", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 70, "AGI": 80, "HP": 60, "DEX": 60, "INT": 50, "SEN": 50,
        "Total Stat Points": 370
      },
      personal: {
        "Personal Skill": "- (none specified).",
        "image": "/images/skills/job_none.png"
      },
      equipment: {
        "Armor": "Leather, Metal"
      }
    },
    quests: []
  },
  {
    id: "pirate-adelina",
    name: "Pirate Adelina",
    region: "Promo",
    portrait: "images/characters/atp.png",
    largePortrait: "images/characters/atp-large.png",
    stances: [
      { name: "Bare Knuckle",     weapon: "None",              acquisition: "-", level: "-" },
      { name: "Middle-Guard",     weapon: "Sabre",             acquisition: "-", level: "-" },
      { name: "Back-Guard",       weapon: "Sabre",             acquisition: "-", level: "-" },
      { name: "Low-Guard",        weapon: "Sabre",             acquisition: "-", level: "-" },
      { name: "Twin Blades",      weapon: "Sabre + Sabre",     acquisition: "-", level: "-" },
      { name: "Heaven or Hell",   weapon: "Sabre + Pistol",    acquisition: "-", level: "-" },
      { name: "Freestyle Shot",   weapon: "Pistol",            acquisition: "-", level: "-" },
      { name: "Double-Gun Shot",  weapon: "Pistol + Pistol",   acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 70, "AGI": 90, "HP": 60, "DEX": 60, "INT": 30, "SEN": 60,
        "Total Stat Points": 370
      },
      personal: {
        "Personal Skill": "-",
        "image": "/images/skills/job_none.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: [
      { id: "q1", name: "Acquisition varies by event/cash promotions, no fixed questline." }
    ]
  },
  {
    id: "sage-emilia",
    name: "Sage Emilia",
    region: "Promo",
    portrait: "images/characters/ets.png",
    largePortrait: "images/characters/ets-large.png",
    stances: [
      { name: "First Aid",      weapon: "None / Rosario", acquisition: "-", level: "-" },
      { name: "Fortitudo",      weapon: "None / Rosario", acquisition: "-", level: "-" },
      { name: "ESP",            weapon: "None / Rod",     acquisition: "-", level: "-" },
      { name: "Psychokinesis",  weapon: "Rod",            acquisition: "-", level: "-" },
      { name: "Incantation",    weapon: "Rod",            acquisition: "-", level: "-" },
      { name: "Levitation",     weapon: "Rod",            acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 1,
        "STR": 40, "AGI": 50, "HP": 40, "DEX": 50, "INT": 80, "SEN": 60,
        "Total Stat Points": 320
      },
      personal: {
        "Personal Skill": "Healing - Restores HP of one appointed character. (Self-buff) Cast: 0s, Cooldown: 0s, Duration: 1.5s, SP: 25",
        "image": "/images/skills/job_healing.png"
      },
      equipment: { "Armor": "Coat, Leather" }
    },
    quests: [
      { id: "q1", name: "Acquisition varies by event/premium promotions." }
    ]
  },
  {
    id: "soho-the-wind",
    name: "Soho The Wind",
    region: "Promo",
    portrait: "images/characters/stw.png",
    largePortrait: "images/characters/stw-large.png",
    stances: [
      { name: "Fortitudo",                 weapon: "None",     acquisition: "-", level: "-" },
      { name: "Escrima",                   weapon: "Dagger",   acquisition: "-", level: "-" },
      { name: "Martial Arts: Chap. of Wind", weapon: "Leguard", acquisition: "-", level: "-" }
    ],
    stats: {
      core: {
        "Starting Level": 40,
        "STR": 60, "AGI": 70, "HP": 50, "DEX": 60, "INT": 30, "SEN": 30,
        "Total Stat Points": 300
      },
      personal: {
        "Personal Skill": "Healing - Restores HP of one appointed character. (Self-buff) Cast: 0s, Cooldown: 0s, Duration: 1.5s, SP: 25",
        "image": "/images/skills/job_healing.png"
      },
      equipment: { "Armor": "Leather" }
    },
    quests: []
  }

  // =========================
  // Viron / El Dorado / Castilla / Bahamar / Kielce:
  // (no entries yet)
  // =========================
];

export function allRegions() {
  const set = new Set(CHARACTERS.map(c => c.region).filter(Boolean));
  return Array.from(set).sort();
}
