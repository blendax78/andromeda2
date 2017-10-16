import React, { Component } from 'react';
import Config from '../../Config';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };
  }

  render() {
    // let skills = _.map(this.state.skills, (skill, index) => {
    //   return (
    //     <div className="row" key={Config.randomKey('skillModal')}>
    //       <div className="col-lg-6 col-md-6 col-sm-6">{skill.name}</div>
    //       <div className="col-lg-6 col-md-6 col-sm-6">{skill.current.toFixed(1)}</div>
    //     </div>
    //   );
    // });
    
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          {this.state.data.description}
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          ..action buttons (buy, sell, craft)
        </div>
      </div>
    );
  }

}

export default Store;
