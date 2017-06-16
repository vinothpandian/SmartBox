pragma solidity ^0.4.8;
import "./Box.sol";

contract Worker {

  Box box;
  bool boxAssigned = false;

  modifier isWorkerAssignedToABox() {
    require(boxAssigned); _;
  }

  function addWorkerToBox(address boxAddress) {
    box = Box(boxAddress);
    boxAssigned = true;
  }

  function orderTool(address toolSupplier, address toolAddress)
  isWorkerAssignedToABox(){
    box.orderTool(toolSupplier, toolAddress);
  }

  function orderMaterial(address materialSupplier, address materialAddress)
  isWorkerAssignedToABox(){
    box.orderMaterial(materialSupplier, materialAddress);
  }

  function getTool(address toolAddress){
      box.obtainTool(toolAddress);
  }

  function getMaterial(address materialAddress){
      box.obtainMaterial(materialAddress);
  }
}
