import React, { PropTypes } from 'react'
const ToolManager = require('./ToolManager');

class RemoveTool extends React.Component {

  getRFID() {
    fetch("http://localhost:8080/rfid").then((resp) => resp.json()).then(function(data) {
      document.getElementById("rmToolAddress").value = web3.sha3(data[data.length-1].cardUID)
    });
  }

  deleteTool() {
    var rmToolAddress = document.getElementById("rmToolAddress").value
    if (!rmToolAddress || rmToolAddress == "") {
      alert("Please enter the tool address to delete")
    } else {
      var result = confirm("Are you sure you want to delete the tool "+rmToolAddress+" ?");
      if (result) {
          ToolManager.start()
          ToolManager.removeTool(rmToolAddress)
      }
    }
  }

  render () {
    return(<div className="card rounded">
      <div className="card-block">
        <h4 className="card-title">Remove tool</h4>
        <form className>
          <fieldset className="form-group">
            <label htmlFor="exampleInputEmail1">Tool ID</label>
            <div className="input-group">
              <input
                type="text"
                id="rmToolAddress"
                className="form-control form-control-sm"
                placeholder="eg. 0xac60e905167f51a083f252f36..........."
                aria-describedby="basic-addon1"
              />
            <div className="input-group-btn" onClick={this.getRFID}>
                <button className="btn btn-success" type="button">
                  Scan RFID
                </button>
              </div>
            </div>
            <small className="text-danger form-text"><strong>Caution!</strong> Removing a tool is irrevocable.</small>
          </fieldset>
          <button type="submit" className="btn btn-primary" onClick={this.deleteTool}>
            Remove Tool
          </button>
        </form>
      </div>
    </div>)
  }
}

module.exports = RemoveTool;
