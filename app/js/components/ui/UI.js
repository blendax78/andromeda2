import React, { Component } from 'react';
import MainPanel from './MainPanel';
import RightPanel from './RightPanel';
import BottomPanel from './BottomPanel';
import PlayerControls from './PlayerControls';

class UI extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="">
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 hidden-sm hidden-md hidden-lg bottom5"><PlayerControls store={this.props.store}/></div>
        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12"><MainPanel store={this.props.store}/></div>
        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12"><RightPanel store={this.props.store}/></div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <BottomPanel store={this.props.store}/>
        </div>
      </div>
    );
  }

}

export default UI;
