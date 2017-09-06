import React, { Component } from 'react';
import Config from '../../Config';

class ContainerActions extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: props.data
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p>hi</p>
        </div>
      </div>
    );
  }

}

export default ContainerActions;
