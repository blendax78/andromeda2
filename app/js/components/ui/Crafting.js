import React, { Component } from 'react';
import Config from '../Config';
import { ItemData } from '../../data/ItemData';

class Crafting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: this.props.store.getState().Player,
      skills: this.props.store.getState().Skills,
      inventory: this.props.store.getState().Inventory,
    };

    // props.store.subscribe(() => {
    //   if (this.state.mounted) {
    //     this.setState({
    //       mob: this.props.store.getState().Mobs.combat || this.props.mob,
    //       player: this.props.store.getState().Player,
    //       combat: this.props.store.getState().Combat
    //     });
    //   }
    // });

  }

  getAvailableItems(skill_name) {
    let skill_id = this.state.skills[skill_name].id;
    let resources = _.findWhere(this.state.inventory.items, {  });
    let craftable = _.filter(ItemData, (item) => {
      if (!item.craft || !item.craft.resource) {
        return;
      }

      let resource = _.findWhere(this.state.inventory.items, {id: item.craft.resource.id});

      return item.craft.skill.id === skill_id && resource.count >= item.craft.resource.min;
    });

    return craftable;
  }

  craftItem(item) {
    console.log('crafting', item);
  }

  getBlacksmithing(available) {
    // calculate pct chance to craft
    let items = _.map(available, (item) => {
      return (
        <tr key={Config.randomKey('crafting')}>
          <td><a href="#" onClick={() => this.craftItem(item)}>{item.description}</a></td>
          <td>{item.craft.resource.min}</td>
          <td>{item.craft.skill.min}</td>
        </tr>
      );
    });

    return (
      <table className="table table-condensed table-striped col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <thead>
          <tr>
            <th>Item</th>
            <th>Resources</th>
            <th>Skill</th>
          </tr>
        </thead>
        <tbody>
        {items}
        </tbody>
      </table>
    );
  }

  getCraftingType(type) {
    let available = this.getAvailableItems(type);
    let crafting = '';

    if (available.length === 0) {
      crafting = 'Not enough skill or resources.';
    } else {
      switch (type) {
        case 'blacksmithing':
          crafting = this.getBlacksmithing(available);
        break;
        case 'tailoring':
          crafting = 'tailoring';
        break;
      }
    }

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          {crafting}
        </div>
      </div>
    )
  }

  render() {
    let title = Config.upperCase(this.props.type);
    let crafting = this.getCraftingType(this.props.type);

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h4>{title}</h4>
          {crafting}
        </div>
      </div>
    );
  }

}

export default Crafting;
