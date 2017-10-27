import React, { Component } from 'react';
import Config from '../../Config';

class Blacksmithing extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   player: this.props.store.getState().Player,
    //   inventory: this.props.store.getState().Inventory
    // };

    // props.store.subscribe(() => {
    //   this.setState({
    //     player: this.props.store.getState().Player,
    //     inventory: this.props.store.getState().Inventory
    //   });
    // });

  }

  render() {
    console.log('props', this.props);
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          Blacksmithing
        </div>
      </div>
    );
  }

}

export default Blacksmithing;
