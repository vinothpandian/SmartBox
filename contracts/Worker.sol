pragma solidity ^0.4.8;

import "./Box.sol";

contract Worker {

  string public Name;

  function Worker (string name) {
      Name = name;
  }

  function getName() returns(string){
      return Name;
  }

  Box box;
  bool boxAssigned = false;
  event isTheToolOrdered(address toolSuppAd, address toolAd, address boxAd);

  mapping (address => bool) borrowedTools;
  uint noOfBorrowedTools;
  uint noOfOrderedTools;


  modifier isWorkerAssignedToABox() {
    if(!boxAssigned){throw;} _;
  }

  function addWorkerToBox(address boxAddress) {
    box = Box(boxAddress);
    boxAssigned = true;
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
    isTheToolOrdered(toolSupplier, toolAddress, address(box));
  }

  function getToolFromBox(address toolAddress)
  isWorkerAssignedToABox(){
      box.obtainTool(toolAddress);
      borrowedTools[toolAddress] = true;
      noOfBorrowedTools++;
  }

  function putToolInBox(address toolAddress)
  isWorkerAssignedToABox(){
      box.putTool(toolAddress);
      borrowedTools[toolAddress] = false;
      noOfBorrowedTools--;
  }

  function returnTool(address toolSupplier, address toolAddress)
  isWorkerAssignedToABox(){
    box.returnTool(toolSupplier, toolAddress);
    noOfOrderedTools--;
    delete borrowedTools[toolAddress];
  }

}

contract WorkerFactory {
    string[] Names;
    address[] newContracts;

    function createWorker (string name) {
        address newContract = new Worker(name);
        newContracts.push(newContract);
        Names.push(name);
    }

    function getWorkerName (uint i) returns(address) {
        return newContracts[i];
    }
}
