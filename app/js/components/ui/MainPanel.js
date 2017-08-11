import React, { Component } from 'react';

class MainPanel extends Component {
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
      <div className="col-lg-8 col-md-8 col-sm-8">
        <div className="nav-panel table-bordered main-panel col-lg-12 col-md-12 col-sm-12">
          Main
        </div>
      </div>
    );
  }

}

export default MainPanel;
