import React, { Component } from 'react';
import Map from './Map';

class MainPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: true
    };

    // props.store.subscribe(() => {
    //   this.setState({
    //     right: { body: this.props.store.getState().User.user_name }
    //   });
    // });
  }

  render() {

    let render = (this.state.map) ? <Map store={this.props.store} /> : '';

    return (
        <div className="nav-panel table-bordered main-panel col-lg-12 col-md-12 col-sm-12">
          {render}
        </div>

    );
  }

}

export default MainPanel;
