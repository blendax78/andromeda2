import React, { Component } from 'react';
import Map from './Map';
import Dungeon from './Dungeon';

class MainPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: props.store.getState().Planet,
      player: props.store.getState().Player
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
        player: this.props.store.getState().Player
      });
    });
  }

  render() {

    let render = (this.state.player.dungeon === false) ? 
      <Map store={this.props.store} /> :
      <Dungeon data={this.state.player.dungeon} store={this.props.store} /> ;

    return (
        <div className="nav-panel table-bordered main-panel col-lg-12 col-md-12 col-sm-12">
          {render}
        </div>

    );
  }

}

export default MainPanel;
