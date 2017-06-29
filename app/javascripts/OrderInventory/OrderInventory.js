const React = require('react');
var ReactDOM = require('react-dom');

const PendingOrders = require('./PendingOrders');
const DeliveredOrders = require('./DeliveredOrders');

class OrderInventory extends React.Component {

  constructor(props) {
    super(props);
    this.state = {page: 'pendingOrders'};

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

  componentDidMount() {
    ReactDOM.render(
      <PendingOrders />,
      document.getElementById("toolForm")
    );
  }

  componentDidUpdate() {
    switch (this.state.page) {
      case "pendingOrders":
        ReactDOM.render(
          <PendingOrders />,
          document.getElementById("toolForm")
        );
        break;
      case "deliveredOrders":
        ReactDOM.render(
          <DeliveredOrders />,
          document.getElementById("toolForm")
        );
        break;
        break;
    }
  }

  render() {

    return (
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className={"nav-link "+ this.isActive("pendingOrders")} id="pendingOrders" onClick={this.handleClick} href="#">
            Pending orders
          </a>
        </li>
        <li className="nav-item">
          <a className={"nav-link "+ this.isActive("deliveredOrders")} id="deliveredOrders" onClick={this.handleClick} href="#">
            Delivered Orders
          </a>
        </li>
      </ul>
    );
  }
}

module.exports = OrderInventory
