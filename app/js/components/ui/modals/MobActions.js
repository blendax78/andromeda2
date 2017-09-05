import React, { Component } from 'react';
import Config from '../../Config';

class MobActions extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      mob: props.mob
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p>hi {this.state.mob.name}.</p>
        </div>
      </div>
    );
  }

}

export default MobActions;
