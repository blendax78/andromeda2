import React, { Component } from 'react';

class PlayerControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: props.store.getState().Player
    };

    props.store.subscribe(() => {
      this.setState({
        player: props.store.getState().Player
      });
    });
  }

  render() {
    let player = this.state.player;

    return (
      <div className="nav-panel table-bordered right-panel col-lg-12 col-md-12 col-sm-12">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-4">
          <p className="bold">Controls</p>
          <div className="btn-group">
            <button type="button" className="btn btn-default btn-direction">West</button>
          </div>
          <div className="btn-group-vertical">
            <button type="button" className="btn btn-default btn-direction">North</button>
            <button type="button" className="btn btn-default btn-direction">South</button>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-default btn-direction">East</button>
          </div>
          </div>
        </div>
      </div>
    );
  }

}

export default PlayerControls;
