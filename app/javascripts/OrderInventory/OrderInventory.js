const React = require('react');

class OrderInventory extends React.Component {
  render() {

    return (
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a href="#" className="nav-link active">
            Pending orders
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Delivered Orders
          </a>
        </li>
      </ul>
    );
  }
}

module.exports = OrderInventory
