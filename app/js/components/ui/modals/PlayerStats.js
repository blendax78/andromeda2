import React, { Component } from 'react';
import Config from '../../Config';

class PlayerStats extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      player: props.store.getState().Player,
      skills: props.store.getState().Skills
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

  getTitle() {
    let title = '';
    let highest = _.first(_.sortBy(this.state.skills, (skill) => {
      return skill.current * -1;
    }));
    
    if (highest.current === 100) {
      title = 'Grandmaster';
    } else if (highest.current >= 90) {
      title = 'Master';
    } else if (highest.current >= 80) {
      title = 'Adept';
    } else if (highest.current >= 70) {
      title = 'Expert';
    } else if (highest.current >= 60) {
      title = 'Journeyman';
    } else if (highest.current >= 50) {
      title = 'Apprentice';
    } else if (highest.current >= 40) {
      title = 'Novice';
    } else if (highest.current >= 30) {
      title = 'Neophyte';
    } else {
      title = '';
    }

    return `${title} ${highest.title}`;
  }

  render() {
    let title = this.getTitle();
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p><span className="bold">Title: </span>{this.state.player.name}, the {title}</p>
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
