import React, { Component } from 'react';
import Config from '../Config';

class NavItem extends Component {
  constructor(props) {
    super(props);

    this.Config = new Config();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  defaultClick(e) {
    console.log('click');
  }

  handleOnClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    } else {
      this.defaultClick(e);
    }
  }

  render() {
    return (
      <ul className="nav navbar-nav">
        <li><a href={this.props.href} onClick={this.handleOnClick}>{this.props.text}</a></li>
      </ul>
    );
  }

}

export default NavItem;
