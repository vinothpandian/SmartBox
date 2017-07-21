pragma solidity ^0.4.8;

import "./ToolSupplier.sol";

contract Box{

    struct Order {
      uint orderID;
      bytes32 toolName;
      address orderedBy;
      address suppliedBy;
      bool available;
      bool delivered;
    }

    mapping (address => Order) orders;
    mapping (uint => address) order_index;
    uint noOfToolsInBox;
    uint256 balance;

    mapping (uint => address) orderList;

    modifier isToolAvailable(address toolAddress) { if(!orders[toolAddress].available){throw;} _; }
    modifier isToolNotAvailable(address toolAddress) { if(orders[toolAddress].available){throw;} _; }

    function Box(uint256 initialMoney) {
        balance = initialMoney;
        noOfToolsInBox = 0;
    }

    function getNoOfToolsInBox() constant returns (uint) {
        return noOfToolsInBox;
    }

    function orderTool(address toolSupplierAddress, address toolAddress) returns (bytes32 toolName){
        ToolSupplier toolSupplier = ToolSupplier(toolSupplierAddress);
        uint256 price;
        (toolName, price) = toolSupplier.lendTool(toolAddress);
        balance -= price;
        order_index[noOfToolsInBox] = toolAddress;
        orders[toolAddress] = Order(noOfToolsInBox, toolName, msg.sender, toolSupplierAddress, true, false);
        noOfToolsInBox++;
    }

    function obtainTool(address toolAddress)
    isToolAvailable(toolAddress) {
      orders[toolAddress].available = false;
      orders[toolAddress].delivered = true;
    }

    function putTool(address toolAddress)
    isToolNotAvailable(toolAddress) {
      orders[toolAddress].available = true;
      orders[toolAddress].delivered = false;
    }

    function returnTool(address toolSupplierAddress, address toolAddress) {
        ToolSupplier toolSupplier = ToolSupplier(toolSupplierAddress);
        toolSupplier.returnTool(toolAddress);
        uint orderID = orders[toolAddress].orderID;
        address lastOrder = order_index[noOfToolsInBox-1];
        order_index[orderID] = order_index[noOfToolsInBox-1];
        orders[lastOrder].orderID = orderID;
        delete orders[toolAddress];
        delete order_index[noOfToolsInBox-1];
        noOfToolsInBox--;
    }

    function getOrderData(uint i) constant returns (uint orderID, string toolName, address orderAddress, address orderedBy, address suppliedBy, bool available, bool delivered) {
        orderAddress = order_index[i];
        toolName = bytes32ToString(orders[orderAddress].toolName);
        orderID = orders[orderAddress].orderID;
        orderedBy = orders[orderAddress].orderedBy;
        suppliedBy = orders[orderAddress].suppliedBy;
        available = orders[orderAddress].available;
        delivered = orders[orderAddress].delivered;
    }

    function getBalanceOf() constant returns (uint256) {
        return balance;
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
