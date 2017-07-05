const React = require('react');
var ReactDOM = require('react-dom');

const OrderTool = require('./OrderTool');

class OrderManager extends React.Component {


    constructor(props) {
      super(props);
      var temp = localStorage.getItem('page') == null ? 'orderTool' : localStorage.getItem('page')
      this.state = {page: temp};

      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      var link
      localStorage.setItem('page',event.target.id)
      this.setState({
        page: event.target.id
      });
    }

    isActive(link) {
      var temp = this.state.page == link ? "active" : " "
      return temp
    }

    loadRelevantPage() {
      switch (this.state.page) {
        // case "inventoryList":
        //   ReactDOM.render(
        //     <InventoryList />,
        //     document.getElementById("toolForm")
        //   );
        //   break;
        case "orderTool":
          ReactDOM.render(
            <OrderTool />,
            document.getElementById("toolForm")
          );
          break;
        // case "addScannedTools":
        //   ReactDOM.render(
        //     <AddScannedTools />,
        //     document.getElementById("toolForm")
        //   );
        //   break;
        // case "removeTool":
        //   ReactDOM.render(
        //     <RemoveTool />,
        //     document.getElementById("toolForm")
        //   );
        //   break;
      }
    }

    componentDidMount() {
      this.loadRelevantPage()
    }

    componentDidUpdate() {
      this.loadRelevantPage()
    }

    render() {
      return (
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a className={"nav-link "+ this.isActive("orderTool")} id="orderTool" onClick={this.handleClick}>
              Order tool
            </a>
          </li>
      </ul>
      );
    }
}

ReactDOM.render(
  <OrderManager />,
  document.getElementById("menu")
);
