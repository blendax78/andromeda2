import Config from '../components/Config';

// Not a true reducer. Does not return a state object
const Effects = (state = {}, action) => {
  // This will handle spells, abilities, equipment, etc.
  const { type, payload } = action;

  let defense = {
    physical: 0
  };

  // Note: wrestling base: 1-4 dmg speed: 2.00
  let offense = {
    min: 1,
    max: 4,
    speed: 2.0
  };

  let exceptional = {};

  state.Player.effects.strength = state.Player.strength;
  state.Player.effects.dexterity = state.Player.dexterity;
  state.Player.effects.intelligence = state.Player.intelligence;

  // Equipment
  _.each(_.union(state.Inventory.weapons, state.Inventory.armor), (eq) => {
    if (eq.type === 'armor' && eq.equip && eq.equip.equipped === true) {
      defense.physical += eq.armor.physical;

      // Stat Penalty/Bonus
      state.Player.effects.dexterity += (!!eq.armor.dexterity) ? eq.armor.dexterity : 0;
      state.Player.effects.intelligence += (!!eq.armor.intelligence) ? eq.armor.intelligence : 0;
      state.Player.effects.strength += (!!eq.armor.strength) ? eq.armor.strength : 0;

    } else if (eq.type === 'weapons' && eq.equip && eq.equip.equipped === true) {
      offense = Config.clone(eq.weapon);
      exceptional = Config.clone(eq.exceptional);
    }      
  });

  defense.physical = Math.round(defense.physical);

  let speed = ((offense.speed * 4  - Math.floor(state.Player.stamina / 30)) / 4).toFixed(2);
  offense.speed = parseFloat((speed < 1.25) ? 1.25 : speed);

  if (state.Player.status.run === true) {
    state.Player.move = 2;
  } else {
    state.Player.move = 1;
  }

  let strength_mod = ((state.Player.strength * 0.3) / 100);
  let base = { min: offense.min, max: offense.max };

  if (!!exceptional && !!exceptional.bonus) {
    base.min += exceptional.bonus;
    base.max += exceptional.bonus;
  }

  // Tactics
  let tactics_mod = (state.Skills.tactics.current - 50) / 100;
  offense.min += Math.round(base.min * tactics_mod);
  offense.max += Math.round(base.min * tactics_mod);

  // Anatomy
  offense.min += Math.round(base.min * (state.Skills.anatomy.current / 200));
  offense.max += Math.round(base.max * (state.Skills.anatomy.current / 200));

  // Lumberjacking
  if (offense.type === 'melee' && offense.sub_type === 'axe') {
    let lumberjack_bonus = (state.Skills.lumberjacking.current < 100) ? Math.round(state.Skills.lumberjacking.current / 500) : 0.30;
    offense.min += Math.round(lumberjack_bonus * base.min);
    offense.max += Math.round(lumberjack_bonus * base.max);
  }

  // Strength
  offense.min += Math.round(base.min * strength_mod);
  offense.max += Math.round(base.max * strength_mod);

  offense.min = (offense.min <= 0) ? 1 : Math.round(offense.min);
  offense.max = (offense.max <= 0) ? 1 : Math.round(offense.max);

  state.Player.defense = defense;
  state.Player.offense = offense;

  return state;
}

export default Effects;

// //https://uo.stratics.com/content/arms-armor/combat.php
/*
FORMULAS:
Tactics Damage Bonus% = Tactics ÷ 1.6 (Add 6.25% if Tactics >= 100)
Anatomy Damage Bonus% = (Anatomy ÷ 2) (Add 5% if Anatomy >= 100)
Lumberjack Damage Bonus% = Lumberjack ÷ 5 (Add 10% if Lumberjacking >= 100)
Strength Damage Bonus% = Strength * 0.3 (Add 5% if Strength >= 100)
Final Damage Bonus% = Tactics Bonus + Anatomy Bonus + Lumber Bonus + Strength Bonus + Damage Increase Items*
Final Damage = Base Damage + (Base Damage * Final Damage Bonus%)
*/
// Swing speed:
/*
http://www.uoguide.com/Swing_Speed

Convert the Weapon Base Speed to ticks by multiplying the speed in seconds of your weapon, which is displayed on the tooltip, by 4. 
  Example, an unmodified Halberd has a Weapon Base Speed of 4.25 seconds per swing, which converts to a base speed of 17 ticks.
Determine the character’s "Stamina Ticks" by dividing the current Stamina by 30. Example, if your current Stamina is 50, 
  then 50/30=1.666, which is rounded down. In this instance, the "Stamina Ticks" are 1.
Note the total Swing Speed Increase modifier from equipment. Example, 20.
Formula: ((Base Weapon Speed - Stamina Ticks) * (100.0 / (100 + Swing Speed Increase))) = "x" ticks

Example: ((17 - 1) * (100.0 / (100 + 20))) = 13 ticks.
*/