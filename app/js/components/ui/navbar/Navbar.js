import React, { Component } from 'react';
import NavbarRight from './NavbarRight';
import NavItem from './NavItem';
import NavDropdown from './NavDropdown';
import Config from '../../Config';

class Navbar extends Component {
  constructor(props) {
    super(props);

    let mainNavElems = [
      { href: '#', text: 'Inventory', onClick: () => this.showInventory() },
      { href: '#', text: 'Skills', onClick: () => this.showSkills() },
      { href: '#', text: 'Spell Book', onClick: () => this.showSpells() },
      { href: '#', type: 'divider' },
      { href: '#', text: 'Player Effects', onClick: () => console.log('pe click') },
      { href: '#', text: 'Player Stats', onClick: () => this.showPlayerStats() }
    ];

    let topElems = [
      <NavDropdown title="Player" elems={mainNavElems} key={Config.randomKey('topNavItem')}/>,
      <NavItem href="#" key={Config.randomKey('topNavItem')} text="To Do"
        click={ () => this.showToDos() } />
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

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.props.store.unsubscribe();
  }

  showToDos() {
    let todos = [
      <li key={Config.randomKey('li')} className="line-through">Encumbrance prevents running/walking</li>,
      <li key={Config.randomKey('li')}>Mobs</li>,
      <li key={Config.randomKey('li')}>Towns</li>,
      <li key={Config.randomKey('li')}>Battles</li>,
      <li key={Config.randomKey('li')}>Corpses</li>,
      <li key={Config.randomKey('li')}>Dungeons</li>,
      <li key={Config.randomKey('li')}>Crafting</li>,
      <li key={Config.randomKey('li')}>Magic</li>,
      <li key={Config.randomKey('li')}>Oceans & Boats</li>
    ];

    Config.modal(this.props.store, <ul>{todos}</ul>, 'To Do List');
  }

  showSkills() {
    Config.modal(this.props.store, '', '', 'skills');
  }

  showSpells() {
    Config.modal(this.props.store, '', '', 'spells');
  }

  showPlayerStats() {
    Config.modal(this.props.store, '', '', 'player_stats');
  }

  showInventory() {
    Config.modal(this.props.store, '', '', 'inventory');
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