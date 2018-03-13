import Config from '../components/Config';

export const MobData = [
  {
    id: 1,
    name: 'sheep',
    description: 'A small sheep is wandering around here.',
    armor: 12,
    maxhp: 8,
    karma: 0,
    fame: 300,
    offense: {
      min: 1,
      max: 2,
      aggro: false,
      speed: 2
    },
    strength: 19,
    dexterity: 25,
    intelligence: 5,
    wander: true,
    attackable: true,
    resources: [], //item IDs that are found on corpse
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
    armor: 10,
    maxhp: 22,
    karma: 0,
    fame: 300,
    offense: {
      min: 4,
      max: 4,
      aggro: false,
      speed: 2
    },
    strength: 36,
    dexterity: 62,
    intelligence: 32,
    wander: true,
    attackable: true,
    resources: [], //item IDs that are found on corpse
    credits: 0,
    img: `${Config.URLS.IMAGES}/mobs/Hind_100.png`,
    skills: {
        wrestling: 26,
        tactics: 19,
        magic_resistance: 15
    }
  },
];
