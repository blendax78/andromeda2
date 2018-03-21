import React, { Component } from 'react';
import Config from '../Config';
import { ItemData } from '../../data/ItemData';

class Buy extends Component {
  constructor(props) {
    super(props);

    this.value_mult = 3;

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

  getBuyables() {
    let buyables = [];

    if (this.props.data.buy) {
      let matches = [];
      let hash = {};

      _.each(this.props.data.buy, (type) => {
        // match on these fields
        _.each(['type', 'sub_type', 'name', 'id'], (search) => {
          hash = {};
          hash[search] = type;
          matches = _.where(ItemData, hash);

          if (!!matches && matches.length > 0) {
            _.each(matches, (match) => {
              buyables.push(match);
            });
          }
        });
      
      });
    }

    return _.uniq(_.sortBy(buyables, (buyable) => {
      return buyable.name
    }));
  }

  buyItem(count, description, item) {

    if (confirm(`Buy ${description} for ${item.value * this.value_mult * count} credits?`)) {
      let credits = this.state.player.credits - (item.value * this.value_mult * count);
      
      this.props.store.dispatch({
        type: Config.ACTIONS.PLAYER.UPDATE,
        payload: {
          credits: credits
        }
      });
      
      this.props.store.dispatch({
        type: Config.ACTIONS.INVENTORY.ADD,
        payload: {
          item: item.id,
          count: count
        }
      });

      this.props.store.dispatch({
        type: Config.ACTIONS.PLAYER.SAVE,
        payload: this.state.player
      });
      
      Config.notify(this.props.store, `You bought ${item.description} for ${item.value * this.value_mult} credits.`);
    }
  }

  getBuyTable(available) {
    let items = _.map(this.getBuyables(), (item) => {
      let count = 1;
      let description = item.description;

      if (item.countable) {
        count = 10;
        description = `${count} ${description}`;
      }

      let link = (item.value * this.value_mult * count <= this.state.player.credits) ? <a href="#" onClick={() => { this.buyItem(count, description, item); }}>{description}</a> :
        description;

      return (
        <tr key={`${Config.randomKey('buy')}.buy.${item.id}`}>
          <td>{link}</td>
          <td>{item.value * this.value_mult * count}</td>
        </tr>
      );
    });

    return (
      <table className="table table-condensed table-striped col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <thead>
          <tr>
            <th>Item</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
        {items}
        </tbody>
      </table>
    );
  }

  render() {
    let buy = this.getBuyTable([]);

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><span className="bold">Credits:</span> {this.state.player.credits}</div>
          </div>
          <div className="row scrollable top5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {buy}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Buy;
