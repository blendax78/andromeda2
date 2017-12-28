import React, { Component } from 'react';
import Config from '../../Config';

class PlayerStats extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      player: props.store.getState().Player
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p><span className="bold">Walking Steps: </span>{this.state.player.score.walked}</p>
          <p><span className="bold">Running Steps: </span>{this.state.player.score.run}</p>
          <p><span className="bold">Kills: </span>{this.state.player.score.kills}</p>
          <p><span className="bold">Logs Found: </span>{this.state.player.score.log}</p>
          <p><span className="bold">Ore Found: </span>{this.state.player.score.ore}</p>
          <p><span className="bold">Items Crafted: </span>{this.state.player.score.crafted}</p>
        </div>
      </div>
    );
  }

}

export default PlayerStats;
