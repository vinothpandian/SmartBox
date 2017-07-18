import React, {PropTypes} from "react";
const ToolManager = require('./ToolSupplierContract');

class InventoryList extends React.Component {

  componentDidMount() {
    $("#alertUser").hide();
    ToolManager.start()
    ToolManager.getNoOfToolsAvailable()
  }

  componentDidUpdate(prevProps, prevState) {
    ToolManager.getNoOfToolsAvailable()
  }

  render() {
    return (
      <div className="card rounded">
        <div className="card-block">
          <h4 className="card-title">There are <span className="text-muted" id="noOfTools"></span> tools in your inventory</h4>
        </div>
      </div>
  )
  }
}

module.exports = InventoryList;
