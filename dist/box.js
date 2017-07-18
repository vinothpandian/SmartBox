webpackJsonp([3],{

/***/ 442:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(7);
var ReactDOM = __webpack_require__(33);

__webpack_require__(443);

/***/ }),

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(7);
var ReactDOM = __webpack_require__(33);

var BoxInventory = __webpack_require__(444);

var InventoryManager = function (_React$Component) {
  _inherits(InventoryManager, _React$Component);

  function InventoryManager(props) {
    _classCallCheck(this, InventoryManager);

    var _this = _possibleConstructorReturn(this, (InventoryManager.__proto__ || Object.getPrototypeOf(InventoryManager)).call(this, props));

    var temp = localStorage.getItem('page') == null ? 'inventoryList' : localStorage.getItem('page');
    _this.state = { page: temp };

    // This binding is necessary to make `this` work in the callback
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(InventoryManager, [{
    key: 'handleClick',
    value: function handleClick(event) {
      var link;
      localStorage.setItem('page', event.target.id);
      this.setState({
        page: event.target.id
      });
    }
  }, {
    key: 'isActive',
    value: function isActive(link) {
      var temp = this.state.page == link ? "active" : " ";
      return temp;
    }
  }, {
    key: 'loadRelevantPage',
    value: function loadRelevantPage() {
      switch (this.state.page) {
        case "inventoryList":
          ReactDOM.render(React.createElement(BoxInventory, null), document.getElementById("toolForm"));
          break;
        // case "addTool":
        //   ReactDOM.render(
        //     <AddTool />,
        //     document.getElementById("toolForm")
        //   );
        //   break;
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
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadRelevantPage();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.loadRelevantPage();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'ul',
        { className: 'nav nav-pills flex-column text-left bordered rounded' },
        React.createElement(
          'li',
          { className: 'nav-item' },
          React.createElement(
            'a',
            { className: "nav-link " + this.isActive("inventoryList"), id: 'inventoryList', onClick: this.handleClick },
            'Tools in Box'
          )
        )
      );
    }
  }]);

  return InventoryManager;
}(React.Component);

ReactDOM.render(React.createElement(InventoryManager, null), document.getElementById("menu"));

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoxManager = __webpack_require__(445);

var BoxInventory = function (_React$Component) {
  _inherits(BoxInventory, _React$Component);

  function BoxInventory() {
    _classCallCheck(this, BoxInventory);

    return _possibleConstructorReturn(this, (BoxInventory.__proto__ || Object.getPrototypeOf(BoxInventory)).apply(this, arguments));
  }

  _createClass(BoxInventory, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      BoxManager.start();
      BoxManager.getNoOfToolsInBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      BoxManager.getNoOfToolsInBox();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "card rounded" },
        _react2.default.createElement(
          "div",
          { className: "card-block" },
          _react2.default.createElement(
            "h4",
            { className: "card-title" },
            "There are ",
            _react2.default.createElement("span", { className: "text-muted", id: "noOfTools" }),
            " tools in Box"
          )
        )
      );
    }
  }]);

  return BoxInventory;
}(_react2.default.Component);

module.exports = BoxInventory;

/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _truffleContract = __webpack_require__(108);

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _Box = __webpack_require__(446);

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = (0, _truffleContract2.default)(_Box2.default);

function alertUser(alertLevel, alertText) {
  $("#alertUser").html('<div id="alertBox" class="alert alert-' + alertLevel + ' alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + alertText + '</div>');
  $("#alertUser").show();
}

var BoxManager = {

  address: null,
  availableTools: null,
  toolSupplierAddress: null,

  start: function start() {
    var self = this;

    Box.setProvider(window.web3.currentProvider);

    window.web3.eth.getAccounts(function (err, accs) {
      if (err != null) {
        alert("There was an error fetching your accounts.");
        return;
      }

      if (accs.length == 0) {
        alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
        return;
      }
    });

    this.address = window.web3.eth.coinbase;

    Box.deployed().then(function (instance) {
      $('#addressButton').html('<button type="button" class="btn btn-outline-warning" data-clipboard-text="' + instance.address + '"><i class="fa fa-key" aria-hidden="true"></i></button>');
    });

    return true;
  },

  getNoOfToolsInBox: function getNoOfToolsInBox() {
    var self = this;
    Box.deployed().then(function (instance) {
      return instance.getNoOfToolsInBox.call(self.address, { from: self.address });
    }).then(function (value) {
      document.getElementById("noOfTools").innerHTML = value.valueOf();
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", '<strong>Error!</strong> Could not get the number of available tools in Box. Check logs!');
    });
  }

};

module.exports = BoxManager;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)))

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

