import React, { PropTypes } from 'react'
const Worker = require('./Worker');

class AddToBox extends React.Component {

  addToBox(event) {
    event.preventDefault()
    Worker.start()
    var boxAddress = document.getElementById('boxAddress').value
    if(!boxAddress || boxAddress == "") {
      alert("Please fill the Box address")
    } else {
      Worker.addToBox(boxAddress)
    }
  }

  render () {
    return (
      <div className="card rounded">
        <div className="card-block">
          <h4 className="card-title">Add tool</h4>
          <form className onSubmit={this.addToBox}>
            <div className="form-group">
              <label>Box address</label>
              <input
                type="text"
                className="form-control"
                id="boxAddress"
                placeholder="eg. 0xff60e905167f51a1234252f36..........."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Add Box
            </button>
          </form>
        </div>
      </div>
    );
  }
}

module.exports =  AddToBox;
