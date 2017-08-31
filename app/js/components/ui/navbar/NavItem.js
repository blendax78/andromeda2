import React, { Component } from 'react';

class NavItem extends Component {
  constructor(props) {
    super(props);

    // this.handleOnClick = this.handleOnClick.bind(this);
  }

  defaultClick(e) {
    e.preventDefault();
    console.log('click');
  }

  handleOnClick(e) {
    e.preventDefault();

    if (this.props.click) {
      this.props.click(e);
    } else {
      this.defaultClick(e);
    }
  }

  render() {
    return (
      <ul className="nav navbar-nav">
        <li><a href={this.props.href} onClick={ (e) => this.handleOnClick(e) }>{this.props.text}</a></li>
      </ul>
    );
  }

}

export default NavItem;
