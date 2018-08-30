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
      ['A grand','A large','A massive','A minor','A modest','A narrow','A short','A small','A tall','A wide'],
      ['overgrown boulder','granite door','pair of granite doors','broken statue','worn statue','pair of worn statues','boulder','dark cave','murky cave','fallen tree','waterfall','crypt','broken temple','fallen temple','graveyard','fallen tower'],
      ['bog','boulder field','cliff side','forest','grove','marsh','morass','mountain base','mountain range','mountain top','snowland','swamp','thicket','wasteland','woodlands','woods'],
      ['large','small','massive','grand','modest','scanty','narrow'],
      ['broken','clammy','crumbling','damp','dank','dark','deteriorated','dusty','filthy','foggy','grimy','humid','putrid','ragged','shady','timeworn','weary','worn'],
      ['ash','bat droppings','broken pottery','broken stone','cobwebs','crawling insects','dead insects','dead vermin','dirt','large bones','moss','puddles of water','rat droppings','remains','roots','rubble','small bones'],
      ['a broken statue part of a fountain','a broken tomb','a pillaged treasury','an altar','an overgrown underground garden','broken arrows, rusty swords and skeletal remains','broken cages and torture devices','broken mining equipment','broken vats and flasks','carved out openings filled with pottery','cases of explosives and mining equipment','drawings and symbols on the walls','empty chests and broken statues','empty shelves and broken pots','locked chests, vats, crates and pieces of broken wood','prison cells','remnants of a small camp','remnants of sacks, crates and caskets','remnants of statues','remnants of what once must\'ve been a mess hall of sorts','remnants of what was once a decorated room with a now unknown purpose','rows of statues','rows of tombs and several statues','rows of vertical tombs','ruins of what seems to be a crude throne room','the remnants of a pillaged burial chamber','triggered traps and skeletal remains','warped and molten metal remnants','weapons racks and locked crates','what seems like some form of a sacrificial chamber'],
      ['is a single path','are two paths, you take the right','are two paths, but the right is a dead end','are two paths, you take the left','are two paths, but the left is a dead end','are three paths, you take the right','are three paths, you take the left','are three paths, you take the middle'],
      ['downwards','onwards','passed broken and pillaged tombs','passed collapsed rooms and pillaged treasuries','passed countless other pathways','passed countless rooms','passed long lost rooms and tombs','passed lost treasuries, unknown rooms and armories','passed pillaged rooms','passed several empty rooms'],
      ['clammy','crumbled','damp','dank','dark','dusty','filthy','foggy','ghastly','ghostly','grimy','humid','putrid','ragged','shady','timeworn','weary','worn'],
      ['An altar in the center is covered in runes, some of which are glowing','An enormous beastly skeleton is chained to the walls','Countless traps, swinging axes and other devices move all around. They\'re either still active, or just activated','It\'s filled with hanging cages which still hold skeletal remains','It\'s filled with strange glowing crystals and countless dead vermin','It\'s filled with tombs, but their owners are spread across the floor','It\'s filled with tombs, some of which no longer hold their owner','It\'s littered with skeletons, but no weaponry in sight','It\'s packed with boxes full of runes and magical equipment, as well as skeletons','Piles and piles of gold lie in the center, several skeletons lie next to it','Remnants of a makeshift barricade still \'guard\' the group of skeletons behind it','Rows upon rows of shelves are packed with books or remnants of books. In the center sits a single skeleton','Several cages hold skeletal remains of various animals. Next to the cages are odd machines','Several stacks of gunpowder barrels are stacked against a wall. A skeleton holding a torch lies before it','Small holes and carved paths cover the walls, it looks like a community or burrow for small creatures','Spiderwebs cover everything, large figures seem to be wrapped in the same web','The floor is riddled with shredded blue prints and a half finished machine sits in a corner','The room is filled with lifelike statues of terrified people','There are several braziers scattered around, somehow they\'re still burning, or burning again','There\'s a demolished door with a sign that says "don\'t open"','There\'s a huge skeleton in the center, along with dozens of human skeletons','There\'s a pile of skeletons in the center, all burned and black','There\'s a round stone in the center, around it are a dozen skeletons in a circle','There\'s a seemingly endless hole in the center. Around it are what seem like runes','There\'s machinery all over the place, probably part of a workshop of sorts'],
      ['advance carefully','carefully continue','cautiously proceed','continue','move','press','proceed','slowly march','slowly move','tread'],
      ['darkness','depths','expanse','mysteries','secret passages','secrets','shadows'],
      ['a few more passages','a few more rooms and passages','countless passages','dozens of similar rooms and passages','many different passages','many rooms and passages','various different rooms and countless passages','various passages'],
      ['A big','A grand','A huge','A large','A massive','A mysterious','A tall','A thick','A vast','A wide','An enormous','An immense','An ominous'],
      ['wooden','granite','metal'],
      ['some are dead ends, others lead to who knows where, or what','some have collapsed, others are dead ends or too dangerous to try','most of which are far too ominous looking to try out','most of which have collapsed or were dead ends to begin with','some of them have collapsed, others seem to go on forever','some are dead ends, others seem to have no end at all','each leading to who knows where, or what','most of which probably lead to other depths of this dungeon','most of which look just like the other','they all look so similar, this whole place is a maze','each seem to go on forever, leading to who knows what','some look awfully familiar, others stranger everything else','each with their own twists, turns and destinations','most lead to nowhere or back to this same path','it\'s one big labyrinth of twists and turns'],
      ['Ash and soot is','Countless odd symbols are','Countless runes are','Dire warning messages are','Dried blood splatters are','Intricate carvings are','Large claw marks are','Messages in strange languages are','Ominous symbols are','Strange writing is','Various odd symbols are'],
      ['did something just move behind this door?','you\re sure you saw a shadow under the cracks of the door.','did the door just change its appearance?','what was that sound?','you\'re pretty sure you\'re being watched.','was that a growl coming from behind the door?','did somebody just knock on the door?','you hear the faint sound of footsteps behind you.','is that a scratching sound coming from behind the door?','you think you can hear a whisper coming from behind the door.','light\'s coming through the gap below the door.','you hear a loud bang in the distance from which you came.','you hear a faint laugh coming from behind the door.','suddenly the door slowly opens on its own.','something just grabbed your shoulder.'],
      ['bleak','dark','dire','eerie','foggy','gloomy','grim','misty','murky','overcast','shadowy','shady','sinister','somber'],
      ['aged','battered','busted','decayed','demolished','destroyed','deteriorated','forgotten','frayed','long lost','pillaged','tattered','wasted','weathered','worn','worn down'],
      ['absorbed','butchered','claimed','consumed','defaced','desolated','devoured','dismantled','drained','eaten','maimed','mutilated','ravaged','ravished','spoiled','taken','wiped out','wrecked']
    ];

    let random = [];

    segments.forEach(function(segment, index) {
      if (index === 5) {
        random.push(segments[parseInt(Math.floor(Math.random() * segment.length))]);
        random.push(segments[parseInt(Math.floor(Math.random() * segment.length))]);
      }

      random.push(segments[parseInt(Math.floor(Math.random() * segment.length))]);
    });

    let description = `${random[0]} ${random[1]} in a ${random[21]} ${random[2]} marks the entrance to this dungeon. Beyond the ${random[1]} lies a ${random[3]}, ${random[4]} room. It's covered in ${random[5]}, ${random[6]} and ${random[7]}.`;
      // var name = nm1[rnd1] + ' ' + nm2[rnd2] + ' in a ' + nm20[rnd20] + ' ' + nm3[rnd3] + ' marks the entrance to this dungeon. Beyond the ' + nm2[rnd2] + ' lies a ' + nm4[rnd4] + ', ' + nm5[rnd5] + ' room. It\'s covered in ' + nm6[rnd6] + ', ' + nm6[rnd6a] + ' and ' + nm6[rnd6b] + '.';
      // var name2 = 'Your torch allows you to see ' + nm7[rnd7] + ', ' + nm21[rnd21] + ' and ' + nm22[rnd22] + ' by time itself.';
      // 
      // var name3 = 'Further ahead ' + nm8[rnd8] + '. Its twisted trail leads ' + nm9[rnd9] + ' and soon you enter a ' + nm10[rnd10] + ' area. ' + nm11[rnd11] + '. What happened in this place?';
      // 
      // var name4 = 'You ' + nm12[rnd12] + ' onwards, deeper into the dungeon's ' + nm13[rnd13] + '. You pass ' + nm14[rnd14] + ', ' + nm17[rnd17] + '. You eventually make it to what is likely the final room. ' + nm15[rnd15] + ' ' + nm16[rnd16] + ' door blocks your path. ' + nm18[rnd18] + ' all over it, somehow untouched by time and the elements. You step closer to inspect it and.. wait.. ' + nm19[rnd19];
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
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              {this.props.data.description}
            </div>
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