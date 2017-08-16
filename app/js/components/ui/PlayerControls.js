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
    let w = this.state.planet.current.width;
    let h = this.state.planet.current.height;

    switch (dir) {
      case Config.ACTIONS.MAP.EAST:
        this.props.store.dispatch({
          type: Config.ACTIONS.MAP.EAST,
          payload: {
            maxx: w,
            maxy: h
          }
        });
      break;
      case Config.ACTIONS.MAP.WEST:
        this.props.store.dispatch({
          type: Config.ACTIONS.MAP.WEST,
          payload: {
            maxx: w,
            maxy: h
          }
        });
      break;
      case Config.ACTIONS.MAP.NORTH:
        this.props.store.dispatch({
          type: Config.ACTIONS.MAP.NORTH,
          payload: {
            maxx: w,
            maxy: h
          }
        });
      break;
      case Config.ACTIONS.MAP.SOUTH:
        this.props.store.dispatch({
          type: Config.ACTIONS.MAP.SOUTH,
          payload: {
            maxx: w,
            maxy: h
          }
        });
      break;
    }
  }

  updatePlayerMovement(movType) {
    switch (movType) {
      case Config.ACTIONS.PLAYER.RUN:
        this.state.player.run = !this.state.player.run;
        this.state.player.mount = false;
      break;
      case Config.ACTIONS.PLAYER.MOUNT:
        this.state.player.run = false;
        this.state.player.mount = !this.state.player.mount;
      break;
      default:
        this.state.player.run = false;
        this.state.player.mount = false;
      break;
    }

    this.props.store.dispatch({ type: movType, payload: { run: this.state.player.run, mount: this.state.player.mount } });
  }

  componentDidMount() {
    $('#run_check').attr('checked', this.state.player.run);
    
    // binds 'this' to event
    $("#run_check").on('change', $.proxy(function () {
      this.updatePlayerMovement(Config.ACTIONS.PLAYER.RUN);
    }, this));
  }

  render() {
    let player = this.state.player;
    let planet = this.state.planet;

    // Buttons
    let east = (player.x < planet.current.width) ? false : true;
    let west = (player.x > 0) ? false : true;      
    let north = (player.y > 0) ? false : true;      
    let south = (player.y < planet.current.height) ? false : true;

    return (
      <div className="nav-panel table-bordered right-panel col-lg-12 col-md-12 col-sm-12">
        <div className="row">
          <div className="col-lg-10 col-md-10 col-sm-4">
            <p className="bold">Controls</p>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <label className="checkbox-inline">
                  <input type="checkbox" data-toggle="toggle" value="run" data-on="Run" data-off="Walk" id="run_check" />
                </label>
              </div>
            </div>
            <div className="row">&nbsp;</div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="btn-group">
                  <button disabled={west} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.MAP.WEST)}>West</button>
                </div>
                <div className="btn-group-vertical">
                  <button disabled={north} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.MAP.NORTH)}>North</button>
                  <button disabled={false} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.MAP.SOUTH)}>South</button>
                </div>
                <div className="btn-group">
                  <button disabled={east} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.MAP.EAST)}>East</button>
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
