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
      conversion: {
        id: 8,
        count: 1
      },
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
      conversion: {
        id: 7,
        count: 3
      },
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
    sub_type: 'blade',
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
      str_req: 10,
      hands: 'one',
      skill: 7,
      speed: 2,
      min: 10,
      max: 12,
      type: 'melee'
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
    sub_type: 'blade',
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
      str_req: 5,
      hands: 'one',
      skill: 6,
      speed: 2.25,
      min: 10,
      max: 13,
      type: 'melee',
      sub_type: 'blade'
    }
  },
  {
    id: 5,
    name: 'wool',
    plural: 'pieces of wool',
    countable: true,
    description: '',
    value: 1,
    weight: 5,
    type: 'items',
    sub_type: 'resource',
    craft: {
      conversion: {
        id: 6,
        count: 5
      },
      skill: {
        id: 4,
        name: 'tailoring'
      }
    }
  },
  {
    id: 6,
    name: 'piece of cloth',
    plural: 'pieces of cloth',
    countable: true,
    description: '',
    value: 1,
    weight: 0.2,
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
    weight: 1,
    type: 'armor',
    sub_type: 'metal armor',
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
      str_req: 20,
      physical: 3.2
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
    sub_type: 'metal armor',
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
      str_req: 40,
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
    sub_type: 'axe',
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
      str_req: 35,
      hands: 'two',
      skill: 6,
      speed: 3.00,
      min: 14,
      max: 17,
      type: 'melee',
      sub_type: 'axe'
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
    sub_type: 'axe',
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
      str_req: 45,
      hands: 'two',
      skill: 6,
      speed: 3.75,
      min: 17,
      max: 20,
      type: 'melee',
      sub_type: 'blade'
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
    sub_type: 'axe',
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
      str_req: 35,
      hands: 'two',
      skill: 6,
      speed: 3.5,
      min: 16,
      max: 19,
      type: 'melee',
      sub_type: 'axe'
    }
  },
  {
    id: 14,
    name: 'broadsword',
    plural: 'broadswords',
    countable: false,
    description: 'a broadsword',
    value: 10,
    weight: 10,
    type: 'weapons',
    sub_type: 'blade',
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
      str_req: 30,
      hands: 'one',
      skill: 6,
      speed: 3.25,
      min: 13,
      max: 17,
      type: 'melee',
      sub_type: 'blade'
    }
  },
  {
    id: 15,
    name: 'empty',
    plural: 'empty',
    countable: false,
    description: 'empty',
    value: 14,
    weight: 14,
    type: 'empty',
    sub_type: 'empty',
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
      str_req: 35,
      hands: 'two',
      skill: 6,
      speed: 3.5,
      min: 16,
      max: 19,
      type: 'melee',
      sub_type: 'empty'
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
    sub_type: 'blade',
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
      str_req: 10,
      hands: 'one',
      skill: 6,
      speed: 2.5,
      min: 10,
      max: 14,
      type: 'melee',
      sub_type: 'blade'
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
    sub_type: 'blade',
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
      str_req: 25,
      hands: 'one',
      skill: 6,
      speed: 2.5,
      min: 10,
      max: 14,
      type: 'melee',
      sub_type: 'blade'
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
    sub_type: 'axe',
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
      str_req: 45,
      hands: 'two',
      skill: 6,
      speed: 3.25,
      min: 15,
      max: 18,
      type: 'melee',
      sub_type: 'axe'
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
    sub_type: 'axe',
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
      str_req: 40,
      hands: 'two',
      skill: 6,
      speed: 3.25,
      min: 15,
      max: 18,
      type: 'melee',
      sub_type: 'axe'
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
    sub_type: 'axe',
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
      str_req: 95,
      hands: 'two',
      skill: 6,
      speed: 4,
      min: 18,
      max: 21,
      type: 'melee',
      sub_type: 'blade'
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
    sub_type: 'axe',
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
      str_req: 20,
      hands: 'two',
      skill: 6,
      speed: 2.75,
      min: 13,
      max: 16,
      type: 'melee',
      sub_type: 'axe'
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
    sub_type: 'axe',
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
      str_req: 80,
      hands: 'two',
      skill: 6,
      speed: 3.75,
      min: 17,
      max: 20,
      type: 'melee',
      sub_type: 'axe'
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
    sub_type: 'blade',
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
      str_req: 25,
      hands: 'one',
      skill: 6,
      speed: 2.5,
      min: 10,
      max: 14,
      type: 'melee',
      sub_type: 'blade'
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
    sub_type: 'blade',
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
      str_req: 35,
      hands: 'one',
      skill: 6,
      speed: 3.5,
      min: 14,
      max: 18,
      type: 'melee',
      sub_type: 'blade'
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
    sub_type: 'blade',
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
      str_req: 25,
      hands: 'one',
      skill: 6,
      speed: 3,
      min: 12,
      max: 16,
      type: 'melee',
      sub_type: 'blade'
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
    sub_type: 'blade',
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
      str_req: 40,
      hands: 'one',
      skill: 6,
      speed: 3.75,
      min: 15,
      max: 19,
      type: 'melee',
      sub_type: 'blade'
    }
  },
  {
    id: 27,
    name: 'leather hide',
    plural: 'leather hides',
    countable: true,
    description: '',
    value: 3,
    weight: 5,
    type: 'items',
    sub_type: 'resource',
    craft: {
      conversion: {
        id: 28,
        count: 1
      },
      skill: {
        id: 4,
        name: 'tailoring'
      }
    }
  },
  {
    id: 28,
    name: 'cut leather',
    plural: 'pieces of cut leather',
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
    id: 29,
    name: 'bow',
    plural: 'bow',
    countable: false,
    description: 'a bow',
    value: 6,
    weight: 6,
    type: 'weapons',
    sub_type: 'bow',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BOTHHANDS,
    },
    craft: {
      skill: {
        id: 8,
        name: 'bowcraft',
        min: 30
      },
      resource: {
        id: 8,
        min: 6
      }
    },
    weapon: {
      str_req: 30,
      hands: 'one',
      skill: 10,
      speed: 4.25,
      min: 17,
      max: 21,
      type: 'ranged',
      sub_type: 'bow'
    }
  },
  {
    id: 30,
    name: 'bandana',
    plural: 'bandanas',
    countable: false,
    description: 'a bandana',
    value: 2,
    weight: 2,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.HEAD,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 0
      },
      resource: {
        id: 6,
        min: 2
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 31,
    name: 'leather cap',
    plural: 'leather caps',
    countable: false,
    description: 'a leather cap',
    value: 2,
    weight: 2,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.HEAD,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 6.2
      },
      resource: {
        id: 28,
        min: 2
      }
    },
    armor: {
      str_req: 15,
      physical: 1.8
    }
  },
  {
    id: 32,
    name: 'leather sleeves',
    plural: 'leather sleeves',
    countable: false,
    description: 'leather sleeves',
    value: 4,
    weight: 2,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.ARMS,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 53.9
      },
      resource: {
        id: 28,
        min: 4
      }
    },
    armor: {
      str_req: 10,
      physical: 1.8
    }
  },
  {
    id: 33,
    name: 'leather gloves',
    plural: 'leather gloves',
    countable: false,
    description: 'leather gloves',
    value: 3,
    weight: 1,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BOTHHANDS,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 51.8
      },
      resource: {
        id: 28,
        min: 3
      }
    },
    armor: {
      str_req: 10,
      physical: 0.9
    }
  },
  {
    id: 34,
    name: 'leather gorget',
    plural: 'leather gorgets',
    countable: false,
    description: 'a leather gorget',
    value: 3,
    weight: 1,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.NECK,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 51.8
      },
      resource: {
        id: 28,
        min: 3
      }
    },
    armor: {
      str_req: 10,
      physical: 0.9
    }
  },
  {
    id: 35,
    name: 'leather leggings',
    plural: 'leather leggings',
    countable: false,
    description: 'leather leggings',
    value: 10,
    weight: 4,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.LEGS,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 66.3
      },
      resource: {
        id: 28,
        min: 10
      }
    },
    armor: {
      str_req: 10,
      physical: 1.8
    }
  },
  {
    id: 36,
    name: 'leather tunic',
    plural: 'leather tunics',
    countable: false,
    description: 'a leather tunic',
    value: 12,
    weight: 6,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BODY,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 70.5
      },
      resource: {
        id: 28,
        min: 12
      }
    },
    armor: {
      str_req: 15,
      physical: 5.7
    }
  },
  {
    id: 37,
    name: 'short pants',
    plural: 'short pants',
    countable: false,
    description: 'short pants',
    value: 3,
    weight: 3,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.LEGS,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 24.8
      },
      resource: {
        id: 6,
        min: 6
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 38,
    name: 'kilt',
    plural: 'kilts',
    countable: false,
    description: 'a kilt',
    value: 4,
    weight: 4,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.LEGS,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 20.7
      },
      resource: {
        id: 6,
        min: 8
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 39,
    name: 'long pants',
    plural: 'long pants',
    countable: false,
    description: 'long pants',
    value: 3,
    weight: 3,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.LEGS,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 24.8
      },
      resource: {
        id: 6,
        min: 6
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 40,
    name: 'skirt',
    plural: 'skirts',
    countable: false,
    description: 'a skirt',
    value: 5,
    weight: 5,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.LEGS,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 29.0
      },
      resource: {
        id: 6,
        min: 10
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 41,
    name: 'surcoat',
    plural: 'surcoats',
    countable: false,
    description: 'a surcoat',
    value: 7,
    weight: 3,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BODY,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 8.2
      },
      resource: {
        id: 6,
        min: 14
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 42,
    name: 'shirt',
    plural: 'shirts',
    countable: false,
    description: 'a shirt',
    value: 4,
    weight: 4,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BODY,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 20.7
      },
      resource: {
        id: 6,
        min: 8
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 43,
    name: 'robe',
    plural: 'robes',
    countable: false,
    description: 'a robe',
    value: 8,
    weight: 8,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BODY,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 53.9
      },
      resource: {
        id: 6,
        min: 16
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 44,
    name: 'plain dress',
    plural: 'plain dresses',
    countable: false,
    description: 'a plain dress',
    value: 5,
    weight: 5,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BODY,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 12.4
      },
      resource: {
        id: 6,
        min: 10
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 45,
    name: 'fancy dress',
    plural: 'fancy dresses',
    countable: false,
    description: 'a fancy dress',
    value: 6,
    weight: 6,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BODY,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 33.1
      },
      resource: {
        id: 6,
        min: 12
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 46,
    name: 'fancy shirt',
    plural: 'fancy shirts',
    countable: false,
    description: 'a fancy shirt',
    value: 4,
    weight: 4,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BODY,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 24.8
      },
      resource: {
        id: 6,
        min: 8
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 47,
    name: 'cloak',
    plural: 'cloaks',
    countable: false,
    description: 'a cloak',
    value: 7,
    weight: 7,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BACK,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 41.4
      },
      resource: {
        id: 6,
        min: 14
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 48,
    name: 'wizard hat',
    plural: 'wizard hats',
    countable: false,
    description: 'a wizard hat',
    value: 7,
    weight: 7,
    type: 'armor',
    sub_type: 'cloth',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.HEAD,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 7.2
      },
      resource: {
        id: 6,
        min: 14
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 49,
    name: 'chainmail leggings',
    plural: 'chainmail leggings',
    countable: false,
    description: 'chainmail leggings',
    value: 18,
    weight: 7,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.LEGS,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 36.7
      },
      resource: {
        id: 7,
        min: 18
      }
    },
    armor: {
      str_req: 20,
      physical: 3.2
    }
  },
  {
    id: 50,
    name: 'chainmail tunic',
    plural: 'chainmail tunics',
    countable: false,
    description: 'a chainmail tunic',
    value: 20,
    weight: 7,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BODY,
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
    armor: {
      str_req: 20,
      physical: 10.1
    }
  },
  {
    id: 51,
    name: 'ringmail sleeves',
    plural: 'ringmail sleeves',
    countable: false,
    description: 'ringmail sleeves',
    value: 14,
    weight: 15,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.ARMS,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 16.9
      },
      resource: {
        id: 7,
        min: 14
      }
    },
    armor: {
      str_req: 20,
      physical: 2.8
    }
  },
  {
    id: 52,
    name: 'ringmail gloves',
    plural: 'ringmail gloves',
    countable: false,
    description: 'ringmail gloves',
    value: 10,
    weight: 2,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BOTHHANDS,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 12
      },
      resource: {
        id: 7,
        min: 10
      }
    },
    armor: {
      str_req: 20,
      physical: 1.4
    }
  },
  {
    id: 53,
    name: 'ringmail leggings',
    plural: 'ringmail leggings',
    countable: false,
    description: 'ringmail leggings',
    value: 16,
    weight: 15,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.LEGS,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 19.4
      },
      resource: {
        id: 7,
        min: 16
      }
    },
    armor: {
      str_req: 20,
      physical: 2.8
    }
  },
  {
    id: 54,
    name: 'ringmail tunic',
    plural: 'ringmail tunic',
    countable: false,
    description: 'a ringmail tunic',
    value: 18,
    weight: 15,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BODY,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 21.9
      },
      resource: {
        id: 7,
        min: 18
      }
    },
    armor: {
      str_req: 20,
      physical: 8.8
    }
  },
  {
    id: 55,
    name: 'studded sleeves',
    plural: 'studded sleeves',
    countable: false,
    description: 'studded sleeves',
    value: 10,
    weight: 4,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.ARMS,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 87.1
      },
      resource: {
        id: 6,
        min: 10
      }
    },
    armor: {
      str_req: 25,
      physical: 2.2
    }
  },
  {
    id: 56,
    name: 'studded tunic',
    plural: 'studded tunics',
    countable: false,
    description: 'a studded tunic',
    value: 14,
    weight: 8,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BODY,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 94
      },
      resource: {
        id: 6,
        min: 14
      }
    },
    armor: {
      str_req: 35,
      physical: 7
    }
  },
  {
    id: 57,
    name: 'studded gloves',
    plural: 'studded gloves',
    countable: false,
    description: 'studded gloves',
    value: 8,
    weight: 1,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BOTHHANDS,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 82.9
      },
      resource: {
        id: 6,
        min: 8
      }
    },
    armor: {
      str_req: 25,
      physical: 1.1
    }
  },
  {
    id: 58,
    name: 'studded gorget',
    plural: 'studded gorgets',
    countable: false,
    description: 'a studded gorget',
    value: 8,
    weight: 1,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.NECK,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 78.8
      },
      resource: {
        id: 6,
        min: 6
      }
    },
    armor: {
      str_req: 25,
      physical: 1.1
    }
  },
  {
    id: 59,
    name: 'studded leggings',
    plural: 'studded leggings',
    countable: false,
    description: 'a studded leggings',
    value: 12,
    weight: 5,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.LEGS,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 91.2
      },
      resource: {
        id: 6,
        min: 12
      }
    },
    armor: {
      str_req: 35,
      physical: 2.2
    }
  },
  {
    id: 60,
    name: 'arrow',
    plural: 'arrows',
    countable: true,
    description: 'arrows',
    value: 1,
    weight: 0.1,
    type: 'items',
    sub_type: 'ammunition',
    craft: {
      skill: {
        id: 8,
        name: 'bowcraft',
        min: 0
      },
      resource: {
        id: 8,
        min: 1
      }
    }
  },
  {
    id: 61,
    name: 'crossbow',
    plural: 'crossbows',
    countable: false,
    description: 'a crossbow',
    value: 7,
    weight: 7,
    type: 'weapons',
    sub_type: 'bow',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BOTHHANDS,
    },
    craft: {
      skill: {
        id: 8,
        name: 'bowcraft',
        min: 60
      },
      resource: {
        id: 8,
        min: 7
      }
    },
    weapon: {
      requires: 60,
      str_req: 35,
      hands: 'two',
      skill: 10,
      speed: 4.5,
      min: 18,
      max: 22,
      type: 'ranged',
      sub_type: 'bow'
    }
  },
  {
    id: 62,
    name: 'composite bow',
    plural: 'composite bows',
    countable: false,
    description: 'a composite bow',
    value: 7,
    weight: 7,
    type: 'weapons',
    sub_type: 'bow',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BOTHHANDS,
    },
    craft: {
      skill: {
        id: 8,
        name: 'bowcraft',
        min: 70
      },
      resource: {
        id: 8,
        min: 7
      }
    },
    weapon: {
      requires: 60,
      str_req: 45,
      hands: 'two',
      skill: 10,
      speed: 4,
      min: 16,
      max: 20,
      type: 'ranged',
      sub_type: 'bow'
    }
  },
  {
    id: 63,
    name: 'heavy crossbow',
    plural: 'heavy crossbows',
    countable: false,
    description: 'a heavy crossbow',
    value: 10,
    weight: 10,
    type: 'weapons',
    sub_type: 'bow',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BOTHHANDS,
    },
    craft: {
      skill: {
        id: 8,
        name: 'bowcraft',
        min: 80
      },
      resource: {
        id: 8,
        min: 10
      }
    },
    weapon: {
      requires: 60,
      str_req: 80,
      hands: 'two',
      skill: 10,
      speed: 5,
      min: 20,
      max: 24,
      type: 'ranged',
      sub_type: 'bow'
    }
  },
  {
    id: 64,
    name: 'repeating crossbow',
    plural: 'repeating crossbows',
    countable: false,
    description: 'a repeating crossbow',
    value: 10,
    weight: 10,
    type: 'weapons',
    sub_type: 'bow',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BOTHHANDS,
    },
    craft: {
      skill: {
        id: 8,
        name: 'bowcraft',
        min: 90
      },
      resource: {
        id: 8,
        min: 10
      }
    },
    weapon: {
      requires: 60,
      str_req: 30,
      hands: 'two',
      skill: 10,
      speed: 2.75,
      min: 11,
      max: 15,
      type: 'ranged',
      sub_type: 'bow'
    }
  },
  {
    id: 65,
    name: 'shoes',
    plural: 'shoes',
    countable: false,
    description: 'a pair of shoes',
    value: 6,
    weight: 1,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.FEET,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 16.5
      },
      resource: {
        id: 28,
        min: 6
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 66,
    name: 'sandals',
    plural: 'sandals',
    countable: false,
    description: 'a pair of sandals',
    value: 4,
    weight: 1,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.FEET,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 12.4
      },
      resource: {
        id: 28,
        min: 4
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 67,
    name: 'boots',
    plural: 'boots',
    countable: false,
    description: 'a pair of boots',
    value: 8,
    weight: 2,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.FEET,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 33.1
      },
      resource: {
        id: 28,
        min: 8
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 68,
    name: 'thigh boots',
    plural: 'thigh boots',
    countable: false,
    description: 'a pair of thigh boots',
    value: 10,
    weight: 2,
    type: 'armor',
    sub_type: 'leather',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.FEET,
    },
    craft: {
      skill: {
        id: 4,
        name: 'tailoring',
        min: 41.4
      },
      resource: {
        id: 28,
        min: 10
      }
    },
    armor: {
      str_req: 0,
      physical: 0.5
    }
  },
  {
    id: 69,
    name: 'kryss',
    plural: 'krysses',
    countable: false,
    description: 'a kryss',
    value: 8,
    weight: 1,
    type: 'weapons',
    sub_type: 'blade',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 36.7
      },
      resource: {
        id: 7,
        min: 8
      }
    },
    weapon: {
      str_req: 10,
      hands: 'one',
      skill: 7,
      speed: 2,
      min: 10,
      max: 12,
      type: 'melee'
    }
  },
  {
    id: 70,
    name: 'war fork',
    plural: 'war forks',
    countable: false,
    description: 'a war fork',
    value: 12,
    weight: 4,
    type: 'weapons',
    sub_type: 'blade',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.RHAND,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 42.9
      },
      resource: {
        id: 7,
        min: 12
      }
    },
    weapon: {
      str_req: 45,
      hands: 'one',
      skill: 7,
      speed: 2.5,
      min: 10,
      max: 14,
      type: 'melee'
    }
  },
  {
    id: 71,
    name: 'short spear',
    plural: 'short spears',
    countable: false,
    description: 'a short spear',
    value: 6,
    weight: 5,
    type: 'weapons',
    sub_type: 'blade',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BOTHHANDS,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 45.3
      },
      resource: {
        id: 7,
        min: 6
      }
    },
    weapon: {
      str_req: 40,
      hands: 'two',
      skill: 7,
      speed: 2,
      min: 10,
      max: 13,
      type: 'melee'
    }
  },
  {
    id: 72,
    name: 'platemail tunic',
    plural: 'platemail tunics',
    countable: false,
    description: 'a platemail tunic',
    value: 25,
    weight: 10,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BODY,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 75
      },
      resource: {
        id: 7,
        min: 25
      }
    },
    armor: {
      str_req: 60,
      physical: 13.2,
      dexterity: -5
    }
  },
  {
    id: 73,
    name: 'platemail gloves',
    plural: 'platemail gloves',
    countable: false,
    description: 'platemail gloves',
    value: 10,
    weight: 5,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.BOTHHANDS,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 58.9
      },
      resource: {
        id: 7,
        min: 10
      }
    },
    armor: {
      str_req: 30,
      physical: 2.1,
      dexterity: -3
    }
  },
  {
    id: 74,
    name: 'platemail gorget',
    plural: 'platemail gorgets',
    countable: false,
    description: 'a platemail gorget',
    value: 10,
    weight: 2,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.NECK,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 56.4
      },
      resource: {
        id: 7,
        min: 10
      }
    },
    armor: {
      str_req: 30,
      physical: 2.1,
      dexterity: -1
    }
  },
  {
    id: 75,
    name: 'platemail sleeves',
    plural: 'platemail sleeves',
    countable: false,
    description: 'platemail sleeves',
    value: 18,
    weight: 5,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.ARMS,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 66.3
      },
      resource: {
        id: 7,
        min: 18
      }
    },
    armor: {
      str_req: 40,
      physical: 4.2,
      dexterity: -2
    }
  },
  {
    id: 76,
    name: 'platemail leggings',
    plural: 'platemail leggings',
    countable: false,
    description: 'platemail leggings',
    value: 20,
    weight: 7,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.LEGS,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 68.8
      },
      resource: {
        id: 7,
        min: 20
      }
    },
    armor: {
      str_req: 60,
      physical: 4.2,
      dexterity: -7
    }
  },
  {
    id: 77,
    name: 'platemail helmet',
    plural: 'platemail helmets',
    countable: false,
    description: 'a platemail helmet',
    value: 15,
    weight: 5,
    type: 'armor',
    sub_type: 'metal armor',
    equip: {
      equipped: false,
      location: Config.ACTIONS.INVENTORY.HEAD,
    },
    craft: {
      skill: {
        id: 5,
        name: 'blacksmithing',
        min: 62.6
      },
      resource: {
        id: 7,
        min: 15
      }
    },
    armor: {
      str_req: 40,
      physical: 4.2,
      dexterity: -1
    }
  },
];



/*
http://www.uoguide.com/Tailoring
http://www.uoguide.com/Blacksmithy
http://www.uorenaissance.com/list/Plate/P
*/