import React, { Component } from 'react';
import Config from '../Config';

class BottomPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: props.store.getState().Messages
    };

    this.unsubscribe = props.store.subscribe(() => {
      this.setState({
        messages: this.props.store.getState().Messages
      });
    });
  }

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.unsubscribe();
  }

  render() {
    let messageList = $.map(this.state.messages, (message, index) => {
      let style = { color: message.color };
      return (
        <div className="row" key={`message.${message.id}`}>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <span className="bold">{message.created}</span>:
            <span className="messageBody" style={style}>{message.body}</span>
          </div>
        </div>
      );
    });

    return (
      <div className="nav-panel table-bordered bottom-panel col-lg-12 col-md-12 col-sm-12">
        {messageList}
      </div>
    );
  }

}

export default BottomPanel;
