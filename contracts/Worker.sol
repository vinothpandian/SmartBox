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

  struct Tool {
      uint toolID;
      address toolSupplier;
      bytes32 toolName;
      bool available;
  }

  mapping (address => Tool) borrowedTools;
  mapping (uint => address) order_index;
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
    bytes32 toolName = box.orderTool(toolSupplier, toolAddress);
    order_index[noOfOrderedTools] = toolAddress;
    borrowedTools[toolAddress] = Tool(noOfOrderedTools, toolSupplier, toolName, false);
    noOfOrderedTools++;
    toolOrdered(toolAddress);
  }

  function getToolFromBox(address toolAddress)
  isWorkerAssignedToABox(){
      box.obtainTool(toolAddress);
      borrowedTools[toolAddress].available = true;
      noOfBorrowedTools++;
      tookToolFromBox(toolAddress);
  }

  function putToolInBox(address toolAddress)
  isWorkerAssignedToABox(){
      box.putTool(toolAddress);
      borrowedTools[toolAddress].available = false;
      noOfBorrowedTools--;
      putToolToBoxEvent(toolAddress);
  }

  function returnTool(address toolSupplier, address toolAddress)
  isWorkerAssignedToABox(){
    if(borrowedTools[toolAddress].available) {
      putToolInBox(toolAddress);
    }
    
    box.returnTool(toolSupplier, toolAddress);

    uint toolID = borrowedTools[toolAddress].toolID;
    address lastTool = order_index[noOfOrderedTools-1];
    order_index[toolID] = order_index[noOfOrderedTools-1];
    borrowedTools[lastTool].toolID = toolID;
    delete borrowedTools[toolAddress];
    delete order_index[noOfOrderedTools-1];
    noOfOrderedTools--;
    toolReturned(toolAddress);
  }

  function getBorrowedToolsData(uint i) constant returns (string toolName, address toolAddress, address toolSupplier, bool available) {
      toolAddress = order_index[i];
      toolName = bytes32ToString(borrowedTools[toolAddress].toolName);
      toolSupplier = borrowedTools[toolAddress].toolSupplier;
      available = borrowedTools[toolAddress].available;
  }

  function bytes32ToString(bytes32 x) constant returns (string) {
    bytes memory bytesString = new bytes(32);
    uint charCount = 0;
    for (uint j = 0; j < 32; j++) {
        byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
        if (char != 0) {
            bytesString[charCount] = char;
            charCount++;
        }
    }
    bytes memory bytesStringTrimmed = new bytes(charCount);
    for (j = 0; j < charCount; j++) {
        bytesStringTrimmed[j] = bytesString[j];
    }
    return string(bytesStringTrimmed);
    }

}
