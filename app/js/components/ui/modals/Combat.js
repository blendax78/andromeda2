import React, { Component } from 'react';
import Config from '../../Config';
import * as classNames from 'classnames';
import MessageList from '../MessageList';
import CombatStatus from '../CombatStatus';

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
      combat: {
        melee: equipped.weapon.weapon.type === 'melee',
        ranged: equipped.weapon.weapon.type === 'ranged',
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
  }

  componentDidMount() {
    this.mounted = true;
    this.tick = this.tick || setInterval(() => {
      this.combatTickHandler();
    }, 250);
  }

  combatTickHandler() {
    this.timer = this.timer || 0;

    if (this.timer % 1 === 0) {

    }
    this.timer += 0.25;
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
    if (this.state.equipped.weapon.weapon.type !== 'melee') {
      return;
    }

    this.switchOffActions('melee');
    let combat = this.state.combat;
    this.setState({
      combat: { melee: !this.state.combat.melee }
    });
  }

  toggleRanged() {
    if (this.state.equipped.weapon.weapon.type !== 'ranged') {
      return;
    }

    this.switchOffActions('ranged');
    let combat = this.state.combat;
    this.setState({
      combat: { ranged: !this.state.combat.ranged }
    });
  }

  getCombatActions() {
    let classMelee = classNames({
      btn: true,
      'btn-info': this.state.combat.melee,
      top5: true,
      disabled: this.state.equipped.weapon.weapon.type !== 'melee'
    });
    let classRanged = classNames({
      btn: true,
      'btn-info': this.state.combat.ranged,
      top5: true,
      disabled: this.state.equipped.weapon.weapon.type !== 'ranged'
    });
    let classRun = classNames({
      btn: true,
      'btn-info': this.state.combat.run,
      top5: true
    });

    let buttons = [
      <span key={this.keys.melee} className="col-6">
        <button type="button" className={classMelee} onClick={() => this.toggleMelee()}>Melee</button>&nbsp;
      </span>,
      <span key={this.keys.ranged} className="col-6">
        <button type="button" className={classRanged} onClick={() => this.toggleRanged()}>Ranged</button>&nbsp;
      </span>,
      <span key={this.keys.run} className="col-6">
        <button type="button" className={classRun} onClick={() => this.toggleRun()}>Run</button>&nbsp;
      </span>,
    ];

    return buttons;
  }

  render() {
    let mob = this.state.mob || {};
    let img = mob.img || '';

    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            {this.getCombatActions()}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                sub actions
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

//https://uo.stratics.com/content/arms-armor/combat.php
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