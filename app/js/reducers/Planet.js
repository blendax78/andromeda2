import Config from '../components/Config';
import { PlanetData } from '../data/PlanetData';
import { DecorationData } from '../data/DecorationData';
import { MobData } from '../data/MobData';
import { ZoneData } from '../data/ZoneData';
import { TownData } from '../data/TownData';
import { StoreData } from '../data/StoreData';

let PLANET = Config.ACTIONS.PLANET;

Config.mobs = {
  animals: require('../data/tmp/renmobs_animals.json'),
  arachnids: require('../data/tmp/renmobs_arachnids.json'),
  bosses: require('../data/tmp/renmobs_bosses.json'),
  champions: require('../data/tmp/renmobs_champions.json'),
  daemons: require('../data/tmp/renmobs_daemons.json'),
  elementals: require('../data/tmp/renmobs_elementals.json'),
  gargoyles: require('../data/tmp/renmobs_gargoyles.json'),
  humanoid: require('../data/tmp/renmobs_humanoid.json'),
  minibosses: require('../data/tmp/renmobs_minibosses.json'),
  misc: require('../data/tmp/renmobs_misc.json'),
  orcs: require('../data/tmp/renmobs_orcs.json'),
  plants: require('../data/tmp/renmobs_plants.json'),
  ratmen: require('../data/tmp/renmobs_ratmen.json'),
  reptiles: require('../data/tmp/renmobs_reptiles.json'),
  slimes: require('../data/tmp/renmobs_slimes.json'),
  special: require('../data/tmp/renmobs_special.json'),
  summons: require('../data/tmp/renmobs_summons.json'),
  undead: require('../data/tmp/renmobs_undead.json'),
  MobData: MobData,
};

Config.mobs.clone = (mob) => {
  if (!mob) {
    return undefined;
  }
 return {
    id: _.last(Config.mobs.MobData).id + 1,
    name: mob.name.toLowerCase(),
    description: mob.name.toLowerCase(),
    armor: parseInt(mob.armor),
    karma: (!!mob.karma && typeof mob.karma === 'string') ? mob.karma.replace('level 0','').replace('level 1','').replace('level 2','').replace('level 3','').replace('level 4','').replace('level 5','').replace('(','').replace(')','').trim() : mob.karma,
    fame: (!!mob.fame && typeof mob.fame === 'string') ? mob.fame.replace('level 0','').replace('level 1','').replace('level 2','').replace('level 3','').replace('level 4','').replace('level 5','').replace('(','').replace(')','').trim() : mob.fame,
    stats: {
      str: (!!mob.strength && typeof mob.strength === 'object') ? [parseInt(mob.strength[0]),parseInt(mob.strength[1])] : mob.strength,
      dex: (!!mob.dexterity && typeof mob.dexterity === 'object') ? [parseInt(mob.dexterity[0]),parseInt(mob.dexterity[1])] : mob.dexterity,
      int: (!!mob.intelligence && typeof mob.intelligence === 'object') ? [parseInt(mob.intelligence[0]),parseInt(mob.intelligence[1])] : mob.intelligence,
      hp: (!!mob['hit points'] && typeof mob['hit points'] === 'object') ? [parseInt(mob['hit points'][0]),parseInt(mob['hit points'][1])] : mob['hit points'],
      taming: parseFloat(mob['minimum taming']),
      barding: parseFloat(mob['barding difficulty'])
    },
    aggro: undefined,
    offense: {
      min: (!!mob.damage && typeof mob.damage === 'object') ? parseInt(mob.damage[0]) : mob.damage,
      max: (!!mob.damage && typeof mob.damage === 'object') ? parseInt(mob.damage[1]) : mob.damage,
      speed: 2
    },
    move: 1,
    mob_type: mob['primary type'].toLowerCase(),
    wander: undefined,
    attackable: true,
    inventory: [mob.inventory],
    credits: (typeof mob.gold === 'object') ? [parseInt(mob.gold[0]), parseInt(mob.gold[1])] : 0,
    img: undefined,
    skills: {
        wrestling: (!!mob.wrestling && typeof mob.wrestling === 'object') ? [parseInt(mob.wrestling[0]), parseInt(mob.wrestling[1])] : mob.wrestling,
        tactics: (!!mob.tactics && typeof mob.tactics === 'object') ? [parseInt(mob.tactics[0]), parseInt(mob.tactics[1])] : mob.tactics,
        magic_resistance: (!!mob['resisting spells'] && typeof mob['resisting spells'] === 'object') ? [parseInt(mob['resisting spells'][0]), parseInt(mob['resisting spells'][1])] : mob['resisting spells'],
    }
  };
}

_.each(Config.mobs, (mob, index) => {
  if (index !== 'MobData') {
    _.each(mob, (m, i) => {
      console.log(m,i);
      let clone = Config.mobs.clone(m);
      if (clone !== undefined) {
        Config.mobs.MobData.push(clone)
      }
    });
  }
});
// for (let i in Config.mobs.animals) { Config.mobs.MobData.push(Config.mobs.clone(Config.mobs.animals[i]))}

const Planet = (state = {}, action) => {
  const { type, payload } = action;
  state.Planet = state.Planet || {
    locations: [],
    defaultZone: {
      description: ''
    },
    towns: [],
    zones: []
  };

  switch (type) {
    case PLANET.GET:
      let found_planet = _.findWhere(PlanetData, { id: payload.id });
      state.Planet = { ...state.Planet, ...found_planet };

      // ._extend() updates the first object
      _.each(state.Planet.zones, (zone) => {
        _.extend(zone, _.findWhere(ZoneData, { id: zone.id }));
        
        _.each(zone.mobs, (mob) => {
          _.extend(mob, _.findWhere(MobData, { id: mob.id }));
        });

        _.each(zone.decorations, (decoration) => {
          _.extend(decoration, _.findWhere(DecorationData, { id: decoration.id }));
        });
      });

      _.each(state.Planet.towns, (town) => {
        _.extend(town, _.findWhere(TownData, { id: town.id }));

        _.each(town.stores, (store) => {
          _.extend(store, _.findWhere(StoreData, { id: store.id }));
        });

        if (town.mobs) {
          _.each(town.mobs, (mob) => {
            _.extend(mob, _.findWhere(MobData, { id: mob.id }));
          });
        }
      }); 

      state.Planet.defaultZone = _.findWhere(ZoneData, { id: state.Planet.defaultZone });

      _.each(state.Planet.defaultZone.decorations, (decoration) => {
        _.extend(decoration, _.findWhere(DecorationData, { id: decoration.id }));
      });

      _.each(state.Planet.defaultZone.mobs, (mob) => {
        _.extend(mob, _.findWhere(MobData, { id: mob.id }));
      });
    break;
    case PLANET.TICK:
      _.each(_.filter(state.Planet.locations, (location) => {
        return location.type === 'mob' && _.isNumber(location.timer) && !location.key;
      }), (location) => {
        location.timer--;

        if (location.timer <= 0) {
          state.Queue.add('actions', Config.ACTIONS.PLANET.CLEAR_TIMER, { x: location.x, y: location.y });
        }
      });
    break;
    case PLANET.CLEAR_TIMER:
      let index = _.findIndex(state.Planet.locations, { x: payload.x, y: payload.y, type: 'mob' });

      if (_.isNumber(index) && index > 0) {
        state.Planet.locations.splice(index, 1);
      }
    break;
  }

  return state.Planet;
}

export default Planet;
