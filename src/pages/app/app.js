import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css';
import f from './function.js'
import NavBar from '../../component/NavBar/NavBar.js'
import Contract from '../../helper/Web3Config.js';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRaised: null
    }
    this.componentDidMount = f.componentDidMount.bind(this);
  }

  render() {
    if (_.isString(Contract)) {
      return (
        <div className="container">
          <NavBar />
          <h1>
            {Contract}
          </h1>
        </div>)
    }
    return (
      <div className="container">
        <NavBar />
        <div className="titleContainer mt-4 p-2">
          <div className="offset-md-1">
            <div className="p-3">
              <h2 className="">Master Coin ICO</h2>
              <h4 className="">0x29f5e78329B71978bcbB8fBDd7249D81eD1f799D</h4>
            </div>
            <div className="p-3">
              <h2 className="">Total Raised</h2>
              <h4 className="">{this.state.totalRaised} ETH</h4>
            </div>
          </div>
        </div>
        <div className="mt-4 row">
          <div className="offset-lg-1 col-lg-5 offset-md-1 col-md-11 ">
            <div className="mt-3">
              <h4>Price</h4>
              <span>1 ETH = 10 UBIT-003</span>
            </div>
            <div className="mt-3">
              <h4>Total Supply</h4>
              <span>1000</span>
            </div>
            <div className="mt-3">
              <h4>First week bonus</h4>
              <span>25%</span>
            </div>
          </div>
          <div className="offset-lg-1 col-lg-5 offset-md-1 col-md-11">
            <div className="mt-3">
              <h4>Start Date</h4>
              <span>29th Dec 2018</span>
            </div>
            <div className="mt-3">
              <h4>End Date</h4>
              <span>29th Dec 2019</span>
            </div>
            <div className="mt-3">
              <h4>Max Cap</h4>
              <span>5 ETH</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(App);