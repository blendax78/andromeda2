import React, { Component } from 'react';

class RightPanel extends Component {
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
        <div className="nav-panel col-lg-4 col-md-4 col-sm-4">Right</div>
      );
  }

}

export default RightPanel;
