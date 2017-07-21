const React = require('react');
var ReactDOM = require('react-dom');

const BoxInventory = require('./BoxInventory');

class BoxManager extends React.Component {

  constructor(props) {
    super(props);
    var temp = localStorage.getItem('page') == null ? 'inventoryList' : localStorage.getItem('page')
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
      case "inventoryList":
        ReactDOM.render(
          <BoxInventory />,
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
      <div>
        <h5 id="balance">
        </h5>
        <ul className="nav nav-pills flex-column text-left bordered rounded mt-3">
        <li className="nav-item">
          <a className={"nav-link "+ this.isActive("inventoryList")} id="inventoryList" onClick={this.handleClick} >
            Tools in Box
          </a>
        </li>
    </ul></div>
    );
  }
}

ReactDOM.render(
  <BoxManager />,
  document.getElementById("menu")
);
