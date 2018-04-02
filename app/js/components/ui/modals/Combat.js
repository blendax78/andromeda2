import React, { Component } from 'react';
import Config from '../../Config';
import * as classNames from 'classnames';
import MessageList from '../MessageList';
import CombatStatus from '../CombatStatus';
import { ItemData } from '../../../data/ItemData';

class Combat extends Component {
  constructor(props) {
    super(props);

    let equipped = Config.getEquipped(this.props.store.getState().Inventory);

    this.keys = {
      melee: Config.randomKey('combat'),
      ranged: Config.randomKey('combat'),
      run: Config.randomKey('combat'),
    };

    this.state = {
      mob: this.props.mob,
      player: this.props.store.getState().Player,
      inventory: this.props.store.getState().Inventory,
      skills: this.props.store.getState().Skills,
      combat: {
        melee: (equipped.weapon && equipped.weapon.weapon.type === 'melee') || !equipped.weapon,
        ranged: equipped.weapon && equipped.weapon.weapon.type === 'ranged',
        run: false
      },
      equipped: equipped
    };

    this.mounted = true;
    this.unsubscribe = props.store.subscribe(() => {
      if (this.mounted) {
        this.setState({
          mob: this.props.store.getState().Mobs.combat,
          player: this.props.store.getState().Player,
          inventory: this.props.store.getState().Inventory,
          skills: this.props.store.getState().Skills,
          // For now, weapons can't be equipped in combat.
          // equipped: Config.getEquipped(this.props.store.getState().Inventory)
        });
      }
    });
  }

  // Make sure to unsubscribe!
  componentWillUnmount() {
    this.mounted = false;
    clearInterval(this.tick);
    this.unsubscribe();
    this.props.store.dispatch({ type: Config.ACTIONS.APP.MODAL_UPDATE, payload: { locked: false } });
  }

  componentDidMount() {
    this.props.store.dispatch({ type: Config.ACTIONS.APP.MODAL_UPDATE, payload: { locked: true } });
    this.mounted = true;
    this.tick = this.tick || setInterval(() => {
      if (!!this.state.mob && !!this.state.player && !!this.state.inventory && !!this.state.skills) {
        this.combatTickHandler();
      }
    }, 250);
  }

  calcChanceToBlock(attack, defend) {
    /*
      FORMULA: 
      Blocking with a shield:
      % Chance = (Parrying - Bushido) / 4 (If less than 0, the chance is 0)
      (Add 5% if Parrying or Bushido skill is 100 or above)
      Blocking with a 1-handed weapon (without a shield):
      New = (Parrying * 10) * (Bushido * 10) / 48000 (Add 5% if Parrying or Bushido skill is 100 or above)
      Legacy = (Parrying * 10) / 80 (Add 5% if Parrying skill if 100 or above)
      % Chance = Whichever is highest of the New and the Legacy formula.

      Blocking with a 2-handed weapon:
      New = (Parrying * 10) * (Bushido * 10) / 41140 (Add 5% if Parrying or Bushido skill is 100 or above)
      Legacy = (Parrying * 10) / 80 (Add 5% if Parrying skill if 100 or above)
      % Chance = Whichever is highest of the New and the Legacy formula.

      Dexterity Modifier if dex is less than 80*: (80 - Dexterity) / 100 (If Dexterity is higher than 80, the modifier is 0)
      Final % Chance of blocking = Base Chance * (1 - Dexterity Modifier)
    */


  }

  calcDamage(min, max, defense = 0) {
    /*
      FORMULAS:
      Tactics Damage Bonus% = Tactics ÷ 1.6 (Add 6.25% if Tactics >= 100)
      Anatomy Damage Bonus% = (Anatomy ÷ 2) (Add 5% if Anatomy >= 100)
      Lumberjack Damage Bonus% = Lumberjack ÷ 5 (Add 10% if Lumberjacking >= 100)
      Strength Damage Bonus% = Strength * 0.3 (Add 5% if Strength >= 100)
      Final Damage Bonus% = Tactics Bonus + Anatomy Bonus + Lumber Bonus + Strength Bonus + Damage Increase Items*
      Final Damage = Base Damage + (Base Damage * Final Damage Bonus%)
      * Damage Increase is capped at 100%.
    */
    // FORMULA: Damage Absorbed= Random value between of 1/2 AR to full AR of Hit Location's piece of armor.
    let damage = _.random(min, max);
    damage = Math.round(damage - _.random(Math.round(defense / 2), defense));
    return (damage > 0) ? damage : 0;
  }

