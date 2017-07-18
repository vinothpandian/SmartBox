import React, { PropTypes } from 'react'
const Worker = require('./WorkerContract');

class PutToolToBox extends React.Component {

  getRFID() {
    fetch("http://localhost:8080/rfid").then((resp) => resp.json()).then(function(data) {
      document.getElementById("toolAddress").value = web3.sha3(data[data.length-1].cardUID)
    });
  }

  putTool(event) {
    event.preventDefault()
    Worker.start()
    var toolAddress = document.getElementById("toolAddress").value
    if ( !toolAddress || toolAddress=="") {
      alert("Please fill the Tool address")
    } else {
      Worker.putToolToBox(toolAddress)
    }
  }

  componentDidMount() {
    $("#alertUser").hide();
  }

  render () {
    return (
      <div className="card rounded">
        <div className="card-block">
          <h4 className="card-title">Return the tool to the Box</h4>
          <form className onSubmit={this.putTool}>
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
              Put Tool
            </button>
          </form>
        </div>
      </div>
    )
  }
}

module.exports = PutToolToBox;
