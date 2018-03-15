import React, { Component } from 'react';
import Config from '../../Config';

class PlayerStats extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      player: props.store.getState().Player
    };
  }

  calcTime() {
    let seconds = this.state.player.score.timer;

    let days = Math.floor(seconds / 86400);
    seconds -= days * 86400;

    let hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;

    let minutes = Math.floor(seconds / 60);
    seconds -=  minutes * 60;

    return `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p><span className="bold">Time in World: </span>{this.calcTime()}</p>
          <p><span className="bold">Walking Steps: </span>{this.state.player.score.walked}</p>
          <p><span className="bold">Running Steps: </span>{this.state.player.score.run}</p>
          <p><span className="bold">Kills: </span>{this.state.player.score.kills}</p>
          <p><span className="bold">Deaths: </span>{this.state.player.score.deaths}</p>
          <p><span className="bold">Logs Found: </span>{this.state.player.score.log}</p>
          <p><span className="bold">Ore Found: </span>{this.state.player.score.ore}</p>
          <p><span className="bold">Items Crafted: </span>{this.state.player.score.crafted}</p>
        </div>
      </div>
    );
  }

}

export default PlayerStats;
