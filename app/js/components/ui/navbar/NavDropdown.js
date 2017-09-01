import React, { Component } from 'react';
import Config from '../../Config';

class NavDropdown extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let _this = this;
    let liElems = $.map(this.props.elems, function(li, index) {

      if (li.type && li.type === 'divider') {
        return (
          <li key={Config.randomKey('NavDropdownItem')} role="separator" className="divider"></li>
        );
      } else {
        return (
          <li key={Config.randomKey('NavDropdownItem')}>
            <a href={li.href} onClick={li.onClick}>{li.text}</a>
          </li>
        );
      }
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
