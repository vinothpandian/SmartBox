import React, { PropTypes } from 'react'
const Worker = require('./Worker');

class BorrowedTools extends React.Component {

  componentDidMount() {
    Worker.start()
    Worker.assignedBox()
    Worker.getNoOfBorrowedTools()
  }

  componentDidUpdate(prevProps, prevState) {
    Worker.getBoxValue()
    Worker.getNoOfBorrowedTools()
  }

  render () {
    return (
      <div className="card rounded">
        <div className="card-block">
          <h4 className="card-title">You have borrowed <span className="text-muted" id="noOfTools"></span> tools</h4>
        </div>
      </div>
    )
  }
}

module.exports = BorrowedTools;
