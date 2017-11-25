import React, { Component } from 'react';
import Config from '../Config';
import { ItemData } from '../../data/ItemData';

class Buy extends Component {
  constructor(props) {
    super(props);

    this.value_mult = 2;

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
      buyables = _.map(this.props.data.buy, (id) => {
        return _.findWhere(ItemData, { id: id });
      });
    }

    return buyables;
  }

  buyItem(item) {
    if (confirm(`Buy ${item.description} for ${item.value * this.value_mult} credits?`)) {
      let credits = this.state.player.credits - (item.value * this.value_mult);
      
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
          count: 1
        }
      });
      
      Config.notify(this.props.store, `You bought ${item.description} for ${item.value * this.value_mult} credits.`);
    }
  }

  getBuyTable(available) {
    let items = _.map(this.getBuyables(), (item) => {
      let link = (item.value * this.value_mult <= this.state.player.credits) ? <a href="#" onClick={() => { this.buyItem(item); }}>{item.description}</a> :
        item.description;

      return (
        <tr key={`buy.${item.id}`}>
          <td>{link}</td>
          <td>{item.value * this.value_mult}</td>
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
          <div className="row">
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
