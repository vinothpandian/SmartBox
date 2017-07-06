import { default as Web3 } from 'web3';

var Connection = {
    start: function() {
        if (typeof web3 !== 'undefined') {
          console.warn("Using MetaMask to get the node")
          window.web3 = new Web3(web3.currentProvider);
        } else {
          console.warn("No Metamask detected. Falling back to Private Network http://localhost:8545");
          window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
        }
    }
}

module.exports = Connection
