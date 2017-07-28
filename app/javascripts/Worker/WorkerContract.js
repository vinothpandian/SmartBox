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

    alertUser("warning","<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ")

    Worker.deployed().then(function(instance) {
      return instance.getToolFromBox(toolAddress, {from: self.address});
    }).then(function(result) {

      var success = false

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "tookToolFromBox") {
          alertUser("success","<strong>Tool checked out of Box successfully!!</strong>")
          success = true
          break;
        }
      }

      if (!success) {
        alertUser("danger","<strong>Error checking out tool!!</strong> Possible error: Tool is not in Box")
      }

    }).catch(function(e) {
      console.log(e);
      alertUser("danger","<strong>Error adding Worker to Box!!</strong> Check logs!")
    });
  },

  putToolToBox: function(toolAddress) {
    var self = this;

    alertUser("warning","<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ")

    Worker.deployed().then(function(instance) {
      return instance.putToolInBox(toolAddress, {from: self.address});
    }).then(function(result) {

      var success = false

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "putToolToBoxEvent") {
          alertUser("success","<strong>Tool checked back in to the Box successfully!!</strong>")
          success = true
          break;
        }
      }

      if (!success) {
        alertUser("danger","<strong>Error checking in tool!!</strong> Possible error: Tool address is wrong")
      }

    }).catch(function(e) {
      console.log(e);
      alertUser("danger","<strong>Error checking in tool!!</strong> Check logs!!")
    });
  },

  orderThisTool: function(toolSupplierAddress, toolAddress) {
    var self = this;

    alertUser("warning","<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ")

    Worker.deployed().then(function(instance) {
      return instance.orderTool(toolSupplierAddress, toolAddress, {from: self.address});
    }).then(function(result) {

      var success = false

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "toolOrdered") {
          alertUser("success","<strong>Tool ordered from Tool Supplier to the Box successfully!!</strong>")
          success = true
          break;
        }
      }

      if (!success) {
        alertUser("danger","<strong>Error ordering tool!!</strong> Possible error: Tool address is wrong")
      }

    }).catch(function(e) {
      console.log(e);
      alertUser("danger","<strong>Error ordering tool!!</strong> Check logs!")
    });
  },

  returnThisTool: function(toolSupplierAddress, toolAddress) {
    var self = this;

    alertUser("warning","<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ")

    Worker.deployed().then(function(instance) {
      return instance.returnTool(toolSupplierAddress, toolAddress, {from: self.address});
    }).then(function(result) {

      var success = false

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "toolReturned") {
          alertUser("success","<strong>Tool returned from Box to Tool Supplier successfully!!</strong>")
          success = true
          break;
        }
      }

      if (!success) {
        alertUser("danger","<strong>Error returning tool!!</strong> Possible error: Tool address is wrong")
      }

    }).catch(function(e) {
      console.log(e);
      alertUser("danger","<strong>Error returning tool!!</strong> Check logs!")
    });
  },

  addToBox: function(boxAddress) {
    var self = this;

    alertUser("warning","<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ")

    Worker.deployed().then(function(instance) {
      return instance.addWorkerToBox(boxAddress, {from: self.address});
    }).then(function(result) {

      var success = false

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "boxAdded") {
          alertUser("success","<strong>Worker added to Box!!</strong>")
          success = true
          break;
        }
      }

      if (!success) {
        alertUser("danger","<strong>Error adding Worker to Box!!</strong>")
      }

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
      if (value.valueOf() > 0) {
        for (var i = 0; i < value.valueOf(); i++) {
          self.getBorrowedToolsData(i);
        }

      } else {
        $("#listTable").remove();
      }
    }).catch(function(e) {
      console.log(e);
      alertUser("danger", '<strong>Error!</strong> Could not get the number of ordered tools. Check logs!')
    });
  },

  getBorrowedToolsData: function(item) {
    var self = this;

    Worker.deployed()
      .then(function(instance) {
        return instance.getBorrowedToolsData.call(item, {from: self.address});
      })
      .then(function(value) {
        var temp;
        if(value[3]) {
          $("#BorrowedTableBody").append(
            '<tr> <td>' + value[0] + '</td> <td>' + value[1] + '</td><td ><i class="fa fa-external-link text-warning" aria-hidden="true"></i> Checked out</td></tr>'
          );
          temp = '<i class="fa fa-external-link text-warning" aria-hidden="true"></i> In use'
        } else {
          temp = '<i class="fa fa-archive text-info" aria-hidden="true"></i> In Box'
        }

          $("#OrderTableBody").append(
            '<tr> <td>' + value[0] + '</td> <td>' + value[1] + '</td> <td >'+ temp + '</td>  </tr>'
          );


      })
      .catch(function(e) {
        console.log(e);
        alertUser(
          "danger",
          "<strong>Error!</strong> Could not get the number of available tools. Check logs!"
        );
      });


  },

}

module.exports = WorkerManager
