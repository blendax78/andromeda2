import React, { Component } from 'react';
import Config from '../../Config';

class Bowcraft extends Component {
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
    return (
      <div>
        craft!
      </div>
    );
  }

}

export default Bowcraft;
