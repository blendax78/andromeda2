import React, { Component } from 'react';
import Config from '../Config';
import * as classNames from 'classnames';

class Mob extends Component {
  constructor(props) {
    super(props);

    this.keys = {
      actions: Config.randomKey('mob_actions'),
      attack: Config.randomKey('mob_actions'),
      lore: Config.randomKey('mob_actions')
    };

    this.state = {
      mob: this.props.data,
      player: this.props.store.getState().Player,
      showAction: false,
      showCombat: this.props.store.getState().Mobs.showCombat,
      buttons: {
        anatomy: true,
        animal_lore: true,
        attack: true
      }
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
    if (this.state.mob.aggro && !this.props.store.getState().App.modal.open && _.isUndefined(this.props.store.getState().Mobs.combat) && 
      _.findIndex(this.props.store.getState().Mobs.recent_combat, { key: this.state.mob.key }) < 0 && this.state.mob.stamina > 0 &&
      this.state.player.status.dead !== true) {
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

  animalLore(mob) {
    let buttons = this.state.buttons;
    buttons.animal_lore = false;
    this.setState({ buttons: buttons });

    this.props.store.dispatch({ type: Config.ACTIONS.SKILLS.ANIMAL_LORE, payload: { mob: mob } });

    setTimeout(() => {
      buttons.animal_lore = true;
      this.setState({ buttons: buttons });
    }, Config.SETTINGS.SKILL_TIMEOUT * 1000);
  }

  anatomy(mob) {
    let buttons = this.state.buttons;
    buttons.anatomy = false;
    this.setState({ buttons: buttons });

    this.props.store.dispatch({ type: Config.ACTIONS.SKILLS.ANATOMY, payload: { mob: mob } });
    setTimeout(() => {
      buttons.anatomy = true;
      this.setState({ buttons: buttons });
    }, Config.SETTINGS.SKILL_TIMEOUT * 1000);
  }

  getMobActions() {
    if (!this.state.showAction) {
      return '';
    }

    let buttons = [];
    let buttonStyle = {};

    buttonStyle = classNames({
      disabled: !this.state.buttons.attack && !this.state.player.status.dead && this.state.mob.attackable,
      btn: true,
      'btn-default': true,
      top5: true
    });
    buttons.push(
      <button key={this.keys.attack} disabled={!this.state.buttons.attack} type="button" className={buttonStyle} onClick={(e) => this.toggleCombat()}>Attack</button>
    );

    if (this.state.mob.mob_type !== 'humanoid') {
      buttonStyle = classNames({
        disabled: !this.state.buttons.animal_lore && !this.state.player.status.dead,
        btn: true,
        'btn-default': true,
        top5: true
      });
      buttons.push(
        <button key={this.keys.lore} disabled={!this.state.buttons.animal_lore} type="button" className={buttonStyle} onClick={(e) => this.animalLore(this.state.mob)}>Animal Lore</button>
      );
    } else {
      buttonStyle = classNames({
        disabled: !this.state.buttons.anatomy && !this.state.player.status.dead,
        btn: true,
        'btn-default': true,
        top5: true
      });
      buttons.push(
        <button key={this.keys.anatomy} disabled={!this.state.buttons.anatomy} type="button" className={buttonStyle} onClick={(e) => this.anatomy(this.state.mob)}>Anatomy</button>
      );
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
