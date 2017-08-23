export const ZoneData = [
  {
    id: 0,
    name: 'Space',
    description: 'The vacuum of space.',
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
    description: 'Rolling fields stretch as far as the eye can see.',
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
    description: 'Trees sparsely populate this area, which is otherwise comrpised of tall grasses.',
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
    description: 'The forest is vast, bright, and blooming. Its canopy is demanded by hickory, sycamore, and larch. Enough light shimmers through their crowns for all sorts of plants to make use of the stony grounds below. Thick vines grasp many a tree, and a range of flowers look almost out of place in the otherwise emerald terrain.',
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
    description: 'The forest is limitless, luminous, and rich. Its canopy is ruled by dogwood, oak, and cottonwood. A sparkling light dancing between the branches allows for a hodgepodge of herbs to monopolize the rich grounds below. Quiet creepers wave from the occasional tree, and an array of flowers spruce up the otherwise beige forest floor. A cacophony of sounds fill the air and drown out the trickling sounds of a gentle river stream.',
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
