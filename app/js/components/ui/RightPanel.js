import React, { Component } from 'react';

class RightPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.store.getState().Player
    };

    props.store.subscribe(() => {
      this.setState({
        player: props.store.getState().Player
      });
    });
  }

  render() {
    let player = this.state.player;
    return (
      <div className="col-lg-4 col-md-4 col-sm-4">
        <div className="nav-panel table-bordered right-panel col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div className="bold col-lg-12 col-md-12 col-sm-12">
              {player.name}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <span className="bold">HP: </span>
              <span className="blue">{player.hp}</span>/{player.maxhp}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <span className="bold">Credits: </span>
              {player.credits}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <span className="bold">HP: </span>
              <span className="blue">{player.hp}</span>/{player.maxhp}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <span className="bold">Location: </span>
              {player.x}, {player.y}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <span className="bold">MP: </span>
              <span className="blue">{player.mp}</span>/{player.maxmp}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <span className="bold">Stamina: </span>
              <span className="blue">{player.stamina}</span>/{player.maxstamina}
            </div>
          </div>

          <div className="row">&nbsp;</div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <span className="bold">Strength: </span>
              {player.strength}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <span className="bold">Dexterity: </span>
              {player.dexterity}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <span className="bold">Intelligence: </span>
              {player.intelligence}
            </div>
          </div>

          <div className="row">&nbsp;</div>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8">
              <span className="bold">Encumbrance: </span>
              <span className="blue">{player.encumbrance}</span>/{player.strength * 4}
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default RightPanel;
