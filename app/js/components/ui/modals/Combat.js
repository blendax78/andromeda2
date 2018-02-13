import React, { Component } from 'react';
import Config from '../../Config';
import * as classNames from 'classnames';
import MessageList from '../MessageList';
import CombatStatus from '../CombatStatus';

class Combat extends Component {
  constructor(props) {
    super(props);

    this.keys = {
      melee: Config.randomKey('combat'),
      ranged: Config.randomKey('combat'),
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
          mob: this.props.store.getState().Mobs.combat,
          player: this.props.store.getState().Player,
          combat: this.props.store.getState().Combat
        });        
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
    this.mounted = true;

    // checked equipped weapons and toggle.
    this.toggleMelee();
  }

  toggleRun() {
    this.props.store.dispatch({type: Config.ACTIONS.COMBAT.RUN, payload: { run: !this.state.combat.actions.run }});
  }

  toggleMelee() {
    this.props.store.dispatch({type: Config.ACTIONS.COMBAT.MELEE, payload: { melee: !this.state.combat.actions.melee }});
  }

  toggleRanged() {
    this.props.store.dispatch({type: Config.ACTIONS.COMBAT.RANGED, payload: { ranged: !this.state.combat.actions.ranged }});
  }

  getCombatActions() {
    let classMelee = classNames({ btn: true, 'btn-info': this.state.combat.actions.melee });
    let classRanged = classNames({ btn: true, 'btn-info': this.state.combat.actions.ranged });
    let classRun = classNames({ btn: true, 'btn-info': this.state.combat.actions.run });

    let buttons = [
      <span key={this.keys.melee}><button type="button" className={classMelee} onClick={() => this.toggleMelee()}>Melee</button>&nbsp;</span>, 
      <span key={this.keys.ranged}><button type="button" className={classRanged} onClick={() => this.toggleRanged()}>Ranged</button>&nbsp;</span>, 
      <span key={this.keys.run}><button type="button" className={classRun} onClick={() => this.toggleRun()}>Run</button>&nbsp;</span>, 
    ];

    return buttons;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            {this.getCombatActions()}
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                sub actions
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <CombatStatus store={this.props.store} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <MessageList store={this.props.store} />
          </div>
        </div>
      </div>
    );
  }

}

export default Combat;

