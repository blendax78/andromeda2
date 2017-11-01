import React, { Component } from 'react';
import Config from '../../Config';
import Crafting from '../Crafting';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      crafting: ''
    };
  }

  setCrafting(type) {
    let new_type = (this.state.crafting !== type) ? type : '';
    this.setState({ crafting: new_type });
  }

  getActionButtons() {
    let buttons = [];

    if (this.state.data.buy.length > 0) {
      buttons.push(<button key={Config.randomKey('commerce')} className="btn btn-primary" id="buy_button">Buy</button>);
    }

    if (this.state.data.sell.length > 0) {
      buttons.push(<button key={Config.randomKey('commerce')} className="btn btn-primary" id="sell_button">Sell</button>);
    }

    switch (this.state.data.type) {
      case 'store':
        // Nothing.
      break;
      case 'healer':
      break;
      case 'inn':
        buttons.push(<button key={Config.randomKey('commerce')} className="btn btn-info">Stay</button>);
      break;
    }

    for (let i in this.state.data.craft) {
      switch (this.state.data.craft[i]) {
        case 'blacksmithing':
          buttons.push(<button key={Config.randomKey('commerce')} className="btn btn-info"
            onClick={ () => this.setCrafting(this.state.data.craft[i]) }>Blacksmithing</button>);
        break;
        case 'inscription':
          buttons.push(<button key={Config.randomKey('commerce')} className="btn btn-info"
            onClick={ () => this.setCrafting(this.state.data.craft[i]) }>Inscription</button>);
        break;
        case 'tailoring':
          buttons.push(<button key={Config.randomKey('commerce')} className="btn btn-info"
            onClick={ () => this.setCrafting(this.state.data.craft[i]) }>Tailoring</button>);
        break;
      }
    }

    return buttons;
  }

  render() {
    let buttons = this.getActionButtons();
    let crafting = (this.state.crafting === '') ? '' : <Crafting type={this.state.crafting} store={this.props.store}/>;

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
              {crafting}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default Store;
