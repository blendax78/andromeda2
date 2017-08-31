import React, { Component } from 'react';

class NavbarRight extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="navbar-right">
            <p className="navbar-text pull-right">
                {this.props.body}
            </p>
          </div>
        );
    }
}

export default NavbarRight;