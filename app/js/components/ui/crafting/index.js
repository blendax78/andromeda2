import React, { Component } from 'react';
import Config from '../../Config';
import Blacksmithing from './Blacksmithing';
import Bowcraft from './Bowcraft';
import Carpentry from './Carpentry';
import Tailoring from './Tailoring';
import { ItemData } from '../../../data/ItemData';

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
    console.log(this.state.inventory);

    let craftable = _.filter(ItemData, (item) => {
      if (!item.craft || !item.craft.resource) {
        return;
      }

      let resource = _.findWhere(this.state.inventory.items, {id: item.craft.resource.id});

      return item.craft.skill === skill_id && resource.count >= item.craft.resource.min;
    });

    return craftable;
  }

  getCraftingType(type) {
    let available = this.getAvailableItems(type);
    let crafting = '';

    if (available.length === 0) {
      crafting = 'Not enough skill or resources.';
    } else {
      switch (type) {
        case 'blacksmithing':
          crafting = <Blacksmithing store={this.props.store} items={available} />;//remove crafting subtypes
        break;
        case 'tailoring':
          crafting = <Tailoring store={this.props.store} items={available}/>;
        break;
      }
    }

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          {crafting}
        </div>
      </div>
    )
  }

  render() {
    let crafting = this.getCraftingType(this.props.type);
    let title = Config.upperCase(this.props.type);
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h4>{title}</h4>
          {crafting}
        </div>
      </div>
    );
  }

}

export default Crafting;
