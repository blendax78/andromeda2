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

    // props.store.subscribe(() => {
    //   this.setState({
    //     player: this.props.store.getState().Player,
    //     inventory: this.props.store.getState().Inventory,
    //   });
    // });

  }

  getSellables() {
console.log(this.props.data);
    return [];
  }

  getSellTable(available) {
    let items = _.map(this.getSellables(), (item) => {

      return (
        <tr key={`crafting.${item.type}.${item.id}`}>
          <td><a href="#" onClick={() => this.craftItem(item)}>{item.description}</a></td>
          <td>{item.craft.resource.min} {resource_name}</td>
          <td>{item.craft.skill.min} ({chance.toFixed(1)}%)</td>
        </tr>
      );
    });

    return (
      <table className="table table-condensed table-striped col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <thead>
          <tr>
            <th>Item</th>
            <th>Resources</th>
            <th>Skill Required</th>
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
