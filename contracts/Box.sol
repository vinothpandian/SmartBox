pragma solidity ^0.4.8;

import "./ToolSupplier.sol";

contract Box{

    struct Order {
      address orderedBy;
      address suppliedBy;
      bool available;
      bool delivered;
    }

    mapping (address => Order) orders;
    uint noOfToolsInBox;

    modifier isToolAvailable(address toolAddress) { if(!orders[toolAddress].available){throw;} _; }
    modifier isToolNotAvailable(address toolAddress) { if(orders[toolAddress].available){throw;} _; }

    function getNoOfToolsInBox() constant returns (uint) {
        return noOfToolsInBox;
    }

    function orderTool(address toolSupplierAddress, address toolAddress) {
        ToolSupplier toolSupplier = ToolSupplier(toolSupplierAddress);
        toolSupplier.lendTool(toolAddress);
        orders[toolAddress] = Order(msg.sender, toolSupplierAddress, true, false);
        noOfToolsInBox++;
    }

    function obtainTool(address toolAddress)
    isToolAvailable(toolAddress) {
      orders[toolAddress].available = false;
      orders[toolAddress].delivered = true;
      noOfToolsInBox--;
    }

    function putTool(address toolAddress)
    isToolNotAvailable(toolAddress) {
      orders[toolAddress].available = true;
      orders[toolAddress].delivered = false;
      noOfToolsInBox++;
    }

    function returnTool(address toolSupplierAddress, address toolAddress) {
        ToolSupplier toolSupplier = ToolSupplier(toolSupplierAddress);
        toolSupplier.returnTool(toolAddress);
        delete orders[toolAddress];
        noOfToolsInBox--;
    }


}
