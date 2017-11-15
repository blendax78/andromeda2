import React, { Component } from 'react';
import Config from '../../Config';

class InventoryList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inventory: props.store.getState().Inventory
    };
  }

  clickDrop(item) {
    if (confirm('Are you sure you want to drop this?')) {
      this.props.store.dispatch({ type: Config.ACTIONS.INVENTORY.REMOVE, payload: {item: item.id, count: 1}});
      this.props.store.dispatch({ type: Config.ACTIONS.PLAYER.UPDATE, payload: {}});
    }
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
        <div className="row" key={`inventoryItem.${inventory.type}.${inventory.id}`}>
          <div className="col-lg-4 col-md-4 col-sm-4">{name}</div>
          <div className="col-lg-4 col-md-4 col-sm-4">
            <span className="glyphicon glyphicon-trash clickable" onClick={() => { this.clickDrop(inventory); } } data-id="data"></span>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4"></div>
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
