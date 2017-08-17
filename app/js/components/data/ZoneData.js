// Chance: random number is selected and winner is below next number
// Example: if a 25 is selected and there are 5 and 30, the 30 will be chosen.
export const ZoneData = [
  {
    id: 0,
    name: 'Space',
    description: 'The vacuum of space',
    mobs: [],
    decorations: [],
    treasure: []
  },
  {
    id: 1,
    name: 'Plains Zone 1',
    description: 'Rolling fields.',
    mobs: [],//should contain IDs
    decorations: [
      {
        id: 1,
        chance: 25
      }
    ],
    treasure: []
  },
  {
    id: 2,
    name: 'Plains Zone 2',
    description: 'Trees sparsely populate this area.',
    mobs: [],
    decorations: [
      {
        id: 1,
        chance: 35
      },
      {
        id: 2,
        chance: 50
      }
    ],
    treasure: []
  },
  {
    id: 3,
    name: 'Forest Zone 1',
    description: 'Trees.',
    mobs: [],
    decorations: [
    ],
    treasure: []
  },
  {
    id: 4,
    name: 'Forest Zone 2',
    description: 'More trees.',
    mobs: [],
    decorations: [
    ],
    treasure: []
  },
  {
    id: 5,
    name: 'Desert Zone 1',
    description: 'Desert as far as the eye can see.',
    mobs: [],
    decorations: [
    ],
    treasure: []
  }
];