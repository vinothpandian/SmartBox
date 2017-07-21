import React, {PropTypes} from "react";
const BoxManager = require('./BoxContract');

const Tablesort = require('tablesort');

class BoxInventory extends React.Component {

  componentDidMount() {
    $("#alertUser").hide();
    BoxManager.start()
    $('#TableBody').empty()
    BoxManager.getNoOfToolsInBox()
    new Tablesort(document.getElementById('listTable'));
  }

  componentDidUpdate(prevProps, prevState) {
    $('#TableBody').empty()
    BoxManager.getNoOfToolsInBox()
    new Tablesort(document.getElementById('listTable'));
  }

  render() {
    return (
      <div className="card rounded">
        <div className="card-block">
          <h4 className="card-title">There are <span className="text-muted" id="noOfTools"></span> tools in Box</h4>

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
  )
  }
}

module.exports = BoxInventory;
