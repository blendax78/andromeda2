export const ItemData = [
  {
    id: 1,
    name: 'log',
    plural: 'logs',
    countable: true,
    description: '',
    value: 1,
    weight: 2,
    type: 'items',
    sub_type: 'resource'
  },
  {
    id: 2,
    name: 'ore',
    plural: 'ore',
    countable: true,
    description: '',
    value: 3,
    weight: 5,
    type: 'items',
    sub_type: 'resource'
  },
  {
    id: 3,
    name: 'dagger',
    plural: 'dagger',
    countable: false,
    description: 'a dagger',
    value: 5,
    weight: 1,
    type: 'weapons',
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 20
      },
      resource: {
        id: 2,
        min: 3
      }
    },
    weapon: {
      strength: 10,
      hands: 'one',
      skill: 7,
      speed: 2,
      min: 10,
      max: 12
    }
  },
  {
    id: 4,
    name: 'butcher knife',
    plural: 'butcher knife',
    countable: false,
    description: 'a butcher knife',
    value: 5,
    weight: 1,
    type: 'weapons',
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 20
      },
      resource: {
        id: 2,
        min: 3
      }
    },
    weapon: {
      strength: 5,
      hands: 'one',
      skill: 6,
      speed: 2.25,
      min: 10,
      max: 13
    }
  }
];
