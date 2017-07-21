const React = require('react');
var ReactDOM = require('react-dom');

const BorrowedTools = require('./BorrowedTools');
const TakeToolFromBox = require('./TakeToolFromBox');
const PutToolToBox = require('./PutToolToBox');
const OrderTool = require('./OrderTool');
const ReturnTool = require('./ReturnTool');
const AddToBox = require('./AddToBox');


class OrderManager extends React.Component {


    constructor(props) {
      super(props);
      var temp = localStorage.getItem('page') == null ? 'borrowedToolsList' : localStorage.getItem('page')
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
        case "borrowedToolsList":
          ReactDOM.render(
            <BorrowedTools />,
            document.getElementById("toolForm")
          );
          break;
        case "takeToolFromBox":
          ReactDOM.render(
            <TakeToolFromBox />,
            document.getElementById("toolForm")
          );
          break;
        case "putToolToBox":
          ReactDOM.render(
            <PutToolToBox />,
            document.getElementById("toolForm")
          );
          break;
        case "orderTool":
          ReactDOM.render(
            <OrderTool />,
            document.getElementById("toolForm")
          );
          break;
        case "returnTool":
          ReactDOM.render(
            <ReturnTool />,
            document.getElementById("toolForm")
          );
          break;
        case "addToBox":
          ReactDOM.render(
            <AddToBox />,
            document.getElementById("toolForm")
          );
          break;
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
        <ul className="nav nav-pills flex-column text-left bordered rounded">
          <li className="nav-item">
            <a className={"nav-link "+ this.isActive("borrowedToolsList")} id="borrowedToolsList" onClick={this.handleClick} >
              Leased Tools
            </a>
          </li>
          <li className="nav-item">
            <a className={"nav-link "+ this.isActive("takeToolFromBox")} id="takeToolFromBox" onClick={this.handleClick}>
              Take tool from Box
            </a>
          </li>
          <li className="nav-item">
            <a className={"nav-link "+ this.isActive("putToolToBox")} id="putToolToBox" onClick={this.handleClick}>
              Put tool to Box
            </a>
          </li>
          <li className="nav-item">
            <a className={"nav-link "+ this.isActive("orderTool")} id="orderTool" onClick={this.handleClick}>
              Order tool
            </a>
          </li>
          <li className="nav-item">
            <a className={"nav-link "+ this.isActive("returnTool")} id="returnTool" onClick={this.handleClick}>
              Return tool
            </a>
          </li>
          <li className="nav-item">
            <a className={"nav-link "+ this.isActive("addToBox")} id="addToBox" onClick={this.handleClick}>
              Add Box
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
