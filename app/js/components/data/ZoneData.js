export const ZoneData = [
  {
    id: 0,
    name: 'Space',
    description: 'The vacuum of space',
    mobs: [],
    decorations: [],
    decorationList: [],
    decorationChance: 5,
    maxDecorations: 1,
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
        chance: 35
      },
      {
        id: 4,
        chance: 10
      }
    ],
    decorationList: [],
    maxDecorations: 2,
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
        chance: 15
      },
      {
        id: 4,
        chance: 10
      }
    ],
    maxDecorations: 3,
    decorationList: [],
    treasure: []
  },
  {
    id: 3,
    name: 'Forest Zone 1',
    description: 'Trees.',
    mobs: [],
    decorations: [
      {
        id: 1,
        chance: 50
      },
      {
        id: 2,
        chance: 25
      },
      {
        id: 4,
        chance: 10
      }
    ],
    maxDecorations: 3,
    decorationList: [],
    treasure: []
  },
  {
    id: 4,
    name: 'Forest Zone 2',
    description: 'More trees.',
    mobs: [],
    decorations: [
    ],
    maxDecorations: 4,
    decorationList: [],
    treasure: []
  },
  {
    id: 5,
    name: 'Desert Zone 1',
    description: 'Desert as far as the eye can see.',
    mobs: [],
    decorations: [
      {
        id: 4,
        chance: 10
      }
    ],
    maxDecorations: 1,
    decorationList: [],
    treasure: []
  }
];
