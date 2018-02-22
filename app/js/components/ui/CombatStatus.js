import React, { Component } from 'react';
import Config from '../Config';

class CombatStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.store.getState().Player,
      mob: props.store.getState().Mobs.combat
    };

    this.unsubscribe = props.store.subscribe(() => {
      if (this.mounted) {
        this.setState({
          player: props.store.getState().Player,
          mob: props.store.getState().Mobs.combat
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

  render() {
    let player = this.state.player;
    let mob = this.state.mob;

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
