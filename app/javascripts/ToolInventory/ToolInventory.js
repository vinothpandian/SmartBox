const React = require('react');

class ToolInventory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: 'inventoryList'};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    var link
    this.setState({
      page: event.target.id
    });
  }

  isActive(link) {
    var temp = this.state.page == link ? "active" : " "
    return temp
  }

  render() {
    return (
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className={"nav-link "+ this.isActive("inventoryList")} id="inventoryList" onClick={this.handleClick} href="#">
            Tools in Inventory
          </a>
        </li>
        <li className="nav-item">
          <a className={"nav-link "+ this.isActive("addTool")} id="addTool" onClick={this.handleClick} href="#">
            Add tool
          </a>
        </li>
        <li className="nav-item">
          <a className={"nav-link "+ this.isActive("addScannedTools")} id="addScannedTools" onClick={this.handleClick} href="#">
            Add scanned tools
          </a>
        </li>
        <li className="nav-item">
        <a className={"nav-link "+ this.isActive("removeTool")} id="removeTool" onClick={this.handleClick} href="#">
          Remove tool
        </a>
      </li>
    </ul>
    );
  }
}

module.exports = ToolInventory
