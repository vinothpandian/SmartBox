import React, { PropTypes } from 'react'
const Worker = require('./WorkerContract');

const Tablesort = require('tablesort');

const divStyle = {
  borderTop: "1px solid rgba(0,0,0,0.1)",
  width: "90%"
};

class BorrowedTools extends React.Component {

  componentDidMount() {
    $("#alertUser").hide();
    Worker.start()
    $('#OrderTableBody').empty()
    $('#BorrowedTableBody').empty()
    Worker.getNoOfOrderedTools()
    Worker.getNoOfBorrowedTools()
    new Tablesort(document.getElementById('OrderlistTable'));
    new Tablesort(document.getElementById('BorrowedlistTable'));
  }

  componentDidUpdate(prevProps, prevState) {
    $('#OrderTableBody').empty()
    $('#BorrowedTableBody').empty()
    Worker.getNoOfOrderedTools()
    Worker.getNoOfBorrowedTools()
    new Tablesort(document.getElementById('OrderlistTable'));
    new Tablesort(document.getElementById('BorrowedlistTable'));
  }

  render () {
    return (
      <div className="card rounded">
        <div className="card-block">
          <h4 className="card-title">You have ordered <span className="text-muted" id="noOfOrderedTools"></span> tools</h4>
            <table className="table table-bordered mt-5" id="OrderlistTable" >
              <thead >
                <tr>
                  <th className="text-center" data-sort-default>Tool name</th>
                  <th className="text-center">Tool Address</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody id="OrderTableBody">
              </tbody>
            </table>
        </div>
        <div className="mx-auto" style={divStyle}></div>
        <div className="card-block">
          <h4 className="card-title text">You have leased <span className="text-muted" id="noOfBorrowedTools"></span> tools</h4>
            <table className="table table-bordered mt-5" id="BorrowedlistTable" >
              <thead >
                <tr>
                  <th className="text-center" data-sort-default>Tool name</th>
                  <th className="text-center">Tool Address</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody id="BorrowedTableBody">
              </tbody>
            </table>
        </div>
      </div>
    )
  }
}

module.exports = BorrowedTools;
