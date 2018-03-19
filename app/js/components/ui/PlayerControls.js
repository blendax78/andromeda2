import React, { Component } from 'react';
import Config from '../Config';
import * as classNames from 'classnames';

class PlayerControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.store.getState().Player,
      planet: props.store.getState().Planet,
      app: props.store.getState().App
    };

    this.unsubscribe = props.store.subscribe(() => {
      this.setState({
        player: props.store.getState().Player,
        planet: props.store.getState().Planet,
        app: props.store.getState().App
      });
    });
  }

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.unsubscribe();
  }

  move(dir) {
    this.state.player.status.meditate = false;
    if (this.state.app.modal.open) {
      return;
    }

    if (this.state.player.status.encumbered === true) {
      Config.notifyWarning(this.props.store, 'You are too encumbered to move.');
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
        this.state.player.status.meditate = false;
      break;
      case Config.ACTIONS.PLAYER.MOUNT:
        this.state.player.status.run = false;
        this.state.player.status.mount = !this.state.player.status.mount;
        this.state.player.status.meditate = false;
      break;
      case Config.ACTIONS.PLAYER.HIDE:
        this.hide();
        this.state.player.status.run = false;
        this.state.player.status.mount = false;
        this.state.player.status.meditate = false;
      break;      
      default:
        this.state.player.status.run = false;
        this.state.player.status.mount = false;
        this.state.player.status.meditate = false;
      break;
    }

    this.props.store.dispatch({ type: movType, payload: { hide: this.state.player.status.hide, run: this.state.player.status.run, mount: this.state.player.status.mount } });
  }

  componentDidMount() {

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
        case 82:
          this.updatePlayerMovement(Config.ACTIONS.PLAYER.RUN);
        break;
        case 72:
          this.updatePlayerMovement(Config.ACTIONS.PLAYER.HIDE);
        break;
        default:
          // console.log(e.keyCode);
        break;
      }
    });
  }

  run() {
    let player = this.state.player;
    if (this.state.player.stamina > 0 && !this.state.app.modal.open && this.state.player.status.run === false) {
      player.status.run = true;
    } else {
      let player = this.state.player;
      player.status.run = false;
    }

    this.setState({
      player: player
    });
  }

  meditate() {
    this.state.player.status.run = false;
    this.state.player.status.hide = false;

    if (this.state.player.stamina > 0 && !this.state.app.modal.open && this.state.player.status.meditate === false) {
      this.state.player.stamina--; 
      this.props.store.dispatch({
        type: Config.ACTIONS.SKILLS.MEDITATION,
        payload: {}
      });
    } else {
      let player = this.state.player;
      player.status.meditate = false;

      this.setState({
        player: player
      });
    }
  }


  hide() {
    if (this.state.player.stamina > 0 && !this.state.app.modal.open && this.state.player.status.hide === false) {
      this.state.player.stamina--; 
      this.props.store.dispatch({
        type: Config.ACTIONS.SKILLS.HIDING,
        payload: {}
      });
    } else {
      let player = this.state.player;
      player.status.hide = false;

      this.setState({
        player: player
      });
    }
  }

  componentDidUpdate() {
  }

  render() {
    let player = this.state.player;
    let planet = this.state.planet;

    // Buttons
    let east = (player.x < planet.width && !this.state.app.modal.open) ? false : true;
    let west = (player.x > 0 && !this.state.app.modal.open) ? false : true;
    let north = (player.y > 0 && !this.state.app.modal.open) ? false : true;
    let south = (player.y < planet.height && !this.state.app.modal.open) ? false : true;

    let move_disabled = (this.state.player.stamina === 0) ? true : false;

    let hide_classes = classNames({
      'active': this.state.player.status.hide,
      'btn': true,
      'btn-default': true
    });

    let run_classes = classNames({
      'active': this.state.player.status.run,
      'btn': true,
      'btn-default': true
    });

    let med_classes = classNames({
      'active': this.state.player.status.meditate,
      'btn': true,
      'btn-default': true
    });

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
                  <button disabled={move_disabled} type="button" className={run_classes} 
                    onClick={() => this.updatePlayerMovement(Config.ACTIONS.PLAYER.RUN)}>Run</button>
                </label>
              </div>

              <div className="hidden-sm col-lg-4 col-md-5 col-sm-5 col-xs-4 top5">
                <label className="checkbox-inline">
                  <button disabled={move_disabled} type="button" className={hide_classes} 
                    onClick={() => this.updatePlayerMovement(Config.ACTIONS.PLAYER.HIDE)}>Hide</button>
                </label>
              </div>

              <div className="hidden-sm col-lg-4 col-md-5 col-sm-5 col-xs-4 top5">
                <label className="checkbox-inline">
                  <button disabled={move_disabled} type="button" className={med_classes} 
                    onClick={() => this.meditate()}>Meditate</button>
                </label>
              </div>
            </div>


              <div className="hidden-lg hidden-md hidden-xs col-sm-5 top5">
                <label className="checkbox-inline">
                  <button disabled={move_disabled} type="button" className={run_classes} 
                    onClick={() => this.updatePlayerMovement(Config.ACTIONS.PLAYER.RUN)}>Run</button>
                </label>
              </div>

              <div className="hidden-lg hidden-md hidden-xs col-sm-5 top5">
                <label className="checkbox-inline">
                  <button disabled={move_disabled} type="button" className={hide_classes} 
                    onClick={() => this.updatePlayerMovement(Config.ACTIONS.PLAYER.HIDE)}>Hide</button>
                </label>
              </div>

              <div className="hidden-lg hidden-md hidden-xs col-sm-5 top5">
                <label className="checkbox-inline">
                  <button disabled={move_disabled} type="button" className={med_classes} 
                    onClick={() => this.meditate()}>Meditate</button>
                </label>
              </div>
            </div>

        </div>
      </div>
    );
  }

}

export default PlayerControls;
