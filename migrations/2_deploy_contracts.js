var toolSupplier = artifacts.require("./ToolSupplier.sol");
var box = artifacts.require("./Box.sol");
var materialSupplier = artifacts.require("./MaterialSupplier.sol");
var worker = artifacts.require("./Worker.sol");

module.exports = function(deployer) {
  deployer.deploy(box);
  deployer.deploy(toolSupplier);
  deployer.deploy(materialSupplier);
  deployer.deploy(worker);
};
