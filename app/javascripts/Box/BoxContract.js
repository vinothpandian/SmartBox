import {default as contract} from 'truffle-contract';
import artifact from '../../../build/contracts/Box.json';

var Box = contract(artifact);

function alertUser(alertLevel, alertText) {
  $("#alertUser").html('<div id="alertBox" class="alert alert-' + alertLevel + ' alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + alertText + '</div>')
  $("#alertUser").show();
}

var BoxManager = {

  address: null,
  availableTools: null,
  toolSupplierAddress: null,

  start: function() {
    var self = this;

    Box.setProvider(window.web3.currentProvider);

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

    Box.deployed().then((instance) => {
      self.getBalance();
      $('#addressButton').html('<button type="button" class="btn btn-outline-warning" data-clipboard-text="'+ instance.address + '"><i class="fa fa-key" aria-hidden="true"></i></button>')
    });

    return true
  },

  getBalance: function() {
    var self = this;
    Box.deployed()
      .then(function(instance) {
        return instance.getBalanceOf.call(self.address, {from: self.address});
      })
      .then(function(value) {
        document.getElementById("balance").innerHTML = "FITcoin balance " + value.valueOf();
      })
      .catch(function(e) {
        console.log(e);
        alertUser(
          "danger",
          "<strong>Error!</strong> Could not get the number of available tools. Check logs!"
        );
      });
  },

  getNoOfToolsInBox: function() {
    var self = this;
    Box.deployed().then(function(instance) {
      return instance.getNoOfToolsInBox.call(self.address, {from: self.address});
    }).then(function(value) {
      document.getElementById("noOfTools").innerHTML = value.valueOf()
      if (value.valueOf() > 0) {
        for (var i = 0; i < value.valueOf(); i++) {
          self.getToolData(i);
        }

      } else {
        $("#listTable").remove();
      }
    }).catch(function(e) {
      console.log(e);
      alertUser("danger", '<strong>Error!</strong> Could not get the number of available tools in Box. Check logs!')
    });
  },

  getToolData: function(item) {
    var self = this;

    Box.deployed()
      .then(function(instance) {
        return instance.getOrderData.call(item, {from: self.address});
      })
      .then(function(value) {
        if(value[5]) {
          $("#TableBody").append(
            '<tr> <td>' + value[1] + '</td> <td>' + value[2] + '</td><td ><i class="fa fa-check text-success" aria-hidden="true"></i> Available</td></tr>'
          );
        } else {
          $("#TableBody").append(
            '<tr class="text-muted"> <td>' + value[1] + '</td> <td>' + value[2] + '</td> <td ><i class="fa fa-external-link text-danger" aria-hidden="true"></i> Checked out</td>  </tr>'
          );
        }

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

module.exports = BoxManager
