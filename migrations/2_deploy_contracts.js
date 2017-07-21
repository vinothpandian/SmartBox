var toolSupplier = artifacts.require("./ToolSupplier.sol");
var box = artifacts.require("./Box.sol");
var worker = artifacts.require("./Worker.sol");

module.exports = function(deployer) {
  deployer.deploy(box, 10000);
  deployer.deploy(toolSupplier, 100);
  deployer.deploy(worker);
};
