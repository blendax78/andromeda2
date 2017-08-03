import React, { Component } from 'react';

class NavbarRight extends Component {
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