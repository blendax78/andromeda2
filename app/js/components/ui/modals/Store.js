import React, { Component } from 'react';
import Config from '../../Config';
import Crafting from '../Crafting';
import Buy from '../Buy';
import Sell from '../Sell';

class Store extends Component {
  constructor(props) {
    super(props);

    this.keys = {
      buy: Config.randomKey('commerce'),
      sell: Config.randomKey('commerce'),
      inn: Config.randomKey('commerce'),
      healer: Config.randomKey('commerce'),
      blacksmithing: Config.randomKey('commerce'),
      inscription: Config.randomKey('commerce'),
      tailoring: Config.randomKey('commerce')
    };

    this.state = {
      data: props.data,
      crafting: '',
      sell: false,
      buy: false
    };
  }

  setCrafting(type) {
    let new_type = (this.state.crafting !== type) ? type : '';
    this.setState({ crafting: new_type, buy: false, sell: false });
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

    if (this.state.data.buy.length > 0) {
      buttons.push(<button key={this.keys.buy} onClick={ () => this.toggleBuy() } className="btn btn-primary" id="buy_button">Buy</button>);
    }

    if (this.state.data.sell.length > 0) {
      buttons.push(<button key={this.keys.sell} onClick={ () => this.toggleSell() } className="btn btn-primary" id="sell_button">Sell</button>);
    }

    switch (this.state.data.type) {
      case 'store':
        // Nothing.
      break;
      case 'healer':
      break;
      case 'inn':
        buttons.push(<button key={this.keys.inn} className="btn btn-info">Stay</button>);
      break;
    }

    for (let i in this.state.data.craft) {
      switch (this.state.data.craft[i]) {
        case 'blacksmithing':
          buttons.push(<button key={this.keys.blacksmithing} className="btn btn-info"
            onClick={ () => this.setCrafting(this.state.data.craft[i]) }>Blacksmithing</button>);
        break;
        case 'inscription':
          buttons.push(<button key={this.keys.inscription} className="btn btn-info"
            onClick={ () => this.setCrafting(this.state.data.craft[i]) }>Inscription</button>);
        break;
        case 'tailoring':
          buttons.push(<button key={this.keys.tailoring} className="btn btn-info"
            onClick={ () => this.setCrafting(this.state.data.craft[i]) }>Tailoring</button>);
        break;
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
