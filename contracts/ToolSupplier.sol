pragma solidity ^0.4.8;

contract ToolSupplier {

    struct Tool{
        uint toolID;
        bytes32 toolName;
        uint256 price;
        bool available;
        bool belongs;
        uint256 remaining;
    }

    uint balance;

    uint noOfTools;

    mapping (address => Tool) available_tools;
    mapping (uint => address) tool_index;

    event broadcastToolAdded(address toolAddress);
    event broadcastToolRemoved(address toolAddress);

    modifier isToolAvailable(address toolAddress) {if(!available_tools[toolAddress].available){throw;} _;}
    modifier isToolNotAvailable(address toolAddress) {if(available_tools[toolAddress].available){throw;} _;}
    modifier isToolBelong(address toolAddress) {if(!available_tools[toolAddress].belongs){throw;} _;}
    modifier isToolNotBelong(address toolAddress) {if(available_tools[toolAddress].belongs){throw;} _;}

    function ToolSupplier(uint256 initialMoney) {
        balance = initialMoney;
        noOfTools = 0;
    }

    function addTool(bytes32 toolName, address toolAddress, uint price)
    isToolNotBelong(toolAddress) {
        tool_index[noOfTools] = toolAddress;
        available_tools[toolAddress] = Tool(noOfTools, toolName, price, true, true, 0);
        noOfTools++;
        broadcastToolAdded(toolAddress);
    }

    function removeTool(address toolAddress)
    isToolBelong(toolAddress) {

        uint toolID = available_tools[toolAddress].toolID;
        noOfTools--;
        address lastTool = tool_index[noOfTools];
        tool_index[toolID] = tool_index[noOfTools];
        available_tools[lastTool].toolID = toolID;
        delete available_tools[toolAddress];
        delete tool_index[noOfTools];
        broadcastToolRemoved(toolAddress);
    }

    function getNoOfToolsAvailable() constant returns (uint) {
        return noOfTools;
    }

    function lendTool(address toolAddress)
    isToolAvailable(toolAddress) returns (bytes32 toolName, uint256 price) {
        available_tools[toolAddress].available = false;
        toolName = available_tools[toolAddress].toolName;
        price = available_tools[toolAddress].price;
        balance += price;
    }

    function returnTool(address toolAddress)
    isToolNotAvailable(toolAddress) {
        available_tools[toolAddress].available = true;
    }

    function getToolData(uint i) constant returns (string toolName, address toolAddress, bool available) {
        toolAddress = tool_index[i];
        toolName = bytes32ToString(available_tools[toolAddress].toolName);
        available = available_tools[toolAddress].available;
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

    function getBalanceOf() constant returns (uint256) {
        return balance;
    }
}
