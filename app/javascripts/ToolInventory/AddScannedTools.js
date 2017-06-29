import React, { PropTypes } from 'react'
const ToolManager = require('../ToolManager');

class AddScannedTools extends React.Component {

  selectAll() {
      $('#toolList option').prop('selected',true);
  }

  addSelectedTools(){
    ToolManager.start()
    var scannedToolsName = document.getElementById("scannedToolsName").value
    var listOfTools = $('#toolList').val();
    if (!scannedToolsName || !listOfTools || scannedToolsName=="" || listOfTools=="") {
      alert("Please fill the Tool name and choose at least one Tool address")
    }
    else {
      for (var i = 0; i < listOfTools.length; i++) {
        ToolManager.addTool(scannedToolsName,listOfTools[i])
      }
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/rfid").then((resp) => resp.json()).then(function(data) {
      for (var i = 0; i < data.length; i++) {
        $('#toolList').append(new Option("Tool Address: "+data[i].cardUID, data[i].cardUID))
      }
    });
  }

  render () {
    return(
      <div className="card rounded">
        <div className="card-block">
          <h4 className="card-title">Add already scanned tools</h4>
          <form className>
            <div className="form-group">
              <label>Name of scanned tools</label>
              <input
                type="text"
                className="form-control"
                id="scannedToolsName"
                placeholder="eg. Screws (5mm)"
              />
            </div>
            <div className="form-group">
              <label>Select the tools to add</label>
              <select id="toolList" multiple className="form-control">
              </select>
              <small className="text-muted form-text">
                Use Ctrl+Click to choose multiple options
              </small>
            </div>
            <button type="button" className="btn btn-outline-primary" onClick={this.selectAll}>
              Select All
            </button>
            <button type="submit" className="btn btn-primary ml-4" onClick={this.addSelectedTools}>
              Add tools
            </button>
          </form>
        </div>
      </div>)
  }
}

module.exports = AddScannedTools;
