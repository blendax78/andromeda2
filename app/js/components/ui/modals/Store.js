import React, { Component } from 'react';
import Config from '../../Config';
import Crafting from '../Crafting';
import Buy from '../Buy';
import Sell from '../Sell';
import {ItemData} from '../../../data/ItemData';
import * as classNames from 'classnames';

class Store extends Component {
  constructor(props) {
    super(props);

    this.keys = {
      buy: Config.randomKey('commerce'),
      sell: Config.randomKey('commerce'),
      bank_deposit: Config.randomKey('commerce'),
      bank_withdraw: Config.randomKey('commerce'),
      inn: Config.randomKey('commerce'),
      healer: Config.randomKey('commerce'),
      blacksmithing: Config.randomKey('commerce'),
      inscription: Config.randomKey('commerce'),
      tailoring: Config.randomKey('commerce'),
      bowcraft: Config.randomKey('commerce'),
      resource: Config.randomKey('commerce'),
      resource2: Config.randomKey('commerce')
    };

    this.state = {
      data: props.data,
      crafting: '',
      sell: false,
      buy: false,
      inventory: this.props.store.getState().Inventory,
      player: this.props.store.getState().Player
    };

    this.mounted = true;

    this.unsubscribe = props.store.subscribe(() => {
      if (this.mounted) {
        this.setState({
          inventory: this.props.store.getState().Inventory,
          player: this.props.store.getState().Player
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.mounted = false;
  }

  setCrafting(type) {
    let new_type = (this.state.crafting !== type) ? type : '';
    this.setState({ crafting: new_type, buy: false, sell: false });
  }

  convertResource(resource) {
    if (!!resource && resource.count > 0 && !!resource.craft && !!resource.craft.conversion) {
      let count = resource.count;
      let new_count = Math.round(count * resource.craft.conversion.count);
      this.props.store.dispatch({
        type: Config.ACTIONS.INVENTORY.ADD,
        payload: {item: resource.craft.conversion.id, count: new_count}
      });

      this.props.store.dispatch({
        type: Config.ACTIONS.INVENTORY.REMOVE,
        payload: {item: resource.id, count: count}
      });

      let new_resource = _.findWhere(ItemData, { id: resource.craft.conversion.id });

      Config.notify(this.props.store, `You processed ${count} ${resource.plural} and received ${new_count} ${new_resource.plural}.`);
    }
  }

  resurrect() {
    let status = this.state.player.status;
    status.dead = false;

    this.props.store.dispatch({
      type: Config.ACTIONS.PLAYER.UPDATE,
      payload: { status: status }
    });

    Config.notifySuccess(this.props.store, 'You have been resurrected.');
  }

  toggleBuy() {
    this.setState({ crafting: '', buy: !this.state.buy, sell: false });
  }

  toggleSell() {
    this.setState({ crafting: '', sell: !this.state.sell, buy: false });
  }

  showTrade() {
    if (this.state.buy) {
      return <Buy store={this.props.store} data={this.state.data} />;
    } else if (this.state.sell) {
      return <Sell store={this.props.store} data={this.state.data} />;
    }

    return '';
  }

  getActionButtons() {
    let buttons = [];

    if (this.state.data.buy.length > 0 &&  !this.state.player.status.dead) {
      buttons.push(<button key={this.keys.buy} onClick={ () => this.toggleBuy() } className="btn btn-primary" id="buy_button">Buy</button>);
    }

    if (this.state.data.sell.length > 0 &&  !this.state.player.status.dead) {
      buttons.push(<button key={this.keys.sell} onClick={ () => this.toggleSell() } className="btn btn-primary" id="sell_button">Sell</button>);
    }

    let disabled = true;
    let processClasses = classNames({
      btn: true,
      'btn-info': true,
      disabled: disabled
    });

    switch (this.state.data.type) {
      case 'store':
        // Nothing.
      break;
      case 'healer':
        disabled = !this.state.player.status.dead;
        processClasses = classNames({
          btn: true,
          'btn-info': true,
          disabled: disabled
        });
        buttons.push(<button key={this.keys.healer} onClick={ () => this.resurrect() } className={processClasses} disabled={disabled}>Resurrect</button>);
      break;
      case 'bank':
        buttons.push(<button key={this.keys.bank_deposit} className="btn btn-info">Deposit</button>);
        buttons.push(<button key={this.keys.bank_withdraw} className="btn btn-info">Withdraw</button>);
      break;
      case 'inn':
        buttons.push(<button key={this.keys.inn} className="btn btn-info">Stay</button>);
      break;
    }

    if (!this.state.player.status.dead) {
      for (let i in this.state.data.craft) {
        switch (this.state.data.craft[i]) {
          case 'blacksmithing':
            buttons.push(<button key={this.keys.blacksmithing} className="btn btn-info"
              onClick={ () => this.setCrafting(this.state.data.craft[i]) }>Blacksmithing</button>);

            let ore = _.findWhere(this.state.inventory.items, { id: 2 });
            disabled = (!ore || ore.count === 0);
            processClasses = classNames({
              btn: true,
              'btn-info': true,
              disabled: disabled
            });

            buttons.push(<button key={this.keys.resource} className={processClasses} disabled={disabled}
              onClick={ () => this.convertResource(ore) }>Smelt Ore</button>);

          break;
          case 'inscription':
            buttons.push(<button key={this.keys.inscription} className="btn btn-info"
              onClick={ () => this.setCrafting(this.state.data.craft[i]) }>Inscription</button>);
          break;
          case 'tailoring':
            buttons.push(<button key={this.keys.tailoring} className="btn btn-info"
              onClick={ () => this.setCrafting(this.state.data.craft[i]) }>Tailoring</button>);

            let wool = _.findWhere(this.state.inventory.items, { id: 5 });
            disabled = (!wool || wool.count === 0);
            processClasses = classNames({
              btn: true,
              'btn-info': true,
              disabled: disabled
            });

            buttons.push(<button key={this.keys.resource} className={processClasses} disabled={disabled}
              onClick={ () => this.convertResource(wool) }>Weave Cloth</button>);

            let leather = _.findWhere(this.state.inventory.items, { id: 27 });
            disabled = (!leather || leather.count === 0);
            processClasses = classNames({
              btn: true,
              'btn-info': true,
              disabled: disabled
            });
            buttons.push(<button key={this.keys.resource2} className={processClasses} disabled={disabled}
              onClick={ () => this.convertResource(leather) }>Cut Leather</button>);
          break;
          case 'bowcraft':
            buttons.push(<button key={this.keys.bowcraft} className="btn btn-info"
              onClick={ () => this.setCrafting(this.state.data.craft[i]) }>Bowcraft</button>);

            let logs = _.findWhere(this.state.inventory.items, { id: 1 });
            disabled = (!logs || logs.count === 0);
            processClasses = classNames({
              btn: true,
              'btn-info': true,
              disabled: disabled
            });

            buttons.push(<button key={this.keys.resource} className={processClasses} disabled={disabled}
              onClick={ () => this.convertResource(logs) }>Cut Wood</button>);
          break;
        }
      }
    }

    return buttons;
  }

  render() {
    let buttons = this.getActionButtons();
    let crafting = (this.state.crafting === '') ? '' : <Crafting type={this.state.crafting} store={this.props.store}/>;
    let trade = this.showTrade();

    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              {this.state.data.description}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="btn-group">
                {buttons}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              {trade}
              {crafting}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Store;
