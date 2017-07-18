pragma solidity ^0.4.8;

import "./Box.sol";

contract Worker {

  Box box;
  bool boxAssigned = false;
  event toolOrdered(address toolAddress);
  event boxAdded(address boxAddress);
  event toolReturned(address toolAddress);
  event tookToolFromBox(address toolAddress);
  event putToolToBoxEvent(address toolAddress);

  mapping (address => bool) borrowedTools;
  uint noOfBorrowedTools;
  uint noOfOrderedTools;


  modifier isWorkerAssignedToABox() {
    if(!boxAssigned){throw;} _;
  }

  function addWorkerToBox(address boxAddress) {
    box = Box(boxAddress);
    boxAssigned = true;
    boxAdded(boxAddress);
  }

  function getNoOfBorrowedTools() constant returns (uint)
  {
    return noOfBorrowedTools;
  }

  function getNoOfOrderedTools() constant returns (uint)
  {
    return noOfOrderedTools;
  }

  function assignedBox() constant returns (address) {
    return address(box);
  }

  function orderTool(address toolSupplier, address toolAddress)
  isWorkerAssignedToABox(){
    box.orderTool(toolSupplier, toolAddress);
    noOfOrderedTools++;
    toolOrdered(toolAddress);
  }

  function getToolFromBox(address toolAddress)
  isWorkerAssignedToABox(){
      box.obtainTool(toolAddress);
      borrowedTools[toolAddress] = true;
      noOfBorrowedTools++;
      tookToolFromBox(toolAddress);
  }

  function putToolInBox(address toolAddress)
  isWorkerAssignedToABox(){
      box.putTool(toolAddress);
      borrowedTools[toolAddress] = false;
      noOfBorrowedTools--;
      putToolToBoxEvent(toolAddress);
  }

  function returnTool(address toolSupplier, address toolAddress)
  isWorkerAssignedToABox(){
    box.returnTool(toolSupplier, toolAddress);
    noOfOrderedTools--;
    delete borrowedTools[toolAddress];
    toolReturned(toolAddress);
  }

}