module.exports = {
	"contract_name": "Box",
	"abi": [
		{
			"constant": true,
			"inputs": [],
			"name": "getNoOfToolsInBox",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "toolSupplierAddress",
					"type": "address"
				},
				{
					"name": "toolAddress",
					"type": "address"
				}
			],
			"name": "orderTool",
			"outputs": [],
			"payable": false,
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "toolAddress",
					"type": "address"
				}
			],
			"name": "obtainTool",
			"outputs": [],
			"payable": false,
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "toolAddress",
					"type": "address"
				}
			],
			"name": "putTool",
			"outputs": [],
			"payable": false,
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "toolSupplierAddress",
					"type": "address"
				},
				{
					"name": "toolAddress",
					"type": "address"
				}
			],
			"name": "returnTool",
			"outputs": [],
			"payable": false,
			"type": "function"
		}
	],
	"unlinked_binary": "0x6060604052341561000c57fe5b5b6103bf8061001c6000396000f300606060405263ffffffff60e060020a6000350416633d10b639811461004d5780636ed5a2061461006f57806376027c8e14610093578063847333e5146100b15780638afc6ca6146100cf575bfe5b341561005557fe5b61005d6100f3565b60408051918252519081900360200190f35b341561007757fe5b610091600160a060020a03600435811690602435166100fa565b005b341561009b57fe5b610091600160a060020a0360043516610201565b005b34156100b957fe5b610091600160a060020a0360043516610275565b005b34156100d757fe5b610091600160a060020a03600435811690602435166102f1565b005b6001545b90565b6040805160e260020a6317bb478b028152600160a060020a03838116600483015291518492831691635eed1e2c91602480830192600092919082900301818387803b151561014457fe5b6102c65a03f1151561015257fe5b505060408051608081018252600160a060020a033381168252868116602080840191825260018486018181526000606087018181528b87168252938190529690962094518554908516600160a060020a03199182161786559251948101805496519251151560a860020a0260a860020a60ff021993151560a060020a0260a060020a60ff021997909616979094169690961794909416929092179190911617909155805481019055505b505050565b600160a060020a038116600090815260208190526040902060010154819060a060020a900460ff1615156102355760006000fd5b600160a060020a03821660009081526020819052604090206001908101805460a060020a61ffff02191660a860020a17905580546000190190555b5b5050565b600160a060020a038116600090815260208190526040902060010154819060a060020a900460ff16156102a85760006000fd5b600160a060020a03821660009081526020819052604090206001908101805460a860020a60ff021960a060020a60ff021990911660a060020a171690558054810190555b5b5050565b6040805160e560020a6302a9459b028152600160a060020a03838116600483015291518492831691635528b36091602480830192600092919082900301818387803b151561033b57fe5b6102c65a03f1151561034957fe5b505050600160a060020a03821660009081526020819052604090208054600160a060020a031916815560019081018054600160b060020a031916905580546000190190555b5050505600a165627a7a72305820a977f32174b057b9777a5cfdf35e21f9c11be3e901b44aa571da871c040d59330029",
	"networks": {
		"21": {
			"events": {},
			"links": {},
			"address": "0xa4634d322c1a3799462e649bc182fd0d6f0a03bf",
			"updated_at": 1500019488438
		}
	},
	"schema_version": "0.0.5",
	"updated_at": 1500019488438
};

/***/ })

},[442]);