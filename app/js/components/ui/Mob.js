import React, { Component } from 'react';
import Config from '../Config';
import Combat from './Combat';

class Mob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mob: this.props.data,
      showAction: this.props.store.getState().Mobs.showAction,
      showCombat: this.props.store.getState().Mobs.showCombat
    };

    props.store.subscribe(() => {
      this.setState({
        mob: this.props.store.getState().Mobs.combat || this.props.data,
        showAction: this.props.store.getState().Mobs.showAction,
        showCombat: this.props.store.getState().Mobs.showCombat
      });
    });
  }

  componentWillUnmount() {
    // Make sure to unsubscribe!
    // this is throwing an error when you see a mob and leave the room.
    this.props.store.unsubscribe();
  }

  setMobAction(e) {
    e.preventDefault();
    // Config.modal(this.props.store, '', '', 'container_actions', this.state.mob);
    this.props.store.dispatch({ type: Config.ACTIONS.MOBS.SHOW_ACTION, payload: {} });
  }

  toggleCombat(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.store.dispatch({ type: Config.ACTIONS.MOBS.SHOW_COMBAT, payload: {} });
  }

  getMobActions() {
    if (!this.state.showAction) {
      return '';
    }

    let buttons = [];

    if (this.state.showCombat) {
      buttons = <Combat store={this.props.store} mob={this.state.mob} />;
    } else {
      if (this.state.mob.attackable) {
        buttons.push(<button key={Config.randomKey('mob_actions')} type="button" className="btn" onClick={(e) => this.toggleCombat(e)}>Attack</button>);
      }
    }

    return (
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-10">
          {buttons}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-10">
          <a href="#" onClick={ (e) => this.setMobAction(e) }>{this.state.mob.description}</a>
          {this.getMobActions()}
        </div>
      </div>
    );
  }

}

export default Mob;
