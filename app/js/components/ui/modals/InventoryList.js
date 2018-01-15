import React, { Component } from 'react';
import Config from '../../Config';
import * as classNames from 'classnames';

class InventoryList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inventory: props.store.getState().Inventory
    };

    this.unsubscribe = props.store.subscribe(() => {
      if (this.mounted) {
        this.setState({
          inventory: this.props.store.getState().Inventory,
        });
      }
    });
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
    this.unsubscribe();
  }

  clickDrop(item) {
    if (confirm('Are you sure you want to drop this?')) {
      this.props.store.dispatch({ type: Config.ACTIONS.INVENTORY.REMOVE, payload: {item: item.id, key: item.key, count: 1}});
      this.props.store.dispatch({ type: Config.ACTIONS.PLAYER.UPDATE, payload: {}});
    }
  }

  toggleEquip(item) {
    let type = (item.equip.equipped === true) ? Config.ACTIONS.INVENTORY.UNEQUIP : Config.ACTIONS.INVENTORY.EQUIP;

    this.props.store.dispatch({ type: type, payload: { item: item.id, key: item.key }});
  }

  organizeItems(items) {
    // might break this into different functions: organizeWeapons(), organizeItems(), organizeArmor()
    // return <div> element from a separate function
    return _.filter(items, (inventory) => {
      return (inventory.countable === true && inventory.count > 0) || inventory.countable === false;
    }).map((inventory, index) => {
      let name = inventory.description;

      if (inventory.countable === true) {
        name = inventory.count.toString() + ' ';
        name += (inventory.count === 1) ? inventory.name : inventory.plural;
      }

      let classEquip = classNames({
        glyphicon: true,
        clickable: true,
        'glyphicon-ok-sign': (!!inventory.equip && inventory.equip.equipped === true),
        'glyphicon-ok-circle': (!!inventory.equip && inventory.equip.equipped !== true)
      });

      return (
        <div className="row" key={`inventoryItem.${inventory.type}.${inventory.key || inventory.id}`}>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{name}</div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className={classEquip} onClick={() => { this.toggleEquip(inventory); } } data-id="data"></span>
            <span className="glyphicon glyphicon-trash clickable" title="Drop" onClick={() => { this.clickDrop(inventory); } } data-id="data"></span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>
        </div>
      );
    });
  }

  getEquipped() {
    let weapons = _.filter(this.state.inventory.weapons, (weapon) => {
      return !!weapon.equip && !!weapon.equip.equipped && weapon.equip.equipped !== false;
    });

    let armor = _.filter(this.state.inventory.armor, (armor) => {
      return !!armor.equip && !!armor.equip.equipped && armor.equip.equipped !== false;
    });

    let equipped = _.map(_.union(weapons, armor), (item) => {
      return (
        <div className="row" key={`equippedItem.${item.type}.${item.key || item.id}`}>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{item.description}</div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{item.equip.location}</div>
        </div>
      );
    });

    return (
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <h5 className="bold">Equipped</h5>
        {equipped}
      </div>
    );
  }

  render() {
    // Filter out anything that's 0
    let inventoryItems = this.organizeItems(this.state.inventory.items);
    let inventoryArmor = this.organizeItems(this.state.inventory.armor);
    let inventoryWeapons = this.organizeItems(this.state.inventory.weapons);
    let equipped = this.getEquipped();
    
    return (
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          <h5 className="bold">Weapons</h5>
          {inventoryWeapons}
          <h5 className="bold">Armor</h5>
          {inventoryArmor}
          <h5 className="bold">Items</h5>
          {inventoryItems}
        </div>
        {equipped}
      </div>
    );
  }

}

export default InventoryList;
