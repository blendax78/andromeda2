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
];
