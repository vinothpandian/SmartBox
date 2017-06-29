import {default as contract} from 'truffle-contract';
import artifact from '../../build/contracts/ToolSupplier.json';

var ToolSupplier = contract(artifact);

function alertUser(alertLevel, alertText) {
  $("#alertUser").html('<div id="alertBox" class="alert alert-' + alertLevel + ' alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + alertText + '</div>')
  $("#alertUser").show();
}

var ToolManager = {

  address: null,
  availableTools: null,

  start: function() {
    var self = this;

    ToolSupplier.setProvider(window.web3.currentProvider);

    window.web3.eth.getAccounts(function(err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
    });

    this.address = window.web3.eth.coinbase
    return true
  },

  getNoOfToolsAvailable: function() {
    var self = this;
    ToolSupplier.deployed().then(function(instance) {
      return instance.getNoOfToolsAvailable.call(self.address, {from: self.address});
    }).then(function(value) {
      document.getElementById("noOfTools").innerHTML = value.valueOf()
    }).catch(function(e) {
      console.log(e);
      alertUser("danger", '<strong>Error!</strong> Could not get the number of available tools. Check logs!')
    });
  },

  addTool: function(toolName, toolAddress) {
    var self = this;

    alertUser("warning","<strong>Initiating Transaction!</strong> Please wait....")

    ToolSupplier.deployed().then(function(instance) {
      return instance.addTool(toolName, toolAddress, {from: self.address});
    }).then(function() {
      alertUser("success","<strong>Transaction success!!</strong>")
    }).catch(function(e) {
      console.log(e);
      alertUser("danger","<strong>Error adding tool!!</strong> Check logs!")
    });
  },

  removeTool: function(toolAddress) {
    var self = this;

    alertUser("warning","<strong>Initiating Transaction!</strong> Please wait....")

    ToolSupplier.deployed().then(function(instance) {
      return instance.removeTool(toolAddress, {from: self.address});
    }).then(function() {
      alertUser("success","<strong>Tool deleted successfully!!</strong>")
    }).catch(function(e) {
      console.log(e);
      alertUser("warning","<strong>Error deleting tool!!</strong> Check logs!")
    });
  }
}

module.exports = ToolManager
