import React, { PropTypes } from 'react'
const ToolManager = require('./ToolSupplierContract');

class AddTool extends React.Component {

  getRFID() {
    fetch("http://localhost:8080/rfid").then((resp) => resp.json()).then(function(data) {
      document.getElementById("toolAddress").value = web3.sha3(data[data.length-1].cardUID)
    });
  }

  addTool(event) {
    event.preventDefault()
    ToolManager.start()
    var toolName = document.getElementById("toolName").value
    var toolAddress = document.getElementById("toolAddress").value
    if (!toolName || !toolAddress || toolName=="" || toolAddress=="") {
      alert("Please fill the Tool name and Tool address")
    } else {
      ToolManager.addTool(toolName, toolAddress)
    }
  }

  componentDidMount() {
    $("#alertUser").hide();
  }

  render () {
    return(<div className="card rounded">
      <div className="card-block">
        <h4 className="card-title">Add tool</h4>
        <form className onSubmit={this.addTool}>
          <div className="form-group">
            <label>Tool name</label>
            <input
              type="text"
              className="form-control"
              id="toolName"
              placeholder="eg. Wire (5m)"
            />
          </div>
          <fieldset className="form-group">
            <label htmlFor="Tool ID">Tool ID</label>
            <div className="input-group">
              <input
                type="text"
                id="toolAddress"
                className="form-control form-control-sm"
                placeholder="eg. 0xac60e905167f51a083f252f36..........."
                aria-describedby="basic-addon1"
              />
              <div className="input-group-btn">
                <button className="btn btn-success" type="button" onClick={this.getRFID}>
                  Scan RFID
                </button>
              </div>
            </div>
            <small className="text-muted form-text">
              Use scan RFID to automatically enter the last scanned tool ID.
            </small>
          </fieldset>
          <button type="submit" className="btn btn-primary">
            Add Tool
          </button>
        </form>
      </div>
    </div>)
  }
}

module.exports =  AddTool;
