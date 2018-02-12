import React, { Component } from 'react';
import Config from '../Config';
import MessageList from './MessageList';

class BottomPanel extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="nav-panel table-bordered bottom-panel col-lg-12 col-md-12 col-sm-12 top5">
        <MessageList store={this.props.store} />
      </div>
    );
  }

}

export default BottomPanel;
