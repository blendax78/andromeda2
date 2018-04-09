import Config from '../components/Config';

export const MobData = [
  {
    id: 1,
    name: 'sheep',
    description: 'A little sheep is wandering around here.',
    armor: 6,
    karma: 0,
    fame: 300,
    aggro: false,
    offense: {
      min: 1,
      max: 2,
      speed: 2
    },
    move: 1,
    mob_type: 'animal',
    stats: {
      str: [19,19],
      dex: [25,25],
      int: [5,5],
      hp: [12,12]
    },
    wander: true,
    attackable: true,
    inventory: [
      { id: 5, count: 3 }
    ], //item IDs that are found on corpse
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
      hp: [15,29]
    },
    aggro: false,
    offense: {
      min: 4,
      max: 4,
      speed: 2
    },
    move: 2,
    mob_type: 'animal',
    wander: true,
    attackable: true,
    inventory: [
      { id: 27, count: 8 }
    ], //item IDs that are found on corpse
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
      hp: [46,60]
    },
    aggro: false,
    offense: {
      min: 6,
      max: 16,
      speed: 2
    },
    move: 2,
    wander: true,
    attackable: true,
    inventory: [
      { id: 27, count: 12 }
    ], //item IDs that are found on corpse
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
      hp: [46,60]
    },
    aggro: false,
    offense: {
      min: 6,
      max: 12,
      speed: 2
    },
    move: 2,
    mob_type: 'animal',
    wander: true,
    attackable: true,
    inventory: [
      { id: 27, count: 12 }
    ], //item IDs that are found on corpse
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
      hp: [50,64]
    },
    aggro: false,
    offense: {
      min: 4,
      max: 9,
      speed: 2
    },
    move: 2,
    wander: true,
    attackable: true,
    inventory: [
      { id: 27, count: 15 }
    ], //item IDs that are found on corpse
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/Bull_100.png`,
    skills: {
        wrestling: [40.1,57.5],
        tactics: [67.6,85.0],
        magic_resistance: [17.6,25.0]
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
      speed: 2
    },
    move: 1,
    mob_type: 'animal',
    wander: true,
    attackable: true,
    inventory: [
      { id: 27, count: 12 }
    ], //item IDs that are found on corpse
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
      speed: 2000
    },
    move: 0,
    mob_type: 'training',
    wander: false,
    attackable: true,
    inventory: [],
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
      hp: [26,39]
    },
    aggro: true,
    offense: {
      min: 4,
      max: 8,
      speed: 2
    },
    move: 0,
    mob_type: 'animal',
    wander: false,
    attackable: true,
    inventory: [{ id: 27, count: 6 }],
    credits: [1,25],
    img: `${Config.URLS.IMAGES}/mobs/GiantRat.png`,
    skills: {
        wrestling: [29.3,44.0],
        tactics: [29.3,44.0],
        magic_resistance: [25.1,30.0]
    }
  },
];

// http://www.uoguide.com/Fame
// http://www.uoguide.com/Brown_Bear
// http://www.uorenaissance.com/info/BrownBear