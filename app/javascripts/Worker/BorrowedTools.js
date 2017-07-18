import React, { PropTypes } from 'react'
const Worker = require('./WorkerContract');

class BorrowedTools extends React.Component {

  componentDidMount() {
    $("#alertUser").hide();
    Worker.start()
    Worker.getNoOfOrderedTools()
    Worker.getNoOfBorrowedTools()
  }

  componentDidUpdate(prevProps, prevState) {
    Worker.getNoOfOrderedTools()
    Worker.getNoOfBorrowedTools()
  }

  render () {
    return (
      <div className="card rounded">
        <div className="card-block">
          <h4 className="card-title">You have ordered <span className="text-muted" id="noOfOrderedTools"></span> tools</h4>
        </div>
        <div className="card-block">
          <h4 className="card-title">You have borrowed <span className="text-muted" id="noOfBorrowedTools"></span> tools</h4>
        </div>
      </div>
    )
  }
}

module.exports = BorrowedTools;
