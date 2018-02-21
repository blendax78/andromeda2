import Config from '../components/Config';

export const MobData = [
  {
    id: 1,
    name: 'sheep',
    description: 'A small sheep is wandering around here.',
    armor: 6,
    maxhp: 12,
    damageMin: 1,
    damageMax: 2,
    strength: 19,
    dexterity: 25,
    intelligence: 5,
    wander: true,
    attackable: true,
    aggro: false,
    resources: [], //item IDs that are found on corpse
    img: `${Config.URLS.IMAGES}/mobs/Sheep_100.png`,
    skills: {
        wrestling: 5,
        tactics: 6,
        magic_resistance: 5
    }
  },

];
