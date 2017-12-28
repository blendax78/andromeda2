import React, { Component } from 'react';
import Config from '../Config';
import * as classNames from 'classnames';

class Combat extends Component {
  constructor(props) {
    super(props);

    this.keys = {
      melee: Config.randomKey('combat'),
      run: Config.randomKey('combat'),
    };

    this.state = {
      mob: this.props.mob,
      player: this.props.store.getState().Player,
      combat: this.props.store.getState().Combat
    };

    this.mounted = true;
    this.unsubscribe = props.store.subscribe(() => {
      if (this.mounted) {
        this.setState({
          mob: this.props.store.getState().Mobs.combat || this.props.mob,
          player: this.props.store.getState().Player,
          combat: this.props.store.getState().Combat
        });        
      } else {
        this.mounted = false;
        this.unsubscribe();
      }
    });

    // Consider setting combat interval here
  }

  // Make sure to unsubscribe!
  componentWillUnmount() {
    this.mounted = false;
    this.unsubscribe();
  }

  componentDidMount() {
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
      <span key={this.keys.melee}><button type="button" className={classMelee} onClick={() => this.toggleMelee()}>Melee</button>&nbsp;</span>, 
      <span key={this.keys.run}><button type="button" className={classRun} onClick={() => this.toggleRun()}>Run</button>&nbsp;</span>, 
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
