import React, { Component } from 'react';
import Config from '../Config';

class Town extends Component {
  constructor(props) {
    super(props);

    this.state = {
      town: this.props.data
    };

    // Doesn't need to subscribe. Component is updated on Map
    // props.store.subscribe(() => {
    //   this.setState({
        // planet: this.props.store.getState().Planet,
        // player: this.props.store.getState().Player
    //   });
    // });
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
