import React, { Component } from 'react';
import Config from '../../Config';

class Container extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      treasure: props.data,
      player: this.props.store.getState().Player
    };
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    this.unsubscribe = this.props.store.subscribe(() => {
      if (this.mounted) {
        let treasure = _.findWhere(
          this.props.store.getState().App.containers,
          { key: this.props.data.key });

        this.setState({
          treasure: treasure || {},
          player: this.props.store.getState().Player
        });
      }
    });
  }

  render() {
    console.log(this.state.treasure);
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <p>{this.state.treasure.credits}</p>
        </div>
      </div>
    );
  }

}

export default Container;
