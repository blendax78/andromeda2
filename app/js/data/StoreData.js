export const StoreData = [
  {
    id: 1,
    name: 'A small blacksmithy',
    description: 'A stout man stands behind a small forge.',
    sell: [
      'ore',
      'armor',
      'weapons'
    ],
    craft: ['blacksmithing'],
    buy: [3, 4],
    type: 'store'
  },
  {
    id: 2,
    name: 'A small tailor shop',
    description: 'You see a small spinning wheel and a loom. The caretaker is in the corner, sewing some hides.',
    sell: [
      'cloth',
      'leather'
    ],
    craft: ['tailoring'],
    buy: [],
    type: 'store'
  },
  {
    id: 3,
    name: 'The town mage',
    description: 'A man in robes sits behind a desk, hunched over a book.',
    sell: [
      'scrolls',
      'potions'
    ],
    craft: ['inscription'],
    buy: [],
    type: 'store'
  },
  {
    id: 4,
    name: 'A dilapidated inn',
    description: 'A toothless woman looks at you. "Want a room?"',
    heal: 20,
    cost: 5,
    craft: [],
    sell: [],
    buy: [],
    type: 'inn'
  },
  {
    id: 5,
    name: 'A wandering healer',
    description: 'An old monk is wandering around here.',
    sell: [],
    craft: [],
    buy: [],
    type: 'healer'
  },
];
