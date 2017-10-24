import React, { Component } from 'react';
import Config from '../../Config';
import Crafting from '../crafting';

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };
  }

  getCommerceButtons() {
    let buttons = [];

    if (this.state.data.buy.length > 0) {
      buttons.push(<button key={Config.randomKey('commerce')} className="btn btn-default" id="buy_button">Buy</button>);
    }

    if (this.state.data.sell.length > 0) {
      buttons.push(<button key={Config.randomKey('commerce')} className="btn btn-default" id="sell_button">Sell</button>);
    }

    return buttons;
  }

  getActionButtons() {
    let buttons = [];

    switch (this.state.data.type) {
      case 'store':
      break;
      case 'healer':
      break;
      case 'inn':
        buttons.push(<button key={Config.randomKey('commerce')} className="btn btn-info" >Stay</button>);
      break;
    }

    return buttons;
  }

  render() {
    // let skills = _.map(this.state.skills, (skill, index) => {
    //   return (
    //     <div className="row" key={Config.randomKey('skillModal')}>
    //       <div className="col-lg-6 col-md-6 col-sm-6">{skill.name}</div>
    //       <div className="col-lg-6 col-md-6 col-sm-6">{skill.current.toFixed(1)}</div>
    //     </div>
    //   );
    // });
    console.log(this.state.data);

    let buttons = this.getCommerceButtons().concat(this.getActionButtons());

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
        </div>
      </div>
    );
  }

}

export default Store;
