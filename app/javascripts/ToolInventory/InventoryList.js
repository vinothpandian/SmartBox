import React, { PropTypes } from "react";
const ToolManager = require("./ToolSupplierContract");

const Tablesort = require('tablesort');


class InventoryList extends React.Component {
  componentDidMount() {
    $("#alertUser").hide();
    ToolManager.start();
    $('#TableBody').empty()
    ToolManager.getNoOfToolsAvailable();
    new Tablesort(document.getElementById('listTable'));
  }

  componentDidUpdate(prevProps, prevState) {
    $('#TableBody').empty()
    ToolManager.getNoOfToolsAvailable();
    new Tablesort(document.getElementById('listTable'));
  }

  render() {
    return (
        <div className="card rounded">
          <div className="card-block">
            <h4 className="card-title text-center">
              There are <span className="text-muted" id="noOfTools" /> tools in
              your inventory
            </h4>
            <table className="table table-bordered mt-5" id="listTable" >
              <thead >
                <tr>
                  <th className="text-center" data-sort-default>Tool name</th>
                  <th className="text-center">Tool Address</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody id="TableBody">
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

module.exports = InventoryList;
