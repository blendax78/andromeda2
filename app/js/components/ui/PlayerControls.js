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
      case Config.ACTIONS.PLAYER.EAST:
        if (this.state.player.x < w) {
          this.props.store.dispatch({
            type: Config.ACTIONS.PLAYER.EAST,
            payload: {
              maxx: w,
              maxy: h
            }
          });
        }
      break;
      case Config.ACTIONS.PLAYER.WEST:
        if (this.state.player.x > 0) {
          this.props.store.dispatch({
            type: Config.ACTIONS.PLAYER.WEST,
            payload: {
              maxx: w,
              maxy: h
            }
          });
        }
      break;
      case Config.ACTIONS.PLAYER.NORTH:
        if (this.state.player.y > 0) {
          this.props.store.dispatch({
            type: Config.ACTIONS.PLAYER.NORTH,
            payload: {
              maxx: w,
              maxy: h
            }
          });
        }
      break;
      case Config.ACTIONS.PLAYER.SOUTH:
        if (this.state.player.y < h) {
          this.props.store.dispatch({
            type: Config.ACTIONS.PLAYER.SOUTH,
            payload: {
              maxx: w,
              maxy: h
            }
          });
        }
      break;
    }
  }

  updatePlayerMovement(movType) {
    switch (movType) {
      case Config.ACTIONS.PLAYER.RUN:
        this.state.player.run = (this.state.player.stamina > 0) ? !this.state.player.run : false;
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
    // Arrow functions inherit 'this' from outer function.
    $("#run_check").off('change').on('change', () => {
      this.updatePlayerMovement(Config.ACTIONS.PLAYER.RUN);
    });

    $(document).off('keyup').on('keyup', (e) => {
      switch (e.keyCode) {
        case 38:
          this.move(Config.ACTIONS.PLAYER.NORTH);
        break;
        case 40:
          this.move(Config.ACTIONS.PLAYER.SOUTH);
        break;
        case 37:
          this.move(Config.ACTIONS.PLAYER.WEST);
        break;
        case 39:
          this.move(Config.ACTIONS.PLAYER.EAST);
        break;
      }
    });
  }

  componentDidUpdate() {
    let check = $('#run_check');
    if (check.prop('checked') && this.state.player.run === false) {
      check.bootstrapToggle('off', false);
    }
  }

  render() {
    // console.log('run', this.state.player.run);
    // $('#run_check').bootstrapToggle('on');

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
          <div className="col-lg-11 col-md-11 col-sm-4">
            <p className="bold">Controls</p>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12" style={{ paddingLeft: '40px' }}>
                <div className="btn-group">
                  <button disabled={west} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.PLAYER.WEST)}>West</button>
                </div>
                <div className="btn-group-vertical">
                  <button disabled={north} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.PLAYER.NORTH)}>North</button>
                  <button disabled={false} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.PLAYER.SOUTH)}>South</button>
                </div>
                <div className="btn-group">
                  <button disabled={east} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.PLAYER.EAST)}>East</button>
                </div>
              </div>
            </div>

            <div className="row">&nbsp;</div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <label className="checkbox-inline">
                  <input type="checkbox" defaultChecked={this.state.player.run} data-toggle="toggle" value="run" data-on="Run" data-off="Run" id="run_check" />
                </label>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <label className="checkbox-inline">
                  <input type="checkbox" defaultChecked={this.state.player.hide} data-toggle="toggle" value="hide" data-on="Hide" data-off="Hide" id="hide_check" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default PlayerControls;
