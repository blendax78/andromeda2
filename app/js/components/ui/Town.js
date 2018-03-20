import React, { Component } from 'react';
import Config from '../Config';

class Town extends Component {
  constructor(props) {
    super(props);

    this.state = {
      town: this.props.data
    };
  }

  render() {
    let town = this.state.town;

    return (
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-10">
          {town.description}
        </div>
      </div>
    );
  }

}

export default Town;
