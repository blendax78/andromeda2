import Config from '../components/Config';

export const MobData = [
  {
    id: 1,
    name: 'sheep',
    description: 'A small sheep is wandering around here.',
    armor: 6,
    karma: 0,
    fame: 300,
    offense: {
      min: 1,
      max: 2,
      aggro: false,
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
    offense: {
      min: 4,
      max: 4,
      aggro: false,
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
];
