import Config from '../components/Config';

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
    sub_type: 'resource',
    craft: {
      skill: {
        id: 8,
        name: 'bowcraft'
      }
    }
  },
  {
    id: 2,
    name: 'ore',
    plural: 'ore',
    countable: true,
    description: '',
    value: 1,
    weight: 5,
    type: 'items',
    sub_type: 'resource',
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing'
      }
    }
  },
  {
    id: 3,
    name: 'dagger',
    plural: 'dagger',
    countable: false,
    description: 'a dagger',
    value: 3,
    weight: 1,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 0
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
    value: 3,
    weight: 1,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 0
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
  },
  {
    id: 5,
    name: 'wool',
    plural: 'pieces of wool',
    countable: true,
    description: '',
    value: 1,
    weight: 3,
    type: 'items',
    sub_type: 'resource'
  },
  {
    id: 6,
    name: 'cloth',
    plural: 'pieces of cloth',
    countable: true,
    description: '',
    value: 1,
    weight: 1,
    type: 'items',
    sub_type: 'resource',
    craft: {
      skill: {
        id: 4,
        name: 'tailoring'
      }
    }
  },
  {
    id: 7,
    name: 'iron ingot',
    plural: 'iron ingots',
    countable: true,
    description: '',
    value: 1,
    weight: 0.1,
    type: 'items',
    sub_type: 'resource',
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing'
      }
    }
  },
  {
    id: 8,
    name: 'board',
    plural: 'boards',
    countable: true,
    description: '',
    value: 1,
    weight: 1,
    type: 'items',
    sub_type: 'resource',
    craft: {
      skill: {
        id: 8,
        name: 'bowcraft'
      }
    }
  },
  {
    id: 9,
    name: 'chainmail coif',
    plural: 'chainmail coif',
    countable: false,
    description: 'a chainmail coif',
    value: 10,
    weight: 7,
    type: 'armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.HEAD,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 14.5
      },
      resource: {
        id: 2,
        min: 10
      }
    },
    armor: {
      strength: 60,
      physical: 4
    }
  },
{
    id: 10,
    name: 'bascinet',
    plural: 'bascinet',
    countable: false,
    description: 'a bascinet',
    value: 15,
    weight: 5,
    type: 'armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.HEAD,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 8.33
      },
      resource: {
        id: 2,
        min: 15
      }
    },
    armor: {
      strength: 40,
      physical: 7
    }
  },
];
