import React, { Component } from 'react';
import Mob from './Mob';
import Config from '../Config';
import { MobData } from '../../data/MobData';
import TreasureChest from './TreasureChest';

class Dungeon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dungeon: props.store.getState().Player.dungeon,
      combat: props.store.getState().Mobs.combat,
      player: props.store.getState().Player,
      planet: props.store.getState().Planet,
      mobs: [],
      treasure: [],
      descriptions: []
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
        let descriptions = this.state.descriptions;
        if (!descriptions[this.state.dungeon.step]) {
          descriptions[this.state.dungeon.step] = this.getDescription();
        }
        this.checkForMobs();
        this.checkForTreasure();
        this.setState({
          dungeon: this.props.store.getState().Player.dungeon,
          combat: this.props.store.getState().Mobs.combat,
          descriptions: descriptions
        });
      }
    });
  }

  calcLevel(step, maxDiff, maxDepth) {
    return Math.round((step * maxDiff) / maxDepth);
  }

  getDescription() {
    const segments = [
      ['advance carefully','carefully continue','cautiously proceed','continue','move','press','proceed','slowly march','slowly move','tread'],
      ['darkness','depths','expanse','mysteries','secret passages','secrets','shadows'],
      ['a few more passages','a few more rooms and passages','countless passages','dozens of similar rooms and passages','many different passages','many rooms and passages','various different rooms and countless passages','various passages'],
      ['some are dead ends, others lead to who knows where, or what','some have collapsed, others are dead ends or too dangerous to try','most of which are far too ominous looking to try out','most of which have collapsed or were dead ends to begin with','some of them have collapsed, others seem to go on forever','some are dead ends, others seem to have no end at all','each leading to who knows where, or what','most of which probably lead to other depths of this dungeon','most of which look just like the other','they all look so similar, this whole place is a maze','each seem to go on forever, leading to who knows what','some look awfully familiar, others stranger than everything else','each with their own twists, turns and destinations','most lead to nowhere or back to this same path','it\'s one big labyrinth of twists and turns'],
      ['large','small','massive','grand','modest','scant','narrow'],
      ['broken','clammy','crumbling','damp','dank','dark','deteriorated','dusty','filthy','foggy','grimy','humid','putrid','ragged','shady','timeworn','weary','worn'],
      ['ash','bat droppings','broken pottery','broken stone','cobwebs','crawling insects','dead insects','dead vermin','dirt','large bones','moss','puddles of water','rat droppings','remains','roots','rubble','small bones']
    ];

    let random = [];

    segments.forEach(function(segment, index) {
      random.push(segment[parseInt(Math.floor(Math.random() * segment.length))]);
    });

    let description = `You ${random[0]} onwards, deeper into the dungeon's ${random[1]}. You pass ${random[2]}, ${random[3]}.
      Beyond, lies a ${random[4]}, ${random[5]} room. It is covered in ${random[6]}.`

    return description;
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
    var mobList = this.state.mobs;

    if (!mobs || mobs.length === 0) {
      mobs = [];
      
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
    } else {
      // Update mob list from current combat state
      if (!this.state.combat) {
        return;
      }

      let mobIndex = _.findIndex(this.state.mobs, {key: this.state.combat.key});
      if (mobIndex !== -1) {
        mobList[mobIndex] = this.state.combat;
        this.setState({
          mobs: mobList
        });
      }
    }
  }

  checkForTreasure() {
    let chance = _.random(0, 100);
    let treasure = _.findWhere(this.state.treasure, { dungeon: this.state.dungeon.step });
    let treasureList = this.state.treasure;
    if (!treasure) {
      if (chance <= this.props.data.treasureChance) {
        treasureList.push({ dungeon: this.state.dungeon.step, empty: false });
      } else {
        treasureList.push({ dungeon: this.state.dungeon.step, empty: true });
      }

      this.setState({
        treasure: treasureList
      });
    }
  }

  getTreasureChest() {
    let chest = '';
    let treasure = _.findWhere(this.state.treasure, { dungeon: this.state.dungeon.step, empty: false });

    if (treasure) {
      chest = <TreasureChest store={this.props.store} level={this.calcLevel(this.state.dungeon.step, this.props.data.treasureMax, this.props.data.depth)} data={treasure} />;
    }

    return chest;
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
              {this.state.descriptions[this.state.dungeon.step]}
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