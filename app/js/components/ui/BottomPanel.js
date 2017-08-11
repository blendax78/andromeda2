import React, { Component } from 'react';

class BottomPanel extends Component {
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
        <div className="nav-panel col-lg-12 col-md-12 col-sm-12">Bottom</div>
      );
  }

}

export default BottomPanel;
