import React, { Component } from 'react';
import Config from '../../Config';
import * as classNames from 'classnames';

class InventoryList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inventory: props.store.getState().Inventory,
      player: props.store.getState().Player,
      bank: props.store.getState().Bank
    };

    this.unsubscribe = props.store.subscribe(() => {
      if (this.mounted) {
        this.setState({
          inventory: this.props.store.getState().Inventory,
          player: props.store.getState().Player,
          bank: props.store.getState().Bank
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
        'glyphicon-ok-sign': (!!inventory.equip && inventory.equip.equipped === true && (!!inventory.weapon || !!inventory.armor)),
        'glyphicon-ok-circle': (!!inventory.equip && inventory.equip.equipped !== true && (!!inventory.weapon || !!inventory.armor))
      });

      let bank = '';
      if (this.props.bank === true) {
        bank = <span className="glyphicon glyphicon-circle-arrow-right clickable" title="Deposit" onClick={() => { this.deposit(inventory) }}></span>;
      }

      return (
        <div className="row" key={`inventoryItem.${inventory.type}.${inventory.key || inventory.id}`}>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{name}</div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            {bank}
            <span className={classEquip} onClick={() => { this.toggleEquip(inventory); } } data-id="data" title="Equip/Unequip"></span>
            <span className="glyphicon glyphicon-trash clickable" title="Drop" onClick={() => { this.clickDrop(inventory); } } data-id="data"></span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>
        </div>
      );
    });
  }

  calculateItemCount(item) {
    let count = 1;

    if (item.countable && item.count > 100) {
      count = 25;
    } else if (item.countable && item.count > 50) {
      count = 10;
    } else if (item.countable && item.count > 10) {
      count = 5
    }

    return count;
  }

  deposit(item = undefined) {
    if (!!item) {
      let count = this.calculateItemCount(item);

      this.props.store.dispatch({ type: Config.ACTIONS.BANK.DEPOSIT, payload: {item: item, count: count}});
      this.props.store.dispatch({ type: Config.ACTIONS.INVENTORY.REMOVE, payload: {item: item.id, key: item.key, count: count}});
    } else {
      let credits = (this.state.player.credits > 1000) ? 1000 : this.state.player.credits;
      this.props.store.dispatch({ type: Config.ACTIONS.BANK.DEPOSIT, payload: {credits: credits}});
      this.state.player.credits -= credits;
    }
  }

  withdraw(item = undefined) {
    if (!!item) {
      let count = this.calculateItemCount(item);
      this.props.store.dispatch({ type: Config.ACTIONS.BANK.WITHDRAW, payload: {item: item, count: count}});
      this.props.store.dispatch({ type: Config.ACTIONS.INVENTORY.ADD, payload: {item: item.id, key: item.key, count: count}});
    } else {
      let credits = (this.state.bank.credits > 1000) ? 1000 : this.state.bank.credits;
      this.props.store.dispatch({ type: Config.ACTIONS.BANK.WITHDRAW, payload: {credits: credits}});
      this.state.player.credits += credits;
    }
  }

  getBank() {
    let name = '';
    let items = _.filter(this.state.bank.items, (item) => {
      return (item.countable === false || 
        (item.countable === true && item.count > 0));
    });

    let bank = _.map(items, (item) => {
      if (item.countable === true) {
        name = item.count.toString() + ' ';
        name += (item.count === 1) ? item.name : item.plural;
      } else {
        name = item.description;
      }

      return (
        <div className="row" key={`equippedItem.${item.type}.${item.key || item.id}`}>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">{name}</div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="glyphicon glyphicon-circle-arrow-left clickable" title="Withdraw" onClick={() => { this.withdraw(item) }}></span>
          </div>
        </div>
      );
    });

    return (
      <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
        <h5 className="bold">Deposited</h5>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6"><span className="bold">Credits:</span> {this.state.bank.credits}</div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="glyphicon glyphicon-circle-arrow-left clickable" title="Withdraw Credits" onClick={() => { this.withdraw() }}></span>
          </div>
        </div>
        <div className="row">
          <div className="bold col-lg-12 col-md-12 col-sm-12 col-xs-12">Items</div>
        </div>
        {bank}
      </div>
    );
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
    let rightPanel = '';
    let leftPanel = '';

    if (this.props.bank !== true) {
      rightPanel = this.getEquipped();
    } else {
      rightPanel = this.getBank();
      leftPanel = (
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6"><span className="bold">Credits:</span> {this.state.player.credits}</div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="glyphicon glyphicon-circle-arrow-right clickable" title="Deposit Credits" onClick={() => { this.deposit() }}></span>
          </div>
        </div>
      );
    }



    return (
      <div className="row">
        <div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <span className="bold">Encumbrance: </span>
            <span className="blue">{this.state.player.encumbrance}</span>/{this.state.player.maxencumbrance}
          </div>
        </div>
        <div className="">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h5 className="bold">Inventory</h5>
            {leftPanel}
            <h5 className="bold">Weapons</h5>
            {inventoryWeapons}
            <h5 className="bold">Armor</h5>
            {inventoryArmor}
            <h5 className="bold">Items</h5>
            {inventoryItems}
          </div>
          {rightPanel}
        </div>
      </div>
    );
  }

}

export default InventoryList;
