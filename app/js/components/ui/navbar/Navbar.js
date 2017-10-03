import React, { Component } from 'react';
import NavbarRight from './NavbarRight';
import NavItem from './NavItem';
import NavDropdown from './NavDropdown';
import Config from '../../Config';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      right: { body: this.props.store.getState().User.user_name },
      player: this.props.store.getState().Player,
      planet: this.props.store.getState().Planet
    };

    props.store.subscribe(() => {
      this.setState({
        right: { body: this.props.store.getState().User.user_name },
        player: this.props.store.getState().Player,
        planet: this.props.store.getState().Planet
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
      <li key={Config.randomKey('li')} className="line-through">Mobs</li>,
      <li key={Config.randomKey('li')}>Towns</li>,
      <li key={Config.randomKey('li')} className="line-through">nav dropdowns are 'blinking'</li>,
      <li key={Config.randomKey('li')} className="line-through">Fix layout of run/hide buttons</li>,
      <li key={Config.randomKey('li')} className="line-through">Move 'engine'</li>,
      <li key={Config.randomKey('li')}>Battles</li>,
      <li key={Config.randomKey('li')}>Equipment - Armor & Weapons</li>,
      <li key={Config.randomKey('li')}>Dungeons</li>,
      <li key={Config.randomKey('li')}>Crafting</li>,
      <li key={Config.randomKey('li')}>Magic</li>,
      <li key={Config.randomKey('li')}>Oceans & Boats</li>,
      <li key={Config.randomKey('li')}>Space & Planets</li>,
      <li key={Config.randomKey('li')}>Corpses</li>,
      <li key={Config.randomKey('li')}>(Eventually) Dropped items appear on ground</li>
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
    let mainNavElems = [
      { href: '#', text: 'Inventory', onClick: () => this.showInventory() },
      { href: '#', text: 'Skills', onClick: () => this.showSkills() },
      { href: '#', text: 'Spell Book', onClick: () => this.showSpells() },
      { href: '#', type: 'divider' },
      { href: '#', text: 'Player Effects', onClick: () => console.log('pe click') },
      { href: '#', text: 'Player Stats', onClick: () => this.showPlayerStats() }
    ];

    let topElems = [
      <NavDropdown title="Player" elems={mainNavElems} key={Config.randomKey('topNavItem')} id="player_dropdown" />,
      <NavItem href="#" key={Config.randomKey('topNavItem')} text="To Do"
        click={ () => this.showToDos() } />
    ];

    let town = _.findWhere(this.state.planet.towns, { x: this.state.player.x, y: this.state.player.y });

    if (town) {
      let townElems = _.map(town.stores, (store) => {
        return { href: '#', text: store.name, onClick: () => this.showSkills() };
      });
      // Add before 'To Dos'
      topElems.splice(1, 0, <NavDropdown title={town.name} elems={townElems} key={Config.randomKey('topNavItem')} id="town_dropdown" />);
    }

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
          {topElems}
          <NavbarRight body={this.state.right.body}/>
        </div>
      </div>
    </nav>
      );
  }

}

export default Navbar;
