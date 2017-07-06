pragma solidity ^0.4.8;
import "./Box.sol";

contract Worker {

  Box box;
  bool boxAssigned = false;
  event isTheToolOrdered(address toolSuppAd, address toolAd, address boxAd);

  mapping (address => bool) borrowedTools;
  uint noOfBorrowedTools;

  modifier isWorkerAssignedToABox() {
    if(!boxAssigned){throw;} _;
  }

  function addWorkerToBox(address boxAddress) {
    box = Box(boxAddress);
    boxAssigned = true;
  }

  function orderTSTAtool(address toolSupplier, address toolAddress)
  isWorkerAssignedToABox(){
    box.orderTool(toolSupplier, toolAddress);
    borrowedTools[toolAddress] = true;
    noOfBorrowedTools++;
    isTheToolOrdered(toolSupplier, toolAddress, address(box));
  }

  function orderMaterial(address materialSupplier, address materialAddress)
  isWorkerAssignedToABox(){
    box.orderMaterial(materialSupplier, materialAddress);
  }

  function getTool(address toolAddress)
  isWorkerAssignedToABox(){
      borrowedTools[toolAddress] = false;
      box.obtainTool(toolAddress);
  }

  function getMaterial(address materialAddress)
  isWorkerAssignedToABox(){
      box.obtainMaterial(materialAddress);
  }

  function returnTool(address toolAddress)
  isWorkerAssignedToABox(){
    delete borrowedTools[toolAddress];
    noOfBorrowedTools--;
  }

  function getNoOfBorrowedTools() constant returns (uint)
  {
    return noOfBorrowedTools;
  }

  function toolAvailable(address toolAddress) constant returns (bool) {
    return borrowedTools[toolAddress];
  }

  function assignedBox() constant returns (address) {
    return address(box);
  }
}
