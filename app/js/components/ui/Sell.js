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
    let description = (item.countable) ? item.name : item.description;

    if (confirm(`Sell ${description} for ${item.value} credits?`)) {
      let credits = this.state.player.credits + (item.value);
      
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
        payload: store.getState().Player
      });
      
      Config.notify(this.props.store, `You sold ${description} for ${item.value} credits.`);
    }
  }

  getSellables() {
    let sellables = [];

    if (this.props.data.sell) {
      _.each(this.props.data.sell, (type) => {
        if (this.state.inventory[type]) {
          // weapons/armor
          _.each(this.state.inventory[type], (match) => {
            if (!match.countable || (match.countable && match.count > 0)) {
              sellables.push(match);
            }
          });
        } else {
          // items (search by sub_type)
          _.each(this.state.inventory.items, (match) => {
            if (match.sub_type === type || match.name === type) {
              if (!match.countable || (match.countable && match.count > 0)) {
                sellables.push(match);
              }
            }
          });
        }
        
      });
    }

    return sellables;
  }

  getSellTable(available) {
    let items = _.map(this.getSellables(), (item) => {
      let description = item.description;
      if (item.countable) {
        description = (item.count > 1) ? `${item.count} ${item.plural}` : `${item.count} ${item.name}`;
      }
      let link = <a href="#" onClick={() => { this.sellItem(item); }}>{description}</a>;

      return (
        <tr key={`sell.${item.id}.${item.key}`}>
          <td>{link}</td>
          <td>{item.value}</td>
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
          <div className="row">
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