  calcChanceToHit(attack = 0, defend = 0, attack_bonus = 0, defend_bonus = 0) {
    /*
      FORMULA:
      Hit Chance% = ( ( [Attacker's Combat Ability + 20] * [100% + Attacker's Hit Chance Increase] ) divided by
      ( [Defender's Combat Ability + 20] * [100% + Defender's Defense Chance Increase] * 2 ) ) * 100
      Minimum hit Chance% is 2% at all times.
    */

    let chance = 100 * ((attack + 20) * (1 + (attack_bonus / 100))) / ((defend + 20) * (2 + (defend_bonus / 100)));

    return (chance > 2) ? chance : 2;;
  }

  playerRun() {
    // if ranged weapon, player can still attack while running.
    // base on stamina and/or speed
    // Upon running, toggle mob aggro
    let mob = this.state.mob;
    let player = this.state.player;
    console.log('run!');
  }

  calcAmmo(weapon) {
    if (!!weapon && weapon.weapon && !!weapon.weapon.requires) {
      let ammo = _.findWhere(this.state.inventory.items, { id: weapon.weapon.requires });

      return (!!ammo) ? ammo : { count: 0 };
    } else {
      // always return ammo if ammo is not required.
      return { count: 1 };
    }
  }

  playerAttack() {
    let mob = this.state.mob;
    let player = this.state.player;

    if (this.timer % player.offense.speed === 0) {
      let weapon = this.state.equipped.weapon;
      let skill = (weapon) ? _.findWhere(this.state.skills, { id: weapon.weapon.skill} ) : this.state.skills.wrestling;
      let ammo = this.calcAmmo(weapon);

      if (skill) {
        if (ammo.count <= 0) {
          return;
        } else if (!!ammo.id) {
          // Requires ammo. Need to subtract 1.
          this.props.store.dispatch({
            type: Config.ACTIONS.INVENTORY.REMOVE,
            payload: {
              item: ammo.id,
              count: 1
            }
          });
        }

        // Break this out to playerAttack function
        let chance_to_hit = this.calcChanceToHit(skill.current, mob.skills.wrestling);

        if (_.random(1, 100) <= chance_to_hit) {
          let damage = this.calcDamage(player.offense.min, player.offense.max, mob.armor);
          Config.notifyWarning(this.props.store, `You hit the ${mob.name} for ${damage} damage.`);

          mob.hp -= (mob.hp - damage >= 0) ? damage : mob.hp;
          mob.stamina -= (mob.stamina - Math.ceil(damage / 2) >= 0) ? Math.ceil(damage / 2) : mob.stamina;

          // No need to update store (for now?)
          Config.dispatch(this.props.store, Config.ACTIONS.MOBS.UPDATE, mob);
          if (this.state.mob.mob_type !== 'training') {
            Config.dispatch(this.props.store, Config.ACTIONS.SKILLS.GAIN, { name: skill.name.toLowerCase() });
            Config.dispatch(this.props.store, Config.ACTIONS.SKILLS.GAIN, { name: 'tactics' });            
          } else {
             if (skill.current < 25.0) {
              Config.dispatch(this.props.store, Config.ACTIONS.SKILLS.GAIN, { name: skill.name.toLowerCase() });
            } else {
              Config.notify(this.props.store, 'You can learn a lot from a dummy, but you cannot learn any more from this one.');
            }
          }

        } else {
          Config.notify(this.props.store, `You miss the ${mob.name}.`);
          if (skill.current < 20) {
            Config.dispatch(this.props.store, Config.ACTIONS.SKILLS.GAIN, { name: skill.name.toLowerCase() });
          }

          if (this.state.skills.tactics.current < 20) {
            Config.dispatch(this.props.store, Config.ACTIONS.SKILLS.GAIN, { name: 'tactics' });
          }
        }
      }
    }    
  }

