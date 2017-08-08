import React, { Component } from 'react';
import Config from '../Config';

class NavDropdown extends Component {
  constructor(props) {
    super(props);
    this.Config = new Config();
  }

  render() {
    let _this = this;
    let liElems = $.map(this.props.elems, function(li, index) {
      return (
        <li key={_this.Config.randomKey('NavDropdownItem')}>
          <a href={li.href} onClick={li.onClick}>{li.text}</a>
        </li>
      );
    });

    return (
      <ul className="nav navbar-nav">
        <li className="dropdown" id="">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">{this.props.title} <b className="caret"></b></a>
          <ul className="dropdown-menu" >
            {liElems}
          </ul>
        </li>
      </ul>
    );
  }

}

export default NavDropdown;
