import React, {PropTypes} from "react";
const BoxManager = require('./BoxContract');

class BoxInventory extends React.Component {

  componentDidMount() {
    $("#alertUser").hide();
    BoxManager.start()
    BoxManager.getNoOfToolsInBox()
  }

  componentDidUpdate(prevProps, prevState) {
    BoxManager.getNoOfToolsInBox()
  }

  render() {
    return (
      <div className="card rounded">
        <div className="card-block">
          <h4 className="card-title">There are <span className="text-muted" id="noOfTools"></span> tools in Box</h4>
        </div>
      </div>
  )
  }
}

module.exports = BoxInventory;
