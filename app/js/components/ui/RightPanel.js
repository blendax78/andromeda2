import React, { Component } from 'react';
import PlayerStatus from './PlayerStatus';
import PlayerControls from './PlayerControls';

class RightPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-10">
        <div className="row"><PlayerStatus store={this.props.store} /></div>
        <div className="row">&nbsp;</div>
        <div className="row"><PlayerControls store={this.props.store} /></div>
      </div>
    );
  }

}

export default RightPanel;
