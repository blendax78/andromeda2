import React, { Component } from 'react';
import Mob from './Mob';
import Config from '../Config';
import TreasureChest from './TreasureChest';

class Dungeon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.store.getState().Player,
      mobs: props.store.getState().Mobs
    };
  }

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.unsubscribe();
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.setState({
        planet: this.props.store.getState().Planet,
        mobs: this.props.store.getState().Mobs
      });
    });
  }
// consider formula for mobs: Math.round(<step>*<diffMax>/<depth>)
  render() {
    let mobs = '';
    return (
        <div>
          <div className="row">
            <h5 className="col-lg-4 col-md-4 col-sm-4 col-xs-4 bold">
              {this.props.data.name} ({this.state.player.dungeon.step}/{this.props.data.depth})
            </h5>
          </div>
          <div className="row bottom5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {this.props.data.description}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {mobs}
            </div>
          </div>
        </div>

    );
  }
}

export default Dungeon;