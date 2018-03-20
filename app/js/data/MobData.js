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
      str_min: 19,
      str_max: 19,
      dex_min: 25,
      dex_max: 25,
      int_min: 5,
      int_max: 5,
      hp_min: 12,
      hp_max: 12
    },
    wander: true,
    attackable: true,
    inventory: [
      { id: 5, count: 3 }
    ], //item IDs that are found on corpse
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/Sheep_100.png`,
    skills: {
        wrestling: 5,
        tactics: 6,
        magic_resistance: 5
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
      str_min: 21,
      str_max: 51,
      dex_min: 47,
      dex_max: 77,
      int_min: 17,
      int_max: 47,
      hp_min: 15,
      hp_max: 29
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
        wrestling: 26,
        tactics: 19,
        magic_resistance: 15
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
      str_min: 76,
      str_max: 100,
      dex_min: 56,
      dex_max: 75,
      int_min: 11,
      int_max: 14,
      hp_min: 46,
      hp_max: 60
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
        wrestling: 50,
        wrestling_min: 40,
        wrestling_max: 60,
        tactics: 50,
        tactics_min: 40,
        tactics_max: 60,
        magic_resistance: 30,
        magic_resistance_min: 20,
        magic_resistance_max: 40,
    }
  },
];
