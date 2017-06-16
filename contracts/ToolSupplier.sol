pragma solidity ^0.4.8;

contract ToolSupplier {

    struct Tool{
        string toolName;
        bool available;
    }

    uint noOfTools;

    mapping (address => Tool) available_tools;

    modifier isToolAvailable(address toolAddress) {if(!available_tools[toolAddress].available){throw;} _;}
    modifier isToolNotAvailable(address toolAddress) {if(available_tools[toolAddress].available){throw;} _;}

    function addTool(string toolName, address toolAddress)
    isToolNotAvailable(toolAddress) {
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
    isToolAvailable(toolAddress)
    returns (string toolName) {
        toolName = available_tools[toolAddress].toolName;
        available_tools[toolAddress].available = false;
        noOfTools--;
    }

    function retrieveTool(address toolAddress)
    isToolNotAvailable(toolAddress)
    {
        available_tools[toolAddress].available = true;
        noOfTools++;
    }
}
