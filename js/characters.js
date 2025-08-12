// Edit/add characters here. New entries appear automatically.
// portrait path is relative to /images/characters/
export const CHARACTERS = [
  {
    id: "gracielo",
    name: "Gracielo",
    region: "Global",
    portrait: "images/characters/gracielo.jpg",
    stances: ["Capoeira", "Musketeer (Alt)"],
    stats: {
      ATK: 68, DEF: 58, HP: 72, DEX: 60, INT: 40, AGI: 75, RES: 42
    },
    quests: [
      { id: "q1", name: "Meet Gracielo in Coimbra" },
      { id: "q2", name: "Win sparring match" },
      { id: "q3", name: "Deliver training supplies" }
    ]
  },
  {
    id: "adolph",
    name: "Adolph",
    region: "SEA",
    portrait: "images/characters/adolph.jpg",
    stances: ["Cutlass Mastery", "Pirate Spirit"],
    stats: {
      ATK: 75, DEF: 62, HP: 70, DEX: 55, INT: 38, AGI: 62, RES: 45
    },
    quests: [
      { id: "q1", name: "Report to Auch guard" },
      { id: "q2", name: "Recover lost plans" },
      { id: "q3", name: "Clear pirate cove" },
      { id: "q4", name: "Final recruitment dialog" }
    ]
  }
];

// Build a region list at runtime from this data (used by index filter)
export function allRegions() {
  const set = new Set(CHARACTERS.map(c => c.region).filter(Boolean));
  return Array.from(set).sort();
}
