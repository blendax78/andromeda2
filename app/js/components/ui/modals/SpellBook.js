import React, { Component } from 'react';
import Config from '../../Config';

class SpellBook extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      skills: props.store.getState().Skills
    };
  }

  render() {
    let skills = _.map(this.state.skills, (skill, index) => {
      return (
        <div className="row" key={Config.randomKey('skillModal')}>
          <div className="col-lg-6 col-md-6 col-sm-6">{skill.name}</div>
          <div className="col-lg-6 col-md-6 col-sm-6">{skill.current.toFixed(1)}</div>
        </div>
      );
    });
    
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          {skills}
        </div>
      </div>
    );
  }

}

export default SpellBook;
