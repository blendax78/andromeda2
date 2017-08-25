import React, { Component } from 'react';
import Config from '../Config';

class Decoration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.props.data
    };

    // props.store.subscribe(() => {
    //   this.setState({
        // planet: this.props.store.getState().Planet,
        // player: this.props.store.getState().Player
    //   });
    // });
  }

  handleClick(e) {
    e.preventDefault();
    let decoration = this.state.data;
    if (!decoration.action) {
      return false;
    }

    if (decoration.action.current > 0) {
      this.props.store.dispatch({ type: Config.ACTIONS.MESSAGES.ADD, payload: { body: decoration.action.message } });
      this.props.store.dispatch({ type: decoration.action.skill, payload: { action: decoration.action } });

      decoration.action.current--;
      this.setState({ data: decoration });
    } else {
      this.props.store.dispatch({ type: Config.ACTIONS.MESSAGES.ADD, payload: { body: decoration.action.maxMessage } });
    }
  }

  render() {
    let decoration = this.state.data;

    return (
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-10">
          <a href="#" onClick={(e) => this.handleClick(e)}>{decoration.description}</a>
        </div>
      </div>
    );
  }

}

export default Decoration;
