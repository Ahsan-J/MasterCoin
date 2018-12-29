import abi from './master-coin-abi.json';
import _ from 'lodash';

let contract;
if (_.isUndefined(window.web3)) {
  contract = "Seems like you are missing the Metamask in your Browser"
} else {
  let { web3 } = window;
  let MyContract = web3.eth.contract(abi);
  contract = MyContract.at('0x29f5e78329B71978bcbB8fBDd7249D81eD1f799D')
}

export default contract;