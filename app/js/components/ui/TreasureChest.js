import React, { Component } from 'react';
import Config from '../Config';

class TreasureChest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: Config.randomKey('treasure')
    };
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.mounted = false;
  }

  componentWillMount() {
    if (!this.state.treasure) {
      this.createTreasure();
    }
  }

  componentDidMount() {
    this.mounted = true;
    this.unsubscribe = this.props.store.subscribe(() => {
      if (this.mounted) {
        let treasure = _.findWhere(
          this.props.store.getState().App.containers,
          { key: this.state.key });

        this.setState({
          treasure: treasure
        });
      }
    });
  }

  addGold(level) {
    let credits = _.random(100, 1000);
    credits = (level > 0) ? credits * level : Math.round(credits * 0.5);

    return credits;
  }

  addItems(level) {
    let items = [];

    return items;
  }

  createTreasure() {
    let treasure = {...this.props.data, key: this.state.key, level: this.props.level};
    treasure.credits = this.addGold(this.props.level);
    treasure.items = this.addItems(this.props.level);
    treasure.locked = true;

    this.props.store.dispatch({
      type: Config.ACTIONS.APP.CONTAINER_CREATE,
      payload: {
        container: treasure,
      }
    });
  }

  clickTreasure() {
    if (this.state.treasure && this.state.treasure.locked) {
      this.props.store.dispatch({
        type: Config.ACTIONS.SKILLS.LOCKPICKING,
        payload: {
          treasure: this.state.treasure,
        }
      });
    } else {

      // if (!this.state.treasure.open) {
        Config.notify(this.props.store, 'You open the chest.');
        // this.props.store.dispatch({
        //   type: Config.ACTIONS.APP.CONTAINER_UPDATE,
        //   payload: {
        //     ...this.state.treasure
        //   }
        // });

        Config.modal(this.props.store, '', 'test', 'container', {...this.state.treasure, ...{ title: 'Treasure Chest' }});

        // if (this.state.treasure.credits > 0) {
        //   Config.notifySuccess(this.props.store, `You found ${this.state.treasure.credits} credits.`);  
        //   this.props.store.dispatch({
        //     type: Config.ACTIONS.PLAYER.UPDATE,
        //     payload: {
        //       credits: this.state.treasure.credits + this.props.store.getState().Player.credits,
        //     }
        //   });

        //   this.props.store.dispatch({
        //     type: Config.ACTIONS.APP.CONTAINER_UPDATE,
        //     payload: {
        //       ...this.state.treasure,
        //       open: true,
        //       credits: 0
        //     }
        //   });
        // }
      // } else {
      //     Config.notify(this.props.store, 'You close the chest.');
      //     this.props.store.dispatch({
      //       type: Config.ACTIONS.APP.CONTAINER_UPDATE,
      //       payload: {
      //         ...this.state.treasure
      //       }
      //     });
      // }
    
    }
  }

  render() {
    let locked = (this.state.treasure && this.state.treasure.locked) ? 'locked' : 'unlocked';
    return <a href="#" 
      className="green" 
      onClick={ () => { this.clickTreasure() }}
      >A {locked} treasure chest is sitting here.</a>;
  }
}

export default TreasureChest;