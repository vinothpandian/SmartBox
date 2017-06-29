var React = require('react');
var ReactDOM = require('react-dom');
const ToolInventory = require('./ToolInventory/ToolInventory');
const OrderInventory = require('./OrderInventory/OrderInventory');

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: 'tools', sublink: 'inventoryList'};

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

  switchSubLink(){
    console.log("LOl");
  }

  componentDidMount() {
    ReactDOM.render(
      <ToolInventory/>, document.getElementById("menu"))
  }

  componentDidUpdate(prevProps, prevState) {
    switch (this.state.page) {
      case "tools":
        ReactDOM.render(
          <ToolInventory/>, document.getElementById("menu"))
        break;
      case "orders":
        ReactDOM.render(
          <OrderInventory/>, document.getElementById("menu"))
        break;
    }
  }

  render() {
    return (
      <ul className="navbar-nav">
          <li className={"nav-item "+ this.isActive("tools")}>
            <a className="nav-link" id="tools" onClick={this.handleClick}>Tools</a>
          </li>
          <li className={"nav-item "+ this.isActive("orders")}>
              <a className="nav-link" id="orders" onClick={this.handleClick}>Orders</a>
          </li>
      </ul>
    );
  }
}


ReactDOM.render( <Navigation / > ,
  document.getElementById('navbar2SupportedContent'));

module.exports = Navigation