  mobAttack() {
    let mob = this.state.mob;
    let player = this.state.player;

    if (this.timer % mob.offense.speed === 0) {
      let weapon = this.state.equipped.weapon;
      let skill = (weapon) ? _.findWhere(this.state.skills, { id: weapon.weapon.skill} ) : this.state.skills.wrestling;

      if (skill) {
        // Break this out to playerAttack function
        let chance_to_hit = this.calcChanceToHit(mob.skills.wrestling, skill.current);

        if (_.random(1, 100) <= chance_to_hit) {
          let damage = this.calcDamage(mob.offense.min, mob.offense.max, player.defense.physical);
          Config.notifyError(this.props.store, `The ${mob.name} hits you for ${damage} damage.`);

          player.hp -= (player.hp - damage >= 0) ? damage : player.hp;
          player.stamina -= (player.stamina - Math.ceil(damage / 2) >= 0) ? Math.ceil(damage / 2) : player.stamina;

        } else {
          Config.notify(this.props.store, `The ${mob.name} misses you.`);
        }
      }
    }
  }

  combatTickHandler() {
    // Main combat loop
    this.timer = this.timer || 0;

    if (this.state.combat.run === true) {
      this.playerRun();
    }

    if (this.state.combat.melee === true || this.state.combat.ranged === true) {
      // Need to offer some kind of ranged effect.
      // Player attack
      this.playerAttack();
    }

    let player_weapon = this.state.equipped.weapon;
    let player_skill = (player_weapon) ? _.findWhere(this.state.skills, { id: player_weapon.weapon.skill} ) : undefined;
    let delay = 0;

    if (this.state.combat.ranged === true && !!player_skill) {
      delay = (player_skill.current / 25 > 0.25) ? player_skill.current / 25 : 0.25;
    }

    // Mob attack
    if (!(this.state.combat.ranged === true && this.timer < delay)) {
      this.mobAttack();
    }

    if (this.state.player.hp <= 0 || this.state.mob.hp <= 0) {
      clearInterval(this.tick);

      if (this.state.mob.hp <= 0) {
        // Player wins
        this.playerWin();
      } else {
        // Mob wins
        this.mobWin();
      }

      this.props.store.dispatch({
        type: Config.ACTIONS.APP.MODAL_UPDATE,
        payload: { locked: false }
      });

      this.props.store.dispatch({
        type: Config.ACTIONS.MOBS.CLEAR_COMBAT, payload: {}
      });
    } else {
      this.timer += 0.25;
    }

    this.props.store.dispatch({
      type: Config.ACTIONS.PLAYER.UPDATE,
      payload: {
        ...this.state.player
      }
    });

    this.props.store.dispatch({
      type: Config.ACTIONS.MOBS.UPDATE,
      payload: {
        ...this.state.mob
      }
    });
  }

  mobWin() {
    let score = this.state.player.score;
    let status = this.state.player.status;
    let credits = Math.ceil(this.state.player.credits * 0.75);

    score.deaths++;
    status.dead = true;

    Config.notifyError(this.props.store, `The ${this.state.mob.name} has defeated you.`);
    Config.notifyError(this.props.store, `You lost ${this.state.player.credits - credits} credits.`);

    this.props.store.dispatch({
      type: Config.ACTIONS.PLAYER.UPDATE,
      payload: {
        hp: 0,
        mp: 0,
        stamina: 1,
        x: 0,
        y: 0,
        status: status,
        score: score,
        credits: credits
      }
    });
  }

  playerWin() {
    Config.notifySuccess(this.props.store, `You have defeated the ${this.state.mob.name}.`);

    let credits = this.state.player.credits;

    if (!!this.state.mob.credits && this.state.mob.credits > 0) {
      Config.notifySuccess(this.props.store, `You found ${this.state.mob.credits} credits.`);
      credits += this.state.mob.credits;
    }

    if (!!this.state.mob.inventory && this.state.mob.inventory.length > 0) {
      _.each(this.state.mob.inventory, (inventory) => {
        let found = { ..._.findWhere(ItemData, { id: inventory.id } ), ...inventory };
        let count = found.count || 1;
        let desc = (count > 1) ? `${count} ${found.plural}` : found.name;

        this.props.store.dispatch({
          type: Config.ACTIONS.INVENTORY.ADD,
          payload: {
            item: found.id,
            count: count
          }
        });
        Config.notifySuccess(this.props.store, `You found ${desc}.`);
      });
    }
    
    let score = this.state.player.score;
    score.kills++;

    this.props.store.dispatch({
      type: Config.ACTIONS.PLAYER.UPDATE,
      payload: {
        credits: credits,
        score: score
      }
    });

    this.props.store.dispatch({
      type: Config.ACTIONS.PLAYER.SAVE,
      payload: this.props.store.getState().Player
    });

  }

