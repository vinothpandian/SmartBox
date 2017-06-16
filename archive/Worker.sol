pragma solidity ^0.4.8;
import "./Box.sol";

contract Worker {

  Box box;

  function Worker(address boxAddress) {
    box = Box(boxAddress);
  }

  function orderTool(string toolName) {
    box.orderTool(toolName);
  }
}
