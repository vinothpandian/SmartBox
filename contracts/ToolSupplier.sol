pragma solidity ^0.4.8;

contract ToolSupplier {

    struct Tool{
        string toolName;
        bool available;
        bool belongs;
    }

    uint noOfTools;

    mapping (address => Tool) available_tools;

    modifier isToolAvailable(address toolAddress) {if(!available_tools[toolAddress].available){throw;} _;}
    modifier isToolNotAvailable(address toolAddress) {if(available_tools[toolAddress].available){throw;} _;}
    modifier isToolBelong(address toolAddress) {if(!available_tools[toolAddress].belongs){throw;} _;}
    modifier isToolNotBelong(address toolAddress) {if(available_tools[toolAddress].belongs){throw;} _;}

    function addTool(string toolName, address toolAddress)
    isToolNotBelong(toolAddress) {
        available_tools[toolAddress] = Tool(toolName, true, true);
        noOfTools++;
    }

    function removeTool(address toolAddress)
    isToolBelong(toolAddress) {
        delete available_tools[toolAddress];
        noOfTools--;
    }

    function getNoOfToolsAvailable() constant returns (uint) {
        return noOfTools;
    }

    function lendTool(address toolAddress)
    isToolAvailable(toolAddress)  {
        available_tools[toolAddress].available = false;
        noOfTools--;
    }

    function returnTool(address toolAddress)
    isToolNotAvailable(toolAddress) {
        available_tools[toolAddress].available = true;
        noOfTools++;
    }
}
