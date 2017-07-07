pragma solidity ^0.4.8;

contract ToolSupplier {

    struct Tool{
        string toolName;
        bool available;
        bool belongs;
    }

    uint noOfTools;

    mapping (address => Tool) available_tools;
    mapping (uint => address) index_available_tools;

    event broadcastToolAdded(string toolName, address toolAddress, address msgSender);
    event broadcastToolRemoved(address toolAddress);

    modifier isToolAvailable(address toolAddress) {if(!available_tools[toolAddress].available){throw;} _;}
    modifier isToolNotAvailable(address toolAddress) {if(available_tools[toolAddress].available){throw;} _;}
    modifier isToolBelong(address toolAddress) {if(!available_tools[toolAddress].belongs){throw;} _;}
    modifier isToolNotBelong(address toolAddress) {if(available_tools[toolAddress].belongs){throw;} _;}

    function addTool(string toolName, address toolAddress)
    isToolNotBelong(toolAddress) {
        available_tools[toolAddress] = Tool(toolName, true, true);
        broadcastToolAdded(toolName, toolAddress, msg.sender);
        noOfTools++;
        index_available_tools[noOfTools] = toolAddress;
    }

    function removeTool(uint a)
    isToolBelong(index_available_tools[a]) {
        delete available_tools[index_available_tools[a]];
        index_available_tools[a] = index_available_tools[noOfTools];
        delete index_available_tools[noOfTools];
        noOfTools--;
    }

    function getNoOfToolsAvailable() constant returns (uint) {
        return noOfTools;
    }

    function getToolsAvailable(uint a) constant returns (string tn, address ta) {
      tn = available_tools[index_available_tools[a]].toolName;
      ta = index_available_tools[a];
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
