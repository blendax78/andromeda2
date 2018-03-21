import React, { Component } from 'react';
import Config from '../Config';
import { ItemData } from '../../data/ItemData';

class Crafting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: this.props.store.getState().Player,
      skills: this.props.store.getState().Skills,
      inventory: this.props.store.getState().Inventory
    };

    this.state.resources = this.getResources();

    this.unsubscribe = props.store.subscribe(() => {
      if (this.mounted) {
        this.setState({
          player: this.props.store.getState().Player,
          skills: this.props.store.getState().Skills,
          inventory: this.props.store.getState().Inventory,
          resources: this.getResources()
        });
      }
    });

    this.crafting = false;
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
    this.unsubscribe();
  }

  getResources() {
    let resources = {};

    _.each(_.where(ItemData, { sub_type: 'resource'}), (resource) => {
      resources[resource.id] = Config.clone(resource);
      let inventory = _.findWhere(this.state.inventory.items, { id: resource.id });

      if (inventory) {
        resources[resource.id].count = inventory.count;
      }
    });

    return resources;
  }

  getAvailableItems(skill_name) {
    let skill_id = this.state.skills[skill_name].id;

    this.player_skill = this.state.skills[skill_name];

    let craftable = _.map(_.filter(ItemData, (item) => {
      return item.craft && item.craft.resource && item.craft.skill && item.craft.skill.id === this.player_skill.id &&
        ((this.player_skill.current - item.craft.skill.min) * 2) + 50 >= 0;
    }), (item) => {
      let resource = _.findWhere(this.state.inventory.items, {id: item.craft.resource.id});

      item.craftable = !this.crafting && item.craft.skill.id === skill_id && !!resource && 
        ((item.countable !== true && resource.count >= item.craft.resource.min) || (item.countable === true && resource.count >= item.craft.resource.min * 5));
      return item;
    });

    return _.sortBy(craftable, (item) => {
      return item.craft.skill.min;
    });
  }

  craftItem(item) {
    if ((item.countable === false && this.state.resources[item.craft.resource.id].count >= item.craft.resource.min) ||
      (item.countable === true && this.state.resources[item.craft.resource.id].count >= item.craft.resource.min * 5) ) {
      this.crafting = true;

      this.props.store.dispatch({
        type: Config.ACTIONS.SKILLS.CRAFT,
        payload: { item: item, player_skill: this.player_skill, difficulty: item.craft.skill.min, chance: this.calcChance(item) }
      });

      // Prevent rapid-fire crafting and possibility of negatives
      setTimeout(() => { this.crafting = false; }, 250);
    }
  }

  calcChance(item) {
    let chance = ((this.player_skill.current - item.craft.skill.min) * 2) + 50;
    if (chance > 100) {
      return 100;
    } else if (chance < 0) {
      return 0;
    } else {
      return chance;
    }
  }

  getCraftingTable(type) {
    let available = this.getAvailableItems(type);
    // calculate pct chance to craft
    // pct = 50% at min required skill
    // +2% chance per 1 point in skill
    // pct = ((skill - req_skill) * 2) + 50
    // pct = ((skill - req_skill) * 2) + 50

    let items = _.map(available, (item) => {
      let resource_name = (item.craft.resource.min == 1) ? this.state.resources[item.craft.resource.id].name : this.state.resources[item.craft.resource.id].plural;
      let chance = this.calcChance(item);
      let description = (item.countable) ? `5 ${item.description}` : item.description;
      let craft_link = (item.craftable) ? <a href="#" onClick={() => this.craftItem(item)}>{description}</a> : description;
      let count = (item.countable) ? 5 : 1;
      return (
        <tr key={`crafting.${item.type}.${item.id}`}>
          <td>{craft_link}</td>
          <td>{count * item.craft.resource.min} {resource_name}</td>
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
    let title = Config.upperCase(this.props.type);
    let crafting = this.getCraftingTable(this.props.type);
    let skill = parseFloat(this.player_skill.current).toFixed(1);
    let resources = _.map(this.state.resources, (resource) => {
      if (resource && resource.craft && resource.craft.skill && resource.craft.skill.name === this.props.type) {
        let count = resource.count || 0;
        return (
          <div className="row" key={`resource.${resource.id}`}>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><span className="bold">{Config.upperCase(resource.plural)}:</span> {count}</div>
          </div>
        );
      }
    });

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h4>{title}</h4>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"><span className="bold">Skill:</span> {skill}</div>
          </div>
          {resources}
          {crafting}
        </div>
      </div>
    );
  }

}

export default Crafting;

/*

Exceptional = 1% for every 1% above min skill
Exceptionally crafted Weapons get a 35% Damage Increase bonus as a free Item Property.
An exceptionally made piece of Armor will gain a 15% bonus that is distributed randomly among the base resistances of that item. For example, an exceptionally made Platemail Tunic could have 5% applied to Physical, 6% to Fire, and 2% to each Cold and Poison. Or, and this would be extremely rare, all 15% could be added to Physical.
*/