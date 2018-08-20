import React, { Component } from 'react';
import Mob from './Mob';
import Config from '../Config';
import { MobData } from '../../data/MobData';
import TreasureChest from './TreasureChest';

class Dungeon extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        this.setState({
          player: this.props.store.getState().Player
        });
      }
    });
  }

  calcLevel(step, maxDiff, maxDepth) {
    return Math.round((step * maxDiff) / maxDepth);
  }

// move getmobs to player state update & remove settimeout calls
  getMobs() {
    var mobs = _.where(this.state.mobs, { dungeon: this.state.player.dungeon.step });
    // console.log(42, mobs);
      // mobs = _.filter(mobs, (mob) => {
      //   return mob.hp && mob.hp > 0;
      // });
    if (!mobs || mobs.length === 0) {
      mobs = [];
      var mobList = this.state.mobs;
      let chance = _.random(0, 100);
      let level = this.calcLevel(this.state.player.dungeon.step, this.props.data.difficultyMax, this.props.data.depth);
      level = (level < this.props.data.difficultyMin) ? this.props.data.difficultyMin : level;

      if (chance <= this.props.data.mobChance) {
        console.log('chance', chance, this.props.data.mobChance);
        let potentialMobs = _.where(MobData, { difficulty: level });
        for (var i = 0; i < _.random(0, this.props.data.mobMax); i++) {
          let mob = Config.clone(_.sample(potentialMobs));
          mob.dungeon = this.state.player.dungeon.step;
          setTimeout(() => {
            mobList.push(mob);
            console.log(mobs);
            mobs.push(mob);

            this.setState({
              mobs: mobList
            })
          }, 0);
        }
      } else {
        setTimeout(() => {
          mobList.push({ dungeon: this.state.player.dungeon.step, hp: 0 });

          this.setState({
            mobs: mobList
          })
        }, 0);
      }

    }
    console.log('111',mobs);
    return 'mob';
  }

  getTreasureChest() {
    let chance = _.random(0, 100);

    if (chance <= this.props.data.treasureChance) {
      console.log('treasure!!');
    }
    return <TreasureChest store={this.props.store} level={this.calcLevel(this.state.player.dungeon.step, this.props.data.treasureMax, this.props.data.depth)}/>
  }

  render() {
    let treasure = this.getTreasureChest();
    let mobs = this.getMobs();

    return (
        <div>
          <div className="row">
            <h5 className="col-lg-6 col-md-6 col-sm-6 col-xs-6 bold">
              {this.state.planet.name} - {this.props.data.name} ({this.state.player.dungeon.step}/{this.props.data.depth})
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