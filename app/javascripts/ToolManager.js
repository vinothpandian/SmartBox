import { default as contract } from 'truffle-contract';
import artifact from '../../build/contracts/ToolSupplier.json';

var ToolSupplier = contract(artifact);

var ToolManager = {

    address: "data missing",
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
    }
}

module.exports = ToolManager
