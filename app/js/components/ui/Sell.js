import React, { Component } from 'react';
import Config from '../Config';
import { ItemData } from '../../data/ItemData';

class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: this.props.store.getState().Player,
      inventory: this.props.store.getState().Inventory,
    };

    this.unsubscribe = props.store.subscribe(() => {
      this.setState({
        player: this.props.store.getState().Player,
        inventory: this.props.store.getState().Inventory,
      });
    });

  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  sellItem(item) {
    let description = Config.Item(item).get('description');
    let value = (!!item.exceptional && !!item.exceptional.bonus) ? item.value + Math.round(item.value * (item.exceptional.bonus / 10)) : item.value;
    if (confirm(`Sell ${description} for ${value} credits?`)) {
      let credits = this.state.player.credits + value;
      
      this.props.store.dispatch({
        type: Config.ACTIONS.PLAYER.UPDATE,
        payload: {
          credits: credits
        }
      });
      
      this.props.store.dispatch({
        type: Config.ACTIONS.INVENTORY.REMOVE,
        payload: {
          item: item.id,
          key: item.key,
          count: 1
        }
      });

      this.props.store.dispatch({
        type: Config.ACTIONS.PLAYER.SAVE,
        payload: this.state.player
      });
      
      Config.notify(this.props.store, `You sold ${description} for ${value} credits.`);
    }
  }

  getSellables() {
    let sellables = [];

    if (this.props.data.sell) {
      let matches = [];
      let hash = {};

      _.each(this.props.data.sell, (type) => {
        let inventory_types = ['armor', 'weapons', 'items'];
        _.each(inventory_types, (inventory_type) => {
          // match on these fields
          _.each(['type', 'sub_type', 'name', 'id'], (search) => {
            hash = {};
            hash[search] = type;
            matches = _.where(this.state.inventory[inventory_type], hash);

            if (!!matches && matches.length > 0) {
              _.each(matches, (match) => {
                if (match.countable === false || (match.countable === true && match.count > 0) ) {
                  sellables.push(match);
                }
              });
            }
          });

        });
        
      });
    }

    return _.sortBy(sellables, (sellable) => {
      return sellable.name
    });
  }

  getSellTable(available) {
    let items = _.map(this.getSellables(), (item) => {
      let equipped = (!!item.equip && item.equip.equipped === true) ? <span title="Equipped" className="glyphicon glyphicon-ok-sign"></span> : '';
      let description = Config.Item(item).get('description');
      let link = <a href="#" onClick={() => { this.sellItem(item); }}>{description} {equipped}</a>;
      let value = (!!item.exceptional && !!item.exceptional.bonus) ? item.value + Math.round(item.value * (item.exceptional.bonus / 10)) : item.value;

      return (
        <tr key={`sell.${item.id}.${item.key}`}>
          <td>{link}</td>
          <td>{value}</td>
        </tr>
      );
    });

    return (
      <table className="table table-condensed table-striped col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <thead>
          <tr>
            <th>Item</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
        {items}
        </tbody>
      </table>
    );
  }

  render() {
    let sell = this.getSellTable([]);

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><span className="bold">Credits:</span> {this.state.player.credits}</div>
          </div>
          <div className="row scrollable top5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {sell}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Sell;
