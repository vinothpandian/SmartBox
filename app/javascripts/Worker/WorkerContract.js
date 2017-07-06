import {default as contract} from 'truffle-contract';
import artifact from '../../../build/contracts/Worker.json';

var Worker = contract(artifact);

function alertUser(alertLevel, alertText) {
  $("#alertUser").html('<div id="alertBox" class="alert alert-' + alertLevel + ' alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + alertText + '</div>')
  $("#alertUser").show();
}

var WorkerManager = {

  address: null,
  availableTools: null,
  toolSupplierAddress: null,

  start: function() {
    var self = this;

    Worker.setProvider(window.web3.currentProvider);

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

    Worker.deployed().then((instance) => {
      $('#addressButton').html('<button type="button" class="btn btn-outline-warning" data-clipboard-text="'+ instance.address + '"><i class="fa fa-key" aria-hidden="true"></i></button>')
    });

    return true
  },

  takeToolFromBox: function(toolAddress) {
    var self = this;

    alertUser("warning","<strong>Initiating Transaction!</strong> Please wait....")

    Worker.deployed().then(function(instance) {
      return instance.getToolFromBox(toolAddress, {from: self.address});
    }).then(function() {
      alertUser("success","<strong>Transaction success!!</strong>")
    }).catch(function(e) {
      console.log(e);
      alertUser("danger","<strong>Error adding Worker to Box!!</strong> Check logs!")
    });
  },

  putToolToBox: function(toolAddress) {
    var self = this;

    alertUser("warning","<strong>Initiating Transaction!</strong> Please wait....")

    Worker.deployed().then(function(instance) {
      return instance.putToolInBox(toolAddress, {from: self.address});
    }).then(function() {
      alertUser("success","<strong>Transaction success!!</strong>")
    }).catch(function(e) {
      console.log(e);
      alertUser("danger","<strong>Error adding Worker to Box!!</strong> Check logs!")
    });
  },

  orderThisTool: function(toolSupplierAddress, toolAddress) {
    var self = this;

    alertUser("warning","<strong>Initiating Transaction!</strong> Please wait....")

    Worker.deployed().then(function(instance) {
      return instance.orderTool(toolSupplierAddress, toolAddress, {from: self.address});
    }).then(function(result) {
      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];

        if (log.event == "isTheToolOrdered") {
          // We found the event!
          alertUser("success","<strong>Transaction success!!</strong>")
          break;
        }
      }
    }).catch(function(e) {
      console.log(e);
      alertUser("danger","<strong>Error adding tool!!</strong> Check logs!")
    });
  },

  returnThisTool: function(toolSupplierAddress, toolAddress) {
    var self = this;

    alertUser("warning","<strong>Initiating Transaction!</strong> Please wait....")

    Worker.deployed().then(function(instance) {
      return instance.returnTool(toolSupplierAddress, toolAddress, {from: self.address});
    }).then(function(result) {
      alertUser("success","<strong>Transaction success!!</strong>")
    }).catch(function(e) {
      console.log(e);
      alertUser("danger","<strong>Error adding tool!!</strong> Check logs!")
    });
  },

  addToBox: function(boxAddress) {
    var self = this;

    alertUser("warning","<strong>Initiating Transaction!</strong> Please wait....")

    Worker.deployed().then(function(instance) {
      return instance.addWorkerToBox(boxAddress, {from: self.address});
    }).then(function() {
      alertUser("success","<strong>Transaction success!!</strong>")
    }).catch(function(e) {
      console.log(e);
      alertUser("danger","<strong>Error adding Worker to Box!!</strong> Check logs!")
    });
  },

  getNoOfBorrowedTools: function() {
    var self = this;

    Worker.deployed().then(function(instance) {
      return instance.getNoOfBorrowedTools.call(self.address, {from: self.address});
    }).then(function(value) {
      document.getElementById("noOfBorrowedTools").innerHTML = value.valueOf()
    }).catch(function(e) {
      console.log(e);
      alertUser("danger", '<strong>Error!</strong> Could not get the number of borrowed tools. Check logs!')
    });
  },

  getNoOfOrderedTools: function() {
    var self = this;

    Worker.deployed().then(function(instance) {
      return instance.getNoOfOrderedTools.call(self.address, {from: self.address});
    }).then(function(value) {
      document.getElementById("noOfOrderedTools").innerHTML = value.valueOf()
    }).catch(function(e) {
      console.log(e);
      alertUser("danger", '<strong>Error!</strong> Could not get the number of ordered tools. Check logs!')
    });
  },

}

module.exports = WorkerManager
