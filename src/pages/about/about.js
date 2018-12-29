import React, { Component } from 'react';
import { connect } from 'react-redux'
import './style.css';
import f from './function.js'
import NavBar from '../../component/NavBar/NavBar.js'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="container">
        <NavBar />
        <div className="mt-5">
          <h2>About the App</h2>
            <p class="lead">
              MasterCoin is the token based coin deployed on the Test network of 
              &nbsp;<a href="https://ropsten.etherscan.io/">Ropston</a> Network as a part of University Assignment.
              The Initial Coin Offering is made by Following the steps mentioned in 
              &nbsp;<a href="https://hashnode.com/post/how-to-build-your-own-ethereum-based-erc20-token-and-launch-an-ico-in-next-20-minutes-cjbcpwzec01c93awtbij90uzn">
              How to build your own Ethereum based ERC20 Token</a> The steps follows the creation of ICO and Integrating it in HTML file. The ICO I personally integrated with is <a href="https://reactjs.org/">ReactJS</a> 
              &nbsp;which uses the npm based web3 instance, which can be ignored to use the Metamask stored web3 object in the global window object of the browser it runs. So if you are having an issue in loading 
              the main page of this site is probably because the Metamask might not have been configured properly to interact with the browsers global variables.
              The source code of this project is available on the Git repository. Hope the reader enjoyed my experince as much as I did im making this test project to Interact with my Contact on a Blockchain network
              Working on the Project started on 29th of December and wll hopefully be submitted the same day.
            </p>
        </div>
        <div>
          <h2>About me</h2>
          <p className="lead">Name: <a href="https://github.com/Ahsan-J">Ahsan Jawed</a></p>
          <p className="lead">Seat No: B14158003</p>
          <p className="lead">Section: BSSE (A)</p>
          <p className="lead">Shift: Morning</p>
          <p className="lead">Submitted to: <a href="mailto:fafsoft@gmail.com?Subject=Assignment%20TOCI-III%20UBIT-003%20Morning">Sir Faisal Ahmed Farooqui</a></p>
          <p className="lead">Submission Date : 29th December 2018</p>
          <p className="lead">Course Title: Topic of Current Interest- III</p>
        </div>
      </div>
    );
  }
}

export default connect(f.mapStateToProps.bind(this), f.mapDispatchToProps.bind(this))(About);
