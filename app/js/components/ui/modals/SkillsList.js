import React, { Component } from 'react';
import Config from '../../Config';

class SkillsList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      skills: props.store.getState().Skills
    };
  }

  render() {
    let ordered_skills = _.sortBy(this.state.skills, (skill) => {
      return skill.name;
    });

    let total = 0;
    let skills = _.map(ordered_skills, (skill, index) => {
      total += skill.current;

      return (
        <div className="row" key={`skill.${skill.id}`}>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{skill.name}</div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{skill.current.toFixed(1)}</div>
        </div>
      );
    });
    
    return (
      <div className="row scrollable">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            <h5 className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bold">Total: {total}</h5>
          </div>
          {skills}
        </div>
      </div>
    );
  }

}

export default SkillsList;
