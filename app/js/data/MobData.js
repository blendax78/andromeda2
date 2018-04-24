import Config from '../components/Config';

// Finished fixing ID 61.
// Need to look up missing inventory data.
export const MobData = [
  {
    id: 1,
    name: 'sheep',
    description: 'A little sheep is wandering around here.',
    armor: 6,
    karma: -300,
    fame: 300,
    aggro: false,
    offense: {
      min: 1,
      max: 2,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    stats: {
      str: [19, 19],
      dex: [25, 25],
      int: [5,5],
      hp: [12,12],
      taming: 11.1,
      barding: 7
    },
    wander: true,
    attackable: true,
    inventory: [
      {
        id: 5,
        count: 3,
        chance: [1,1]
      }
    ],
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/Sheep_100.png`,
    skills: {
      wrestling: [5,5],
      tactics: [6,6],
      magic_resistance: [5,5]
    }
  },
  {
    id: 2,
    name: 'hind',
    description: 'A hind is wandering here.',
    armor: 8,
    karma: 0,
    fame: 300,
    stats: {
      str: [21,51],
      dex: [47,77],
      int: [17,47],
      hp: [15,29],
      barding: 17,
      taming: 13.1
    },
    aggro: false,
    offense: {
      min: 4,
      max: 4,
      speed: 2.5
    },
    move: 2,
    mob_type: 'animal',
    wander: true,
    attackable: true,
    inventory: [
      {
        id: 27,
        count: 8,
        chance: [1,1]
      }
    ],
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/Hind_100.png`,
    skills: {
      wrestling: [26,26],
      tactics: [19,19],
      magic_resistance: [15,15]
    }
  },
  {
    id: 3,
    name: 'black bear',
    description: 'A black bear is sitting here, staring at you.',
    armor: 24,
    karma: 0,
    fame: 450,
    stats: {
      str: [76,100],
      dex: [56,75],
      int: [11,14],
      hp: [46,60],
      taming: 35.1,
      barding: 33
    },
    aggro: false,
    offense: {
      min: 6,
      max: 16,
      speed: 2.5
    },
    move: 2,
    wander: true,
    attackable: true,
    inventory: [
      {
        id: 27,
        count: 12,
        chance: [1,1]
      }
    ],
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/BlackBear_100.png`,
    skills: {
      wrestling: [40,60],
      tactics: [40,60],
      magic_resistance: [20,40]
    }
  },
  {
    id: 4,
    name: 'brown bear',
    description: 'A brown bear is wandering around, looking for a snack.',
    armor: 24,
    karma: 0,
    fame: 450,
    stats: {
      str: [76,100],
      dex: [26,45],
      int: [23,47],
      hp: [46,60],
      taming: 41.1,
      barding: 30
    },
    aggro: false,
    offense: {
      min: 6,
      max: 12,
      speed: 2.5
    },
    move: 2,
    mob_type: 'animal',
    wander: true,
    attackable: true,
    inventory: [
      {
        id: 27,
        count: 12,
        chance: [1,1]
      }
    ],
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/BrownBear_100.png`,
    skills: {
      wrestling: [40,60],
      tactics: [40,60],
      magic_resistance: [25,35]
    }
  },
  {
    id: 5,
    name: 'bull',
    description: 'A bull is here, looking for the herd.',
    armor: 28,
    karma: 0,
    fame: 600,
    stats: {
      str: [77,111],
      dex: [56,75],
      int: [47,75],
      hp: [50,64],
      barding: 30,
      taming: 71.1
    },
    aggro: false,
    offense: {
      min: 4,
      max: 9,
      speed: 2.5
    },
    move: 2,
    wander: true,
    attackable: true,
    inventory: [
      {
        id: 27,
        count: 15,
        chance: [1,1]
      }
    ],
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/Bull_100.png`,
    skills: {
      wrestling: [40.1,57.5],
      tactics: [67.6,85],
      magic_resistance: [17.6,25]
    }
  },
  {
    id: 6,
    name: 'cow',
    description: 'A cow is chewing on some grass.',
    armor: 10,
    karma: 0,
    fame: 300,
    stats: {
      str: [30,30],
      dex: [15,15],
      int: [5,5],
      hp: [18,18]
    },
    aggro: false,
    offense: {
      min: 1,
      max: 4,
      speed: 2.5,
      taming: 29.1,
      barding: 7
    },
    move: 1,
    mob_type: 'animal',
    wander: true,
    attackable: true,
    inventory: [
      {
        id: 27,
        count: 12,
        chance: [1,1]
      }
    ],
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/Cow_100.png`,
    skills: {
      wrestling: [5.5,5.5],
      tactics: [5.5,5.5],
      magic_resistance: [5.5,5.5]
    }
  },
  {
    id: 7,
    name: 'training dummy',
    description: 'A training dummy stands here. There is a bright red target painted on it.',
    armor: 100,
    karma: 0,
    fame: 0,
    stats: {
      str: [0,0],
      dex: [0,0],
      int: [0,0],
      hp: [500,500]
    },
    aggro: false,
    offense: {
      min: 0,
      max: 0,
      speed: 2.5000
    },
    move: 0,
    mob_type: 'training',
    wander: false,
    attackable: true,
    inventory: [

    ],
    credits: 0,
    img: `${Config.URLS.IMAGES}/misc/training_dummy.png`,
    skills: {
      wrestling: [0,0],
      tactics: [0,0],
      magic_resistance: [0,0]
    }
  },
  {
    id: 8,
    name: 'giant rat',
    description: 'A giant rat is looking for a meal.',
    armor: 18,
    karma: -300,
    fame: 300,
    stats: {
      str: [32,74],
      dex: [46,65],
      int: [16,30],
      hp: [26,39],
      taming: 29.1,
      barding: 24
    },
    aggro: true,
    offense: {
      min: 4,
      max: 8,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    wander: false,
    attackable: true,
    inventory: [
      {
        id: 27,
        count: 6,
        chance: [1,1]
      }
    ],
    credits: [1,
      25
    ],
    img: `${Config.URLS.IMAGES}/mobs/GiantRat_100.png`,
    skills: {
      wrestling: [29.3,44],
      tactics: [29.3,44],
      magic_resistance: [25.1,30]
    }
  },
  {
    id: 9,
    name: 'alligator',
    description: 'An alligator is stalking its prey.',
    armor: 30,
    karma: -600,
    fame: 600,
    stats: {
      str: [76,100],
      dex: [6,25],
      int: [11,20],
      hp: [46,60],
      taming: 47.1,
      barding: 29
    },
    offense: {
      min: 5,
      max: 15,
      speed: 2.5
    },
    move: 1,
    aggro: true,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        id: 27,
        count: 12,
        chance: [1, 1]
      }
    ],
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/Alligator_100.png`,
    skills: {
      wrestling: [40,60],
      tactics: [40,60],
      magic_resistance: [25,40]
    }
  },
  {
    id: 10,
    name: 'bird',
    description: 'A bird is flying nearby.',
    armor: 2,
    karma: 0,
    fame: 150,
    stats: {
      str: [10,10],
      dex: [25,35],
      int: [10,10],
      hp: [0,0],
      taming: 0,
      barding: 7
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '25 Feathers',
        chance: [1, 1]
      }
    ],
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/Bird_100.png`,
    skills: {
      wrestling: 5.0,
      tactics: 5.0,
      magic_resistance: 5.0
    }
  },
  {
    id: 11,
    name: 'bull frog',
    description: 'bull frog',
    armor: 6,
    stats: {
      str: [46,70],
      dex: [6,25],
      int: [11,20],
      hp: [28,42],
      taming: 23.1,
      barding: 21
    },
    offense: {
      min: 1,
      max: 2,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        id: 27,
        count: 4,
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 12,
    name: 'cat',
    description: 'A cat licks itself while it watches you lazily.',
    armor: 8,
    karma: -150,
    fame: 0,
    stats: {
      str: [9,9],
      dex: [35,35],
      int: [5,5],
      hp: [6,6],
      taming: 0,
      barding: 6
    },
    offense: {
      min: 1,
      max: 1,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    img: `${Config.URLS.IMAGES}/mobs/Cat_100.png`,
    inventory: [
      {
        description: '1 Raw Rib (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: 5.0,
      tactics: 4.0,
      magic_resistance: 5.0
    }
  },
  {
    id: 13,
    name: 'chicken',
    description: 'A chicken runs around like a chicken with its head cut off.',
    armor: 2,
    karma: 0,
    fame: 150,
    stats: {
      str: [5,5],
      dex: [15,15],
      int: [5,5],
      hp: [3,3],
      taming: 0.9,
      barding: 4
    },
    offense: {
      min: 1,
      max: 1,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    img: `${Config.URLS.IMAGES}/mobs/Chicken_100.png`,
    inventory: [
      {
        description: '25 Feathers (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: 5.0,
      tactics: 5.0,
      magic_resistance: 4.0
    }
  },
  {
    id: 14,
    name: 'cougar',
    description: 'A cougar stalks some game.',
    armor: 16,
    karma: 0,
    fame: 450,
    stats: {
      str: [56,80],
      dex: [66,85],
      int: [26,50],
      hp: [34,48],
      taming: 41.1,
      barding: 27
    },
    offense: {
      min: 4,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        id: 27,
        count: 10,
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [45,60],
      tactics: [45,60],
      magic_resistance: [15,30]
    }
  },
  {
    id: 16,
    name: 'crane',
    description: 'A crane squawks loudly.',
    armor: 5,
    karma: 0,
    fame: 0,
    stats: {
      str: [25,35],
      dex: [15,25],
      int: [10,15],
      hp: [25,35],
      taming: null,
      barding: 9.2
    },
    offense: {
      speed: 2.5,
      min: 1,
      max: 1
    },
    move: 1,
    img: `${Config.URLS.IMAGES}/mobs/Crane_100.png`,
    mob_type: 'animal',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {
      wrestling: [10,11],
      tactics: [10,11],
      magic_resistance: [4,5]
    }
  },
  {
    id: 17,
    name: 'desert ostard',
    description: 'A desert ostard is running around here.',
    armor: 0,
    karma: 0,
    fame: 450,
    stats: {
      str: [94,170],
      dex: [56,75],
      int: [6,10],
      hp: [71,88],
      taming: 29.1,
      barding: 33
    },
    offense: {
      min: 5,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '3 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/DesertOstard_100.png`,
    skills: {
      wrestling: [29,44],
      tactics: [25,40],
      magic_resistance: [25,30]
    }
  },
  {
    id: 18,
    name: 'dire wolf',
    description: 'A dire wolf snarls at you.',
    armor: 22,
    karma: -2500,
    fame: 2500,
    stats: {
      str: [96,120],
      dex: [81,105],
      int: [36,60],
      hp: [58,72],
      taming: 83.1,
      barding: 43
    },
    offense: {
      min: 11,
      max: 17,
      speed: 2.5
    },
    move: 1,
    aggro:true,
    mob_type: 'animal',
    attackable: true,
    img: `${Config.URLS.IMAGES}/mobs/DireWolf_100.png`,
    inventory: [
      {
        id: 27,
        count: 7,
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [60,80],
      tactics: [50,70],
      magic_resistance: [57,75]
    }
  },
  {
    id: 19,
    name: 'dog',
    description: 'A dog begs you for a treat.',
    armor: 12,
    karma: -300,
    fame: 0,
    stats: {
      str: [27,37],
      dex: [28,43],
      int: [29,37],
      hp: [17,22],
      taming: 0,
      barding: 17
    },
    offense: {
      min: 4,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    img: `${Config.URLS.IMAGES}/mobs/Dog_100.png`,
    attackable: true,
    inventory: [
      {
        description: '1 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [19,31],
      tactics: [19,31],
      magic_resistance: [22,47]
    }
  },
  {
    id: 20,
    name: 'dolphin',
    description: 'A dolphin swims around playfully.',
    armor: 16,
    karma: -2000,
    fame: 500,
    stats: {
      str: [21,49],
      dex: [66,85],
      int: [96,110],
      hp: [15,27],
      taming: null,
      barding: 26
    },
    offense: {
      min: 3,
      max: 6,
      speed: 2.5
    },
    move: 2,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '1 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [19,29],
      tactics: [19,29],
      magic_resistance: [15,20]
    }
  },
  {
    id: 21,
    name: 'eagle',
    description: 'A majestic eagle is perched here.',
    armor: 22,
    karma: 0,
    fame: 300,
    stats: {
      str: [31,47],
      dex: [36,60],
      int: [8,20],
      hp: [20,27],
      taming: 17.1,
      barding: 18
    },
    offense: {
      min: 5,
      max: 10,
      speed: 2.5
    },
    move: 2,
    img: `${Config.URLS.IMAGES}/mobs/Eagle_100.png`,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '36 Feathers',
        chance: [1, 1]
      }
    ],
    credits: [50,100],
    skills: {
      wrestling: [20,30],
      tactics: [18,37],
      magic_resistance: [15,30]
    }
  },
  {
    id: 22,
    name: 'faction war horse',
    description: 'faction war horse',
    armor: null,
    stats: {
      str: [400,400],
      dex: [125,125],
      int: [51,55],
      hp: [240,240],
      taming: 11.1,
      barding: 65
    },
    offense: {
      min: 5,
      max: 8,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    img: `${Config.URLS.IMAGES}/mobs/FactionWarHorse_100.png`,
    inventory: [],
    credits: 0,
    skills: {
    }
  },
  {
    id: 27,
    name: 'fire steed',
    description: 'fire steed',
    armor: 0,
    karma: -20000,
    fame: 20000,
    stats: {
      str: [376,400],
      dex: [91,120],
      int: [291,300],
      hp: [226,240],
      taming: 106,
      barding: 83.6
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {
      wrestling: 100.0,
      tactics: [100, 100],
      magic_resistance: [100,
        120
      ]
    }
  },
  {
    id: 28,
    name: 'forest ostard',
    description: 'forest ostard',
    armor: null,
    karma: 0,
    fame: 450,
    stats: {
      str: [94,170],
      dex: [56,75],
      int: [6,10],
      hp: [71,88],
      taming: null,
      barding: 30
    },
    offense: {
      min: 8,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '3 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [29,44],
      tactics: [29,44],
      magic_resistance: [27,32]
    }
  },
  {
    id: 29,
    name: 'frenzied ostard',
    description: 'frenzied ostard',
    armor: 0,
    karma: -1500,
    fame: 1500,
    stats: {
      str: [94,170],
      dex: [96,115],
      int: [6,10],
      hp: [71,110],
      taming: 77.1,
      barding: 55
    },
    offense: {
      min: 11,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '3 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [79,94],
      tactics: [79,94],
      magic_resistance: [75,80]
    }
  },
  {
    id: 30,
    name: 'giant serpent',
    description: 'giant serpent',
    armor: 32,
    karma: -2500,
    fame: 2500,
    stats: {
      str: [186,215],
      dex: [56,80],
      int: [66,85],
      hp: [112,129],
      taming: null,
      barding: 73
    },
    offense: {
      min: 7,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400]
      }
    ],
    credits: [125,175],
    skills: {
      wrestling: [60,80],
      tactics: [65,70],
      magic_resistance: [25,40]
    }
  },
  {
    id: 31,
    name: 'giant toad',
    description: 'giant toad',
    armor: 24,
    karma: -750,
    fame: 750,
    stats: {
      str: [76,100],
      dex: [6,25],
      int: [11,20],
      hp: [46,60],
      taming: 77.1,
      barding: 27
    },
    offense: {
      min: 5,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '12 Spined Hides (Carve)',
        chance: [1, 1]
      }
    ],
    credits: [25,50],
    skills: {
      wrestling: [40,60],
      tactics: [40,60],
      magic_resistance: [25,40]
    }
  },
  {
    id: 32,
    name: 'goat',
    description: 'goat',
    armor: 10,
    karma: 0,
    fame: 150,
    stats: {
      str: [19,19],
      dex: [15,15],
      int: [5,5],
      hp: [12,12],
      taming: 11.1,
      barding: 6
    },
    offense: {
      min: 3,
      max: 4,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '8 Leather Hides (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: 5.0,
      tactics: 5.0,
      magic_resistance: 5.0
    }
  },
  {
    id: 33,
    name: 'gorilla',
    description: 'gorilla',
    armor: 20,
    karma: 0,
    fame: 450,
    stats: {
      str: [53,95],
      dex: [36,55],
      int: [36,60],
      hp: [38,51],
      taming: 18.9,
      barding: 29
    },
    offense: {
      min: 4,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '6 Leather Hides (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [43,58],
      tactics: [43,58],
      magic_resistance: [45,60]
    }
  },
  {
    id: 34,
    name: 'great hart',
    description: 'great hart',
    armor: 24,
    karma: 0,
    fame: 300,
    stats: {
      str: [41,71],
      dex: [47,77],
      int: [27,57],
      hp: [27,41],
      taming: 59.1,
      barding: 25
    },
    offense: {
      min: 5,
      max: 9,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '6 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [29,47],
      tactics: [29,47],
      magic_resistance: [26,44]
    }
  },
  {
    id: 35,
    name: 'grey wolf',
    description: 'grey wolf',
    armor: 16,
    karma: 0,
    fame: 450,
    stats: {
      str: [56,80],
      dex: [56,75],
      int: [31,55],
      hp: [34,48],
      taming: 53.1,
      barding: 28
    },
    offense: {
      min: 3,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '6 Leather Hides (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [45,60],
      tactics: [45,60],
      magic_resistance: [20,35]
    }
  },
  {
    id: 36,
    name: 'grizzly bear',
    description: 'grizzly bear',
    armor: 24,
    karma: 0,
    fame: 1000,
    stats: {
      str: [126,155],
      dex: [81,105],
      int: [16,40],
      hp: [76,93],
      taming: 59.1,
      barding: 44
    },
    offense: {
      min: 8,
      max: 13,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '2 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [45,70],
      tactics: [70,100],
      magic_resistance: [25,40]
    }
  },
  {
    id: 37,
    name: 'hell cat',
    description: 'hell cat',
    armor: 30,
    stats: {
      str: [51,100],
      dex: [52,150],
      int: [13,85],
      hp: [48,67],
      taming: 71.1,
      barding: 41
    },
    offense: {
      min: 6,
      max: 12,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,1000]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 38,
    name: 'horse',
    description: 'horse',
    armor: null,
    karma: -300,
    fame: 300,
    stats: {
      str: [22,98],
      dex: [56,75],
      int: [6,10],
      hp: [28,45],
      taming: 11.1,
      barding: 22
    },
    offense: {
      min: 3,
      max: 4,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '3 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [29,44],
      tactics: [29,44],
      magic_resistance: [25,30]
    }
  },
  {
    id: 39,
    name: 'ice serpent',
    description: 'ice serpent',
    armor: 32,
    stats: {
      str: [216,245],
      dex: [26,50],
      int: [66,85],
      hp: [130,147],
      taming: null,
      barding: 59
    },
    offense: {
      min: 7,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Random Weapon, Armor or Shield',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 40,
    name: 'ice snake',
    description: 'ice snake',
    armor: 30,
    karma: -900,
    fame: 900,
    stats: {
      str: [42,54],
      dex: [36,45],
      int: [26,30],
      hp: [0,0],
      taming: null,
      barding: 21
    },
    offense: {
      min: 4,
      max: 12,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,1000]
      }
    ],
    credits: [50,100],
    skills: {
      wrestling: [39,54],
      tactics: [39,54],
      magic_resistance: [15,20]
    }
  },
  {
    id: 41,
    name: 'jack rabbit',
    description: 'jack rabbit',
    armor: 4,
    karma: 0,
    fame: 150,
    stats: {
      str: [15,15],
      dex: [25,25],
      int: [5,5],
      hp: [9,9],
      taming: 0,
      barding: 6
    },
    offense: {
      min: 1,
      max: 2,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '1 Raw Rib (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: 5.0,
      tactics: 5.0,
      magic_resistance: 5.0
    }
  },
  {
    id: 42,
    name: 'lava lizard',
    description: 'lava lizard',
    armor: 40,
    karma: 3000,
    fame: 3000,
    stats: {
      str: [126,150],
      dex: [56,75],
      int: [11,20],
      hp: [76,90],
      taming: 80.7,
      barding: 54
    },
    offense: {
      min: 6,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: [50,100],
    skills: {
      wrestling: [60,80],
      tactics: [60,80],
      magic_resistance: [55,70]
    }
  },
  {
    id: 43,
    name: 'lava serpent',
    description: 'lava serpent',
    armor: 40,
    karma: -4500,
    fame: 4500,
    stats: {
      str: [386,415],
      dex: [56,80],
      int: [66,85],
      hp: [232,249],
      taming: null,
      barding: 75
    },
    offense: {
      min: 10,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: [200,250],
    skills: {
      wrestling: [60,80],
      tactics: [65,70],
      magic_resistance: [25,70]
    }
  },
  {
    id: 44,
    name: 'lava snake',
    description: 'lava snake',
    armor: 24,
    karma: -600,
    fame: 600,
    stats: {
      str: [43,55],
      dex: [16,25],
      int: [6,10],
      hp: [28,32],
      taming: null,
      barding: 23
    },
    offense: {
      min: 1,
      max: 8,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,1000]
      }
    ],
    credits: [25,50],
    skills: {
      wrestling: [19,34],
      tactics: [19,34],
      magic_resistance: [15,20]
    }
  },
  {
    id: 45,
    name: 'llama',
    description: 'llama',
    armor: 16,
    karma: 0,
    fame: 300,
    stats: {
      str: [21,49],
      dex: [36,55],
      int: [16,30],
      hp: [15,27],
      taming: 35.1,
      barding: 15
    },
    offense: {
      min: 3,
      max: 5,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '1 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [19,29],
      tactics: [19,29],
      magic_resistance: [15,20]
    }
  },
  {
    id: 46,
    name: 'mountain goat',
    description: 'mountain goat',
    armor: 10,
    karma: 0,
    fame: 300,
    stats: {
      str: [22,64],
      dex: [56,75],
      int: [16,30],
      hp: [20,33],
      taming: 0,
      barding: 26
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {
      wrestling: [29,44],
      tactics: [29,44],
      magic_resistance: [25,30]
    }
  },
  {
    id: 47,
    name: 'nightmare',
    description: 'nightmare',
    armor: 60,
    karma: 14000,
    fame: 14000,
    stats: {
      str: [496,525],
      dex: [86,105],
      int: [86,125],
      hp: [298,315],
      taming: 95.1,
      barding: 92
    },
    offense: {
      min: 16,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Random Potion',
        chance: [1, 1]
      }
    ],
    credits: [400,500],
    skills: {
      wrestling: [80,92],
      tactics: [97,100],
      magic_resistance: [85,100]
    }
  },
  {
    id: 48,
    name: 'pack horse',
    description: 'pack horse',
    armor: 16,
    karma: -200,
    fame: 0,
    stats: {
      str: [44,120],
      dex: [36,55],
      int: [6,10],
      hp: [61,80],
      taming: 11.1,
      barding: 30
    },
    offense: {
      min: 5,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '3 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [29,44],
      tactics: [29,44],
      magic_resistance: [25,30]
    }
  },
  {
    id: 49,
    name: 'pack llama',
    description: 'pack llama',
    armor: 16,
    karma: -200,
    fame: 0,
    stats: {
      str: [52,80],
      dex: [36,55],
      int: [16,30],
      hp: [50,50],
      taming: 11.1,
      barding: 27
    },
    offense: {
      min: 2,
      max: 6,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '1 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [19,29],
      tactics: [19,29],
      magic_resistance: [15,20]
    }
  },
  {
    id: 50,
    name: 'panther',
    description: 'panther',
    armor: 16,
    karma: 0,
    fame: 450,
    stats: {
      str: [61,85],
      dex: [86,105],
      int: [26,50],
      hp: [37,51],
      taming: 53.1,
      barding: 32
    },
    offense: {
      min: 4,
      max: 12,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '10 Leather Hides (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [50,65],
      tactics: [50,65],
      magic_resistance: [15,30]
    }
  },
  {
    id: 51,
    name: 'phoenix',
    description: 'phoenix',
    armor: 60,
    stats: {
      str: [504,700],
      dex: [202,300],
      int: [504,700],
      hp: [340,383],
      taming: null,
      barding: 108
    },
    offense: {
      min: 25,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,100],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 52,
    name: 'pig',
    description: 'pig',
    armor: 12,
    karma: 0,
    fame: 150,
    stats: {
      str: [20,20],
      dex: [20,20],
      int: [5,5],
      hp: [12,12],
      taming: 11.1,
      barding: 6
    },
    offense: {
      min: 2,
      max: 4,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '1 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: 5.0,
      tactics: 5.0,
      magic_resistance: 5.0
    }
  },
  {
    id: 53,
    name: 'polar bear',
    description: 'polar bear',
    armor: 18,
    karma: 0,
    fame: 1500,
    stats: {
      str: [116,140],
      dex: [81,105],
      int: [26,50],
      hp: [70,84],
      taming: 35.1,
      barding: 46
    },
    offense: {
      min: 7,
      max: 12,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '2 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [45,70],
      tactics: [60,90],
      magic_resistance: [45,60]
    }
  },
  {
    id: 54,
    name: 'predator hell cat',
    description: 'predator hell cat',
    armor: 30,
    stats: {
      str: [161,185],
      dex: [96,115],
      int: [76,100],
      hp: [97,131],
      taming: 89.1,
      barding: 67
    },
    offense: {
      min: 5,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 55,
    name: 'rabbit',
    description: 'rabbit',
    armor: 6,
    karma: 0,
    fame: 150,
    stats: {
      str: [6,10],
      dex: [26,38],
      int: [6,14],
      hp: [4,6],
      taming: 0,
      barding: 6
    },
    offense: {
      min: 1,
      max: 1,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '1 Raw Rib (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: 5.0,
      tactics: 5.0,
      magic_resistance: 5.0
    }
  },
  {
    id: 56,
    name: 'raging grizzly bear',
    description: 'raging grizzly bear',
    armor: 24,
    karma: 10000,
    fame: 10000,
    stats: {
      str: [1,1],
      dex: [801,1],
      int: [151,400],
      hp: [751,930],
      taming: 59.1,
      barding: 127
    },
    offense: {
      min: 18,
      max: 23,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '4 Raw Ribs (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [73,88],
      tactics: [73,110],
      magic_resistance: [32,54]
    }
  },
  {
    id: 57,
    name: 'rat',
    description: 'rat',
    armor: 6,
    karma: -150,
    fame: 150,
    stats: {
      str: [9,9],
      dex: [35,35],
      int: [5,5],
      hp: [6,6],
      taming: 0,
      barding: 6
    },
    offense: {
      min: 1,
      max: 2,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,1000]
      }
    ],
    credits: [25,
      50],
    skills: {
      wrestling: 4.0,
      tactics: 4.0,
      magic_resistance: 4.0
    }
  },
  {
    id: 58,
    name: 'ridable llama',
    description: 'ridable llama',
    armor: 0,
    stats: {
      str: [21,49],
      dex: [56,75],
      int: [16,30],
      hp: [15,27],
      taming: 29.1,
      barding: 18
    },
    offense: {
      min: 3,
      max: 5,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 59,
    name: 'scaled swamp dragon',
    description: 'scaled swamp dragon',
    armor: 0,
    stats: {
      taming: 93.9,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 60,
    name: 'sewer rat',
    description: 'sewer rat',
    armor: 6,
    karma: -300,
    fame: 300,
    stats: {
      str: [9,9],
      dex: [25,25],
      int: [6,10],
      hp: [6,6],
      taming: -0.09,
      barding: 6
    },
    offense: {
      min: 1,
      max: 2,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,1000]
      }
    ],
    credits: [25,
      50],
    skills: {
      wrestling: 5.0,
      tactics: 5.0,
      magic_resistance: 5.0
    }
  },
  {
    id: 61,
    name: 'silver serpent',
    description: 'silver serpent',
    armor: 40,
    karma: -7000,
    fame: 7000,
    stats: {
      str: [161,360],
      dex: [151,300],
      int: [21,40],
      hp: [97,216],
      taming: null,
      barding: 85
    },
    offense: {
      min: 5,
      max: 21,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: [250,300],
    skills: {
      wrestling: [85,100],
      tactics: [80,95],
      magic_resistance: [95,100]
    }
  },
  {
    id: 62,
    name: 'silver steed',
    description: 'silver steed',
    armor: null,
    karma: 0,
    fame: 0,
    stats: {
      str: [78,
        80],
      dex: '53',
      int: '10',
      hp: [78,
        80],
      taming: 103.1,
      barding: 30
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {
      wrestling: 39,
      tactics: 32,
      magic_resistance: '26'
    }
  },
  {
    id: 63,
    name: 'skeletal mount',
    description: 'skeletal mount',
    armor: 0,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 64,
    name: 'snake',
    description: 'snake',
    armor: 16,
    karma: -300,
    fame: 300,
    stats: {
      str: [22,
        34],
      dex: [16,
        25],
      int: [6,
        10],
      hp: [15,
        19],
      taming: 59.1,
      barding: 29
    },
    offense: {
      min: 1,
      max: 4,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,1000]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [19,
        34],
      tactics: [19,
        34],
      magic_resistance: [15,
        20
      ]
    }
  },
  {
    id: 65,
    name: 'snow leopard',
    description: 'snow leopard',
    armor: 24,
    karma: 0,
    fame: 450,
    stats: {
      str: [56,
        80],
      dex: [66,
        85],
      int: [26,
        50],
      hp: [34,
        48],
      taming: 53.1,
      barding: 29
    },
    offense: {
      min: 3,
      max: 9,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '8 Leather Hides (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [40,
        50],
      tactics: [45,
        60],
      magic_resistance: [25,
        35
      ]
    }
  },
  {
    id: 66,
    name: 'swamp dragon',
    description: 'swamp dragon',
    armor: 0,
    karma: -2000,
    fame: 2000,
    stats: {
      str: [201,
        300],
      dex: [66,
        85],
      int: [61,
        100],
      hp: [121,
        180],
      taming: 93.9,
      barding: 59
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        55],
      magic_resistance: [45,
        55
      ]
    }
  },
  {
    id: 67,
    name: 'timber wolf',
    description: 'timber wolf',
    armor: 16,
    karma: 0,
    fame: 450,
    stats: {
      str: [56,
        80],
      dex: [56,
        75],
      int: [11,
        25],
      hp: [34,
        48],
      taming: 23.1,
      barding: 28
    },
    offense: {
      min: 5,
      max: 9,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '5 Leather Hides (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [40,
        60],
      tactics: [30,
        50],
      magic_resistance: [27,
        45
      ]
    }
  },
  {
    id: 68,
    name: 'tropical bird',
    description: 'tropical bird',
    armor: 2,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: 0,
      barding: 7
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '25 Feathers',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 69,
    name: 'unicorn',
    description: 'unicorn',
    armor: 0,
    karma: 9000,
    fame: 9000,
    stats: {
      str: [296,
        325],
      dex: [96,
        115],
      int: [186,
        225],
      hp: [191,
        210],
      taming: 95.1,
      barding: 89
    },
    offense: {
      min: 16,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: [300,
      350],
    skills: {
      wrestling: [80,
        92],
      tactics: [20,
        22],
      magic_resistance: [75,
        90
      ]
    }
  },
  {
    id: 70,
    name: 'walrus',
    description: 'walrus',
    armor: 18,
    karma: 0,
    fame: 150,
    stats: {
      str: [21,
        29],
      dex: [46,
        55],
      int: [16,
        20],
      hp: [14,
        17],
      taming: 35.1,
      barding: 15
    },
    offense: {
      min: 4,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '12 Leather Hides (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [19,
        29],
      tactics: [19,
        29],
      magic_resistance: [15,
        20
      ]
    }
  },
  {
    id: 71,
    name: 'white wolf',
    description: 'white wolf',
    armor: 16,
    karma: 0,
    fame: 450,
    stats: {
      str: [56,
        80],
      dex: [56,
        75],
      int: [31,
        55],
      hp: [34,
        48],
      taming: 65.1,
      barding: 27
    },
    offense: {
      min: 3,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'animal',
    attackable: true,
    inventory: [
      {
        description: '6 Leather Hides (Carve)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [45,
        60],
      tactics: [45,
        60],
      magic_resistance: [20,
        35
      ]
    }
  },
  {
    id: 72,
    name: 'arachnid enforcer',
    description: 'arachnid enforcer',
    armor: 50,
    stats: {
      str: [750,
        850],
      dex: [105,
        115],
      int: [420,
        475],
      hp: [900,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 14,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 73,
    name: 'black solen infiltrator queen',
    description: 'black solen infiltrator queen',
    armor: 50,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 74,
    name: 'black solen infiltrator warrior',
    description: 'black solen infiltrator warrior',
    armor: 40,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 75,
    name: 'black solen queen',
    description: 'black solen queen',
    armor: 45,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 76,
    name: 'black solen warrior',
    description: 'black solen warrior',
    armor: 35,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 77,
    name: 'black solen worker',
    description: 'black solen worker',
    armor: 28,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 78,
    name: 'dread spider',
    description: 'dread spider',
    armor: 36,
    karma: -5000,
    fame: 5000,
    stats: {
      str: [196,
        220],
      dex: [126,
        145],
      int: [286,
        310],
      hp: [118,
        132],
      taming: null,
      barding: 95
    },
    offense: {
      min: 5,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: [450,
      650],
    skills: {
      wrestling: [87,
        96],
      tactics: [85,
        97],
      magic_resistance: [45,
        55
      ]
    }
  },
  {
    id: 79,
    name: 'drone mage',
    description: 'drone mage',
    armor: 20,
    stats: {
      str: [250,
        300],
      dex: [90,
        120],
      int: [1,
        1],
      hp: [250,
        275],
      taming: null,
      barding: 119
    },
    offense: {
      min: 10,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 80,
    name: 'drone sentry',
    description: 'drone sentry',
    armor: 20,
    stats: {
      str: [200,
        225],
      dex: [110,
        120],
      int: [1,
        1],
      hp: [175,
        250],
      taming: null,
      barding: 121
    },
    offense: {
      min: 10,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 81,
    name: 'drone spitter',
    description: 'drone spitter',
    armor: 25,
    stats: {
      str: [325,
        350],
      dex: [90,
        120],
      int: [1,
        1],
      hp: [325,
        350],
      taming: null,
      barding: 118
    },
    offense: {
      min: 12,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 82,
    name: 'drone warrior',
    description: 'drone warrior',
    armor: 30,
    stats: {
      str: [425,
        475],
      dex: [90,
        120],
      int: [1,
        1],
      hp: [425,
        475],
      taming: null,
      barding: 124
    },
    offense: {
      min: 14,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 83,
    name: 'drone worker',
    description: 'drone worker',
    armor: 15,
    stats: {
      str: [86,
        100],
      dex: [70,
        95],
      int: [1,
        1],
      hp: [175,
        250],
      taming: null,
      barding: 111
    },
    offense: {
      min: 10,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 84,
    name: 'frost spider',
    description: 'frost spider',
    armor: 28,
    karma: -775,
    fame: 775,
    stats: {
      str: [76,
        100],
      dex: [126,
        145],
      int: [36,
        60],
      hp: [46,
        60],
      taming: 75.7,
      barding: 40
    },
    offense: {
      min: 6,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [75,
      125],
    skills: {
      wrestling: [50,
        65],
      tactics: [35,
        50],
      magic_resistance: [25,
        40
      ]
    }
  },
  {
    id: 85,
    name: 'giant black widow',
    description: 'giant black widow',
    armor: 24,
    karma: -3500,
    fame: 3500,
    stats: {
      str: [76,
        100],
      dex: [96,
        115],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 70.6
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: [125,
      175],
    skills: {
      wrestling: [70,
        85],
      tactics: [65,
        80],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 86,
    name: 'giant spider',
    description: 'giant spider',
    armor: 16,
    karma: -600,
    fame: 600,
    stats: {
      str: [76,
        100],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [46,
        60],
      taming: 59.1,
      barding: 53
    },
    offense: {
      min: 5,
      max: 13,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [25,
      50],
    skills: {
      wrestling: [50,
        65],
      tactics: [35,
        50],
      magic_resistance: [25,
        40
      ]
    }
  },
  {
    id: 87,
    name: 'ilyxia the arachnid queen',
    description: 'ilyxia the arachnid queen',
    armor: 60,
    stats: {
      str: [819,
        910],
      dex: [125,
        135],
      int: [420,
        475],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 16,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 88,
    name: 'red solen infiltrator queen',
    description: 'red solen infiltrator queen',
    armor: 50,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 89,
    name: 'red solen infiltrator warrior',
    description: 'red solen infiltrator warrior',
    armor: 40,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 90,
    name: 'red solen queen',
    description: 'red solen queen',
    armor: 45,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 91,
    name: 'red solen warrior',
    description: 'red solen warrior',
    armor: 35,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 92,
    name: 'red solen worker',
    description: 'red solen worker',
    armor: 28,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 93,
    name: 'terathan avenger',
    description: 'terathan avenger',
    armor: 50,
    karma: 15000,
    fame: 15000,
    stats: {
      str: [467,
        645],
      dex: [77,
        95],
      int: [126,
        150],
      hp: [296,
        372],
      taming: null,
      barding: 104
    },
    offense: {
      min: 18,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [550,
      600],
    skills: {
      wrestling: [90,
        100],
      tactics: [90,
        100],
      magic_resistance: [65,
        80
      ]
    }
  },
  {
    id: 94,
    name: 'terathan drone',
    description: 'terathan drone',
    armor: 24,
    karma: 2000,
    fame: 2000,
    stats: {
      str: [36,
        65],
      dex: [96,
        145],
      int: [21,
        45],
      hp: [22,
        39],
      taming: null,
      barding: 32
    },
    offense: {
      min: 6,
      max: 12,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [40,
        50],
      tactics: [30,
        50],
      magic_resistance: [30,
        45
      ]
    }
  },
  {
    id: 95,
    name: 'terathan infiltrator',
    description: 'terathan infiltrator',
    armor: 70,
    stats: {
      str: [810,
        910],
      dex: [125,
        135],
      int: [420,
        475],
      hp: [1,
        1],
      taming: null,
      barding: 151
    },
    offense: {
      min: 22,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [
      {
        chance: [1,250],
        description: 'Terathan Infiltrator Statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 96,
    name: 'terathan matriarch',
    description: 'terathan matriarch',
    armor: 0,
    karma: 10000,
    fame: 10000,
    stats: {
      str: [316,
        405],
      dex: [96,
        115],
      int: [366,
        455],
      hp: [190,
        243],
      taming: null,
      barding: 87
    },
    offense: {
      min: 11,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potions'
      }
    ],
    credits: [570,
      605],
    skills: {
      wrestling: [60,
        80],
      tactics: [50,
        70],
      magic_resistance: [90,
        100
      ]
    }
  },
  {
    id: 97,
    name: 'terathan warrior',
    description: 'terathan warrior',
    armor: 30,
    karma: 4000,
    fame: 4000,
    stats: {
      str: [166,
        215],
      dex: [96,
        145],
      int: [41,
        65],
      hp: [100,
        129],
      taming: null,
      barding: 61
    },
    offense: {
      min: 7,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      175],
    skills: {
      wrestling: [80,
        90],
      tactics: [80,
        100],
      magic_resistance: [60,
        75
      ]
    }
  },
  {
    id: 98,
    name: 'anaconda',
    description: 'anaconda',
    armor: 55,
    stats: {
      str: [1,
        1],
      dex: [153,
        172],
      int: [300,
        400],
      hp: [1,
        1],
      taming: null,
      barding: 189
    },
    offense: {
      min: 12,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 99,
    name: 'arctic ogre mage',
    description: 'arctic ogre mage',
    armor: 65,
    stats: {
      str: [1,
        1],
      dex: [82,
        95],
      int: [1,
        1],
      hp: [1,
        1],
      taming: null,
      barding: 184
    },
    offense: {
      min: 25,
      max: 31,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 100,
    name: 'azure dragon',
    description: 'azure dragon',
    armor: 80,
    stats: {
      str: [1,
        1],
      dex: [120,
        130],
      int: [770,
        820],
      hp: [3,
        3],
      taming: null,
      barding: 239
    },
    offense: {
      min: 20,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'PlatinumCoin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 101,
    name: 'beast tamer',
    description: 'beast tamer',
    armor: 60,
    stats: {
      str: [605,725],
      dex: [125,150],
      int: [505,750],
      hp: [8,9],
      taming: null,
      barding: 413
    },
    offense: {
      min: 29,
      max: 36,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Mask of the Wilds'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 102,
    name: 'beholder',
    description: 'beholder',
    armor: 65,
    stats: {
      str: [630,
        730],
      dex: [86,
        105],
      int: [910,
        950],
      hp: [1,
        1],
      taming: null,
      barding: 184
    },
    offense: {
      min: 12,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 103,
    name: 'colossus',
    description: 'colossus',
    armor: 78,
    stats: {
      str: [900,
        1],
      dex: [114,
        155],
      int: [1,
        1],
      hp: [2,
        3],
      taming: null,
      barding: 208
    },
    offense: {
      min: 16,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 104,
    name: 'dark one',
    description: 'dark one',
    armor: 65,
    stats: {
      str: [770,
        830],
      dex: [146,
        185],
      int: [1,
        1],
      hp: [1,
        1],
      taming: null,
      barding: 243
    },
    offense: {
      min: 14,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,4],
        description: 'Peculiar Meat (Carve)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 105,
    name: 'diseased blood elemental',
    description: 'diseased blood elemental',
    armor: 80,
    karma: 8500,
    fame: 8500,
    stats: {
      str: [880,
        950],
      dex: [95,
        105],
      int: [1,
        1],
      hp: [1,
        2],
      taming: null,
      barding: 213
    },
    offense: {
      min: 21,
      max: 31,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: [651,
      744],
    skills: {
      wrestling: [123,
        138],
      tactics: [130,
        137],
      magic_resistance: [116,
        125
      ]
    }
  },
  {
    id: 106,
    name: 'efreet sultan',
    description: 'efreet sultan',
    armor: 70,
    stats: {
      str: [810,
        855],
      dex: [266,
        285],
      int: [1,
        1],
      hp: [1,
        1],
      taming: null,
      barding: 143
    },
    offense: {
      min: 13,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 107,
    name: 'elder wyrm',
    description: 'elder wyrm',
    armor: 90,
    stats: {
      str: [1,
        1],
      dex: [125,
        145],
      int: [1,
        1],
      hp: [5,
        5],
      taming: null,
      barding: 365
    },
    offense: {
      min: 29,
      max: 36,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,4],
        description: 'Peculiar Meat (Carve)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 108,
    name: 'grand visor of chaos',
    description: 'grand visor of chaos',
    armor: 70,
    stats: {
      str: [1,
        1],
      dex: [230,
        275],
      int: [205,
        225],
      hp: [2,
        2],
      taming: null,
      barding: 152
    },
    offense: {
      min: 12,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 109,
    name: 'jungle titan',
    description: 'jungle titan',
    armor: 48,
    stats: {
      str: [600,
        750],
      dex: [114,
        155],
      int: [1,
        1],
      hp: [2,
        2],
      taming: null,
      barding: 185
    },
    offense: {
      min: 16,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 110,
    name: 'ogre mage',
    description: 'ogre mage',
    armor: 65,
    stats: {
      str: [1,
        1],
      dex: [90,
        99],
      int: [720,
        770],
      hp: [1,
        1],
      taming: null,
      barding: 180
    },
    offense: {
      min: 20,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 111,
    name: 'ophidian queen',
    description: 'ophidian queen',
    armor: 78,
    stats: {
      str: [810,
        910],
      dex: [125,
        135],
      int: [420,
        475],
      hp: [1,
        2],
      taming: null,
      barding: 172
    },
    offense: {
      min: 18,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 112,
    name: 'purveyor of darkness',
    description: 'purveyor of darkness',
    armor: 100,
    stats: {
      str: [1,
        1],
      dex: [225,
        255],
      int: [600,
        700],
      hp: [4,
        4],
      taming: null,
      barding: 299
    },
    offense: {
      min: 27,
      max: 34,
      speed: 2.5
    },
    move: 1,
    mob_type: 'daemons',
    attackable: true,
    inventory: [
      {
        chance: [1,250],
        description: 'Purveyor of Darkness Statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 113,
    name: 'rabbit of caerbannog',
    description: 'rabbit of caerbannog',
    armor: 60,
    stats: {
      str: [605,
        805],
      dex: [125,
        150],
      int: [505,
        750],
      hp: [9,
        10],
      taming: null,
      barding: null
    },
    offense: {
      min: 20,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,25],
        description: 'Rabbit of Caerbannog Statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 114,
    name: 'reptile tamer',
    description: 'reptile tamer',
    armor: 60,
    stats: {
      str: [605,
        725],
      dex: [125,
        150],
      int: [505,
        750],
      hp: [8,
        9],
      taming: null,
      barding: 413
    },
    offense: {
      min: 29,
      max: 36,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin (All Players)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 115,
    name: 'terathan infiltrator',
    description: 'terathan infiltrator',
    armor: 70,
    stats: {
      str: [810,
        910],
      dex: [125,
        135],
      int: [420,
        475],
      hp: [1,
        1],
      taming: null,
      barding: 151
    },
    offense: {
      min: 22,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'arachnids',
    attackable: true,
    inventory: [
      {
        chance: [1,250],
        description: 'Terathan Infiltrator Statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 116,
    name: 'two headed behemoth',
    description: 'two headed behemoth',
    armor: 78,
    stats: {
      str: [900,
        1],
      dex: [115,
        155],
      int: [1,
        1],
      hp: [2,
        3],
      taming: null,
      barding: 188
    },
    offense: {
      min: 16,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,250],
        description: 'two headed behemoth statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 117,
    name: 'wyvern monarch',
    description: 'wyvern monarch',
    armor: 55,
    stats: {
      str: [1,
        1],
      dex: [153,
        172],
      int: [300,
        400],
      hp: [650,
        725],
      taming: null,
      barding: 125
    },
    offense: {
      min: 12,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,250],
        description: 'Wyvern Monarch Statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 118,
    name: 'bad santa',
    description: 'bad santa',
    armor: 55,
    stats: {
      str: [250,
        275],
      dex: [126,
        145],
      int: [676,
        905],
      hp: [2,
        3],
      taming: null,
      barding: null
    },
    offense: {
      min: 24,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'champions',
    attackable: true,
    inventory: [
      {
        description: 'Santas Clothing  4 Possible Items',
        chance: [1,4],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 119,
    name: 'barracoon',
    description: 'barracoon',
    armor: 70,
    karma: 22500,
    fame: 22500,
    stats: {
      str: [305,
        425],
      dex: [72,
        150],
      int: [505,
        750],
      hp: [4,
        4],
      taming: null,
      barding: 237
    },
    offense: {
      min: 25,
      max: 35,
      speed: 2.5
    },
    move: 1,
    mob_type: 'champions',
    attackable: true,
    inventory: [
      {
        description: 'Skull of Greed',
        chance: [1, 1]
      }
    ],
    credits: [4000,
      6000],
    skills: {
      wrestling: [118,
        122],
      tactics: [118,
        120],
      magic_resistance: '100.0'
    }
  },
  {
    id: 120,
    name: 'cupid',
    description: 'cupid',
    armor: 55,
    stats: {
      str: [250,
        275],
      dex: [126,
        145],
      int: [676,
        905],
      hp: [4,
        5],
      taming: null,
      barding: null
    },
    offense: {
      min: 24,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'champions',
    attackable: true,
    inventory: [
      {
        description: 'vial of tears (2014)',
        chance: [1,5],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 121,
    name: 'harrower',
    description: 'harrower',
    armor: 60,
    karma: 25000,
    fame: 25000,
    stats: {
      str: [900,
        1],
      dex: [125,
        135],
      int: [1,
        1],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'champions',
    attackable: true,
    inventory: [
      {
        description: 'true harrower statuette',
        chance: [1,20],
      }
    ],
    credits: 0,
    skills: {
      wrestling: [115,
        120],
      tactics: [115,
        120],
      magic_resistance: [115,
        160
      ]
    }
  },
  {
    id: 122,
    name: 'lord oaks',
    description: 'lord oaks',
    armor: 100,
    karma: 22500,
    fame: 22500,
    stats: {
      str: [403,
        850],
      dex: [101,
        150],
      int: [503,
        800],
      hp: [4,
        5],
      taming: null,
      barding: 272
    },
    offense: {
      min: 21,
      max: 33,
      speed: 2.5
    },
    move: 1,
    mob_type: 'champions',
    attackable: true,
    inventory: [
      {
        description: 'Skull of Enlightenment',
        chance: [1, 1]
      }
    ],
    credits: [3500,
      6000],
    skills: {
      wrestling: [115,
        null],
      tactics: [119,
        null],
      magic_resistance: [100,
        150
      ]
    }
  },
  {
    id: 123,
    name: 'mephitis',
    description: 'mephitis',
    armor: 80,
    karma: 22500,
    fame: 22500,
    stats: {
      str: [505,
        1],
      dex: [102,
        300],
      int: [402,
        600],
      hp: [5,
        7],
      taming: null,
      barding: 352
    },
    offense: {
      min: 21,
      max: 33,
      speed: 2.5
    },
    move: 1,
    mob_type: 'champions',
    attackable: true,
    inventory: [
      {
        description: 'Skull of Venom',
        chance: [1, 1]
      }
    ],
    credits: [2500,
      3000],
    skills: {
      wrestling: [123,
        126],
      tactics: [118,
        120],
      magic_resistance: [104,
        112
      ]
    }
  },
  {
    id: 124,
    name: 'neira',
    description: 'neira',
    armor: 30,
    karma: 0,
    fame: 0,
    stats: {
      str: [305,
        425],
      dex: [72,
        150],
      int: [505,
        750],
      hp: [6,
        8],
      taming: null,
      barding: 399
    },
    offense: {
      min: 25,
      max: 35,
      speed: 2.5
    },
    move: 1,
    mob_type: 'champions',
    attackable: true,
    inventory: [
      {
        description: 'Skull of Death',
        chance: [1, 1]
      }
    ],
    credits: [2500,
      3000],
    skills: {
      wrestling: [97,
        100],
      tactics: [97,
        100],
      magic_resistance: '150.0'
    }
  },
  {
    id: 125,
    name: 'rikktor',
    description: 'rikktor',
    armor: 130,
    karma: 22500,
    fame: 22500,
    stats: {
      str: [701,
        900],
      dex: [201,
        350],
      int: [51,
        100],
      hp: [6,
        9],
      taming: null,
      barding: 358
    },
    offense: {
      min: 28,
      max: 55,
      speed: 2.5
    },
    move: 1,
    mob_type: 'champions',
    attackable: true,
    inventory: [
      {
        description: 'Skull of Power',
        chance: [1, 1]
      }
    ],
    credits: [4000,
      5000],
    skills: {
      wrestling: [118,
        123],
      tactics: [100, 100],
      magic_resistance: [140,
        160
      ]
    }
  },
  {
    id: 126,
    name: 'semidar',
    description: 'semidar',
    armor: 20,
    karma: 24000,
    fame: 24000,
    stats: {
      str: [502,
        600],
      dex: [102,
        200],
      int: [601,
        750],
      hp: [2,
        4],
      taming: null,
      barding: 243
    },
    offense: {
      min: 29,
      max: 35,
      speed: 2.5
    },
    move: 1,
    mob_type: 'champions',
    attackable: true,
    inventory: [
      {
        description: 'Skull of Pain',
        chance: [1, 1]
      }
    ],
    credits: [6000,
      6500],
    skills: {
      wrestling: [117,
        123],
      tactics: [129,
        131],
      magic_resistance: [120,
        140
      ]
    }
  },
  {
    id: 127,
    name: 'silvani',
    description: 'silvani',
    armor: 50,
    karma: 0,
    fame: 0,
    stats: {
      str: [253,
        400],
      dex: [157,
        850],
      int: [503,
        800],
      hp: [600,
        600],
      taming: null,
      barding: 142
    },
    offense: {
      min: 27,
      max: 38,
      speed: 2.5
    },
    move: 1,
    mob_type: 'champions',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,20],
      }
    ],
    credits: [2000,
      3000],
    skills: {
      wrestling: [97,
        100],
      tactics: [97,
        100],
      magic_resistance: [100,
        150
      ]
    }
  },
  {
    id: 128,
    name: 'the true harrower',
    description: 'the true harrower',
    armor: 60,
    karma: 25000,
    fame: 25000,
    stats: {
      str: [900,
        1],
      dex: [125,
        135],
      int: [1,
        1],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'champions',
    attackable: true,
    inventory: [
      {
        description: 'true harrower statuette',
        chance: [1,20],
      }
    ],
    credits: 0,
    skills: {
      wrestling: [115,
        120],
      tactics: [115,
        120],
      magic_resistance: [115,
        160
      ]
    }
  },
  {
    id: 129,
    name: 'arcane daemon',
    description: 'arcane daemon',
    armor: 55,
    karma: -10000,
    fame: 7000,
    stats: {
      str: [131,
        150],
      dex: [126,
        145],
      int: [301,
        350],
      hp: [101,
        115],
      taming: null,
      barding: 88
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'daemons',
    attackable: true,
    inventory: [],
    credits: [250,
      300],
    skills: {
      wrestling: [60,
        80],
      tactics: [70,
        80],
      magic_resistance: [85,
        95
      ]
    }
  },
  {
    id: 130,
    name: 'balron',
    description: 'balron',
    armor: 90,
    karma: -24000,
    fame: 24000,
    stats: {
      str: [969,
        1],
      dex: [177,
        255],
      int: [151,
        250],
      hp: [592,
        711],
      taming: null,
      barding: 125
    },
    offense: {
      min: 22,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'daemons',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: [1200,
      1650],
    skills: {
      wrestling: [90,
        100],
      tactics: [90,
        100],
      magic_resistance: [100,
        150
      ]
    }
  },
  {
    id: 131,
    name: 'chaos daemon',
    description: 'chaos daemon',
    armor: 15,
    karma: -3000,
    fame: 3000,
    stats: {
      str: [106,
        130],
      dex: [171,
        200],
      int: [56,
        80],
      hp: [91,
        110],
      taming: null,
      barding: 71.5
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'daemons',
    attackable: true,
    inventory: [],
    credits: [175,
      225],
    skills: {
      wrestling: [95,
        100],
      tactics: [70,
        80],
      magic_resistance: [85,
        95
      ]
    }
  },
  {
    id: 132,
    name: 'daemon',
    description: 'daemon',
    armor: 58,
    karma: -15000,
    fame: 15000,
    stats: {
      str: [476,
        505],
      dex: [76,
        95],
      int: [301,
        325],
      hp: [286,
        303],
      taming: null,
      barding: null
    },
    offense: {
      min: 7,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'daemons',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [550,
      650],
    skills: {
      wrestling: [60,
        80],
      tactics: [70,
        80],
      magic_resistance: [85,
        95
      ]
    }
  },
  {
    id: 133,
    name: 'ice fiend',
    description: 'ice fiend',
    armor: 60,
    karma: -18000,
    fame: 18000,
    stats: {
      str: [376,
        405],
      dex: [176,
        195],
      int: [201,
        225],
      hp: [226,
        243],
      taming: null,
      barding: null
    },
    offense: {
      min: 8,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'daemons',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: [650,
      800],
    skills: {
      wrestling: [80,
        100],
      tactics: [80,
        90],
      magic_resistance: [75,
        85
      ]
    }
  },
  {
    id: 134,
    name: 'moloch',
    description: 'moloch',
    armor: 32,
    karma: -7500,
    fame: 7500,
    stats: {
      str: [331,
        360],
      dex: [66,
        85],
      int: [41,
        65],
      hp: [171,
        200],
      taming: null,
      barding: 72.5
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'daemons',
    attackable: true,
    inventory: [],
    credits: [300,
      350],
    skills: {
      wrestling: [70,
        90],
      tactics: [75,
        90],
      magic_resistance: [65,
        75
      ]
    }
  },
  {
    id: 135,
    name: 'purveyor of darkness',
    description: 'purveyor of darkness',
    armor: 100,
    stats: {
      str: [1,
        1],
      dex: [225,
        255],
      int: [600,
        700],
      hp: [4,
        4],
      taming: null,
      barding: 299
    },
    offense: {
      min: 27,
      max: 34,
      speed: 2.5
    },
    move: 1,
    mob_type: 'daemons',
    attackable: true,
    inventory: [
      {
        chance: [1,250],
        description: 'Purveyor of Darkness Statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 136,
    name: 'acid elemental',
    description: 'acid elemental',
    armor: 40,
    karma: -10000,
    fame: 10000,
    stats: {
      str: [326,
        355],
      dex: [66,
        85],
      int: [271,
        295],
      hp: [196,
        213],
      taming: null,
      barding: 100
    },
    offense: {
      min: 9,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [400,
      500],
    skills: {
      wrestling: [70,
        90],
      tactics: [80,
        90],
      magic_resistance: [60,
        75
      ]
    }
  },
  {
    id: 137,
    name: 'agapite elemental',
    description: 'agapite elemental',
    armor: 32,
    karma: -3500,
    fame: 3500,
    stats: {
      str: [226,
        255],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [136,
        153],
      taming: null,
      barding: 63
    },
    offense: {
      min: 28,
      max: 28,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      150],
    skills: {
      wrestling: [60,
        100],
      tactics: [60,
        100],
      magic_resistance: [50,
        95
      ]
    }
  },
  {
    id: 138,
    name: 'air elemental',
    description: 'air elemental',
    armor: 40,
    karma: -4500,
    fame: 4500,
    stats: {
      str: [126,
        155],
      dex: [166,
        185],
      int: [101,
        125],
      hp: [76,
        93],
      taming: null,
      barding: 71
    },
    offense: {
      min: 8,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [175,
      225],
    skills: {
      wrestling: [60,
        80],
      tactics: [60,
        80],
      magic_resistance: [60,
        75
      ]
    }
  },
  {
    id: 139,
    name: 'amber golem',
    description: 'amber golem',
    armor: 35,
    stats: {
      str: [86,
        100],
      dex: [70,
        95],
      int: [1,
        1],
      hp: [200,
        275],
      taming: null,
      barding: 120
    },
    offense: {
      min: 8,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 140,
    name: 'amethyst golem',
    description: 'amethyst golem',
    armor: 38,
    stats: {
      str: [200,
        225],
      dex: [110,
        120],
      int: [1,
        1],
      hp: [200,
        225],
      taming: null,
      barding: 123
    },
    offense: {
      min: 10,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 141,
    name: 'blood elemental',
    description: 'blood elemental',
    armor: 60,
    karma: -12500,
    fame: 12500,
    stats: {
      str: [526,
        615],
      dex: [66,
        85],
      int: [226,
        350],
      hp: [316,
        369],
      taming: null,
      barding: 93
    },
    offense: {
      min: 17,
      max: 27,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [700,
      900],
    skills: {
      wrestling: [80,
        100],
      tactics: [80,
        100],
      magic_resistance: [80,
        95
      ]
    }
  },
  {
    id: 142,
    name: 'bronze elemental',
    description: 'bronze elemental',
    armor: 29,
    karma: -5000,
    fame: 5000,
    stats: {
      str: [226,
        255],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [136,
        153],
      taming: null,
      barding: 62
    },
    offense: {
      min: 9,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      150],
    skills: {
      wrestling: [60,
        100],
      tactics: [60,
        100],
      magic_resistance: [50,
        95
      ]
    }
  },
  {
    id: 143,
    name: 'citrine golem',
    description: 'citrine golem',
    armor: 41,
    stats: {
      str: [325,
        350],
      dex: [90,
        120],
      int: [1,
        1],
      hp: [325,
        350],
      taming: null,
      barding: 111
    },
    offense: {
      min: 12,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 144,
    name: 'copper elemental',
    description: 'copper elemental',
    armor: 26,
    karma: -4800,
    fame: 4800,
    stats: {
      str: [226,
        255],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [136,
        153],
      taming: null,
      barding: 63
    },
    offense: {
      min: 9,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      150],
    skills: {
      wrestling: [60,
        100],
      tactics: [60,
        100],
      magic_resistance: [50,
        95
      ]
    }
  },
  {
    id: 145,
    name: 'diamond golem',
    description: 'diamond golem',
    armor: 50,
    stats: {
      str: [750,
        850],
      dex: [50,
        65],
      int: [25,
        35],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 10,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 146,
    name: 'diseased blood elemental',
    description: 'diseased blood elemental',
    armor: 80,
    karma: 8500,
    fame: 8500,
    stats: {
      str: [880,
        950],
      dex: [95,
        105],
      int: [1,
        1],
      hp: [1,
        2],
      taming: null,
      barding: 213
    },
    offense: {
      min: 21,
      max: 31,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: [651,
      744],
    skills: {
      wrestling: [123,
        138],
      tactics: [130,
        137],
      magic_resistance: [116,
        125
      ]
    }
  },
  {
    id: 147,
    name: 'dull copper elemental',
    description: 'dull copper elemental',
    armor: 20,
    karma: -3500,
    fame: 3500,
    stats: {
      str: [226,
        255],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [136,
        153],
      taming: null,
      barding: 63
    },
    offense: {
      min: 9,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      175],
    skills: {
      wrestling: [60,
        100],
      tactics: [60,
        100],
      magic_resistance: [50,
        95
      ]
    }
  },
  {
    id: 148,
    name: 'earth elemental',
    description: 'earth elemental',
    armor: 34,
    karma: -3500,
    fame: 3500,
    stats: {
      str: [126,
        155],
      dex: [66,
        85],
      int: [71,
        92],
      hp: [76,
        93],
      taming: null,
      barding: 51
    },
    offense: {
      min: 9,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [175,
      225],
    skills: {
      wrestling: [60,
        100],
      tactics: [60,
        100],
      magic_resistance: [50,
        95
      ]
    }
  },
  {
    id: 149,
    name: 'efreet',
    description: 'efreet',
    armor: 98,
    karma: -10000,
    fame: 10000,
    stats: {
      str: [326,
        355],
      dex: [266,
        285],
      int: [171,
        195],
      hp: [196,
        213],
      taming: null,
      barding: 83
    },
    offense: {
      min: 11,
      max: 13,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Random Daemon Bone Armor Piece'
      }
    ],
    credits: [400,500],
    skills: {
      wrestling: [60,80],
      tactics: [60,80],
      magic_resistance: [60,75]
    }
  },
  {
    id: 150,
    name: 'efreet sultan',
    description: 'efreet sultan',
    armor: 70,
    stats: {
      str: [810,855],
      dex: [266,285],
      int: [1,1],
      hp: [1,1],
      taming: null,
      barding: 143
    },
    offense: {
      min: 13,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 151,
    name: 'emerald golem',
    description: 'emerald golem',
    armor: 41,
    stats: {
      str: [325,
        350],
      dex: [90,
        120],
      int: [1,
        1],
      hp: [325,
        350],
      taming: null,
      barding: 108
    },
    offense: {
      min: 12,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 152,
    name: 'fire elemental',
    description: 'fire elemental',
    armor: 40,
    karma: -4500,
    fame: 4500,
    stats: {
      str: [126,
        155],
      dex: [166,
        185],
      int: [101,
        125],
      hp: [76,
        93],
      taming: null,
      barding: 72
    },
    offense: {
      min: 7,
      max: 9,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Lightsource'
      }
    ],
    credits: [175,
      225],
    skills: {
      wrestling: [70,
        100],
      tactics: [80,
        100],
      magic_resistance: [75,
        105
      ]
    }
  },
  {
    id: 153,
    name: 'golden elemental',
    description: 'golden elemental',
    armor: 60,
    karma: -3500,
    fame: 3500,
    stats: {
      str: [226,
        255],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [136,
        153],
      taming: null,
      barding: 63
    },
    offense: {
      min: 9,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      150],
    skills: {
      wrestling: [60,
        100],
      tactics: [60,
        100],
      magic_resistance: [50,
        95
      ]
    }
  },
  {
    id: 154,
    name: 'ice elemental',
    description: 'ice elemental',
    armor: 40,
    karma: -4000,
    fame: 4000,
    stats: {
      str: [156,
        185],
      dex: [96,
        115],
      int: [171,
        192],
      hp: [94,
        111],
      taming: null,
      barding: 73
    },
    offense: {
      min: 10,
      max: 21,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [275,
      325],
    skills: {
      wrestling: [60,
        100],
      tactics: [70,
        100],
      magic_resistance: [30,
        80
      ]
    }
  },
  {
    id: 155,
    name: 'marble elemental',
    description: 'marble elemental',
    armor: 38,
    stats: {
      str: [226,
        255],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [136,
        153],
      taming: null,
      barding: 63
    },
    offense: {
      min: 28,
      max: 28,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 156,
    name: 'ore golem',
    description: 'ore golem',
    armor: 38,
    stats: {
      str: [201,
        225],
      dex: [106,
        115],
      int: [71,
        92],
      hp: [115,
        135],
      taming: null,
      barding: 61
    },
    offense: {
      min: 22,
      max: 28,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Pile of Ore (Approx 50 ingots Worth)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 157,
    name: 'ore golem lord',
    description: 'ore golem lord',
    armor: 38,
    stats: {
      str: [235,
        265],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [156,
        183],
      taming: null,
      barding: 64
    },
    offense: {
      min: 24,
      max: 30,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Studded Gloves Of Mining'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 158,
    name: 'poison elemental',
    description: 'poison elemental',
    armor: 70,
    karma: -12500,
    fame: 12500,
    stats: {
      str: [426,
        515],
      dex: [166,
        185],
      int: [361,
        435],
      hp: [256,
        309],
      taming: null,
      barding: 115
    },
    offense: {
      min: 12,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Level 5 Treasure Map'
      }
    ],
    credits: [750,
      950],
    skills: {
      wrestling: [70,
        90],
      tactics: [80,
        100],
      magic_resistance: [85,
        115
      ]
    }
  },
  {
    id: 159,
    name: 'ruby golem',
    description: 'ruby golem',
    armor: 40,
    stats: {
      str: [750,
        850],
      dex: [50,
        65],
      int: [25,
        35],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 12,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 160,
    name: 'sand vortex',
    description: 'sand vortex',
    armor: 28,
    karma: 4500,
    fame: 4500,
    stats: {
      str: [96,
        120],
      dex: [171,
        195],
      int: [76,
        100],
      hp: [51,
        62],
      taming: null,
      barding: 75.6
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [],
    credits: [100,
      150],
    skills: {
      wrestling: 80.0,
      tactics: 70.0,
      magic_resistance: '150.0'
    }
  },
  {
    id: 161,
    name: 'sandstone elemental',
    description: 'sandstone elemental',
    armor: 60,
    stats: {
      str: [226,
        255],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [136,
        153],
      taming: null,
      barding: 62
    },
    offense: {
      min: 9,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 162,
    name: 'sapphire golem',
    description: 'sapphire golem',
    armor: 34,
    stats: {
      str: [425,
        475],
      dex: [90,
        120],
      int: [1,
        1],
      hp: [425,
        475],
      taming: null,
      barding: 129
    },
    offense: {
      min: 14,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 163,
    name: 'shadow iron elemental',
    description: 'shadow iron elemental',
    armor: 23,
    karma: 3500,
    fame: 3500,
    stats: {
      str: [226,
        255],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [136,
        153],
      taming: null,
      barding: 71
    },
    offense: {
      min: 9,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      150],
    skills: {
      wrestling: [60,
        100],
      tactics: [60,
        100],
      magic_resistance: [50,
        95
      ]
    }
  },
  {
    id: 164,
    name: 'snow elemental',
    description: 'snow elemental',
    armor: 50,
    karma: -5000,
    fame: 5000,
    stats: {
      str: [326,
        355],
      dex: [166,
        185],
      int: [71,
        95],
      hp: [196,
        213],
      taming: null,
      barding: 67
    },
    offense: {
      min: 11,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [250,
      350],
    skills: {
      wrestling: [80,
        100],
      tactics: [80,
        100],
      magic_resistance: [50,
        65
      ]
    }
  },
  {
    id: 165,
    name: 'stone elemental',
    description: 'stone elemental',
    armor: 26,
    karma: -3500,
    fame: 3500,
    stats: {
      str: [226,
        255],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [136,
        153],
      taming: null,
      barding: 62
    },
    offense: {
      min: 9,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [400,
      500],
    skills: {
      wrestling: [85,
        95],
      tactics: [85,
        95],
      magic_resistance: '100.0'
    }
  },
  {
    id: 166,
    name: 'tourmaline golem',
    description: 'tourmaline golem',
    armor: 34,
    stats: {
      str: [425,
        475],
      dex: [90,
        120],
      int: [1,
        1],
      hp: [425,
        475],
      taming: null,
      barding: 129
    },
    offense: {
      min: 14,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 167,
    name: 'valorite elemental',
    description: 'valorite elemental',
    armor: 38,
    karma: 3500,
    fame: 3500,
    stats: {
      str: [226,
        255],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [136,
        153],
      taming: null,
      barding: 62
    },
    offense: {
      min: 28,
      max: 28,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [450,
      650],
    skills: {
      wrestling: [60,
        100],
      tactics: [60,
        100],
      magic_resistance: [50,
        95
      ]
    }
  },
  {
    id: 168,
    name: 'verite elemental',
    description: 'verite elemental',
    armor: 35,
    karma: 3500,
    fame: 3500,
    stats: {
      str: [226,
        255],
      dex: [126,
        145],
      int: [71,
        92],
      hp: [136,
        163],
      taming: null,
      barding: 62
    },
    offense: {
      min: 9,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      150],
    skills: {
      wrestling: [60,
        100],
      tactics: [60,
        100],
      magic_resistance: [50,
        95
      ]
    }
  },
  {
    id: 169,
    name: 'water elemental',
    description: 'water elemental',
    armor: 40,
    karma: -4500,
    fame: 4500,
    stats: {
      str: [126,
        155],
      dex: [66,
        85],
      int: [101,
        125],
      hp: [76,
        93],
      taming: null,
      barding: 70
    },
    offense: {
      min: 7,
      max: 9,
      speed: 2.5
    },
    move: 1,
    mob_type: 'elementals',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potion'
      }
    ],
    credits: [175,
      225],
    skills: {
      wrestling: [50,
        70],
      tactics: [50,
        70],
      magic_resistance: [100,
        115
      ]
    }
  },
  {
    id: 170,
    name: 'enslaved gargoyle',
    description: 'enslaved gargoyle',
    armor: 35,
    karma: -3500,
    fame: 3500,
    stats: {
      str: [302,
        360],
      dex: [76,
        95],
      int: [81,
        105],
      hp: [186,
        212],
      taming: null,
      barding: 70.8
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'gargoyles',
    attackable: true,
    inventory: [],
    credits: [250,
      300],
    skills: {
      wrestling: [40,
        80],
      tactics: [50,
        70],
      magic_resistance: [70,
        85
      ]
    }
  },
  {
    id: 171,
    name: 'fire gargoyle',
    description: 'fire gargoyle',
    armor: 32,
    karma: -3500,
    fame: 3500,
    stats: {
      str: [351,
        400],
      dex: [126,
        145],
      int: [226,
        250],
      hp: [211,
        240],
      taming: null,
      barding: 97
    },
    offense: {
      min: 7,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'gargoyles',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: [275,
      325],
    skills: {
      wrestling: [40,
        80],
      tactics: [80,
        100],
      magic_resistance: [90,
        105
      ]
    }
  },
  {
    id: 172,
    name: 'gargoyle',
    description: 'gargoyle',
    armor: 32,
    stats: {
      str: [146,
        175],
      dex: [76,
        95],
      int: [81,
        105],
      hp: [88,
        105],
      taming: null,
      barding: 70
    },
    offense: {
      min: 7,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'gargoyles',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 173,
    name: 'gargoyle destroyer',
    description: 'gargoyle destroyer',
    armor: 50,
    karma: -10000,
    fame: 10000,
    stats: {
      str: [760,
        850],
      dex: [102,
        150],
      int: [152,
        200],
      hp: [482,
        485],
      taming: null,
      barding: 110.8
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'gargoyles',
    attackable: true,
    inventory: [],
    credits: [750,
      950],
    skills: {
      wrestling: [90,
        100],
      tactics: [90,
        100],
      magic_resistance: [120,
        160
      ]
    }
  },
  {
    id: 174,
    name: 'gargoyle enforcer',
    description: 'gargoyle enforcer',
    armor: 50,
    karma: -5000,
    fame: 5000,
    stats: {
      str: [260,
        350],
      dex: [76,
        95],
      int: [101,
        125],
      hp: [182,
        185],
      taming: null,
      barding: 88
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'gargoyles',
    attackable: true,
    inventory: [],
    credits: [275,
      325],
    skills: {
      wrestling: [80,
        90],
      tactics: [70,
        80],
      magic_resistance: [120,
        130
      ]
    }
  },
  {
    id: 175,
    name: 'obsidian gargoyle',
    description: 'obsidian gargoyle',
    armor: 48,
    stats: {
      str: [900,
        1],
      dex: [114,
        155],
      int: [1,
        1],
      hp: [2,
        2],
      taming: null,
      barding: 189
    },
    offense: {
      min: 16,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'gargoyles',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 176,
    name: 'stone gargoyle',
    description: 'stone gargoyle',
    armor: 50,
    karma: 4000,
    fame: 4000,
    stats: {
      str: [246,
        275],
      dex: [76,
        95],
      int: [81,
        105],
      hp: [148,
        165],
      taming: null,
      barding: 63
    },
    offense: {
      min: 11,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'gargoyles',
    attackable: true,
    inventory: [
      {
        description: 'Random Potion',
        chance: [1, 1]
      }
    ],
    credits: [250,
      325],
    skills: {
      wrestling: [60,
        100],
      tactics: [80,
        100],
      magic_resistance: [85,
        100
      ]
    }
  },
  {
    id: 177,
    name: 'actor',
    description: 'actor',
    armor: null,
    stats: {
      str: [31,
        31],
      dex: [41,
        41],
      int: [51,
        51],
      hp: [0,
        0],
      taming: null,
      barding: 12
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 178,
    name: 'alchemist',
    description: 'alchemist',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 179,
    name: 'ancient lich',
    description: 'ancient lich',
    armor: 60,
    karma: -23000,
    fame: 23000,
    stats: {
      str: [206,
        305],
      dex: [96,
        115],
      int: [966,
        1],
      hp: [560,
        595],
      taming: null,
      barding: 142
    },
    offense: {
      min: 15,
      max: 27,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,100],
      }
    ],
    credits: [1500,1700],
    skills: {
      wrestling: [75,87],
      tactics: [90,100],
      magic_resistance: [175,200]
    }
  },
  {
    id: 180,
    name: 'animated zombie',
    description: 'animated zombie',
    armor: 18,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Random Potion',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 181,
    name: 'artist',
    description: 'artist',
    armor: null,
    stats: {
      str: [31,
        31],
      dex: [41,
        41],
      int: [51,
        51],
      hp: [0,
        0],
      taming: null,
      barding: 16
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 182,
    name: 'barkeeper',
    description: 'barkeeper',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 184,
    name: 'betrayer',
    description: 'betrayer',
    armor: 65,
    karma: -15000,
    fame: 15000,
    stats: {
      str: [401,
        500],
      dex: [81,
        100],
      int: [151,
        200],
      hp: [241,
        300],
      taming: null,
      barding: 96.5
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: [750,
      900],
    skills: {
      wrestling: [90,
        100],
      tactics: [90,
        100],
      magic_resistance: [120,
        130
      ]
    }
  },
  {
    id: 185,
    name: 'blacksmith',
    description: 'blacksmith',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 186,
    name: 'bogle',
    description: 'bogle',
    armor: 28,
    stats: {
      str: [76,
        100],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 64
    },
    offense: {
      min: 7,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 187,
    name: 'bogling',
    description: 'bogling',
    armor: 28,
    karma: -450,
    fame: 450,
    stats: {
      str: [96,
        120],
      dex: [91,
        115],
      int: [21,
        45],
      hp: [58,
        72],
      taming: null,
      barding: 61.5
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: [50,
      100],
    skills: {
      wrestling: [55,
        75],
      tactics: [55,
        80],
      magic_resistance: [75,
        100
      ]
    }
  },
  {
    id: 188,
    name: 'bone knight',
    description: 'bone knight',
    armor: 40,
    karma: -3000,
    fame: 3000,
    stats: {
      str: [195,
        250],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [118,
        150],
      taming: null,
      barding: 61
    },
    offense: {
      min: 8,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'WoodenShield',
        chance: [1, 1]
      }
    ],
    credits: [175,
      275],
    skills: {
      wrestling: [85,
        95],
      tactics: [95,
        100],
      magic_resistance: [65,
        80
      ]
    }
  },
  {
    id: 189,
    name: 'bone magi',
    description: 'bone magi',
    armor: 38,
    karma: -3000,
    fame: 3000,
    stats: {
      str: [76,
        100],
      dex: [56,
        75],
      int: [186,
        210],
      hp: [46,
        60],
      taming: null,
      barding: 81
    },
    offense: {
      min: 3,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: [125,
      150],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [55,
        70
      ]
    }
  },
  {
    id: 190,
    name: 'bridegroom',
    description: 'bridegroom',
    armor: null,
    stats: {
      str: [90,
        100],
      dex: [90,
        100],
      int: [15,
        25],
      hp: [0,
        0],
      taming: null,
      barding: 33
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: '150-250 Gold Coins',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 191,
    name: 'brigand',
    description: 'brigand',
    armor: 0,
    karma: 1000,
    fame: 1000,
    stats: {
      str: [86,
        100],
      dex: [81,
        95],
      int: [61,
        75],
      hp: [0,
        0],
      taming: null,
      barding: 56
    },
    offense: {
      min: 10,
      max: 23,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: [50,
      150],
    skills: {
      wrestling: [15,
        37],
      tactics: [65,
        87],
      magic_resistance: [25,
        47
      ]
    }
  },
  {
    id: 192,
    name: 'brigand archer',
    description: 'brigand archer',
    armor: 0,
    stats: {
      str: [125,
        150],
      dex: [125,
        150],
      int: [500,
        750],
      hp: [150,
        200],
      taming: null,
      barding: 78
    },
    offense: {
      min: 10,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 193,
    name: 'brigand strong',
    description: 'brigand strong',
    armor: 0,
    stats: {
      str: [125,
        150],
      dex: [81,
        95],
      int: [500,
        750],
      hp: [150,
        175],
      taming: null,
      barding: 87
    },
    offense: {
      min: 12,
      max: 28,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 194,
    name: 'carpenter',
    description: 'carpenter',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 195,
    name: 'cobbler',
    description: 'cobbler',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 196,
    name: 'cook',
    description: 'cook',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 197,
    name: 'dark one',
    description: 'dark one',
    armor: 65,
    stats: {
      str: [770,
        830],
      dex: [146,
        185],
      int: [1,
        1],
      hp: [1,
        1],
      taming: null,
      barding: 243
    },
    offense: {
      min: 14,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Peculiar Meat (Carve)',
        chance: [1,4],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 198,
    name: 'escortable mage',
    description: 'escortable mage',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: 60
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: '150-250 Gold Coins',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 199,
    name: 'evil mage',
    description: 'evil mage',
    armor: 16,
    karma: 2500,
    fame: 2500,
    stats: {
      str: [81,
        105],
      dex: [91,
        115],
      int: [96,
        120],
      hp: [49,
        63],
      taming: null,
      barding: 69
    },
    offense: {
      min: 5,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: [125,
      175],
    skills: {
      wrestling: [20,
        60],
      tactics: [65,
        87],
      magic_resistance: [75,
        97
      ]
    }
  },
  {
    id: 200,
    name: 'evil mage lord',
    description: 'evil mage lord',
    armor: 16,
    karma: 10500,
    fame: [
      '',
      '10500'
    ],
    stats: {
      str: [81,
        105],
      dex: [191,
        215],
      int: [126,
        150],
      hp: [49,
        63],
      taming: null,
      barding: 74
    },
    offense: {
      min: 5,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: [175,
      225],
    skills: {
      wrestling: [20,
        80],
      tactics: [65,
        87],
      magic_resistance: [77,
        100
      ]
    }
  },
  {
    id: 201,
    name: 'executioner',
    description: 'executioner',
    armor: null,
    karma: 5000,
    fame: [
      '',
      '5000'
    ],
    stats: {
      str: [386,
        400],
      dex: [151,
        165],
      int: [1,
        1],
      hp: [386,
        400],
      taming: null,
      barding: 115
    },
    offense: {
      min: 8,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: [500,
      650],
    skills: {
      wrestling: 0,
      tactics: 125.0,
      magic_resistance: [77,
        100
      ]
    }
  },
  {
    id: 202,
    name: 'faction deathknight',
    description: 'faction deathknight',
    armor: 0,
    stats: {
      str: [126,
        150],
      dex: [61,
        85],
      int: [81,
        95],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 203,
    name: 'faction henchman',
    description: 'faction henchman',
    armor: 0,
    stats: {
      str: [91,
        115],
      dex: [61,
        85],
      int: [81,
        95],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 10,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 204,
    name: 'faction knight',
    description: 'faction knight',
    armor: 0,
    stats: {
      str: [126,
        150],
      dex: [61,
        85],
      int: [81,
        95],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 205,
    name: 'faction mercenary',
    description: 'faction mercenary',
    armor: 0,
    stats: {
      str: [116,
        125],
      dex: [61,
        85],
      int: [81,
        95],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 206,
    name: 'faction necromancer',
    description: 'faction necromancer',
    armor: null,
    stats: {
      str: [151,
        175],
      dex: [61,
        85],
      int: [81,
        95],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 207,
    name: 'faction paladin',
    description: 'faction paladin',
    armor: null,
    stats: {
      str: [151,
        175],
      dex: [61,
        85],
      int: [81,
        95],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 208,
    name: 'faction sorceress',
    description: 'faction sorceress',
    armor: null,
    stats: {
      str: [126,
        150],
      dex: [61,
        85],
      int: [126,
        150],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 209,
    name: 'faction wizard',
    description: 'faction wizard',
    armor: null,
    stats: {
      str: [151,
        175],
      dex: [61,
        85],
      int: [151,
        175],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 210,
    name: 'farmer',
    description: 'farmer',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 211,
    name: 'fisherman',
    description: 'fisherman',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 212,
    name: 'furtrader',
    description: 'furtrader',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 213,
    name: 'ghoul',
    description: 'ghoul',
    armor: 28,
    karma: -2500,
    fame: 2500,
    stats: {
      str: [76,
        100],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 45
    },
    offense: {
      min: 7,
      max: 9,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Random Weapon',
        chance: [1, 1]
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 214,
    name: 'grand visor of chaos',
    description: 'grand visor of chaos',
    armor: 70,
    stats: {
      str: [1,
        1],
      dex: [230,
        275],
      int: [205,
        225],
      hp: [2,
        2],
      taming: null,
      barding: 152
    },
    offense: {
      min: 12,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 215,
    name: 'gypsy',
    description: 'gypsy',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 216,
    name: 'hairstylist',
    description: 'hairstylist',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 217,
    name: 'human brigand',
    description: 'human brigand',
    armor: 0,
    stats: {
      str: [86,
        100],
      dex: [81,
        95],
      int: [61,
        75],
      hp: [0,
        0],
      taming: null,
      barding: 40
    },
    offense: {
      min: 15,
      max: 27,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Random Weapon',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 218,
    name: 'knight of ni',
    description: 'knight of ni',
    armor: 35,
    stats: {
      str: [250,
        375],
      dex: [81,
        95],
      int: [500,
        750],
      hp: [150,
        175],
      taming: null,
      barding: 83
    },
    offense: {
      min: 12,
      max: 28,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 219,
    name: 'lich',
    description: 'lich',
    armor: 50,
    karma: 8000,
    fame: 8000,
    stats: {
      str: [171,
        200],
      dex: [126,
        145],
      int: [276,
        305],
      hp: [103,
        120],
      taming: null,
      barding: 92
    },
    offense: {
      min: 24,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: [275,
      324],
    skills: {
      wrestling: [0,0],
      tactics: [70,
        90],
      magic_resistance: [80,
        100
      ]
    }
  },
  {
    id: 220,
    name: 'lich lord',
    description: 'lich lord',
    armor: 50,
    karma: 18000,
    fame: 18000,
    stats: {
      str: [416,
        505],
      dex: [146,
        165],
      int: [566,
        655],
      hp: [250,
        303],
      taming: null,
      barding: 109
    },
    offense: {
      min: 11,
      max: 13,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: [450,
      600],
    skills: {
      wrestling: [60,
        80],
      tactics: [50,
        70],
      magic_resistance: [150,
        200
      ]
    }
  },
  {
    id: 221,
    name: 'lord fenix',
    description: 'lord fenix',
    armor: 0,
    stats: {
      str: [381,
        405],
      dex: [191,
        215],
      int: [726,
        1],
      hp: [650,
        863],
      taming: null,
      barding: 122
    },
    offense: {
      min: 12,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 222,
    name: 'lord jamkul shieldheart',
    description: 'lord jamkul shieldheart',
    armor: 0,
    stats: {
      str: [381,
        405],
      dex: [191,
        215],
      int: [726,
        1],
      hp: [650,
        863],
      taming: null,
      barding: 122
    },
    offense: {
      min: 12,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 223,
    name: 'lord kronos the elemental mage',
    description: 'lord kronos the elemental mage',
    armor: 30,
    stats: {
      str: [450,
        550],
      dex: [75,
        85],
      int: [420,
        475],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 15,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 224,
    name: 'lord xerxes',
    description: 'lord xerxes',
    armor: 0,
    stats: {
      str: [381,
        405],
      dex: [191,
        215],
      int: [726,
        1],
      hp: [650,
        863],
      taming: null,
      barding: 122
    },
    offense: {
      min: 12,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 225,
    name: 'merchant',
    description: 'merchant',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: '150-250 Gold Coins',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 226,
    name: 'messenger',
    description: 'messenger',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: 30
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: '150-250 Gold Coins',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 227,
    name: 'mummy',
    description: 'mummy',
    armor: 50,
    karma: 4000,
    fame: 4000,
    stats: {
      str: [346,
        370],
      dex: [71,
        90],
      int: [26,
        40],
      hp: [208,
        222],
      taming: null,
      barding: 70
    },
    offense: {
      min: 13,
      max: 23,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Random Bones',
        chance: [1, 1]
      }
    ],
    credits: [305,
      315],
    skills: {
      wrestling: [35,
        50],
      tactics: [35,
        50],
      magic_resistance: [15,
        40
      ]
    }
  },
  {
    id: 228,
    name: 'noble',
    description: 'noble',
    armor: null,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: 30
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: '150-250 Gold Coins',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 229,
    name: 'pirate bartender',
    description: 'pirate bartender',
    armor: 0,
    stats: {
      str: [650,
        750],
      dex: [110,
        120],
      int: [2,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 166
    },
    offense: {
      min: 9,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 230,
    name: 'pirate boatswain',
    description: 'pirate boatswain',
    armor: 0,
    stats: {
      str: [200,
        225],
      dex: [110,
        120],
      int: [1,
        1],
      hp: [0,
        0],
      taming: null,
      barding: 110
    },
    offense: {
      min: 10,
      max: 21,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 231,
    name: 'pirate captain',
    description: 'pirate captain',
    armor: 0,
    stats: {
      str: [650,
        750],
      dex: [110,
        120],
      int: [2,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 171
    },
    offense: {
      min: 13,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 232,
    name: 'pirate captain ghost',
    description: 'pirate captain ghost',
    armor: 0,
    stats: {
      str: [650,
        750],
      dex: [110,
        120],
      int: [2,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 143
    },
    offense: {
      min: 9,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'tattered spellbook',
        chance: [1,200]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 233,
    name: 'pirate digger',
    description: 'pirate digger',
    armor: 0,
    stats: {
      str: [325,
        375],
      dex: [90,
        120],
      int: [2,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 166
    },
    offense: {
      min: 12,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 234,
    name: 'pirate ghost',
    description: 'pirate ghost',
    armor: 0,
    stats: {
      str: [81,
        105],
      dex: [191,
        215],
      int: [1,
        1],
      hp: [125,
        175],
      taming: null,
      barding: 105
    },
    offense: {
      min: 12,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 235,
    name: 'pirate navigator',
    description: 'pirate navigator',
    armor: 0,
    stats: {
      str: [325,
        375],
      dex: [110,
        120],
      int: [1,
        1],
      hp: [0,
        0],
      taming: null,
      barding: 116
    },
    offense: {
      min: 10,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,100],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 236,
    name: 'pirate quartermaster',
    description: 'pirate quartermaster',
    armor: 0,
    stats: {
      str: [375,
        425],
      dex: [90,
        120],
      int: [1,
        1],
      hp: [375,
        425],
      taming: null,
      barding: 123
    },
    offense: {
      min: 10,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,100],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 237,
    name: 'pirate sailor',
    description: 'pirate sailor',
    armor: 0,
    stats: {
      str: [86,
        100],
      dex: [70,
        95],
      int: [1,
        1],
      hp: [0,
        0],
      taming: null,
      barding: 104
    },
    offense: {
      min: 8,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 238,
    name: 'ratman',
    description: 'ratman',
    armor: 28,
    karma: 1500,
    fame: 1500,
    stats: {
      str: [96,
        120],
      dex: [81,
        100],
      int: [36,
        60],
      hp: [58,
        72],
      taming: null,
      barding: 38
    },
    offense: {
      min: 4,
      max: 5,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [50,
        75],
      tactics: [50,
        75],
      magic_resistance: [35,
        60
      ]
    }
  },
  {
    id: 239,
    name: 'ratman archer',
    description: 'ratman archer',
    armor: 56,
    karma: 6500,
    fame: 6500,
    stats: {
      str: [146,
        180],
      dex: [101,
        130],
      int: [116,
        140],
      hp: [88,
        108],
      taming: null,
      barding: 74
    },
    offense: {
      min: 15,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: [300,
      350],
    skills: {
      wrestling: [50,
        75],
      tactics: [50,
        75],
      magic_resistance: [65,
        90
      ]
    }
  },
  {
    id: 240,
    name: 'ratman mage',
    description: 'ratman mage',
    armor: 44,
    karma: 7500,
    fame: 7500,
    stats: {
      str: [146,
        180],
      dex: [101,
        130],
      int: [186,
        210],
      hp: [88,
        108],
      taming: null,
      barding: 64
    },
    offense: {
      min: 7,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: [275,
      352],
    skills: {
      wrestling: [50,
        75],
      tactics: [50,
        75],
      magic_resistance: [65,
        90
      ]
    }
  },
  {
    id: 241,
    name: 'reptile tamer',
    description: 'reptile tamer',
    armor: 60,
    stats: {
      str: [605,
        725],
      dex: [125,
        150],
      int: [505,
        750],
      hp: [8,
        9],
      taming: null,
      barding: 413
    },
    offense: {
      min: 29,
      max: 36,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin (All Players)',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 242,
    name: 'restless soul',
    description: 'restless soul',
    armor: 6,
    karma: 500,
    fame: 500,
    stats: {
      str: [26,
        40],
      dex: [26,
        40],
      int: [26,
        40],
      hp: [16,
        24],
      taming: null,
      barding: 19
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {
      wrestling: [20,
        30],
      tactics: [20,
        30],
      magic_resistance: [20,
        30
      ]
    }
  },
  {
    id: 243,
    name: 'revenant',
    description: 'revenant',
    armor: 62,
    karma: 0,
    fame: 0,
    stats: {
      str: [196,
        250],
      dex: [110,
        120],
      int: [128,
        138],
      hp: [500,
        550],
      taming: null,
      barding: 103
    },
    offense: {
      min: 7,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Various Bones',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [90,
        100],
      tactics: [90,
        100],
      magic_resistance: [100,
        150
      ]
    }
  },
  {
    id: 244,
    name: 'rotting corpse',
    description: 'rotting corpse',
    armor: 40,
    karma: 12500,
    fame: 12500,
    stats: {
      str: [301,
        350],
      dex: [75,
        75],
      int: [151,
        200],
      hp: [1,
        1],
      taming: null,
      barding: 125
    },
    offense: {
      min: 8,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,100],
      }
    ],
    credits: [1050,
      1279],
    skills: {
      wrestling: [90,
        100],
      tactics: 100.0,
      magic_resistance: '250.0'
    }
  },
  {
    id: 245,
    name: 'shade',
    description: 'shade',
    armor: 28,
    karma: 4000,
    fame: 4000,
    stats: {
      str: [76,
        100],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 65
    },
    offense: {
      min: 7,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 246,
    name: 'skeletal knight',
    description: 'skeletal knight',
    armor: 40,
    karma: -3000,
    fame: 3000,
    stats: {
      str: [196,
        250],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [118,
        150],
      taming: null,
      barding: 61
    },
    offense: {
      min: 8,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'WoodenShield',
        chance: [1, 1]
      }
    ],
    credits: [175,
      275],
    skills: {
      wrestling: [85,
        95],
      tactics: [95,
        100],
      magic_resistance: [65,
        80
      ]
    }
  },
  {
    id: 247,
    name: 'skeletal mage',
    description: 'skeletal mage',
    armor: 38,
    karma: -3000,
    fame: 3000,
    stats: {
      str: [76,
        100],
      dex: [56,
        75],
      int: [186,
        210],
      hp: [46,
        60],
      taming: null,
      barding: 77
    },
    offense: {
      min: 3,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Random Potion',
        chance: [1, 1]
      }
    ],
    credits: [125,
      150],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [55,
        70
      ]
    }
  },
  {
    id: 248,
    name: 'skeleton',
    description: 'skeleton',
    armor: 16,
    karma: 450,
    fame: 450,
    stats: {
      str: [56,
        80],
      dex: [56,
        75],
      int: [16,
        40],
      hp: [34,
        48],
      taming: null,
      barding: 36
    },
    offense: {
      min: 3,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Random Bones',
        chance: [1, 1]
      }
    ],
    credits: [25,
      50],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 249,
    name: 'spectre',
    description: 'spectre',
    armor: 28,
    karma: 4000,
    fame: 4000,
    stats: {
      str: [76,
        100],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 62
    },
    offense: {
      min: 7,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 250,
    name: 'undead parrot',
    description: 'undead parrot',
    armor: 0,
    stats: {
      str: [85,
        110],
      dex: [125,
        150],
      int: [1,
        1],
      hp: [0,
        0],
      taming: null,
      barding: 113
    },
    offense: {
      min: 10,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 251,
    name: 'undead pirate captain',
    description: 'undead pirate captain',
    armor: 0,
    stats: {
      str: [650,
        750],
      dex: [110,
        120],
      int: [2,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 171
    },
    offense: {
      min: 12,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 252,
    name: 'undead pirate sailor',
    description: 'undead pirate sailor',
    armor: 0,
    stats: {
      str: [86,
        100],
      dex: [70,
        95],
      int: [1,
        1],
      hp: [0,
        0],
      taming: null,
      barding: 103
    },
    offense: {
      min: 6,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 253,
    name: 'wandering healer',
    description: 'wandering healer',
    armor: null,
    karma: 10000,
    fame: 1000,
    stats: {
      str: [0,
        null],
      dex: [0,
        null],
      int: [0,
        null],
      hp: [0,
        0],
      taming: null,
      barding: null
    },
    offense: {
      min: 0,
      max: 0,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {
      wrestling: [0,0],
      tactics: [82,
        100],
      magic_resistance: [82,
        100
      ]
    }
  },
  {
    id: 254,
    name: 'wraith',
    description: 'wraith',
    armor: 28,
    karma: 4000,
    fame: 4000,
    stats: {
      str: [76,
        100],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 67
    },
    offense: {
      min: 7,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 255,
    name: 'zombie',
    description: 'zombie',
    armor: 18,
    karma: 600,
    fame: 600,
    stats: {
      str: [46,
        70],
      dex: [31,
        50],
      int: [26,
        40],
      hp: [28,
        42],
      taming: null,
      barding: 33
    },
    offense: {
      min: 3,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Random Body Part or Bone',
        chance: [1, 1]
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [35,
        50],
      tactics: [35,
        50],
      magic_resistance: [15,
        40
      ]
    }
  },
  {
    id: 256,
    name: 'cave troll',
    description: 'cave troll',
    armor: 40,
    karma: -3500,
    fame: 3500,
    stats: {
      str: [475,
        525],
      dex: [75,
        85],
      int: [250,
        350],
      hp: [725,
        875],
      taming: null,
      barding: 121
    },
    offense: {
      min: 14,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,10],
      }
    ],
    credits: [314,
      486],
    skills: {
      wrestling: [81,
        104],
      tactics: [87,
        101],
      magic_resistance: [71,
        82
      ]
    }
  },
  {
    id: 257,
    name: 'forest troll',
    description: 'forest troll',
    armor: 40,
    stats: {
      str: [750,
        800],
      dex: [75,
        85],
      int: [250,
        350],
      hp: [700,
        825],
      taming: null,
      barding: 110
    },
    offense: {
      min: 17,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,10],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 258,
    name: 'gamayun',
    description: 'gamayun',
    armor: 38,
    stats: {
      str: [320,
        340],
      dex: [100,
        110],
      int: [500,
        700],
      hp: [400,
        550],
      taming: null,
      barding: 105
    },
    offense: {
      min: 9,
      max: 31,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,10],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 259,
    name: 'mountain troll',
    description: 'mountain troll',
    armor: 40,
    stats: {
      str: [475,
        525],
      dex: [75,
        85],
      int: [250,
        350],
      hp: [600,
        625],
      taming: null,
      barding: 113
    },
    offense: {
      min: 9,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,10],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 260,
    name: 'obsidian gargoyle',
    description: 'obsidian gargoyle',
    armor: 48,
    stats: {
      str: [900,
        1],
      dex: [114,
        155],
      int: [1,
        1],
      hp: [2,
        2],
      taming: null,
      barding: 189
    },
    offense: {
      min: 16,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'gargoyles',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 261,
    name: 'revenant',
    description: 'revenant',
    armor: 62,
    karma: 0,
    fame: 0,
    stats: {
      str: [196,
        250],
      dex: [110,
        120],
      int: [128,
        138],
      hp: [500,
        550],
      taming: null,
      barding: 103
    },
    offense: {
      min: 7,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        description: 'Various Bones',
        chance: [1, 1]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [90,
        100],
      tactics: [90,
        100],
      magic_resistance: [100,
        150
      ]
    }
  },
  {
    id: 262,
    name: 'spectral rabbit',
    description: 'spectral rabbit',
    armor: 40,
    stats: {
      str: [401,
        650],
      dex: [160,
        180],
      int: [500,
        600],
      hp: [650,
        950],
      taming: null,
      barding: 110
    },
    offense: {
      min: 15,
      max: 21,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,10],
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 263,
    name: 'arctic ogre lord',
    description: 'arctic ogre lord',
    armor: 50,
    karma: -15000,
    fame: 15000,
    stats: {
      str: [767,
        945],
      dex: [66,
        75],
      int: [46,
        70],
      hp: [476,
        552],
      taming: null,
      barding: 96
    },
    offense: {
      min: 20,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'RawRibs'
      }
    ],
    credits: [750,
      950],
    skills: {
      wrestling: [90,
        100],
      tactics: [90,
        100],
      magic_resistance: [125,
        140
      ]
    }
  },
  {
    id: 264,
    name: 'arctic ogre mage',
    description: 'arctic ogre mage',
    armor: 65,
    stats: {
      str: [1,
        1],
      dex: [82,
        95],
      int: [1,
        1],
      hp: [1,
        1],
      taming: null,
      barding: 184
    },
    offense: {
      min: 25,
      max: 31,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 265,
    name: 'beholder',
    description: 'beholder',
    armor: 65,
    stats: {
      str: [630,
        730],
      dex: [86,
        105],
      int: [910,
        950],
      hp: [1,
        1],
      taming: null,
      barding: 184
    },
    offense: {
      min: 12,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 266,
    name: 'cave troll',
    description: 'cave troll',
    armor: 40,
    karma: -3500,
    fame: 3500,
    stats: {
      str: [475,
        525],
      dex: [75,
        85],
      int: [250,
        350],
      hp: [725,
        875],
      taming: null,
      barding: 121
    },
    offense: {
      min: 14,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Platinum Coin'
      }
    ],
    credits: [314,
      486],
    skills: {
      wrestling: [81,
        104],
      tactics: [87,
        101],
      magic_resistance: [71,
        82
      ]
    }
  },
  {
    id: 267,
    name: 'centaur',
    description: 'centaur',
    armor: 50,
    karma: 0,
    fame: 6500,
    stats: {
      str: [202,
        300],
      dex: [104,
        260],
      int: [91,
        100],
      hp: [130,
        172],
      taming: null,
      barding: 72
    },
    offense: {
      min: 13,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [275,
      325],
    skills: {
      wrestling: [95,
        100],
      tactics: [90,
        100],
      magic_resistance: [50,
        80
      ]
    }
  },
  {
    id: 268,
    name: 'colossus',
    description: 'colossus',
    armor: 78,
    stats: {
      str: [900,
        1],
      dex: [114,
        155],
      int: [1,
        1],
      hp: [2,
        3],
      taming: null,
      barding: 208
    },
    offense: {
      min: 16,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 269,
    name: 'cyclops',
    description: 'cyclops',
    armor: 48,
    karma: -4500,
    fame: 4500,
    stats: {
      str: [336,
        385],
      dex: [96,
        115],
      int: [31,
        55],
      hp: [202,
        231],
      taming: null,
      barding: 65
    },
    offense: {
      min: 7,
      max: 23,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [400,
      500],
    skills: {
      wrestling: [80,
        90],
      tactics: [80,
        100],
      magic_resistance: [60,
        105
      ]
    }
  },
  {
    id: 270,
    name: 'dark wisp',
    description: 'dark wisp',
    armor: 40,
    karma: 10000,
    fame: 15000,
    stats: {
      str: [196,
        225],
      dex: [196,
        225],
      int: [196,
        225],
      hp: [118,
        135],
      taming: null,
      barding: 60
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [],
    credits: [400,
      500],
    skills: {
      wrestling: 50.0,
      tactics: 80.0,
      magic_resistance: [80,
        90
      ]
    }
  },
  {
    id: 271,
    name: 'elder gazer',
    description: 'elder gazer',
    armor: 50,
    karma: -12500,
    fame: 12500,
    stats: {
      str: [296,
        325],
      dex: [86,
        105],
      int: [291,
        385],
      hp: [178,
        195],
      taming: null,
      barding: 87
    },
    offense: {
      min: 8,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [400,
      600],
    skills: {
      wrestling: [80,
        100],
      tactics: [80,
        100],
      magic_resistance: [115,
        130
      ]
    }
  },
  {
    id: 272,
    name: 'ethereal warrior',
    description: 'ethereal warrior',
    armor: 120,
    karma: 7000,
    fame: 7000,
    stats: {
      str: [586,
        785],
      dex: [177,
        255],
      int: [351,
        450],
      hp: [352,
        471],
      taming: null,
      barding: 108
    },
    offense: {
      min: 13,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: [900,
      1200],
    skills: {
      wrestling: [97,
        100],
      tactics: [90,
        100],
      magic_resistance: [90,
        100
      ]
    }
  },
  {
    id: 273,
    name: 'ettin',
    description: 'ettin',
    armor: 38,
    karma: -3000,
    fame: 3000,
    stats: {
      str: [136,
        165],
      dex: [56,
        75],
      int: [31,
        55],
      hp: [82,
        99],
      taming: null,
      barding: 42
    },
    offense: {
      min: 7,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potion'
      }
    ],
    credits: [175,
      225],
    skills: {
      wrestling: [50,
        60],
      tactics: [50,
        70],
      magic_resistance: [40,
        55
      ]
    }
  },
  {
    id: 274,
    name: 'forest troll',
    description: 'forest troll',
    armor: 40,
    stats: {
      str: [750,
        800],
      dex: [75,
        85],
      int: [250,
        350],
      hp: [700,
        825],
      taming: null,
      barding: 110
    },
    offense: {
      min: 17,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 275,
    name: 'frost troll',
    description: 'frost troll',
    armor: 50,
    karma: -4000,
    fame: 4000,
    stats: {
      str: [76,
        100],
      dex: [126,
        145],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 62
    },
    offense: {
      min: 6,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      175],
    skills: {
      wrestling: [80,
        100],
      tactics: [80,
        100],
      magic_resistance: [65,
        80
      ]
    }
  },
  {
    id: 276,
    name: 'gamayun',
    description: 'gamayun',
    armor: 38,
    stats: {
      str: [320,
        340],
      dex: [100,
        110],
      int: [500,
        700],
      hp: [400,
        550],
      taming: null,
      barding: 105
    },
    offense: {
      min: 9,
      max: 31,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 277,
    name: 'gazer',
    description: 'gazer',
    armor: 36,
    karma: -3500,
    fame: 3500,
    stats: {
      str: [96,
        125],
      dex: [86,
        105],
      int: [141,
        165],
      hp: [58,
        75],
      taming: null,
      barding: 68
    },
    offense: {
      min: 5,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potion'
      }
    ],
    credits: [125,
      175],
    skills: {
      wrestling: [50,
        70],
      tactics: [50,
        70],
      magic_resistance: [50,
        70
      ]
    }
  },
  {
    id: 278,
    name: 'gazer larva',
    description: 'gazer larva',
    armor: 25,
    karma: -900,
    fame: 900,
    stats: {
      str: [76,
        100],
      dex: [51,
        75],
      int: [56,
        80],
      hp: [36,
        47],
      taming: null,
      barding: 56.7
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [],
    credits: [25,
      50],
    skills: {
      wrestling: 70.0,
      tactics: 70.0,
      magic_resistance: '70.0'
    }
  },
  {
    id: 279,
    name: 'harpy',
    description: 'harpy',
    armor: 28,
    karma: 2500,
    fame: 2500,
    stats: {
      str: [86,
        120],
      dex: [86,
        110],
      int: [51,
        75],
      hp: [58,
        72],
      taming: null,
      barding: 47
    },
    offense: {
      min: 5,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      150],
    skills: {
      wrestling: [60,
        90],
      tactics: [70,
        100],
      magic_resistance: [50,
        65
      ]
    }
  },
  {
    id: 280,
    name: 'headlessone',
    description: 'headlessone',
    armor: 18,
    stats: {
      str: [26,
        50],
      dex: [36,
        55],
      int: [16,
        30],
      hp: [16,
        30],
      taming: null,
      barding: 19
    },
    offense: {
      min: 5,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,1000],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 281,
    name: 'hell hound',
    description: 'hell hound',
    armor: 30,
    karma: 3400,
    fame: 3400,
    stats: {
      str: [102,
        150],
      dex: [81,
        105],
      int: [36,
        60],
      hp: [66,
        125],
      taming: 85.5,
      barding: 39
    },
    offense: {
      min: 11,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [175,
      225],
    skills: {
      wrestling: [60,
        80],
      tactics: [50,
        70],
      magic_resistance: [57,
        75
      ]
    }
  },
  {
    id: 282,
    name: 'horde minion',
    description: 'horde minion',
    armor: 18,
    karma: 500,
    fame: 500,
    stats: {
      str: [16,
        40],
      dex: [31,
        60],
      int: [11,
        25],
      hp: [10,
        24],
      taming: null,
      barding: 26.6
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {
      wrestling: [25,
        40],
      tactics: [0,
        15],
      magic_resistance: [null,
        null
      ]
    }
  },
  {
    id: 283,
    name: 'imp',
    description: 'imp',
    armor: 30,
    karma: 2500,
    fame: 2500,
    stats: {
      str: [91,
        115],
      dex: [61,
        80],
      int: [86,
        105],
      hp: [55,
        70],
      taming: 83.1,
      barding: 56
    },
    offense: {
      min: 10,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [40,
        44],
      tactics: [42,
        50],
      magic_resistance: [30,
        50
      ]
    }
  },
  {
    id: 284,
    name: 'jungle titan',
    description: 'jungle titan',
    armor: 48,
    stats: {
      str: [600,
        750],
      dex: [114,
        155],
      int: [1,
        1],
      hp: [2,
        2],
      taming: null,
      barding: 185
    },
    offense: {
      min: 16,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 285,
    name: 'kirin',
    description: 'kirin',
    armor: 0,
    stats: {
      str: [286,
        325],
      dex: [86,
        105],
      int: [186,
        225],
      hp: [191,
        210],
      taming: null,
      barding: 82
    },
    offense: {
      min: 16,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potion'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 286,
    name: 'mongbat',
    description: 'mongbat',
    armor: 10,
    karma: 150,
    fame: 150,
    stats: {
      str: [6,
        10],
      dex: [26,
        38],
      int: [6,
        14],
      hp: [4,
        6],
      taming: 18.9,
      barding: 7
    },
    offense: {
      min: 1,
      max: 2,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,1000],
        description: 'Platinum Coin'
      }
    ],
    credits: [25,
      50],
    skills: {
      wrestling: [5,
        10],
      tactics: [5,
        10],
      magic_resistance: [5,
        14
      ]
    }
  },
  {
    id: 287,
    name: 'mountain troll',
    description: 'mountain troll',
    armor: 40,
    stats: {
      str: [475,
        525],
      dex: [75,
        85],
      int: [250,
        350],
      hp: [600,
        625],
      taming: null,
      barding: 113
    },
    offense: {
      min: 9,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 288,
    name: 'ogre',
    description: 'ogre',
    armor: 32,
    karma: 3000,
    fame: 3000,
    stats: {
      str: [166,
        195],
      dex: [46,
        65],
      int: [46,
        70],
      hp: [100,
        117],
      taming: null,
      barding: 53
    },
    offense: {
      min: 9,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potion'
      }
    ],
    credits: [125,
      175],
    skills: {
      wrestling: [70,
        80],
      tactics: [60,
        70],
      magic_resistance: [55,
        70
      ]
    }
  },
  {
    id: 289,
    name: 'ogre lord',
    description: 'ogre lord',
    armor: 50,
    karma: 15000,
    fame: 15000,
    stats: {
      str: [767,
        945],
      dex: [66,
        75],
      int: [46,
        70],
      hp: [476,
        552],
      taming: null,
      barding: 96
    },
    offense: {
      min: 20,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [600,
      650],
    skills: {
      wrestling: [90,
        100],
      tactics: [90,
        100],
      magic_resistance: [125,
        140
      ]
    }
  },
  {
    id: 290,
    name: 'ogre mage',
    description: 'ogre mage',
    armor: 65,
    stats: {
      str: [1,
        1],
      dex: [90,
        99],
      int: [720,
        770],
      hp: [1,
        1],
      taming: null,
      barding: 180
    },
    offense: {
      min: 20,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 291,
    name: 'pixie',
    description: 'pixie',
    armor: 100,
    karma: 7000,
    fame: 7000,
    stats: {
      str: [21,
        30],
      dex: [301,
        400],
      int: [201,
        250],
      hp: [13,
        18],
      taming: null,
      barding: 76
    },
    offense: {
      min: 9,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {
      wrestling: [10,
        12],
      tactics: [10,
        20],
      magic_resistance: [100,
        150
      ]
    }
  },
  {
    id: 292,
    name: 'rabbit of caerbannog',
    description: 'rabbit of caerbannog',
    armor: 60,
    stats: {
      str: [605,
        805],
      dex: [125,
        150],
      int: [505,
        750],
      hp: [9,
        10],
      taming: null,
      barding: null
    },
    offense: {
      min: 20,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,25],
        description: 'Rabbit of Caerbannog Statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 293,
    name: 'scorpion',
    description: 'scorpion',
    armor: 28,
    karma: 2000,
    fame: 2000,
    stats: {
      str: [73,
        115],
      dex: [76,
        95],
      int: [16,
        30],
      hp: [50,
        63],
      taming: 47.1,
      barding: 55
    },
    offense: {
      min: 5,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [50,
        65],
      tactics: [60,
        75],
      magic_resistance: [30,
        35
      ]
    }
  },
  {
    id: 294,
    name: 'sea horse',
    description: 'sea horse',
    armor: null,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 295,
    name: 'shadow wisp',
    description: 'shadow wisp',
    armor: 18,
    karma: 500,
    fame: 500,
    stats: {
      str: [50,
        50],
      dex: [60,
        60],
      int: [100,
        100],
      hp: [50,
        50],
      taming: null,
      barding: 30
    },
    offense: {
      min: 5,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {
      wrestling: [25,
        40],
      tactics: [0,
        15],
      magic_resistance: '10.0'
    }
  },
  {
    id: 296,
    name: 'spectral rabbit',
    description: 'spectral rabbit',
    armor: 40,
    stats: {
      str: [401,
        650],
      dex: [160,
        180],
      int: [500,
        600],
      hp: [650,
        950],
      taming: null,
      barding: 110
    },
    offense: {
      min: 15,
      max: 21,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 297,
    name: 'stone harpy',
    description: 'stone harpy',
    armor: 50,
    karma: 4500,
    fame: 4500,
    stats: {
      str: [296,
        320],
      dex: [86,
        110],
      int: [51,
        75],
      hp: [178,
        192],
      taming: null,
      barding: 63
    },
    offense: {
      min: 8,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [290,
      325],
    skills: {
      wrestling: [70,
        100],
      tactics: [70,
        100],
      magic_resistance: [50,
        65
      ]
    }
  },
  {
    id: 298,
    name: 'strong mongbat',
    description: 'strong mongbat',
    armor: 10,
    stats: {
      str: [6,
        10],
      dex: [26,
        38],
      int: [6,
        14],
      hp: [4,
        6],
      taming: 71.1,
      barding: 14
    },
    offense: {
      min: 5,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,1000],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 299,
    name: 'succubus',
    description: 'succubus',
    armor: 80,
    karma: -24000,
    fame: 24000,
    stats: {
      str: [488,
        620],
      dex: [121,
        170],
      int: [498,
        657],
      hp: [312,
        353],
      taming: null,
      barding: 103
    },
    offense: {
      min: 18,
      max: 28,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: [1000,
      1200],
    skills: {
      wrestling: [80,
        90],
      tactics: [80,
        90],
      magic_resistance: [100,
        150
      ]
    }
  },
  {
    id: 300,
    name: 'titan',
    description: 'titan',
    armor: 40,
    karma: 11500,
    fame: 11500,
    stats: {
      str: [536,
        585],
      dex: [126,
        145],
      int: [281,
        305],
      hp: [322,
        351],
      taming: null,
      barding: 100
    },
    offense: {
      min: 13,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: [600,
      800],
    skills: {
      wrestling: [40,
        50],
      tactics: [60,
        80],
      magic_resistance: [85,
        100
      ]
    }
  },
  {
    id: 301,
    name: 'troll',
    description: 'troll',
    armor: 40,
    karma: 3500,
    fame: 3500,
    stats: {
      str: [176,
        205],
      dex: [46,
        65],
      int: [46,
        70],
      hp: [106,
        123],
      taming: null,
      barding: 50
    },
    offense: {
      min: 8,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      175],
    skills: {
      wrestling: [50,
        70],
      tactics: [50,
        70],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 302,
    name: 'two headed behemoth',
    description: 'two headed behemoth',
    armor: 78,
    stats: {
      str: [900,
        1],
      dex: [115,
        155],
      int: [1,
        1],
      hp: [2,
        3],
      taming: null,
      barding: 188
    },
    offense: {
      min: 16,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1,250],
        description: 'two headed behemoth statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 303,
    name: 'wisp',
    description: 'wisp',
    armor: 40,
    karma: 0,
    fame: 4000,
    stats: {
      str: [196,
        225],
      dex: [196,
        225],
      int: [196,
        225],
      hp: [118,
        135],
      taming: null,
      barding: 78
    },
    offense: {
      min: 17,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'misc_monsters',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Light Source'
      }
    ],
    credits: [400,
      500],
    skills: {
      wrestling: 80.0,
      tactics: 80.0,
      magic_resistance: '80.0'
    }
  },
  {
    id: 304,
    name: 'orc',
    description: 'orc',
    armor: 28,
    stats: {
      str: [96,
        120],
      dex: [81,
        105],
      int: [36,
        60],
      hp: [58,
        72],
      taming: null,
      barding: 42
    },
    offense: {
      min: 5,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'orcs',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 305,
    name: 'orc bomber',
    description: 'orc bomber',
    armor: 30,
    karma: 2500,
    fame: 2500,
    stats: {
      str: [147,
        215],
      dex: [91,
        115],
      int: [61,
        85],
      hp: [95,
        123],
      taming: null,
      barding: 61
    },
    offense: {
      min: 1,
      max: 8,
      speed: 2.5
    },
    move: 1,
    mob_type: 'orcs',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [175,
      225],
    skills: {
      wrestling: [60,
        85],
      tactics: [75,
        90],
      magic_resistance: [70,
        85
      ]
    }
  },
  {
    id: 306,
    name: 'orc brute',
    description: 'orc brute',
    armor: 50,
    karma: 15000,
    fame: 15000,
    stats: {
      str: [767,
        945],
      dex: [66,
        75],
      int: [46,
        70],
      hp: [476,
        552],
      taming: null,
      barding: 94.3
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'orcs',
    attackable: true,
    inventory: [],
    credits: [750,
      950],
    skills: {
      wrestling: [90,
        100],
      tactics: [90,
        100],
      magic_resistance: [125,
        140
      ]
    }
  },
  {
    id: 307,
    name: 'orc captain',
    description: 'orc captain',
    armor: 34,
    karma: 2500,
    fame: 2500,
    stats: {
      str: [111,
        145],
      dex: [101,
        135],
      int: [86,
        110],
      hp: [67,
        87],
      taming: null,
      barding: 60
    },
    offense: {
      min: 5,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'orcs',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [100,
      150],
    skills: {
      wrestling: [0,0],
      tactics: [85,
        100],
      magic_resistance: [70,
        85
      ]
    }
  },
  {
    id: 308,
    name: 'orc scout',
    description: 'orc scout',
    armor: null,
    karma: 1500,
    fame: 1500,
    stats: {
      str: [96,
        120],
      dex: [101,
        130],
      int: [36,
        60],
      hp: [58,
        72],
      taming: null,
      barding: 71
    },
    offense: {
      min: 15,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'orcs',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      175],
    skills: {
      wrestling: [0,0],
      tactics: [55,
        80],
      magic_resistance: [50,
        75
      ]
    }
  },
  {
    id: 309,
    name: 'orcish lord',
    description: 'orcish lord',
    armor: 0,
    stats: {
      str: [147,215],
      dex: [91,115],
      int: [61,85],
      hp: [95,123],
      taming: null,
      barding: 61
    },
    offense: {
      min: 4,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'orcs',
    attackable: true,
    inventory: [
      {
        chance: [1,3],
        description: 'Random Reagent'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 310,
    name: 'orcish mage',
    description: 'orcish mage',
    armor: 30,
    stats: {
      str: [116,150],
      dex: [91,115],
      int: [161,185],
      hp: [70,90],
      taming: null,
      barding: 71
    },
    offense: {
      min: 4,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'orcs',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 311,
    name: 'bog thing',
    description: 'bog thing',
    armor: 28,
    karma: -8000,
    fame: 8000,
    stats: {
      str: [801,
        900],
      dex: [46,
        65],
      int: [36,
        50],
      hp: [481,
        540],
      taming: null,
      barding: 86.1
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'plants',
    attackable: true,
    inventory: [],
    credits: [275,
      325],
    skills: {
      wrestling: [65,
        80],
      tactics: [70,
        85],
      magic_resistance: [90,
        95
      ]
    }
  },
  {
    id: 312,
    name: 'corpser',
    description: 'corpser',
    armor: 18,
    karma: -1000,
    fame: 1000,
    stats: {
      str: [156,
        180],
      dex: [26,
        45],
      int: [26,
        40],
      hp: [94,
        108],
      taming: null,
      barding: 46
    },
    offense: {
      min: 10,
      max: 23,
      speed: 2.5
    },
    move: 1,
    mob_type: 'plants',
    attackable: true,
    inventory: [
      {
        chance: [1,1000],
        description: 'Platinum Coin'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [45,
        60],
      tactics: [45,
        60],
      magic_resistance: [15,
        20
      ]
    }
  },
  {
    id: 313,
    name: 'quagmire',
    description: 'quagmire',
    armor: 32,
    karma: 1500,
    fame: 1500,
    stats: {
      str: [101,
        130],
      dex: [66,
        85],
      int: [31,
        55],
      hp: [91,
        105],
      taming: null,
      barding: 71
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'plants',
    attackable: true,
    inventory: [],
    credits: [125,
      175],
    skills: {
      wrestling: [60,
        80],
      tactics: [50,
        60],
      magic_resistance: [65,
        75
      ]
    }
  },
  {
    id: 314,
    name: 'reaper',
    description: 'reaper',
    armor: 40,
    karma: 3500,
    fame: 3500,
    stats: {
      str: [66,
        215],
      dex: [66,
        75],
      int: [101,
        250],
      hp: [40,
        129],
      taming: null,
      barding: 81
    },
    offense: {
      min: 9,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'plants',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      175],
    skills: {
      wrestling: [50,
        60],
      tactics: [45,
        60],
      magic_resistance: [100,
        125
      ]
    }
  },
  {
    id: 315,
    name: 'swamp tentacle',
    description: 'swamp tentacle',
    armor: 28,
    karma: 3000,
    fame: 3000,
    stats: {
      str: [96,
        120],
      dex: [66,
        85],
      int: [16,
        30],
      hp: [58,
        72],
      taming: null,
      barding: 44
    },
    offense: {
      min: 6,
      max: 12,
      speed: 2.5
    },
    move: 1,
    mob_type: 'plants',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      175],
    skills: {
      wrestling: [65,
        80],
      tactics: [65,
        80],
      magic_resistance: [15,
        20
      ]
    }
  },
  {
    id: 316,
    name: 'whipping vine',
    description: 'whipping vine',
    armor: 45,
    karma: 1000,
    fame: 1000,
    stats: {
      str: [251,
        300],
      dex: [76,
        100],
      int: [26,
        40],
      hp: [251,
        300],
      taming: null,
      barding: 76.6
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'plants',
    attackable: true,
    inventory: [],
    credits: [null,
      null],
    skills: {
      wrestling: 70.0,
      tactics: 70.0,
      magic_resistance: '70.0'
    }
  },
  {
    id: 317,
    name: 'ratman',
    description: 'ratman',
    armor: 28,
    karma: 1500,
    fame: 1500,
    stats: {
      str: [96,
        120],
      dex: [81,
        100],
      int: [36,
        60],
      hp: [58,
        72],
      taming: null,
      barding: 38
    },
    offense: {
      min: 4,
      max: 5,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [50,
        75],
      tactics: [50,
        75],
      magic_resistance: [35,
        60
      ]
    }
  },
  {
    id: 318,
    name: 'ratman archer',
    description: 'ratman archer',
    armor: 56,
    karma: 6500,
    fame: 6500,
    stats: {
      str: [146,
        180],
      dex: [101,
        130],
      int: [116,
        140],
      hp: [88,
        108],
      taming: null,
      barding: 74
    },
    offense: {
      min: 15,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [300,
      350],
    skills: {
      wrestling: [50,
        75],
      tactics: [50,
        75],
      magic_resistance: [65,
        90
      ]
    }
  },
  {
    id: 319,
    name: 'ratman mage',
    description: 'ratman mage',
    armor: 44,
    karma: 7500,
    fame: 7500,
    stats: {
      str: [146,
        180],
      dex: [101,
        130],
      int: [186,
        210],
      hp: [88,
        108],
      taming: null,
      barding: 64
    },
    offense: {
      min: 7,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [275,
      352],
    skills: {
      wrestling: [50,
        75],
      tactics: [50,
        75],
      magic_resistance: [65,
        90
      ]
    }
  },
  {
    id: 320,
    name: 'anaconda',
    description: 'anaconda',
    armor: 55,
    stats: {
      str: [1,
        1],
      dex: [153,
        172],
      int: [300,
        400],
      hp: [1,
        1],
      taming: null,
      barding: 189
    },
    offense: {
      min: 12,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 321,
    name: 'ancient wyrm',
    description: 'ancient wyrm',
    armor: 70,
    karma: -22500,
    fame: 22500,
    stats: {
      str: [1,
        1],
      dex: [86,
        175],
      int: [686,
        775],
      hp: [658,
        711],
      taming: null,
      barding: 149
    },
    offense: {
      min: 29,
      max: 35,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: [1600,
      1800],
    skills: {
      wrestling: [110,
        null],
      tactics: [127,
        null],
      magic_resistance: [100,
        150
      ]
    }
  },
  {
    id: 322,
    name: 'azure dragon',
    description: 'azure dragon',
    armor: 80,
    stats: {
      str: [1,
        1],
      dex: [120,
        130],
      int: [770,
        820],
      hp: [3,
        3],
      taming: null,
      barding: 239
    },
    offense: {
      min: 20,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'PlatinumCoin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 323,
    name: 'deep sea serpent',
    description: 'deep sea serpent',
    armor: 60,
    karma: -6000,
    fame: 6000,
    stats: {
      str: [251,
        425],
      dex: [87,
        135],
      int: [87,
        155],
      hp: [151,
        255],
      taming: null,
      barding: 74
    },
    offense: {
      min: 6,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [60,
        70],
      tactics: [60,
        70],
      magic_resistance: [60,
        75
      ]
    }
  },
  {
    id: 324,
    name: 'dragon',
    description: 'dragon',
    armor: 60,
    karma: -15000,
    fame: 15000,
    stats: {
      str: [796,
        825],
      dex: [86,
        105],
      int: [436,
        475],
      hp: [478,
        495],
      taming: 93.9,
      barding: 112
    },
    offense: {
      min: 16,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [1000,
      1200],
    skills: {
      wrestling: [90,
        92],
      tactics: [97,
        100],
      magic_resistance: [99,
        100
      ]
    }
  },
  {
    id: 325,
    name: 'drake',
    description: 'drake',
    armor: 46,
    karma: -5500,
    fame: 5500,
    stats: {
      str: [401,
        430],
      dex: [133,
        152],
      int: [101,
        140],
      hp: [241,
        258],
      taming: 84.3,
      barding: 79
    },
    offense: {
      min: 11,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [275,
      325],
    skills: {
      wrestling: [65,
        80],
      tactics: [65,
        90],
      magic_resistance: [65,
        80
      ]
    }
  },
  {
    id: 326,
    name: 'elder wyrm',
    description: 'elder wyrm',
    armor: 90,
    stats: {
      str: [1,
        1],
      dex: [125,
        145],
      int: [1,
        1],
      hp: [5,
        5],
      taming: null,
      barding: 365
    },
    offense: {
      min: 29,
      max: 36,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,4],
        description: 'Peculiar Meat (Carve)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 327,
    name: 'kraken',
    description: 'kraken',
    armor: 50,
    karma: 11000,
    fame: 11000,
    stats: {
      str: [250,
        275],
      dex: [90,
        110],
      int: [26,
        40],
      hp: [250,
        275],
      taming: null,
      barding: 89
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Special Fishing Net'
      }
    ],
    credits: [275,
      325],
    skills: {
      wrestling: [45,
        60],
      tactics: [45,
        60],
      magic_resistance: [15,
        20
      ]
    }
  },
  {
    id: 328,
    name: 'leviathan',
    description: 'leviathan',
    armor: null,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 329,
    name: 'lizardman',
    description: 'lizardman',
    armor: 28,
    karma: 1500,
    fame: 1500,
    stats: {
      str: [96,
        120],
      dex: [86,
        105],
      int: [36,
        60],
      hp: [58,
        72],
      taming: null,
      barding: 46
    },
    offense: {
      min: 5,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [50,
      75],
    skills: {
      wrestling: [50,
        70],
      tactics: [55,
        80],
      magic_resistance: [35,
        60
      ]
    }
  },
  {
    id: 330,
    name: 'lock lake monster',
    description: 'lock lake monster',
    armor: 60,
    stats: {
      str: [756,
        780],
      dex: [226,
        245],
      int: [100,
        200],
      hp: [750,
        800],
      taming: null,
      barding: 93
    },
    offense: {
      min: 19,
      max: 33,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Random Fishing Net Piece'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 331,
    name: 'ophidian archmage',
    description: 'ophidian archmage',
    armor: 44,
    stats: {
      str: [281,
        305],
      dex: [191,
        215],
      int: [226,
        250],
      hp: [169,
        183],
      taming: null,
      barding: 76
    },
    offense: {
      min: 36,
      max: 45,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 332,
    name: 'ophidian knight',
    description: 'ophidian knight',
    armor: 40,
    stats: {
      str: [417,
        595],
      dex: [166,
        175],
      int: [46,
        70],
      hp: [266,
        342],
      taming: null,
      barding: 78
    },
    offense: {
      min: 16,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 333,
    name: 'ophidian mage',
    description: 'ophidian mage',
    armor: 30,
    stats: {
      str: [181,
        205],
      dex: [191,
        215],
      int: [96,
        120],
      hp: [109,
        123],
      taming: null,
      barding: 76
    },
    offense: {
      min: 5,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potion'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 334,
    name: 'ophidian matriarch',
    description: 'ophidian matriarch',
    armor: 50,
    karma: 16000,
    fame: 16000,
    stats: {
      str: [416,
        505],
      dex: [96,
        115],
      int: [366,
        455],
      hp: [250,
        303],
      taming: null,
      barding: 98
    },
    offense: {
      min: 11,
      max: 13,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [550,
      650],
    skills: {
      wrestling: [60,
        80],
      tactics: [50,
        70],
      magic_resistance: [90,
        100
      ]
    }
  },
  {
    id: 335,
    name: 'ophidian queen',
    description: 'ophidian queen',
    armor: 78,
    stats: {
      str: [810,
        910],
      dex: [125,
        135],
      int: [420,
        475],
      hp: [1,
        2],
      taming: null,
      barding: 172
    },
    offense: {
      min: 18,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 336,
    name: 'ophidian warrior',
    description: 'ophidian warrior',
    armor: 36,
    karma: 4500,
    fame: 4500,
    stats: {
      str: [150,
        320],
      dex: [94,
        190],
      int: [64,
        160],
      hp: [128,
        155],
      taming: null,
      barding: 65
    },
    offense: {
      min: 5,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [175,
      225],
    skills: {
      wrestling: [0,0],
      tactics: [75,
        90],
      magic_resistance: [70,
        85
      ]
    }
  },
  {
    id: 337,
    name: 'sea serpent',
    description: 'sea serpent',
    armor: 30,
    karma: 6000,
    fame: 6000,
    stats: {
      str: [168,
        225],
      dex: [58,
        85],
      int: [53,
        95],
      hp: [110,
        127],
      taming: null,
      barding: 64
    },
    offense: {
      min: 7,
      max: 13,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [60,
        70],
      tactics: [60,
        70],
      magic_resistance: [60,
        75
      ]
    }
  },
  {
    id: 338,
    name: 'serpentine dragon',
    description: 'serpentine dragon',
    armor: 36,
    karma: 15000,
    fame: 15000,
    stats: {
      str: [111,
        140],
      dex: [201,
        220],
      int: [1,
        1],
      hp: [480,
        480],
      taming: null,
      barding: 130
    },
    offense: {
      min: 5,
      max: 12,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Level 4 Treasure Map'
      }
    ],
    credits: [900,
      1100],
    skills: {
      wrestling: [30,
        100],
      tactics: [50,
        60],
      magic_resistance: '100.0'
    }
  },
  {
    id: 339,
    name: 'shadow wyrm',
    description: 'shadow wyrm',
    armor: 70,
    karma: 22500,
    fame: 22500,
    stats: {
      str: [898,
        1],
      dex: [68,
        200],
      int: [488,
        620],
      hp: [558,
        599],
      taming: null,
      barding: 141
    },
    offense: {
      min: 29,
      max: 35,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: [1550,
      1800],
    skills: {
      wrestling: [97,
        100],
      tactics: [97,
        100],
      magic_resistance: [100,
        130
      ]
    }
  },
  {
    id: 340,
    name: 'shipwreck kraken',
    description: 'shipwreck kraken',
    armor: 40,
    stats: {
      str: [250,
        275],
      dex: [90,
        110],
      int: [26,
        40],
      hp: [250,
        275],
      taming: null,
      barding: 74
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 341,
    name: 'skeletal dragon',
    description: 'skeletal dragon',
    armor: 80,
    karma: 22500,
    fame: 22500,
    stats: {
      str: [898,
        1030],
      dex: [68,
        200],
      int: [488,
        620],
      hp: [558,
        599],
      taming: null,
      barding: 118.3
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [],
    credits: [1600,
      1800],
    skills: {
      wrestling: [97,
        100],
      tactics: [97,
        100],
      magic_resistance: [100,
        130
      ]
    }
  },
  {
    id: 342,
    name: 'white wyrm',
    description: 'white wyrm',
    armor: 64,
    karma: 18000,
    fame: 18000,
    stats: {
      str: [721,
        760],
      dex: [101,
        130],
      int: [386,
        425],
      hp: [433,
        456],
      taming: 96.3,
      barding: 103
    },
    offense: {
      min: 17,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: [1200,
      1400],
    skills: {
      wrestling: [90,
        100],
      tactics: [97,
        100],
      magic_resistance: [99,
        100
      ]
    }
  },
  {
    id: 343,
    name: 'wyvern',
    description: 'wyvern',
    armor: 40,
    karma: 4000,
    fame: 4000,
    stats: {
      str: [202,
        240],
      dex: [153,
        172],
      int: [51,
        90],
      hp: [125,
        141],
      taming: null,
      barding: 79
    },
    offense: {
      min: 8,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [175,
      225],
    skills: {
      wrestling: [65,
        80],
      tactics: [65,
        90],
      magic_resistance: [65,
        80
      ]
    }
  },
  {
    id: 344,
    name: 'wyvern monarch',
    description: 'wyvern monarch',
    armor: 55,
    stats: {
      str: [1,
        1],
      dex: [153,
        172],
      int: [300,
        400],
      hp: [650,
        725],
      taming: null,
      barding: 125
    },
    offense: {
      min: 12,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'reptiles',
    attackable: true,
    inventory: [
      {
        chance: [1,250],
        description: 'Wyvern Monarch Statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 345,
    name: 'frost ooze',
    description: 'frost ooze',
    armor: 38,
    karma: -450,
    fame: 450,
    stats: {
      str: [18,
        30],
      dex: [16,
        21],
      int: [16,
        20],
      hp: [13,
        17],
      taming: null,
      barding: 11
    },
    offense: {
      min: 3,
      max: 9,
      speed: 2.5
    },
    move: 1,
    mob_type: 'slimes',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,200]
      }
    ],
    credits: 0,
    skills: {
      wrestling: [25,
        40],
      tactics: [19,
        34],
      magic_resistance: [5,
        10
      ]
    }
  },
  {
    id: 346,
    name: 'jwilson',
    description: 'jwilson',
    armor: 8,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'slimes',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 347,
    name: 'plague beast',
    description: 'plague beast',
    armor: 30,
    karma: 13000,
    fame: 13000,
    stats: {
      str: [302,
        500],
      dex: '80',
      int: [16,
        20],
      hp: [318,
        404],
      taming: null,
      barding: 81.5
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'slimes',
    attackable: true,
    inventory: [],
    credits: [450,
      600],
    skills: {
      wrestling: 100.0,
      tactics: [100, 100],
      magic_resistance: '35.0'
    }
  },
  {
    id: 348,
    name: 'slime',
    description: 'slime',
    armor: 8,
    karma: 300,
    fame: 300,
    stats: {
      str: [22,
        34],
      dex: [16,
        21],
      int: [16,
        20],
      hp: [15,
        19],
      taming: 23.1,
      barding: 27
    },
    offense: {
      min: 1,
      max: 5,
      speed: 2.5
    },
    move: 1,
    mob_type: 'slimes',
    attackable: true,
    inventory: [
      {
        description: 'Platinum Coin',
        chance: [1,400],
      }
    ],
    credits: [25,
      50],
    skills: {
      wrestling: [19,
        34],
      tactics: [19,
        34],
      magic_resistance: [15,
        20
      ]
    }
  },
  {
    id: 349,
    name: 'abominable snowman',
    description: 'abominable snowman',
    armor: 35,
    stats: {
      str: [446,
        515],
      dex: [126,
        155],
      int: [281,
        305],
      hp: [700,
        900],
      taming: null,
      barding: 123
    },
    offense: {
      min: 15,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Yeti Statue  2 Hues (1151, 1154)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 350,
    name: 'acolyte of death',
    description: 'acolyte of death',
    armor: 36,
    stats: {
      str: [351,
        400],
      dex: [101,
        150],
      int: [502,
        700],
      hp: [750,
        100],
      taming: null,
      barding: null
    },
    offense: {
      min: 5,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 351,
    name: 'avarice',
    description: 'avarice',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [850,
        1],
      taming: null,
      barding: 158
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 352,
    name: 'balam the daemon knight',
    description: 'balam the daemon knight',
    armor: 40,
    stats: {
      str: [550,
        575],
      dex: [126,
        145],
      int: [676,
        905],
      hp: [4,
        5],
      taming: null,
      barding: null
    },
    offense: {
      min: 24,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 353,
    name: 'black knight',
    description: 'black knight',
    armor: 40,
    stats: {
      str: [305,
        425],
      dex: [72,
        150],
      int: [505,
        750],
      hp: [3,
        4],
      taming: null,
      barding: null
    },
    offense: {
      min: 20,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 354,
    name: 'blitzen',
    description: 'blitzen',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 160
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,25],
        description: 'Santas Lair Scroll (Dungeon)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 355,
    name: 'bloated zombie',
    description: 'bloated zombie',
    armor: 30,
    stats: {
      str: [485,
        545],
      dex: [81,
        120],
      int: [375,
        425],
      hp: [455,
        525],
      taming: null,
      barding: 102
    },
    offense: {
      min: 21,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potions'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 356,
    name: 'blood necromancer',
    description: 'blood necromancer',
    armor: 50,
    stats: {
      str: [250,
        275],
      dex: [126,
        145],
      int: [676,
        905],
      hp: [903,
        1],
      taming: null,
      barding: 156
    },
    offense: {
      min: 18,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 357,
    name: 'bloodthirsty turkey',
    description: 'bloodthirsty turkey',
    armor: 40,
    stats: {
      str: [1,
        1],
      dex: [235,
        250],
      int: [301,
        325],
      hp: [1,
        1],
      taming: null,
      barding: 123
    },
    offense: {
      min: 17,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 358,
    name: 'comet',
    description: 'comet',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        200],
      int: [750,
        1],
      hp: [850,
        1],
      taming: null,
      barding: 134
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 359,
    name: 'corrupt soul',
    description: 'corrupt soul',
    armor: 28,
    stats: {
      str: [75,
        80],
      dex: [16,
        45],
      int: [111,
        125],
      hp: [100,
        175],
      taming: null,
      barding: 72
    },
    offense: {
      min: 7,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 360,
    name: 'crystal ogre',
    description: 'crystal ogre',
    armor: 32,
    stats: {
      str: [900,
        1],
      dex: [114,
        155],
      int: [1,
        1],
      hp: [1,
        1],
      taming: null,
      barding: 134
    },
    offense: {
      min: 21,
      max: 32,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 361,
    name: 'crystal wolf',
    description: 'crystal wolf',
    armor: 22,
    stats: {
      str: [125,
        150],
      dex: [81,
        105],
      int: [36,
        60],
      hp: [58,
        72],
      taming: null,
      barding: 50
    },
    offense: {
      min: 11,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 362,
    name: 'cuckold',
    description: 'cuckold',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [850,
        1],
      taming: null,
      barding: 146
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 363,
    name: 'cupid',
    description: 'cupid',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 151
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 364,
    name: 'cupids apprentice archer',
    description: 'cupids apprentice archer',
    armor: 15,
    stats: {
      str: [106,
        116],
      dex: [91,
        115],
      int: [100,
        200],
      hp: [0,
        0],
      taming: null,
      barding: 69
    },
    offense: {
      min: 11,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Valentines Candy'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 365,
    name: 'cupids archer',
    description: 'cupids archer',
    armor: 20,
    stats: {
      str: [110,
        125],
      dex: [100,
        110],
      int: [100,
        200],
      hp: [0,
        0],
      taming: null,
      barding: 70
    },
    offense: {
      min: 12,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Valentines Candy'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 366,
    name: 'cupids rookie archer',
    description: 'cupids rookie archer',
    armor: 10,
    stats: {
      str: [86,
        100],
      dex: [81,
        95],
      int: [100,
        200],
      hp: [0,
        0],
      taming: null,
      barding: 68
    },
    offense: {
      min: 10,
      max: 23,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Valentines Candy'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 367,
    name: 'cupids veteran archer',
    description: 'cupids veteran archer',
    armor: 25,
    stats: {
      str: [110,
        130],
      dex: [110,
        130],
      int: [100,
        200],
      hp: [0,
        0],
      taming: null,
      barding: 71
    },
    offense: {
      min: 13,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Valentines Candy'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 368,
    name: 'dancer',
    description: 'dancer',
    armor: 38,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 155
    },
    offense: {
      min: 13,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 369,
    name: 'dark elf archer',
    description: 'dark elf archer',
    armor: 35,
    stats: {
      str: [146,
        180],
      dex: [180,
        205],
      int: [800,
        1],
      hp: [288,
        308],
      taming: null,
      barding: 88
    },
    offense: {
      min: 15,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 370,
    name: 'dark elf axer',
    description: 'dark elf axer',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [75,
        100],
      int: [705,
        950],
      hp: [325,
        500],
      taming: null,
      barding: 106
    },
    offense: {
      min: 14,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 371,
    name: 'dark elf battle mage',
    description: 'dark elf battle mage',
    armor: 50,
    stats: {
      str: [416,
        505],
      dex: [146,
        165],
      int: [566,
        655],
      hp: [450,
        750],
      taming: null,
      barding: null
    },
    offense: {
      min: 11,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 372,
    name: 'dark elf commander',
    description: 'dark elf commander',
    armor: 60,
    stats: {
      str: [305,
        425],
      dex: [72,
        150],
      int: [505,
        750],
      hp: [3,
        3],
      taming: null,
      barding: null
    },
    offense: {
      min: 20,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 373,
    name: 'dark elf fencer',
    description: 'dark elf fencer',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [75,
        100],
      int: [705,
        950],
      hp: [325,
        500],
      taming: null,
      barding: 115
    },
    offense: {
      min: 14,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 374,
    name: 'dark elf knight',
    description: 'dark elf knight',
    armor: 90,
    stats: {
      str: [425,
        525],
      dex: [125,
        150],
      int: [505,
        750],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 19,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 375,
    name: 'dark elf macer',
    description: 'dark elf macer',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [75,
        100],
      int: [705,
        950],
      hp: [325,
        500],
      taming: null,
      barding: 103
    },
    offense: {
      min: 14,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 376,
    name: 'dark elf mage',
    description: 'dark elf mage',
    armor: 35,
    stats: {
      str: [171,
        200],
      dex: [126,
        145],
      int: [705,
        950],
      hp: [103,
        120],
      taming: null,
      barding: 88
    },
    offense: {
      min: 15,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 377,
    name: 'dark elf ranger',
    description: 'dark elf ranger',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [150,
        175],
      int: [505,
        750],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 18,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Random Ranger Armor Piece'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 378,
    name: 'dark elf spirit',
    description: 'dark elf spirit',
    armor: 45,
    stats: {
      str: [650,
        750],
      dex: [110,
        120],
      int: [2,
        2],
      hp: [12,
        15],
      taming: null,
      barding: null
    },
    offense: {
      min: 9,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 379,
    name: 'dasher',
    description: 'dasher',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 157
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 380,
    name: 'defiled zombie',
    description: 'defiled zombie',
    armor: 27,
    stats: {
      str: [445,
        505],
      dex: [61,
        100],
      int: [375,
        425],
      hp: [415,
        485],
      taming: null,
      barding: 96
    },
    offense: {
      min: 17,
      max: 21,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potions'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 381,
    name: 'despair',
    description: 'despair',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [850,
        1],
      taming: null,
      barding: 162
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 382,
    name: 'donner',
    description: 'donner',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 152
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 383,
    name: 'easter bunny',
    description: 'easter bunny',
    armor: 40,
    stats: {
      str: [350,
        350],
      dex: [205,
        205],
      int: [50,
        50],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 6,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Rabbits Feet'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 384,
    name: 'elf archer',
    description: 'elf archer',
    armor: 35,
    stats: {
      str: [146,
        180],
      dex: [180,
        205],
      int: [705,
        940],
      hp: [288,
        308],
      taming: null,
      barding: 105
    },
    offense: {
      min: 15,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 385,
    name: 'elf axer',
    description: 'elf axer',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [75,
        100],
      int: [705,
        1],
      hp: [325,
        500],
      taming: null,
      barding: 112
    },
    offense: {
      min: 14,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 386,
    name: 'elf battle mage',
    description: 'elf battle mage',
    armor: 50,
    stats: {
      str: [416,
        505],
      dex: [146,
        165],
      int: [566,
        655],
      hp: [450,
        750],
      taming: null,
      barding: null
    },
    offense: {
      min: 11,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 387,
    name: 'elf fencer',
    description: 'elf fencer',
    armor: 45,
    stats: {
      str: [205,
        325],
      dex: [75,
        100],
      int: [505,
        750],
      hp: [325,
        500],
      taming: null,
      barding: 110
    },
    offense: {
      min: 14,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 388,
    name: 'elf knight',
    description: 'elf knight',
    armor: 90,
    stats: {
      str: [425,
        525],
      dex: [125,
        150],
      int: [505,
        750],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 19,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 389,
    name: 'elf macer',
    description: 'elf macer',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [75,
        100],
      int: [505,
        750],
      hp: [325,
        500],
      taming: null,
      barding: 111
    },
    offense: {
      min: 14,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 390,
    name: 'elf mage',
    description: 'elf mage',
    armor: 35,
    stats: {
      str: [171,
        200],
      dex: [126,
        145],
      int: [276,
        305],
      hp: [250,
        320],
      taming: null,
      barding: 87
    },
    offense: {
      min: 15,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 391,
    name: 'elf ranger',
    description: 'elf ranger',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [150,
        175],
      int: [505,
        750],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 18,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Random Ranger Armor Piece'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 392,
    name: 'evil polar bear',
    description: 'evil polar bear',
    armor: 18,
    stats: {
      str: [150,
        450],
      dex: [80,
        140],
      int: [50,
        500],
      hp: [250,
        750],
      taming: null,
      barding: 100
    },
    offense: {
      min: 8,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 393,
    name: 'fire reaper',
    description: 'fire reaper',
    armor: 40,
    stats: {
      str: [215,
        315],
      dex: [66,
        75],
      int: [750,
        1],
      hp: [250,
        500],
      taming: null,
      barding: 110
    },
    offense: {
      min: 15,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 394,
    name: 'flame archer',
    description: 'flame archer',
    armor: 35,
    stats: {
      str: [146,
        180],
      dex: [180,
        205],
      int: [716,
        940],
      hp: [288,
        308],
      taming: null,
      barding: 109
    },
    offense: {
      min: 11,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 395,
    name: 'flame axer',
    description: 'flame axer',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [75,
        100],
      int: [750,
        1],
      hp: [325,
        500],
      taming: null,
      barding: 115
    },
    offense: {
      min: 14,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 396,
    name: 'flame battle mage',
    description: 'flame battle mage',
    armor: 50,
    stats: {
      str: [416,
        505],
      dex: [146,
        165],
      int: [3,
        4],
      hp: [450,
        750],
      taming: null,
      barding: null
    },
    offense: {
      min: 11,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'polar bear statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 397,
    name: 'flame fencer',
    description: 'flame fencer',
    armor: 45,
    stats: {
      str: [205,
        325],
      dex: [75,
        100],
      int: [505,
        750],
      hp: [325,
        500],
      taming: null,
      barding: 107
    },
    offense: {
      min: 14,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 398,
    name: 'flame ghoul',
    description: 'flame ghoul',
    armor: 50,
    stats: {
      str: [345,
        370],
      dex: [71,
        90],
      int: [26,
        40],
      hp: [208,
        222],
      taming: null,
      barding: 70
    },
    offense: {
      min: 13,
      max: 23,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 399,
    name: 'flame knight',
    description: 'flame knight',
    armor: 90,
    stats: {
      str: [425,
        525],
      dex: [125,
        150],
      int: [3,
        4],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 19,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Hidden Village Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 400,
    name: 'flame macer',
    description: 'flame macer',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [75,
        100],
      int: [505,
        750],
      hp: [325,
        500],
      taming: null,
      barding: 101
    },
    offense: {
      min: 14,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Hidden Village Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 401,
    name: 'flame mage',
    description: 'flame mage',
    armor: 35,
    stats: {
      str: [205,
        325],
      dex: [75,
        100],
      int: [505,
        750],
      hp: [325,
        500],
      taming: null,
      barding: 108
    },
    offense: {
      min: 14,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Hidden Village Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 402,
    name: 'flame ranger',
    description: 'flame ranger',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [150,
        175],
      int: [3,
        4],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 18,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Ranger Armor of Fire  1 Random Piece, 4 Fire Hues'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 403,
    name: 'fluffy',
    description: 'fluffy',
    armor: 70,
    stats: {
      str: [1,
        1],
      dex: [180,
        190],
      int: [1,
        1],
      hp: [2,
        2],
      taming: null,
      barding: 186
    },
    offense: {
      min: 17,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Level 6 Treasure Map'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 404,
    name: 'frankensteins monster',
    description: 'frankensteins monster',
    armor: 78,
    stats: {
      str: [900,
        1],
      dex: [114,
        155],
      int: [1,
        1],
      hp: [4,
        5],
      taming: null,
      barding: null
    },
    offense: {
      min: 16,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Scrolls'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 405,
    name: 'frost archer',
    description: 'frost archer',
    armor: 35,
    stats: {
      str: [146,
        180],
      dex: [180,
        205],
      int: [716,
        940],
      hp: [288,
        308],
      taming: null,
      barding: 110
    },
    offense: {
      min: 11,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 406,
    name: 'frost axer',
    description: 'frost axer',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [75,
        100],
      int: [750,
        1],
      hp: [325,
        500],
      taming: null,
      barding: 116
    },
    offense: {
      min: 14,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 407,
    name: 'frost battle mage',
    description: 'frost battle mage',
    armor: 50,
    stats: {
      str: [415,
        505],
      dex: [146,
        165],
      int: [3,
        4],
      hp: [450,
        750],
      taming: null,
      barding: null
    },
    offense: {
      min: 14,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Polar Bear Statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 408,
    name: 'frost fencer',
    description: 'frost fencer',
    armor: 45,
    stats: {
      str: [205,
        325],
      dex: [75,
        100],
      int: [505,
        750],
      hp: [325,
        500],
      taming: null,
      barding: 110
    },
    offense: {
      min: 14,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 409,
    name: 'frost knight',
    description: 'frost knight',
    armor: 90,
    stats: {
      str: [425,
        525],
      dex: [125,
        150],
      int: [3,
        4],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 19,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,25],
        description: 'Ice Fortress Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 410,
    name: 'frost macer',
    description: 'frost macer',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [75,
        100],
      int: [505,
        750],
      hp: [325,
        500],
      taming: null,
      barding: 101
    },
    offense: {
      min: 14,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 411,
    name: 'frost mage',
    description: 'frost mage',
    armor: 35,
    stats: {
      str: [171,
        200],
      dex: [126,
        145],
      int: [700,
        950],
      hp: [250,
        320],
      taming: null,
      barding: 110
    },
    offense: {
      min: 15,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 412,
    name: 'frost ranger',
    description: 'frost ranger',
    armor: 45,
    stats: {
      str: [305,
        425],
      dex: [125,
        135],
      int: [3,
        4],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 19,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Ranger Armor of Frost  1 Random Piece, 4 Ice Hues'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 413,
    name: 'gluttony',
    description: 'gluttony',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [850,
        1],
      taming: null,
      barding: 162
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 414,
    name: 'goblin',
    description: 'goblin',
    armor: 32,
    stats: {
      str: [175,
        200],
      dex: [81,
        105],
      int: [650,
        710],
      hp: [275,
        325],
      taming: null,
      barding: 94
    },
    offense: {
      min: 10,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 415,
    name: 'good polar bear',
    description: 'good polar bear',
    armor: 0,
    stats: {
      str: [125,
        175],
      dex: [81,
        105],
      int: [26,
        50],
      hp: [125,
        250],
      taming: 80.1,
      barding: 70
    },
    offense: {
      min: 8,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 416,
    name: 'grave necromancer',
    description: 'grave necromancer',
    armor: 40,
    stats: {
      str: [216,
        305],
      dex: [96,
        115],
      int: [966,
        1],
      hp: [3,
        3],
      taming: null,
      barding: 210
    },
    offense: {
      min: 15,
      max: 27,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 417,
    name: 'greed',
    description: 'greed',
    armor: 60,
    stats: {
      str: [250,
        275],
      dex: [126,
        145],
      int: [676,
        905],
      hp: [2,
        3],
      taming: null,
      barding: null
    },
    offense: {
      min: 24,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 418,
    name: 'grinch',
    description: 'grinch',
    armor: 120,
    stats: {
      str: [586,
        785],
      dex: [177,
        255],
      int: [351,
        450],
      hp: [5,
        6],
      taming: null,
      barding: null
    },
    offense: {
      min: 13,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Piece of Grinch Clothing'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 419,
    name: 'headlesshorseless',
    description: 'headlesshorseless',
    armor: 36,
    stats: {
      str: [428,
        480],
      dex: [136,
        155],
      int: [86,
        130],
      hp: [550,
        750],
      taming: null,
      barding: 122
    },
    offense: {
      min: 14,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 420,
    name: 'holiday elf (beefy)',
    description: 'holiday elf (beefy)',
    armor: null,
    stats: {
      str: [150,
        175],
      dex: [110,
        120],
      int: [200,
        250],
      hp: [180,
        250],
      taming: null,
      barding: 86
    },
    offense: {
      min: 16,
      max: 23,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: '200-275 Gold Coins'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 421,
    name: 'holiday elf (rough)',
    description: 'holiday elf (rough)',
    armor: null,
    stats: {
      str: [125,
        150],
      dex: [110,
        120],
      int: [200,
        250],
      hp: [130,
        190],
      taming: null,
      barding: 81
    },
    offense: {
      min: 12,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: '150-225 Gold Coins'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 422,
    name: 'holiday elf (wimpy)',
    description: 'holiday elf (wimpy)',
    armor: null,
    stats: {
      str: [86,
        100],
      dex: [81,
        95],
      int: [200,
        250],
      hp: [75,
        125],
      taming: null,
      barding: 76
    },
    offense: {
      min: 8,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: '75-150 Gold Coins'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 423,
    name: 'holiday reindeer',
    description: 'holiday reindeer',
    armor: 38,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 171
    },
    offense: {
      min: 13,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 424,
    name: 'hubris',
    description: 'hubris',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [850,
        1],
      taming: null,
      barding: 174
    },
    offense: {
      min: 13,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 425,
    name: 'ice ghoul',
    description: 'ice ghoul',
    armor: 50,
    stats: {
      str: [345,
        370],
      dex: [71,
        90],
      int: [26,
        40],
      hp: [208,
        222],
      taming: null,
      barding: 70
    },
    offense: {
      min: 13,
      max: 23,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Frozen Continent Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 426,
    name: 'ice golem',
    description: 'ice golem',
    armor: 40,
    stats: {
      str: [156,
        185],
      dex: [96,
        115],
      int: [171,
        192],
      hp: [225,
        425],
      taming: null,
      barding: 81
    },
    offense: {
      min: 10,
      max: 21,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 427,
    name: 'ice reaper',
    description: 'ice reaper',
    armor: 40,
    stats: {
      str: [215,
        315],
      dex: [66,
        75],
      int: [750,
        1],
      hp: [250,
        500],
      taming: null,
      barding: 110
    },
    offense: {
      min: 15,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,250],
        description: 'Ice Reaper Statuette  4 Hues'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 428,
    name: 'krampus',
    description: 'krampus',
    armor: 55,
    stats: {
      str: [250,
        275],
      dex: [126,
        145],
      int: [676,
        905],
      hp: [2,
        3],
      taming: null,
      barding: null
    },
    offense: {
      min: 19,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'the naughty list  a rare runebook'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 429,
    name: 'leprechaun',
    description: 'leprechaun',
    armor: null,
    stats: {
      str: [81,
        105],
      dex: [191,
        215],
      int: [126,
        150],
      hp: [175,
        325],
      taming: null,
      barding: 73
    },
    offense: {
      min: 14,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Leprechaun Sandals'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 430,
    name: 'leprechaun jockey',
    description: 'leprechaun jockey',
    armor: null,
    stats: {
      str: [161,
        205],
      dex: [75,
        100],
      int: [126,
        150],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 18,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 431,
    name: 'lust',
    description: 'lust',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [850,
        1],
      taming: null,
      barding: 161
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 432,
    name: 'mini daemon',
    description: 'mini daemon',
    armor: 58,
    stats: {
      str: [476,
        505],
      dex: [76,
        95],
      int: [301,
        325],
      hp: [286,
        303],
      taming: null,
      barding: 98
    },
    offense: {
      min: 7,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Hidden Village Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 433,
    name: 'minion of cupid',
    description: 'minion of cupid',
    armor: 10,
    stats: {
      str: [75,
        100],
      dex: [46,
        58],
      int: [16,
        24],
      hp: [25,
        50],
      taming: null,
      barding: 33
    },
    offense: {
      min: 8,
      max: 12,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Valentines Candy'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 434,
    name: 'mutant fluffy',
    description: 'mutant fluffy',
    armor: 60,
    stats: {
      str: [696,
        775],
      dex: [86,
        105],
      int: [436,
        475],
      hp: [578,
        595],
      taming: null,
      barding: 117
    },
    offense: {
      min: 16,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 435,
    name: 'plague zombie',
    description: 'plague zombie',
    armor: 24,
    stats: {
      str: [415,
        465],
      dex: [51,
        85],
      int: [375,
        450],
      hp: [385,
        445],
      taming: null,
      barding: 97
    },
    offense: {
      min: 14,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potions'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 436,
    name: 'polar bear boss',
    description: 'polar bear boss',
    armor: 50,
    stats: {
      str: [900,
        1],
      dex: [114,
        155],
      int: [1,
        1],
      hp: [1,
        1],
      taming: null,
      barding: null
    },
    offense: {
      min: 16,
      max: 2,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'StrengthPotion'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 437,
    name: 'poltergeist',
    description: 'poltergeist',
    armor: 34,
    stats: {
      str: [166,
        210],
      dex: [96,
        115],
      int: [325,
        375],
      hp: [146,
        190],
      taming: null,
      barding: 92
    },
    offense: {
      min: 11,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potions'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 438,
    name: 'prancer',
    description: 'prancer',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 167
    },
    offense: {
      min: 13,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 439,
    name: 'queen of the damned',
    description: 'queen of the damned',
    armor: 40,
    stats: {
      str: [750,
        850],
      dex: [105,
        115],
      int: [420,
        475],
      hp: [4,
        5],
      taming: null,
      barding: null
    },
    offense: {
      min: 18,
      max: 28,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Assorted High Level Scrolls'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 440,
    name: 'ridable polar bear',
    description: 'ridable polar bear',
    armor: 18,
    stats: {
      str: [116,
        140],
      dex: [81,
        105],
      int: [26,
        50],
      hp: [70,
        84],
      taming: 11.1,
      barding: 44
    },
    offense: {
      min: 7,
      max: 12,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 441,
    name: 'royal mummy',
    description: 'royal mummy',
    armor: 40,
    stats: {
      str: [625,
        725],
      dex: [150,
        170],
      int: [26,
        40],
      hp: [4,
        5],
      taming: null,
      barding: 157
    },
    offense: {
      min: 18,
      max: 28,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Assorted High Level Scrolls'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 442,
    name: 'rudolph',
    description: 'rudolph',
    armor: 38,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 171
    },
    offense: {
      min: 13,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,50],
        description: 'Santas Lair Scroll (Overworld)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 443,
    name: 'savage turkey',
    description: 'savage turkey',
    armor: 30,
    stats: {
      str: [605,
        625],
      dex: [140,
        150],
      int: [301,
        325],
      hp: [1,
        1],
      taming: null,
      barding: 97
    },
    offense: {
      min: 13,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 444,
    name: 'servant of cupid',
    description: 'servant of cupid',
    armor: 15,
    stats: {
      str: [96,
        115],
      dex: [56,
        68],
      int: [16,
        24],
      hp: [50,
        75],
      taming: null,
      barding: 44
    },
    offense: {
      min: 9,
      max: 13,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Valentines Candy'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 445,
    name: 'skeletal blood knight',
    description: 'skeletal blood knight',
    armor: 35,
    stats: {
      str: [496,
        650],
      dex: [96,
        135],
      int: [636,
        690],
      hp: [518,
        750],
      taming: null,
      barding: 116
    },
    offense: {
      min: 18,
      max: 28,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potions'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 446,
    name: 'skeletal blood mage',
    description: 'skeletal blood mage',
    armor: 44,
    stats: {
      str: [166,
        210],
      dex: [56,
        75],
      int: [386,
        410],
      hp: [850,
        950],
      taming: null,
      barding: 140
    },
    offense: {
      min: 13,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potions'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 447,
    name: 'skeleton',
    description: 'skeleton',
    armor: 16,
    karma: 450,
    fame: 450,
    stats: {
      str: [56,
        80],
      dex: [56,
        75],
      int: [216,
        240],
      hp: [75,
        125],
      taming: null,
      barding: 67
    },
    offense: {
      min: 10,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,1000],
        description: 'Platinum Coin'
      }
    ],
    credits: [25,
      50],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 448,
    name: 'skeleton',
    description: 'skeleton',
    armor: 20,
    karma: 450,
    fame: 450,
    stats: {
      str: [56,
        80],
      dex: [56,
        75],
      int: [16,
        40],
      hp: [34,
        48],
      taming: null,
      barding: 38.9
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,1000],
        description: 'Platinum Coin'
      }
    ],
    credits: [25,
      50],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 449,
    name: 'skeleton',
    description: 'skeleton',
    armor: 30,
    karma: 450,
    fame: 450,
    stats: {
      str: [225,
        250],
      dex: [90,
        105],
      int: [475,
        515],
      hp: [375,
        400],
      taming: null,
      barding: 94
    },
    offense: {
      min: 13,
      max: 19,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [25,
      50],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 450,
    name: 'sloth',
    description: 'sloth',
    armor: 38,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [850,
        1],
      taming: null,
      barding: 168
    },
    offense: {
      min: 13,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Sloth Statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 451,
    name: 'snow vortex',
    description: 'snow vortex',
    armor: 50,
    stats: {
      str: [326,
        355],
      dex: [166,
        185],
      int: [71,
        95],
      hp: [296,
        413],
      taming: null,
      barding: 78
    },
    offense: {
      min: 11,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 452,
    name: 'sorcerer of cupid',
    description: 'sorcerer of cupid',
    armor: 25,
    stats: {
      str: [50,
        75],
      dex: [26,
        38],
      int: [125,
        150],
      hp: [75,
        100],
      taming: null,
      barding: 70
    },
    offense: {
      min: 8,
      max: 12,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Valentines Candy'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 453,
    name: 'succubus concubine',
    description: 'succubus concubine',
    armor: 25,
    stats: {
      str: [225,
        275],
      dex: [75,
        150],
      int: [325,
        400],
      hp: [1,
        2],
      taming: null,
      barding: 163
    },
    offense: {
      min: 5,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 454,
    name: 'turkey archer',
    description: 'turkey archer',
    armor: 35,
    stats: {
      str: [305,
        425],
      dex: [150,
        175],
      int: [505,
        750],
      hp: [1,
        1],
      taming: null,
      barding: 138
    },
    offense: {
      min: 18,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Random Event Clothing Item(17 Possible Items)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 455,
    name: 'turkey fencer',
    description: 'turkey fencer',
    armor: 35,
    stats: {
      str: [305,
        425],
      dex: [150,
        175],
      int: [505,
        750],
      hp: [1,
        1],
      taming: null,
      barding: 138
    },
    offense: {
      min: 14,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Random Event Clothing Item  17 Possible Items'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 456,
    name: 'turkey knight',
    description: 'turkey knight',
    armor: 35,
    stats: {
      str: [305,
        425],
      dex: [72,
        150],
      int: [505,
        750],
      hp: [4,
        5],
      taming: null,
      barding: null
    },
    offense: {
      min: 18,
      max: 27,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Random Event Clothing Item  (17 Possible Items)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 457,
    name: 'turkey macer',
    description: 'turkey macer',
    armor: 35,
    stats: {
      str: [305,
        425],
      dex: [150,
        175],
      int: [505,
        750],
      hp: [1,
        1],
      taming: null,
      barding: 138
    },
    offense: {
      min: 17,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,10],
        description: 'Random Event Clothing Item (17 Possible Items)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 458,
    name: 'turkinator',
    description: 'turkinator',
    armor: 40,
    stats: {
      str: [1,
        1],
      dex: [125,
        150],
      int: [301,
        325],
      hp: [4,
        5],
      taming: null,
      barding: 256
    },
    offense: {
      min: 17,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Assorted Gems'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 459,
    name: 'undead captain johne',
    description: 'undead captain johne',
    armor: 40,
    stats: {
      str: [625,
        725],
      dex: [150,
        170],
      int: [26,
        40],
      hp: [4,
        5],
      taming: null,
      barding: null
    },
    offense: {
      min: 18,
      max: 28,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'captain Johnes cutlass'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 460,
    name: 'undead cat',
    description: 'undead cat',
    armor: 30,
    stats: {
      str: [102,
        150],
      dex: [81,
        105],
      int: [36,
        60],
      hp: [35,
        65],
      taming: null,
      barding: 50
    },
    offense: {
      min: 11,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 461,
    name: 'undead cat lady',
    description: 'undead cat lady',
    armor: 0,
    stats: {
      str: [650,
        750],
      dex: [110,
        120],
      int: [2,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 176
    },
    offense: {
      min: 12,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'a vial of catnip'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 462,
    name: 'undead dragon',
    description: 'undead dragon',
    armor: 40,
    stats: {
      str: [750,
        900],
      dex: [68,
        125],
      int: [488,
        620],
      hp: [3,
        4],
      taming: null,
      barding: 220
    },
    offense: {
      min: 20,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 463,
    name: 'vampire',
    description: 'vampire',
    armor: 35,
    stats: {
      str: [446,
        515],
      dex: [126,
        155],
      int: [281,
        305],
      hp: [700,
        800],
      taming: null,
      barding: 132
    },
    offense: {
      min: 15,
      max: 22,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 464,
    name: 'vampire lord',
    description: 'vampire lord',
    armor: 30,
    stats: {
      str: [450,
        500],
      dex: [191,
        215],
      int: [800,
        1],
      hp: [4,
        5],
      taming: null,
      barding: 207
    },
    offense: {
      min: 10,
      max: 20,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Assorted Medium Level Scrolls'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 465,
    name: 'vampire mistress',
    description: 'vampire mistress',
    armor: 20,
    stats: {
      str: [225,
        75],
      dex: [75,
        150],
      int: [325,
        400],
      hp: [1,
        1],
      taming: null,
      barding: 182
    },
    offense: {
      min: 5,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 466,
    name: 'vanity',
    description: 'vanity',
    armor: 38,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [850,
        1],
      taming: null,
      barding: 172
    },
    offense: {
      min: 13,
      max: 17,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Vanity Statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 467,
    name: 'vixen',
    description: 'vixen',
    armor: 40,
    stats: {
      str: [898,
        1],
      dex: [68,
        100],
      int: [1,
        2],
      hp: [1,
        1],
      taming: null,
      barding: 146
    },
    offense: {
      min: 15,
      max: 25,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,250],
        description: 'vixen statuette'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 468,
    name: 'walking dead',
    description: 'walking dead',
    armor: 21,
    stats: {
      str: [145,
        175],
      dex: [41,
        70],
      int: [375,
        450],
      hp: [225,
        250],
      taming: null,
      barding: 84
    },
    offense: {
      min: 11,
      max: 15,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potions'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 469,
    name: 'warrior of cupid',
    description: 'warrior of cupid',
    armor: 20,
    stats: {
      str: [105,
        125],
      dex: [66,
        88],
      int: [16,
        24],
      hp: [75,
        100],
      taming: null,
      barding: 53
    },
    offense: {
      min: 10,
      max: 14,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Valentines Candy'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 470,
    name: 'white witch',
    description: 'white witch',
    armor: 55,
    stats: {
      str: [250,
        275],
      dex: [126,
        145],
      int: [676,
        905],
      hp: [2,
        3],
      taming: null,
      barding: null
    },
    offense: {
      min: 24,
      max: 29,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,20],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 471,
    name: 'wild turkey',
    description: 'wild turkey',
    armor: 20,
    stats: {
      str: [505,
        525],
      dex: [100,
        120],
      int: [301,
        325],
      hp: [475,
        525],
      taming: null,
      barding: 75
    },
    offense: {
      min: 8,
      max: 16,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1,4],
        description: 'Peculiar Meat (Carve)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 472,
    name: 'zombie',
    description: 'zombie',
    armor: 18,
    karma: 600,
    fame: 600,
    stats: {
      str: [125,
        135],
      dex: [31,
        50],
      int: [375,
        425],
      hp: [75,
        125],
      taming: null,
      barding: 73
    },
    offense: {
      min: 8,
      max: 12,
      speed: 2.5
    },
    move: 1,
    mob_type: 'special',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potions'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [35,
        50],
      tactics: [35,
        50],
      magic_resistance: [15,
        40
      ]
    }
  },
  {
    id: 473,
    name: 'blade spirit',
    description: 'blade spirit',
    armor: 40,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'summons',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 474,
    name: 'energy vortex',
    description: 'energy vortex',
    armor: 40,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'summons',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {

    }
  },
  {
    id: 475,
    name: 'ancient lich',
    description: 'ancient lich',
    armor: 60,
    karma: -23000,
    fame: 23000,
    stats: {
      str: [206,
        305],
      dex: [96,
        115],
      int: [966,
        1],
      hp: [560,
        595],
      taming: null,
      barding: 142
    },
    offense: {
      min: 15,
      max: 27,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: [1500,
      1700],
    skills: {
      wrestling: [75,
        87],
      tactics: [90,
        100],
      magic_resistance: [175,
        200
      ]
    }
  },
  {
    id: 476,
    name: 'animated zombie',
    description: 'animated zombie',
    armor: 18,
    stats: {
      taming: null,
      barding: null
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potion'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 477,
    name: 'bogle',
    description: 'bogle',
    armor: 28,
    stats: {
      str: [76,
        100],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 64
    },
    offense: {
      min: 7,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 478,
    name: 'bone knight',
    description: 'bone knight',
    armor: 40,
    karma: -3000,
    fame: 3000,
    stats: {
      str: [195,
        250],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [118,
        150],
      taming: null,
      barding: 61
    },
    offense: {
      min: 8,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'WoodenShield'
      }
    ],
    credits: [175,
      275],
    skills: {
      wrestling: [85,
        95],
      tactics: [95,
        100],
      magic_resistance: [65,
        80
      ]
    }
  },
  {
    id: 479,
    name: 'bone magi',
    description: 'bone magi',
    armor: 38,
    karma: -3000,
    fame: 3000,
    stats: {
      str: [76,
        100],
      dex: [56,
        75],
      int: [186,
        210],
      hp: [46,
        60],
      taming: null,
      barding: 81
    },
    offense: {
      min: 3,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [125,
      150],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [55,
        70
      ]
    }
  },
  {
    id: 480,
    name: 'dark one',
    description: 'dark one',
    armor: 65,
    stats: {
      str: [770,
        830],
      dex: [146,
        185],
      int: [1,
        1],
      hp: [1,
        1],
      taming: null,
      barding: 243
    },
    offense: {
      min: 14,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,4],
        description: 'Peculiar Meat (Carve)'
      }
    ],
    credits: 0,
    skills: {

    }
  },
  {
    id: 481,
    name: 'ghoul',
    description: 'ghoul',
    armor: 28,
    karma: -2500,
    fame: 2500,
    stats: {
      str: [76,
        100],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 45
    },
    offense: {
      min: 7,
      max: 9,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Weapon'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 482,
    name: 'lich',
    description: 'lich',
    armor: 50,
    karma: 8000,
    fame: 8000,
    stats: {
      str: [171,
        200],
      dex: [126,
        145],
      int: [276,
        305],
      hp: [103,
        120],
      taming: null,
      barding: 92
    },
    offense: {
      min: 24,
      max: 26,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [275,
      324],
    skills: {
      wrestling: [0,0],
      tactics: [70,
        90],
      magic_resistance: [80,
        100
      ]
    }
  },
  {
    id: 483,
    name: 'lich lord',
    description: 'lich lord',
    armor: 50,
    karma: 18000,
    fame: 18000,
    stats: {
      str: [416,
        505],
      dex: [146,
        165],
      int: [566,
        655],
      hp: [250,
        303],
      taming: null,
      barding: 109
    },
    offense: {
      min: 11,
      max: 13,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,200],
        description: 'Platinum Coin'
      }
    ],
    credits: [450,
      600],
    skills: {
      wrestling: [60,
        80],
      tactics: [50,
        70],
      magic_resistance: [150,
        200
      ]
    }
  },
  {
    id: 484,
    name: 'mummy',
    description: 'mummy',
    armor: 50,
    karma: 4000,
    fame: 4000,
    stats: {
      str: [346,
        370],
      dex: [71,
        90],
      int: [26,
        40],
      hp: [208,
        222],
      taming: null,
      barding: 70
    },
    offense: {
      min: 13,
      max: 23,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Bones'
      }
    ],
    credits: [305,
      315],
    skills: {
      wrestling: [35,
        50],
      tactics: [35,
        50],
      magic_resistance: [15,
        40
      ]
    }
  },
  {
    id: 485,
    name: 'restless soul',
    description: 'restless soul',
    armor: 6,
    karma: 500,
    fame: 500,
    stats: {
      str: [26,
        40],
      dex: [26,
        40],
      int: [26,
        40],
      hp: [16,
        24],
      taming: null,
      barding: 19
    },
    offense: {
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [],
    credits: 0,
    skills: {
      wrestling: [20,
        30],
      tactics: [20,
        30],
      magic_resistance: [20,
        30
      ]
    }
  },
  {
    id: 486,
    name: 'revenant',
    description: 'revenant',
    armor: 62,
    karma: 0,
    fame: 0,
    stats: {
      str: [196,
        250],
      dex: [110,
        120],
      int: [128,
        138],
      hp: [500,
        550],
      taming: null,
      barding: 103
    },
    offense: {
      min: 7,
      max: 24,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Various Bones'
      }
    ],
    credits: 0,
    skills: {
      wrestling: [90,
        100],
      tactics: [90,
        100],
      magic_resistance: [100,
        150
      ]
    }
  },
  {
    id: 487,
    name: 'rotting corpse',
    description: 'rotting corpse',
    armor: 40,
    karma: 12500,
    fame: 12500,
    stats: {
      str: [301,
        350],
      dex: [75,
        75],
      int: [151,
        200],
      hp: [1,
        1],
      taming: null,
      barding: 125
    },
    offense: {
      min: 8,
      max: 10,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,100],
        description: 'Platinum Coin'
      }
    ],
    credits: [1050,
      1279],
    skills: {
      wrestling: [90,
        100],
      tactics: 100.0,
      magic_resistance: '250.0'
    }
  },
  {
    id: 488,
    name: 'shade',
    description: 'shade',
    armor: 28,
    karma: 4000,
    fame: 4000,
    stats: {
      str: [76,
        100],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 65
    },
    offense: {
      min: 7,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 489,
    name: 'skeletal knight',
    description: 'skeletal knight',
    armor: 40,
    karma: -3000,
    fame: 3000,
    stats: {
      str: [196,
        250],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [118,
        150],
      taming: null,
      barding: 61
    },
    offense: {
      min: 8,
      max: 18,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'WoodenShield'
      }
    ],
    credits: [175,
      275],
    skills: {
      wrestling: [85,
        95],
      tactics: [95,
        100],
      magic_resistance: [65,
        80
      ]
    }
  },
  {
    id: 490,
    name: 'skeletal mage',
    description: 'skeletal mage',
    armor: 38,
    karma: -3000,
    fame: 3000,
    stats: {
      str: [76,
        100],
      dex: [56,
        75],
      int: [186,
        210],
      hp: [46,
        60],
      taming: null,
      barding: 77
    },
    offense: {
      min: 3,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Potion'
      }
    ],
    credits: [125,
      150],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [55,
        70
      ]
    }
  },
  {
    id: 491,
    name: 'skeleton',
    description: 'skeleton',
    armor: 16,
    karma: 450,
    fame: 450,
    stats: {
      str: [56,
        80],
      dex: [56,
        75],
      int: [16,
        40],
      hp: [34,
        48],
      taming: null,
      barding: 36
    },
    offense: {
      min: 3,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Bones'
      }
    ],
    credits: [25,
      50],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 492,
    name: 'spectre',
    description: 'spectre',
    armor: 28,
    karma: 4000,
    fame: 4000,
    stats: {
      str: [76,
        100],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 62
    },
    offense: {
      min: 7,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 493,
    name: 'wraith',
    description: 'wraith',
    armor: 28,
    karma: 4000,
    fame: 4000,
    stats: {
      str: [76,
        100],
      dex: [76,
        95],
      int: [36,
        60],
      hp: [46,
        60],
      taming: null,
      barding: 67
    },
    offense: {
      min: 7,
      max: 11,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1,400],
        description: 'Platinum Coin'
      }
    ],
    credits: [50,
      100],
    skills: {
      wrestling: [45,
        55],
      tactics: [45,
        60],
      magic_resistance: [45,
        60
      ]
    }
  },
  {
    id: 494,
    name: 'zombie',
    description: 'zombie',
    armor: 18,
    karma: 600,
    fame: 600,
    stats: {
      str: [46,70],
      dex: [31,50],
      int: [26,40],
      hp: [28,42],
      taming: null,
      barding: 33
    },
    offense: {
      min: 3,
      max: 7,
      speed: 2.5
    },
    move: 1,
    mob_type: 'humanoid',
    attackable: true,
    inventory: [
      {
        chance: [1, 1],
        description: 'Random Body Part or Bone'
      }
    ],
    credits: [50,100],
    skills: {
      wrestling: [35,50],
      tactics: [35,50],
      magic_resistance: [15,40]
    }
  }
];

// http: //www.uoguide.com/Fame
// http: //www.uoguide.com/Brown_Bear
// http: //www.uorenaissance.com/info/BrownBear