  switchOffActions(current) {
    let combat = this.state.combat;

    for (let action in combat) {
      if (action !== current) {
        combat[action] = false;
      }
    }

    this.setState({ combat: combat });
  }

  toggleRun() {
    this.switchOffActions('run');

    this.setState({
      combat: { run: !this.state.combat.run }
    });
  }

  toggleMelee() {
    // if (this.state.equipped.weapon && this.state.equipped.weapon.weapon.type !== 'melee') {
    //   return;
    // }

    this.switchOffActions('melee');
    let combat = this.state.combat;
    this.setState({
      combat: { melee: !this.state.combat.melee }
    });
  }

  toggleRanged() {
    // if (!this.state.equipped.weapon || this.state.equipped.weapon.weapon.type !== 'ranged') {
    //   return;
    // }

    this.switchOffActions('ranged');
    let combat = this.state.combat;
    this.setState({
      combat: { ranged: !this.state.combat.ranged }
    });
  }

  getCombatActions() {
    let classMelee = classNames({
      btn: true,
      'btn-default': !this.state.combat.melee,
      'btn-info': this.state.combat.melee,
      top5: true,
      disabled: (this.state.equipped.weapon && this.state.equipped.weapon.weapon.type !== 'melee') 
    });
    let classRanged = classNames({
      btn: true,
      'btn-default': !this.state.combat.ranged,
      'btn-info': this.state.combat.ranged,
      top5: true,
      disabled: !this.state.equipped.weapon ||
        (this.state.equipped.weapon && this.state.equipped.weapon.weapon.type !== 'ranged')
    });
    let classRun = classNames({
      btn: true,
      'btn-default': !this.state.combat.run,
      'btn-info': this.state.combat.run,
      top5: true
    });

    let buttons = [
      <span key={this.keys.melee} className="col-6">
        <button type="button" className={classMelee} onClick={() => this.toggleMelee()}
          disabled={(this.state.equipped.weapon && this.state.equipped.weapon.weapon.type !== 'melee')} >Melee</button>&nbsp;
      </span>,
      <span key={this.keys.ranged} className="col-6">
        <button type="button" className={classRanged} onClick={() => this.toggleRanged()}
          disabled={(!this.state.equipped.weapon || this.state.equipped.weapon.weapon.type !== 'ranged')}>Ranged</button>&nbsp;
      </span>,
      <span key={this.keys.run} className="col-6">
        <button type="button" className={classRun} onClick={() => this.toggleRun()}>Run</button>&nbsp;
      </span>,
    ];

    return buttons;
  }

  getSubActions() {
    // show ammunition counts
  }

  render() {
    let mob = this.state.mob || {};
    let img = mob.img || '';
    let sub_actions = this.getSubActions();

    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            {this.getCombatActions()}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                {sub_actions}
              </div>
            </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 center">
              <img src={img} />
            </div>
          </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <CombatStatus store={this.props.store} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bottom-panel modal-messages">
            <MessageList store={this.props.store} />
          </div>
        </div>
      </div>
    );
  }

}

export default Combat;
// http://web.archive.org/web/20020806221626/http://uo.stratics.com/content/arms-armor/combat.shtml#8
// https://uo.stratics.com/content/arms-armor/combat.php
// Attack Sequence
// 1) Determine Speed of Attack
// 2) Determine % Chance to Hit
// 3) Modify for Chance to Block an Attack
// 4) Determine Base Weapon Damage
// 5) Determine Damage Bonuses for Tactics, Anatomy, Lumberjacking and Strength
// 6) Determine Final Damage
// 7) Determine Damage Distribution
// 8) Determine Damage Absorption
// 9) Apply Resulting Damage