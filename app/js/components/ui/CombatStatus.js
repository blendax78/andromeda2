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
            <span className="blue">{player.hp}</span>/{player.maxhp}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Strength: </span>
            {player.strength}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">MP: </span>
            <span className="blue">{player.mp}</span>/{player.maxmp}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Intelligence: </span>
            {player.intelligence}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Stamina: </span>
            <span className="blue">{player.stamina}</span>/{player.maxstamina}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Dexterity: </span>
            {player.dexterity}
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
            <span className="blue">{mob.hp}</span>/{mob.maxhp}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">MP: </span>
            <span className="blue">{mob.mp}</span>/{mob.intelligence}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Stamina: </span>
            <span className="blue">{mob.stamina}</span>/{mob.dexterity}
          </div>
        </div>

      </div>
    );
  }

}

export default CombatStatus;
