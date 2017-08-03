import React, { Component } from 'react';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Andromeda</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="dropdown" id="">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Accounts <b className="caret"></b></a>
              <ul className="dropdown-menu" >
                <li>
                  <a className="refresh" href="#">SB - Traditional IRA</a>
                </li>
                <li>
                  <a className="refresh" href="#">SB - ROTH IRA</a>
                </li>
                <li>
                  <a className="refresh" href="#">Fidelity - IRA</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav"><li><a href="#">hi</a></li></ul>
          <ul className="nav navbar-nav">
            <li className="dropdown" id="">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Options <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li className="options">
                  <form role="form">
                    <div className="form-group">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" id="auto_update" /> Auto Update
                        </label>
                      </div>
                    </div>
                  </form>
                </li>
                <li className="divider"></li>
                <li>
                  <a className="refresh" href="#">Refresh</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="navbar-right">
            <p className="navbar-text pull-right">
                  User
            </p>
          </div>
        </div>
      </div>
    </nav>
      );
  }

}

export default Navbar;
