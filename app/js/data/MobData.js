import Config from '../components/Config';

export const MobData = [
  {
    id: 1,
    name: 'sheep',
    description: 'A small sheep is wandering around here.',
    armor: 6,
    maxhp: 12,
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

];
