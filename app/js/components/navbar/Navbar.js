import React, { Component } from 'react';
import NavbarRight from './NavbarRight';
import NavItem from './NavItem';
import NavDropdown from './NavDropdown';
import Config from '../Config';

class Navbar extends Component {
  constructor(props) {
    super(props);

    let mainNavElems = [
      { href: '#', text: 'link', onClick: () => console.log('nav click') },
      { href: '#', text: 'link', onClick: () => console.log('nav click') },
      { href: '#', text: 'link' }
    ];

    let topElems = [
      <NavDropdown title="Main Nav" elems={mainNavElems} key={Config.randomKey('topNavItem')}/>,
      <NavItem href="#" key={Config.randomKey('topNavItem')} text="Item" />
    ];

    this.state = {
      elems: topElems,
      right: { body: this.props.store.getState().User.user_name }
    };

    props.store.subscribe(() => {
      this.setState({
        right: { body: this.props.store.getState().User.user_name }
      });
    });
  }

  render() {


    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">{this.props.name}</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          {this.state.elems}
          <NavbarRight body={this.state.right.body}/>
        </div>
      </div>
    </nav>
      );
  }

}

export default Navbar;
