import React, { Component } from 'react';
import Config from '../Config';

class Mob extends Component {
  constructor(props) {
    super(props);

    this.keys = {
      actions: Config.randomKey('mob_actions')
    };

    this.state = {
      mob: this.props.data,
      showAction: this.props.store.getState().Mobs.showAction,
      showCombat: this.props.store.getState().Mobs.showCombat
    };

    this.unsubscribe = props.store.subscribe(() => {
      if (this.mounted) {
        this.setState({
          mob: this.state.mob,
          showAction: this.props.store.getState().Mobs.showAction,
          showCombat: this.props.store.getState().Mobs.showCombat
        });
      }
    });
  }

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.unsubscribe();
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
  }

  setMobAction(e) {
    e.preventDefault();
    this.props.store.dispatch({ type: Config.ACTIONS.MOBS.SHOW_ACTION, payload: {} });
  }

  toggleCombat(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.store.dispatch({ type: Config.ACTIONS.MOBS.SHOW_ACTION, payload: {} });
    this.props.store.dispatch({ type: Config.ACTIONS.MOBS.IN_COMBAT, payload: { data: this.state.mob } });
    Config.modal(this.props.store, '', '', 'combat');
  }

  getMobActions() {
    if (!this.state.showAction) {
      return '';
    }

    let buttons = [];

    if (this.state.mob.attackable) {
      buttons.push(<button key={this.keys.actions} type="button" className="btn" onClick={(e) => this.toggleCombat(e)}>Attack</button>);
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
