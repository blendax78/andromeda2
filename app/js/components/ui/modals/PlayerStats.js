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
    let stats = _.map([
      { name: 'Title', value: `${this.state.player.name}, the ${title}`},
      { name: 'Time in World', value: this.calcTime()},
      { name: 'Walking Steps', value: this.state.player.score.walked},
      { name: 'Running Steps', value: this.state.player.score.run},
      { name: 'Kills', value: this.state.player.score.kills},
      { name: 'Deaths', value: this.state.player.score.deaths},
      { name: 'Times Fled from Battle', value: this.state.player.score.flee},
      { name: 'Logs Found', value: this.state.player.score.log},
      { name: 'Ore Found', value: this.state.player.score.ore},
      { name: 'Items Crafted', value: this.state.player.score.crafted},
    ], (stat) => {
      return <p key={stat.name}><span className="bold">{stat.name}: </span>{stat.value}</p>;
    });

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          {stats}
        </div>
      </div>
    );
  }

}

export default PlayerStats;
