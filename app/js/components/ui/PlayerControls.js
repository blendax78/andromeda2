import React, { Component } from 'react';
import Config from '../Config';

class PlayerControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.store.getState().Player,
      planet: props.store.getState().Planet
    };

    props.store.subscribe(() => {
      this.setState({
        player: props.store.getState().Player,
        planet: props.store.getState().Planet
      });
    });
  }

  move(dir) {
    switch (dir) {
      case Config.ACTIONS.MAP.EAST:
        this.props.store.dispatch({ type: Config.ACTIONS.MAP.EAST, payload: {} });
      break;
      case Config.ACTIONS.MAP.WEST:
        this.props.store.dispatch({ type: Config.ACTIONS.MAP.WEST, payload: {} });
      break;
      case Config.ACTIONS.MAP.NORTH:
        this.props.store.dispatch({ type: Config.ACTIONS.MAP.NORTH, payload: {} });
      break;
      case Config.ACTIONS.MAP.SOUTH:
        this.props.store.dispatch({ type: Config.ACTIONS.MAP.SOUTH, payload: {} });
      break;
    }
  }

  render() {
    let player = this.state.player;
    let planet = this.state.planet;

    // Buttons
    let east = (player.x < planet.current.width) ? 
      <button type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.MAP.EAST)}>East</button> : '';
    let west = (player.x > 0) ? 
      <button type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.MAP.WEST)}>West</button> : '';
    let north = (player.y > 0) ? 
      <button type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.MAP.NORTH)}>North</button> : '';
    let south = (player.y < planet.current.height) ? 
      <button type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.MAP.SOUTH)}>South</button> : '';

    return (
      <div className="nav-panel table-bordered right-panel col-lg-12 col-md-12 col-sm-12">
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-4">
            <p className="bold">Controls</p>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <label className="checkbox-inline">
                  <input type="checkbox" data-toggle="toggle" value="run" data-on="Run" data-off="Walk" />
                </label>
              </div>
            </div>
            <div className="row">&nbsp;</div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="btn-group">
                  {west}
                </div>
                <div className="btn-group-vertical">
                  {north}
                  {south}
                </div>
                <div className="btn-group">
                  {east}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default PlayerControls;
