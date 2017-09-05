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

  handleClick(e) {
    e.preventDefault();
    console.log('click mob');
    Config.modal(this.props.store, '', '', 'mob_actions', this.state.mob);
    // let decoration = this.state.data;
    // if (!decoration.action) {
    //   return false;
    // }

    // if (decoration.action.current > 0) {
    //   this.props.store.dispatch({ type: Config.ACTIONS.MESSAGES.ADD, payload: { body: decoration.action.message } });
    //   this.props.store.dispatch({ type: decoration.action.skill, payload: { action: decoration.action, key: decoration.key } });

    //   this.setState({ data: decoration });
    // } else {
    //   this.props.store.dispatch({ type: Config.ACTIONS.MESSAGES.ADD, payload: { body: decoration.action.maxMessage } });
    // }
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
