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
    weight: 10,
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
  {
    id: 15,
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
    id: 16,
    name: 'cleaver',
    plural: 'cleavers',
    countable: false,
    description: 'a cleaver',
    value: 3,
    weight: 3,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 20
      },
      resource: {
        id: 7,
        min: 3
      }
    },
    weapon: {
      strength: 10,
      hands: 'one',
      skill: 6,
      speed: 2.5,
      min: 10,
      max: 14
    }
  },
  {
    id: 17,
    name: 'cutlass',
    plural: 'cutlasses',
    countable: false,
    description: 'a cutlass',
    value: 8,
    weight: 8,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 24.3
      },
      resource: {
        id: 7,
        min: 8
      }
    },
    weapon: {
      strength: 25,
      hands: 'one',
      skill: 6,
      speed: 2.5,
      min: 10,
      max: 14
    }
  },
  {
    id: 18,
    name: 'double axe',
    plural: 'double axes',
    countable: false,
    description: 'a double axe',
    value: 12,
    weight: 12,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 29.3
      },
      resource: {
        id: 7,
        min: 12
      }
    },
    weapon: {
      strength: 45,
      hands: 'two',
      skill: 6,
      speed: 3.25,
      min: 15,
      max: 18
    }
  },
  {
    id: 19,
    name: 'executioner axe',
    plural: 'executioner axes',
    countable: false,
    description: 'an executioner axe',
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
      strength: 40,
      hands: 'two',
      skill: 6,
      speed: 3.25,
      min: 15,
      max: 18
    }
  },
  {
    id: 20,
    name: 'halberd',
    plural: 'halberds',
    countable: false,
    description: 'a halberd',
    value: 20,
    weight: 20,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 39.1
      },
      resource: {
        id: 7,
        min: 20
      }
    },
    weapon: {
      strength: 95,
      hands: 'two',
      skill: 6,
      speed: 4,
      min: 18,
      max: 21
    }
  },
  {
    id: 21,
    name: 'hatchet',
    plural: 'hatchets',
    countable: false,
    description: 'a hatchet',
    value: 4,
    weight: 4,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 39.1
      },
      resource: {
        id: 7,
        min: 4
      }
    },
    weapon: {
      strength: 20,
      hands: 'two',
      skill: 6,
      speed: 2.75,
      min: 13,
      max: 16
    }
  },
  {
    id: 22,
    name: 'large battle axe',
    plural: 'large battle axes',
    countable: false,
    description: 'a large battle axe',
    value: 12,
    weight: 12,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 28
      },
      resource: {
        id: 7,
        min: 12
      }
    },
    weapon: {
      strength: 80,
      hands: 'two',
      skill: 6,
      speed: 3.75,
      min: 17,
      max: 20
    }
  },
  {
    id: 23,
    name: 'katana',
    plural: 'katanas',
    countable: false,
    description: 'a katana',
    value: 8,
    weight: 8,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 44.1
      },
      resource: {
        id: 7,
        min: 8
      }
    },
    weapon: {
      strength: 25,
      hands: 'one',
      skill: 6,
      speed: 2.5,
      min: 10,
      max: 14
    }
  },
  {
    id: 24,
    name: 'longsword',
    plural: 'longswords',
    countable: false,
    description: 'a longsword',
    value: 12,
    weight: 12,
    type: 'weapons',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 28
      },
      resource: {
        id: 7,
        min: 12
      }
    },
    weapon: {
      strength: 35,
      hands: 'one',
      skill: 6,
      speed: 3.5,
      min: 14,
      max: 18
    }
  },
  {
    id: 25,
    name: 'scimitar',
    plural: 'scimitars',
    countable: false,
    description: 'a scimitar',
    value: 10,
    weight: 10,
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
        min: 10
      }
    },
    weapon: {
      strength: 25,
      hands: 'one',
      skill: 6,
      speed: 3,
      min: 12,
      max: 16
    }
  },
  {
    id: 26,
    name: 'viking sword',
    plural: 'viking swords',
    countable: false,
    description: 'a viking sword',
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
        min: 24.3
      },
      resource: {
        id: 7,
        min: 14
      }
    },
    weapon: {
      strength: 40,
      hands: 'one',
      skill: 6,
      speed: 3.75,
      min: 15,
      max: 19
    }
  },
];

