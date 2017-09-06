import React, { Component } from 'react';
import Config from '../Config';

class Mob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mob: this.props.data
    };

    // Doesn't need to subscribe. Component is updated on Map
    // props.store.subscribe(() => {
      // this.setState({
      //   mob: this.props.store.getState().Mobs
      // });
    // });
  }

  getMobAction

  handleClick(e) {
    e.preventDefault();

    Config.modal(this.props.store, '', '', 'mob_actions', this.state.mob);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-10">
          <a href="#" onClick={(e) => this.handleClick(e)}>{this.state.mob.description}</a>
        </div>
      </div>
    );
  }

}

export default Mob;
