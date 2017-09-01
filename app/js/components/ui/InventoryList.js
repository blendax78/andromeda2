import React, { Component } from 'react';
import Config from '../Config';

class InventoryList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inventory: props.store.getState().Inventory
    };
  }

  organizeItems(items) {
    // might break this into different functions: organizeWeapons(), organizeItems(), organizeArmor()
    // return <div> element from a separate function
    return _.filter(items, (inventory) => {
      return (inventory.countable === true && inventory.count > 0) || inventory.countable === false;
    }).map((inventory, index) => {
      let name = inventory.name;

      if (inventory.countable === true) {
        name = inventory.count.toString() + ' ';
        name += (inventory.count === 1) ? inventory.name : inventory.plural;
      }

      return (
        <div className="row" key={Config.randomKey('inventoryItem')}>
          <div className="col-lg-12 col-md-12 col-sm-12">{name}</div>
        </div>
      );
    });
  }

  render() {
    // Filter out anything that's 0
    let inventoryItems = this.organizeItems(this.state.inventory.items);
    let inventoryArmor = this.organizeItems(this.state.inventory.armor);
    let inventoryWeapons = this.organizeItems(this.state.inventory.weapons);
    
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h5 className="bold">Weapons</h5>
          {inventoryWeapons}
          <h5 className="bold">Armor</h5>
          {inventoryArmor}
          <h5 className="bold">Items</h5>
          {inventoryItems}
        </div>
      </div>
    );
  }

}

export default InventoryList;
