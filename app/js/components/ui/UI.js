import React, { Component } from 'react';
import MainPanel from './MainPanel';
import RightPanel from './RightPanel';
import BottomPanel from './BottomPanel';

class UI extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   elems: topElems,
    //   right: { body: this.props.store.getState().User.user_name }
    // };

    // props.store.subscribe(() => {
    //   this.setState({
    //     right: { body: this.props.store.getState().User.user_name }
    //   });
    // });
  }

  render() {


    return (
        <div className="row">
          <div className="row">
            <MainPanel />
            <RightPanel />
          </div>
          <div className="row">
            <BottomPanel />
          </div>
        </div>
      );
  }

}

export default UI;
