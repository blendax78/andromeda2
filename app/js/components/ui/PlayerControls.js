import React, { Component } from 'react';
import Config from '../Config';

class PlayerControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.store.getState().Player,
      planet: props.store.getState().Planet
    };

    this.unsubscribe = props.store.subscribe(() => {
      this.setState({
        player: props.store.getState().Player,
        planet: props.store.getState().Planet
      });
    });
  }

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.unsubscribe();
  }

  move(dir) {
    if (this.state.player.status.encumbered === true) {
      Config.notifyWarning(store, 'You are too encumbered to move.');
      return;
    }

    let w = this.state.planet.width;
    let h = this.state.planet.height;

    // Clear combat & actions
    if (this.props.store.getState().Mobs.showAction) {
      this.props.store.dispatch({
        type: Config.ACTIONS.MOBS.SHOW_ACTION,
        payload: {}
      });
    }

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
        this.state.player.status.run = (this.state.player.stamina > 0) ? !this.state.player.status.run : false;
        this.state.player.status.mount = false;
      break;
      case Config.ACTIONS.PLAYER.MOUNT:
        this.state.player.status.run = false;
        this.state.player.status.mount = !this.state.player.status.mount;
      break;
      default:
        this.state.player.status.run = false;
        this.state.player.status.mount = false;
      break;
    }

    this.props.store.dispatch({ type: movType, payload: { run: this.state.player.status.run, mount: this.state.player.status.mount } });
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
    if (check.prop('checked') && this.state.player.status.run === false) {
      check.bootstrapToggle('off', false);
    }
  }

  render() {
    let player = this.state.player;
    let planet = this.state.planet;

    // Buttons
    let east = (player.x < planet.width) ? false : true;
    let west = (player.x > 0) ? false : true;
    let north = (player.y > 0) ? false : true;
    let south = (player.y < planet.height) ? false : true;

    return (
      <div className="player-controls nav-panel table-bordered right-panel col-lg-12 col-md-12 col-sm-12 col-xs-12 top5">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <p className="bold">Controls</p>

            <div className="row">
              <div className="col-lg-8 col-md-7 col-sm-12 col-xs-8">
                <div className="btn-group">
                  <button disabled={west} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.PLAYER.WEST)}>W</button>
                </div>
                <div className="btn-group-vertical">
                  <button disabled={north} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.PLAYER.NORTH)}>N</button>
                  <button disabled={false} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.PLAYER.SOUTH)}>S</button>
                </div>
                <div className="btn-group">
                  <button disabled={east} type="button" className="btn btn-default btn-direction" onClick={() => this.move(Config.ACTIONS.PLAYER.EAST)}>E</button>
                </div>
              </div>

              <div className="hidden-sm col-lg-4 col-md-5 col-sm-5 col-xs-4">
                <label className="checkbox-inline">
                  <input type="checkbox" defaultChecked={this.state.player.status.run} data-toggle="toggle" value="run" data-on="Run" data-off="Run" id="run_check" />
                </label>
              </div>

              <div className="hidden-sm col-lg-4 col-md-5 col-sm-5 col-xs-4 top5">
                <label className="checkbox-inline">
                  <input type="checkbox" defaultChecked={this.state.player.hide} data-toggle="toggle" value="hide" data-on="Hide" data-off="Hide" id="hide_check" />
                </label>
              </div>
            </div>


              <div className="hidden-lg hidden-md hidden-xs col-sm-5 top5">
                <label className="checkbox-inline">
                  <input type="checkbox" defaultChecked={this.state.player.status.run} data-toggle="toggle" value="run" data-on="Run" data-off="Run" id="run_check" />
                </label>
              </div>

              <div className="hidden-lg hidden-md hidden-xs col-sm-5 top5">
                <label className="checkbox-inline">
                  <input type="checkbox" defaultChecked={this.state.player.hide} data-toggle="toggle" value="hide" data-on="Hide" data-off="Hide" id="hide_check" />
                </label>
              </div>
            </div>

        </div>
      </div>
    );
  }

}

export default PlayerControls;
