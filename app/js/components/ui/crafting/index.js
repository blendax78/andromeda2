import React, { Component } from 'react';
import Config from '../../Config';
import Blacksmithing from './Blacksmithing';
import Bowcraft from './Bowcraft';
import Carpentry from './Carpentry';
import Tailoring from './Tailoring';

class Crafting extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   mob: this.props.mob,
    //   player: this.props.store.getState().Player,
    //   combat: this.props.store.getState().Combat
    // };

    // props.store.subscribe(() => {
    //   if (this.state.mounted) {
    //     this.setState({
    //       mob: this.props.store.getState().Mobs.combat || this.props.mob,
    //       player: this.props.store.getState().Player,
    //       combat: this.props.store.getState().Combat
    //     });
    //   }
    // });

  }

  render() {
    let crafting = '';

    switch (this.props.type) {
      case 'blacksmithing':
        crafting = <Blacksmithing store={this.props.store} />;
      break;
      case 'tailoring':
        crafting = <Tailoring store={this.props.store} />;
      break;
    }
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h4>Crafting</h4>
          {crafting}
        </div>
      </div>
    );
  }

}

export default Crafting;
