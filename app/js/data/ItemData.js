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
        id: 7,
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
    value: 2,
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
        id: 7,
        min: 2
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
        id: 7,
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
        id: 7,
        min: 15
      }
    },
    armor: {
      strength: 40,
      physical: 7
    }
  },
  {
    id: 11,
    name: 'axe',
    plural: 'axes',
    countable: false,
    description: 'an axe',
    value: 14,
    weight: 14,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 34.2
      },
      resource: {
        id: 7,
        min: 14
      }
    },
    weapon: {
      strength: 35,
      hands: 'two',
      skill: 6,
      speed: 3.00,
      min: 14,
      max: 17
    }
  },
  {
    id: 12,
    name: 'bardiche',
    plural: 'bardiches',
    countable: false,
    description: 'a bardiche',
    value: 18,
    weight: 18,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 31.7
      },
      resource: {
        id: 7,
        min: 18
      }
    },
    weapon: {
      strength: 45,
      hands: 'two',
      skill: 6,
      speed: 3.75,
      min: 17,
      max: 20
    }
  },
  {
    id: 13,
    name: 'battle axe',
    plural: 'battle axes',
    countable: false,
    description: 'a battle axe',
    value: 14,
    weight: 14,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 30.5
      },
      resource: {
        id: 7,
        min: 14
      }
    },
    weapon: {
      strength: 35,
      hands: 'two',
      skill: 6,
      speed: 3.5,
      min: 16,
      max: 19
    }
  },
  {
    id: 14,
    name: 'broadsword',
    plural: 'broadswords',
    countable: false,
    description: 'a broadsword',
    value: 18,
    weight: 18,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 35.4
      },
      resource: {
        id: 7,
        min: 10
      }
    },
    weapon: {
      strength: 30,
      hands: 'one',
      skill: 6,
      speed: 3.25,
      min: 13,
      max: 17
    }
  },
];

// https://uo.stratics.com/content/skills/swordsmanship.php
// https://uo.stratics.com/content/skills/blacksmithing.php