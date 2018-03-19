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
    buy: ['axe', 'metal armor', 'blade'],
    type: 'store'
  },
  {
    id: 2,
    name: 'A small tailor shop',
    description: 'You see a small spinning wheel and a loom. The caretaker is in the corner, sewing some hides.',
    sell: [
      'cloth',
      'cut leather',
      'leather hide',
      'wool',
      'leather'
    ],
    craft: ['tailoring'],
    buy: ['leather', 'cloth'],
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
    cost: 1,
    heal: 0.1,
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
  {
    id: 6,
    name: 'A bowyer stall',
    description: 'A tall man stands over a long piece of wood, slowly bending it into shape.',
    sell: [
      8,
      'bow',
      1
    ],
    craft: ['bowcraft'],
    buy: [29],
    type: 'store'
  },
  {
    id: 7,
    name: 'Bank of Trammel',
    description: 'A man stares at you through a small, barred window.',
    sell: [],
    craft: [],
    buy: [],
    type: 'bank'
  },
];
