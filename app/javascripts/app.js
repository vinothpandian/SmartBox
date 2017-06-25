import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract';

import artifact from '../../build/contracts/ToolSupplier.json';

var ToolSupplier = contract(artifact);

var account;
var accounts;

window.App = {

  start: function() {
    var self = this;

    ToolSupplier.setProvider(web3.currentProvider);

    web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }

      accounts = accs;
      account = accounts[0];
      document.getElementById("address").innerHTML = account;
    });
  }
};

var React = require('react');
var ReactDOM = require('react-dom');

class Message extends React.Component {
  render() {
    return ( < div > <h1 > {this.props.title} < /h1> <p> {
        this.props.message
      } < /p> </div>
    );
  }
}

ReactDOM.render( < Message title = "React !!!"
  message = "with web3 and truffle" / > ,
  document.getElementById('react-container'));

window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    console.warn("Using MetaMask to get the node")
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.warn("No Metamask detected. Falling back to http://localhost:8547 for ToolSupplier");
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8547"));
  }
  App.start();
});
