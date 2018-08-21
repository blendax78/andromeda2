import React, { Component } from 'react';
import Mob from './Mob';
import Config from '../Config';
import { MobData } from '../../data/MobData';
import TreasureChest from './TreasureChest';

class Dungeon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dungeon: this.props.store.getState().Player.dungeon,
      player: props.store.getState().Player,
      planet: props.store.getState().Planet,
      mobs: [],
      treasure: []
    };
  }

  componentWillUnmount() {
    // Make sure to unsubscribe!
    this.mounted = false;
    this.unsubscribe();
  }

  componentDidMount() {
    this.mounted = true;
    this.unsubscribe = this.props.store.subscribe(() => {
      if (this.mounted) {
        this.checkForMobs();
        this.setState({
          dungeon: this.props.store.getState().Player.dungeon
        });
      }
    });
  }

  calcLevel(step, maxDiff, maxDepth) {
    return Math.round((step * maxDiff) / maxDepth);
  }

  getMobs() {
    let mobs = _.where(this.state.mobs, { dungeon: this.state.dungeon.step });
    return _.filter(mobs, (mob) => {
      return mob.hp > 0;
    }).map((mob) => {
      return <Mob store={this.props.store} data={mob} key={Config.randomKey('dungeonMob')} />
    });
  }

  checkForMobs() {
    // Checks if there are any mobs in current location.
    var mobs = _.where(this.state.mobs, { dungeon: this.state.dungeon.step });

    if (!mobs || mobs.length === 0) {
      mobs = [];
      var mobList = this.state.mobs;
      let chance = _.random(0, 100);
      let level = this.calcLevel(this.state.dungeon.step, this.props.data.difficultyMax, this.props.data.depth);
      level = (level < this.props.data.difficultyMin) ? this.props.data.difficultyMin : level;

      if (chance <= this.props.data.mobChance) {
        let potentialMobs = _.where(MobData, { difficulty: level, aggro: true });
        for (var i = 0; i < _.random(0, this.props.data.mobMax); i++) {
          let mob = Config.clone(_.sample(potentialMobs));
          mob.dungeon = this.state.dungeon.step;
          mob.key = Config.randomKey('dungeonMob');
          mobList.push(mob);
          mobs.push(mob);
          console.log(mob);
          this.props.store.dispatch({
            type: Config.ACTIONS.MOBS.CREATE,
            payload: {mob: mob}
          });

          this.setState({
            mobs: mobList
          })
        }
      } else {
        mobList.push({ dungeon: this.state.dungeon.step, hp: 0 });

        this.setState({
          mobs: mobList
        });
      }
    }
  }

  getTreasureChest() {
    let chance = _.random(0, 100);
    let treasure = '';

    if (chance <= this.props.data.treasureChance) {
      treasure = <TreasureChest store={this.props.store} level={this.calcLevel(this.state.dungeon.step, this.props.data.treasureMax, this.props.data.depth)}/>;
    }
    return treasure;
  }

  render() {
    let treasure = this.getTreasureChest();
    let mobs = this.getMobs();

    return (
        <div>
          <div className="row">
            <h5 className="col-lg-6 col-md-6 col-sm-6 col-xs-6 bold">
              {this.state.planet.name} - {this.props.data.name} ({this.state.dungeon.step}/{this.props.data.depth})
            </h5>
          </div>
          <div className="row bottom5">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {this.props.data.description}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {treasure}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {mobs}
            </div>
          </div>
        </div>

    );
  }
}

export default Dungeon;