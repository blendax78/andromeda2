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

  showToDos() {
    let todos = [
      <li className="line-through">Encumbrance prevents running/walking</li>,
      <li>Towns</li>,
      <li>Mobs</li>,
      <li>Battles</li>,
      <li>Corpses</li>,
      <li>Dungeons</li>,
      <li>Magic</li>
    ];

    Config.modal(this.props.store, <ul>{todos}</ul>, 'To Do List');
  }

  showSkills() {
    Config.skillsModal(this.props.store);
  }

  showSpells() {
    Config.spellBookModal(this.props.store);
  }

  showPlayerStats() {
    Config.playerStatsModal(this.props.store);
  }

  showInventory() {
    Config.inventoryModal(this.props.store);
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
