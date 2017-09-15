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
      <div className="">
        <div className="col-lg-8 col-md-8 col-sm-8"><MainPanel store={this.props.store}/></div>
        <div className=""><p></p></div>
        <div className="col-lg-4 col-md-4 col-sm-4"><RightPanel store={this.props.store}/></div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <BottomPanel store={this.props.store}/>
        </div>
      </div>
    );
  }

}

export default UI;
