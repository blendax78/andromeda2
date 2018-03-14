import React, { Component } from 'react';

class PlayerStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.store.getState().Player
    };

    this.unsubscribe = props.store.subscribe(() => {
      if (this.mounted) {
        this.setState({
          player: props.store.getState().Player
        });
      }
    });
  }

  componentDidMount() {
    this.mounted = true;
    this.tick = this.tick || setInterval(() => {
      if (this.mounted) {
        this.setState({
          player: this.props.store.getState().Player
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.mounted = false;
  }

  render() {
    let player = this.state.player;
    let dead = (player.status.dead) ? <span className="red">(DEAD)</span> : '';
    return (
      <div className="player-status nav-panel table-bordered right-panel col-lg-12 col-md-12 col-sm-12">
        <div className="row">
          <div className="bold col-lg-12 col-md-12 col-sm-12 col-xs-12">
            {player.name} {dead}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">HP: </span>
            <span className="blue">{player.hp}</span>/{player.maxhp}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Credits: </span>
            {player.credits}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">MP: </span>
            <span className="blue">{player.mp}</span>/{player.maxmp}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Location: </span>
            {player.x}, {player.y}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Stamina: </span>
            <span className="blue">{player.stamina}</span>/{player.maxstamina}
          </div>
        </div>

        <div className="empty-row"></div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Strength: </span>
            {player.strength}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Damage: </span>
            {player.offense.min} - {player.offense.max}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Dexterity: </span>
            {player.dexterity}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Speed: </span>
            {player.offense.speed}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">Intelligence: </span>
            {player.intelligence}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="bold">AR: </span>
            {player.defense.physical}
          </div>
        </div>

        <div className="empty-row"></div>
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8">
            <span className="bold">Encumbrance: </span>
            <span className="blue">{player.encumbrance}</span>/{player.strength * 4}
          </div>
        </div>
      </div>
    );
  }

}

export default PlayerStatus;
