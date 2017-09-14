import React, { Component } from 'react';
import Config from '../Config';
import * as classNames from 'classnames';

class Combat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mob: this.props.mob,
      player: this.props.store.getState().Player,
      combat: this.props.store.getState().Combat
    };

    // Need to go through components and bind states to store. This will speed things up.
    props.store.subscribe(() => {
      if (this.state.mounted) {
        this.setState({
          mob: this.props.store.getState().Mobs.combat || this.props.mob,
          player: this.props.store.getState().Player,
          combat: this.props.store.getState().Combat
        });
      }
    });

    // Consider setting combat interval here
  }

  componentWillUnmount() {
    let state = this.state;
    state.mounted = false;
    this.setState(state);

    // Make sure to unsubscribe!
    if (this.props.store && this.props.store.unsubscribe) {
      this.props.store.unsubscribe();
    }
  }

  componentDidMount() {
    let state = this.state;
    state.mounted = true;
    this.setState(state);
  }

  toggleRun() {
    this.props.store.dispatch({type: Config.ACTIONS.COMBAT.RUN, payload: { run: !this.state.combat.actions.run }});
  }

  toggleMelee() {
    this.props.store.dispatch({type: Config.ACTIONS.COMBAT.MELEE, payload: { melee: !this.state.combat.actions.melee }});
    this.setCombatant();
  }

  setCombatant() {
    this.props.store.dispatch({type: Config.ACTIONS.MOBS.IN_COMBAT, payload: { combat: this.props.mob }});
  }

  getCombatActions() {
    let classMelee = classNames({ btn: true, 'btn-info': this.state.combat.actions.melee })
    let classRun = classNames({ btn: true, 'btn-info': this.state.combat.actions.run })

    let buttons = [
      <span key={Config.randomKey('combat')}><button type="button" className={classMelee} onClick={() => this.toggleMelee()}>Melee</button>&nbsp;</span>, 
      <span key={Config.randomKey('combat')}><button type="button" className={classRun} onClick={() => this.toggleRun()}>Run</button>&nbsp;</span>, 
    ];

    return buttons;
  }

  render() {
    return (
      <div>
        {this.getCombatActions()}
      </div>
    );
  }

}

export default Combat;
