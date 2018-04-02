import React, { Component } from 'react';
import NavbarRight from './NavbarRight';
import NavItem from './NavItem';
import NavDropdown from './NavDropdown';
import Config from '../../Config';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.keys = {
      town_nav: Config.randomKey('topNavItem'),
      player_nav: Config.randomKey('topNavItem'),
      todo: Config.randomKey('topNavItem'),
      dead: Config.randomKey('topNavItem'),
    };

    this.state = {
      right: { body: this.props.store.getState().User.name },
      player: this.props.store.getState().Player,
      planet: this.props.store.getState().Planet
    };

    this.unsubscribe = props.store.subscribe(() => {
      this.setState({
        right: { body: this.props.store.getState().User.name },
        player: this.props.store.getState().Player,
        planet: this.props.store.getState().Planet
      });
    });
  }

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.unsubscribe();
  }

  showToDos() {
    let todos = [
      <li key={Config.randomKey('li')}>Running from Combat</li>,
      <li key={Config.randomKey('li')}>Aggro Mobs - 0 stamina = no attack</li>,
      <li key={Config.randomKey('li')}>Exceptional Crafting</li>,
      <li key={Config.randomKey('li')}>Magic</li>,
      <li key={Config.randomKey('li')}>Regs</li>,
      <li key={Config.randomKey('li')}>Wandering Mobs</li>,
      <li key={Config.randomKey('li')}>Dungeons as minimaps or single spaces</li>,
      <li key={Config.randomKey('li')}>Work on player effects (including armor/weapons)</li>,
      <li key={Config.randomKey('li')}>Mounts</li>,
      <li key={Config.randomKey('li')}>Oceans & Boats</li>,
      <li key={Config.randomKey('li')}>Space & Planets</li>,
      <li key={Config.randomKey('li')}>Corpses</li>,
      <li key={Config.randomKey('li')}>(Eventually) Dropped items appear on ground</li>,
      <li key={Config.randomKey('li')}>(Eventually) Autogenerated worlds (python job that generates js?)</li>,
      <li key={Config.randomKey('li')}>(Eventually) Consider redoing database</li>,
      <li key={Config.randomKey('li')}>Prevent overwriting db with test data!!!!</li>
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

  showStore(store) {
    Config.modal(this.props.store, '', '', 'store', store);
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

    // Use a static key, or else the dropdown will close during a state change, thanks to an ever-updating key
    let topElems = [
      <NavDropdown title="Player" elems={mainNavElems} key={this.keys.player_nav} id="player_dropdown" />,
      <NavItem href="#" key={this.keys.todo} text="To Do" click={ () => this.showToDos() } />
    ];

    let town = _.findWhere(this.state.planet.towns, { x: this.state.player.x, y: this.state.player.y });

    if (town) {
      let townElems = _.map(town.stores, (store) => {
        return { href: '#', text: store.name, onClick: () => this.showStore(store) };
      });

      // Add before 'To Dos'
      topElems.splice(1, 0, <NavDropdown title={town.name} elems={townElems} key={this.keys.town_nav} id="town_dropdown" />);
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
