import React, { Component } from 'react';
import { connect } from 'react-redux';
import f from './function.js';
import { Link } from 'react-router-dom'
import './style.css'

class NavBar extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">MasterCoin</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://github.com/Ahsan-J/MasterCoin">Git</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(NavBar);
