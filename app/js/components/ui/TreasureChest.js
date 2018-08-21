import React, { Component } from 'react';
import Config from '../Config';

class Dungeon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locked: true,
      data: props.data
    };
  }

  componentWillUnmount() {
  }

  componentDidMount() {
  }

  clickTreasure() {
    if (this.state.locked) {
      console.log('You attempt to unlock the chest.');
    } else {
      console.log('You open the chest.');
    }
  }

  render() {
    let locked = (this.state.locked) ? 'locked' : 'unlocked';
    return <a href="#" className="green" onClick={ () => { this.clickTreasure() }}>({this.props.level})A small, {locked} treasure chest is sitting here.</a>;
  }
}

export default Dungeon;