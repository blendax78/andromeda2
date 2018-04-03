import React, { Component } from 'react';
import Config from '../Config';
import * as classNames from 'classnames';

class Mob extends Component {
  constructor(props) {
    super(props);

    this.keys = {
      actions: Config.randomKey('mob_actions')
    };

    this.state = {
      mob: this.props.data,
      player: this.props.store.getState().Player,
      showAction: false,
      showCombat: this.props.store.getState().Mobs.showCombat
    };

    this.unsubscribe = props.store.subscribe(() => {
      if (this.mounted) {
        let mob = this.props.store.getState().Mobs.list[this.props.data.key] || this.props.data;
        this.setState({
          mob: mob,
          player: this.props.store.getState().Player,
          showAction: this.state.showAction,
          showCombat: this.props.store.getState().Mobs.showCombat
        });
      }
    });
  }

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.unsubscribe();
    this.mounted = false;
    clearInterval(this.check_aggro);
  }

  componentDidMount() {
    this.mounted = true;
    this.check_aggro = this.check_aggro || setInterval(() => {
      this.checkAggro();
    }, 1000);
    this.checkAggro();
  }

  checkAggro() {
    if (this.state.mob.aggro && !store.getState().App.modal.open && _.isUndefined(this.props.store.getState().Mobs.combat) && 
      _.findIndex(this.props.store.getState().Mobs.recent_combat, { key: this.state.mob.key }) < 0 && this.state.mob.stamina > 0) {
      // Aggro mob attack!
      this.toggleCombat();
    }
  }

  toggleMobAction() {
    let action = !this.state.showAction;
    this.setState({ showAction: action });
  }

  toggleCombat() {
    this.props.store.dispatch({ type: Config.ACTIONS.MOBS.SHOW_ACTION, payload: {} });
    this.props.store.dispatch({ type: Config.ACTIONS.MOBS.IN_COMBAT, payload: { data: this.state.mob } });
    Config.modal(this.props.store, '', '', 'combat');
  }

  getMobActions() {
    if (!this.state.showAction) {
      return '';
    }

    let buttons = [];

    if (this.state.mob.attackable && !this.state.player.status.dead) {
      buttons.push(<button key={this.keys.actions} type="button" className="btn btn-default top5" onClick={(e) => this.toggleCombat()}>Attack</button>);
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
    let mob_classes = classNames({
      red: this.state.mob.aggro,
    });

    return (
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-10 col-xs-12">
          <a href="#" onClick={ (e) => this.toggleMobAction() } className={mob_classes}>{this.state.mob.description}</a>
          {this.getMobActions()}
        </div>
      </div>
    );
  }

}

export default Mob;
