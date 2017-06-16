pragma solidity ^0.4.8;

contract ToolSupplier {

    struct Tool{
        string toolName;
        bool available;
    }

    uint noOfTools;

    mapping (address => Tool) available_tools;

    modifier isToolAvailable(address toolAddress) {require(!available_tools[toolAddress].available); _;}
    modifier isToolNotAvailable(address toolAddress) {require(available_tools[toolAddress].available); _;}

    function addTool(string toolName, address toolAddress)
    isToolAvailable(toolAddress) {
        available_tools[toolAddress] = Tool(toolName, true);
        noOfTools++;
    }

    function removeTool(address toolAddress)
    isToolAvailable(toolAddress) {
        delete available_tools[toolAddress];
        noOfTools--;
    }

    function getNoOfToolsAvailable() constant returns (uint){
        return noOfTools;
    }

    function lendTool(address toolAddress)
    isToolNotAvailable(toolAddress)
    returns (string toolName) {
        toolName = available_tools[toolAddress].toolName;
        available_tools[toolAddress].available = false;
        noOfTools--;
    }

    function retrieveTool(address toolAddress)
    isToolAvailable(toolAddress)
    returns (string toolName) {
        toolName = available_tools[toolAddress].toolName;
        available_tools[toolAddress].available = true;
        noOfTools++;
    }
}
