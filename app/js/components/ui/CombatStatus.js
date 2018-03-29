import React, { Component } from 'react';
import { ItemData } from '../../data/ItemData';
import Config from '../Config';

class CombatStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.store.getState().Player,
      mob: props.store.getState().Mobs.combat,
      original_mob: props.store.getState().Mobs.combat,
      inventory: props.store.getState().Inventory
    };

    this.unsubscribe = props.store.subscribe(() => {
      if (this.mounted) {
        this.setState({
          player: props.store.getState().Player,
          mob: props.store.getState().Mobs.combat,
          inventory: props.store.getState().Inventory
        });
      }
    });
  }

  componentDidMount() {
    this.mounted = true;
    this.tick = this.tick || setInterval(() => {
      if (this.mounted) {
        this.setState({
          player: this.props.store.getState().Player,
          mob: this.props.store.getState().Mobs.combat
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.mounted = false;
    this.tick = null;
  }

  calcAmmo() {
    let equipped = Config.getEquipped(this.state.inventory);
    let weapon = (!!equipped && !!equipped.weapon) ? equipped.weapon : {};
    let count = undefined;

    if (!!weapon && weapon.weapon && !!weapon.weapon.requires) {
      let ammo = _.findWhere(this.state.inventory.items, { id: weapon.weapon.requires });

      if (!ammo) {
        ammo = _.findWhere(ItemData, { id: weapon.weapon.requires });
      }

      count = (ammo.count === 1) ? `1 ${ammo.name}` : `${ammo.count} ${ammo.plural}`;

      if (ammo.count < 5) {
        count = <span className="red">{count}</span>;
      }
    }

    return count;
  }

  render() {
    let player = this.state.player;
    let mob = this.state.mob;
    
    if (mob === undefined) {
      this.unsubscribe();
      mob = { ...this.state.original_mob, hp: 0, stamina: 0, mp: 0 };
    }

    let ammo = this.calcAmmo();
    let ammo_section = (!!ammo) ? (
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <span className="bold">Ammo: </span>
          <div>{ammo}</div>
        </div>
      </div>
    ) : '';

    return (
      <div className="player-status nav-panel table-bordered right-panel col-lg-12 col-md-12 col-sm-12">
        <div className="row">
          <div className="bold col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {player.name}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">HP: </span>
            <div><span className="blue">{player.hp}</span>/{player.maxhp}</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Damage: </span>
            <div>{player.offense.min} - {player.offense.max}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">MP: </span>
            <div><span className="blue">{player.mp}</span>/{player.maxmp}</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Speed: </span>
            <div>{player.offense.speed}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Stamina: </span>
            <div><span className="blue">{player.stamina}</span>/{player.maxstamina}</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">AR: </span>
            <div>{player.defense.physical}</div>
          </div>
        </div>

        {ammo_section}

        <div className="empty-row"></div>

        <div className="row">
          <div className="bold col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {Config.upperCase(mob.name)}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">HP: </span>
            <div><span className="blue">{mob.hp}</span>/{mob.maxhp}</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Damage: </span>
            <div>{mob.offense.min} - {mob.offense.max}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">MP: </span>
            <div><span className="blue">{mob.mp}</span>/{mob.intelligence}</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Speed: </span>
            <div>{mob.offense.speed}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Stamina: </span>
            <div><span className="blue">{mob.stamina}</span>/{mob.dexterity}</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">AR: </span>
            <div>{mob.armor}</div>
          </div>
        </div>

      </div>
    );
  }

}

export default CombatStatus;
