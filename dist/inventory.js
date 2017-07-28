webpackJsonp([2],{

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(8);
var ReactDOM = __webpack_require__(33);

__webpack_require__(343);

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(8);
var ReactDOM = __webpack_require__(33);

var InventoryList = __webpack_require__(344);
var AddTool = __webpack_require__(430);
var AddScannedTools = __webpack_require__(431);
var RemoveTool = __webpack_require__(432);

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
          ReactDOM.render(React.createElement(InventoryList, null), document.getElementById("toolForm"));
          break;
        case "addTool":
          ReactDOM.render(React.createElement(AddTool, null), document.getElementById("toolForm"));
          break;
        case "addScannedTools":
          ReactDOM.render(React.createElement(AddScannedTools, null), document.getElementById("toolForm"));
          break;
        case "removeTool":
          ReactDOM.render(React.createElement(RemoveTool, null), document.getElementById("toolForm"));
          break;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $("#alertUser").hide();
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
        'div',
        null,
        React.createElement('h5', { id: 'balance' }),
        React.createElement(
          'ul',
          { className: 'nav nav-pills flex-column text-left bordered rounded mt-3' },
          React.createElement(
            'li',
            { className: 'nav-item' },
            React.createElement(
              'a',
              { className: "nav-link " + this.isActive("inventoryList"), id: 'inventoryList', onClick: this.handleClick },
              'Tools in Inventory'
            )
          ),
          React.createElement(
            'li',
            { className: 'nav-item' },
            React.createElement(
              'a',
              { className: "nav-link " + this.isActive("addTool"), id: 'addTool', onClick: this.handleClick },
              'Add tool'
            )
          ),
          React.createElement(
            'li',
            { className: 'nav-item' },
            React.createElement(
              'a',
              { className: "nav-link " + this.isActive("addScannedTools"), id: 'addScannedTools', onClick: this.handleClick },
              'Add scanned tools'
            )
          ),
          React.createElement(
            'li',
            { className: 'nav-item' },
            React.createElement(
              'a',
              { className: "nav-link " + this.isActive("removeTool"), id: 'removeTool', onClick: this.handleClick },
              'Remove tool'
            )
          )
        )
      );
    }
  }]);

  return InventoryManager;
}(React.Component);

ReactDOM.render(React.createElement(InventoryManager, null), document.getElementById("menu"));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolManager = __webpack_require__(75);

var Tablesort = __webpack_require__(86);

var InventoryList = function (_React$Component) {
  _inherits(InventoryList, _React$Component);

  function InventoryList() {
    _classCallCheck(this, InventoryList);

    return _possibleConstructorReturn(this, (InventoryList.__proto__ || Object.getPrototypeOf(InventoryList)).apply(this, arguments));
  }

  _createClass(InventoryList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      $("#alertUser").hide();
      ToolManager.start();
      $('#TableBody').empty();
      ToolManager.getNoOfToolsAvailable();
      new Tablesort(document.getElementById('listTable'));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      $('#TableBody').empty();
      ToolManager.getNoOfToolsAvailable();
      new Tablesort(document.getElementById('listTable'));
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
            { className: "card-title text-center" },
            "There are ",
            _react2.default.createElement("span", { className: "text-muted", id: "noOfTools" }),
            " tools in your inventory"
          ),
          _react2.default.createElement(
            "table",
            { className: "table table-bordered mt-5", id: "listTable" },
            _react2.default.createElement(
              "thead",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "th",
                  { className: "text-center", "data-sort-default": true },
                  "Tool name"
                ),
                _react2.default.createElement(
                  "th",
                  { className: "text-center" },
                  "Tool Address"
                ),
                _react2.default.createElement(
                  "th",
                  { className: "text-center" },
                  "Status"
                )
              )
            ),
            _react2.default.createElement("tbody", { id: "TableBody" })
          )
        )
      );
    }
  }]);

  return InventoryList;
}(_react2.default.Component);

module.exports = InventoryList;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports = {
	"contract_name": "ToolSupplier",
	"abi": [
		{
			"constant": false,
			"inputs": [
				{
					"name": "toolAddress",
					"type": "address"
				}
			],
			"name": "returnTool",
			"outputs": [],
			"payable": false,
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "i",
					"type": "uint256"
				}
			],
			"name": "getToolData",
			"outputs": [
				{
					"name": "toolName",
					"type": "string"
				},
				{
					"name": "toolAddress",
					"type": "address"
				},
				{
					"name": "available",
					"type": "bool"
				}
			],
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
			"name": "lendTool",
			"outputs": [
				{
					"name": "toolName",
					"type": "bytes32"
				},
				{
					"name": "price",
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
					"name": "toolAddress",
					"type": "address"
				}
			],
			"name": "removeTool",
			"outputs": [],
			"payable": false,
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "x",
					"type": "bytes32"
				}
			],
			"name": "bytes32ToString",
			"outputs": [
				{
					"name": "",
					"type": "string"
				}
			],
			"payable": false,
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getNoOfToolsAvailable",
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
			"constant": true,
			"inputs": [],
			"name": "getBalanceOf",
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
					"name": "toolName",
					"type": "bytes32"
				},
				{
					"name": "toolAddress",
					"type": "address"
				},
				{
					"name": "price",
					"type": "uint256"
				}
			],
			"name": "addTool",
			"outputs": [],
			"payable": false,
			"type": "function"
		},
		{
			"inputs": [
				{
					"name": "initialMoney",
					"type": "uint256"
				}
			],
			"payable": false,
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "toolAddress",
					"type": "address"
				}
			],
			"name": "broadcastToolAdded",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "toolAddress",
					"type": "address"
				}
			],
			"name": "broadcastToolRemoved",
			"type": "event"
		}
	],
	"unlinked_binary": "0x6060604052341561000c57fe5b6040516020806107c583398101604052515b60008181556001555b505b61078d806100386000396000f300606060405236156100725763ffffffff60e060020a6000350416635528b36081146100745780635a70f14a146100925780635eed1e2c1461014e57806389479985146101835780639201de55146101a15780639798317414610234578063ecbde5e614610256578063ee4b0ce214610278575bfe5b341561007c57fe5b610090600160a060020a036004351661029c565b005b341561009a57fe5b6100a56004356102f4565b604051808060200184600160a060020a0316600160a060020a0316815260200183151515158152602001828103825285818151815260200191508051906020019080838360008314610112575b80518252602083111561011257601f1990920191602091820191016100f2565b505050905090810190601f16801561013e5780820380516001836020036101000a031916815260200191505b5094505050505060405180910390f35b341561015657fe5b61016a600160a060020a036004351661035d565b6040805192835260208301919091528051918290030190f35b341561018b57fe5b610090600160a060020a03600435166103cd565b005b34156101a957fe5b6101b46004356104d2565b6040805160208082528351818301528351919283929083019185019080838382156101fa575b8051825260208311156101fa57601f1990920191602091820191016101da565b505050905090810190601f1680156102265780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561023c57fe5b61024461060a565b60408051918252519081900360200190f35b341561025e57fe5b610244610611565b60408051918252519081900360200190f35b341561028057fe5b610090600435600160a060020a0360243516604435610618565b005b600160a060020a038116600090815260026020526040902060030154819060ff16156102c85760006000fd5b600160a060020a0382166000908152600260205260409020600301805460ff191660011790555b5b5050565b6102fc61073d565b600082815260036020908152604080832054600160a060020a03168084526002909252822060010154909190610331906104d2565b600160a060020a03831660009081526002602052604090206003015490935060ff1690505b9193909250565b600160a060020a0381166000908152600260205260408120600301548190839060ff16151561038c5760006000fd5b600160a060020a0384166000908152600260208190526040822060038101805460ff19169055600181015491015482548101909255935091505b5b50915091565b600160a060020a03811660009081526002602052604081206003015481908390610100900460ff1615156104015760006000fd5b600160a060020a0380851660008181526002602081815260408084208054600180546000190180825587526003808652848820548389528589208054600160a060020a031990811692909c169182179055808952878752858920849055888555828501899055968401889055808401805461ffff1916905560049093018790555486529083529381902080549096169095558451938452935191965094507f485726d37eb447aa6a8fd8a7890861919f3b7a008d0610650d838969aad833f3929181900390910190a15b5b50505050565b6104da61073d565b6104e261073d565b6000600060006104f061073d565b60206040518059106104ff5750595b908082528060200260200182016040525b50945060009350600092505b602083101561057a576008830260020a87029150600160f860020a031982161561056e5781858581518110151561054f57fe5b906020010190600160f860020a031916908160001a9053506001909301925b5b60019092019161051c565b836040518059106105885750595b908082528060200260200182016040525b509050600092505b838310156105fc5784838151811015156105b757fe5b90602001015160f860020a900460f860020a0281848151811015156105d857fe5b906020010190600160f860020a031916908160001a9053505b6001909201916105a1565b8095505b5050505050919050565b6001545b90565b6000545b90565b600160a060020a0382166000908152600260205260409020600301548290610100900460ff16156106495760006000fd5b6001805460009081526003602081815260408084208054600160a060020a038a16600160a060020a03199091168117909155815160c081018352865481528084018b81528184018a815260608301898152608084018a815260a085018a8152868b526002808a529a889020955186559351858c015591519884019890985596519582018054975115156101000261ff001997151560ff199099169890981796909616969096179094559351600490930192909255835484019093558051918252517f8a54d0ef5a4223da74f83a162842f38dc7322440cd9171df28e987bb6f952bc5929181900390910190a15b5b50505050565b60408051602081019091526000815290565b604080516020810190915260008152905600a165627a7a72305820792d27fd37a7b4b4bf82582a300c2ffdf4b1ea91c2bc515f982a160e1033c3ba0029",
	"networks": {
		"21": {
			"events": {
				"0xa9e74b415cca04d9e309ed3f57c254d0652da32ca455a6513a801fd1a7298e21": {
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "toolName",
							"type": "string"
						},
						{
							"indexed": false,
							"name": "toolAddress",
							"type": "address"
						},
						{
							"indexed": false,
							"name": "msgSender",
							"type": "address"
						}
					],
					"name": "broadcastToolAdded",
					"type": "event"
				},
				"0x485726d37eb447aa6a8fd8a7890861919f3b7a008d0610650d838969aad833f3": {
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "toolAddress",
							"type": "address"
						}
					],
					"name": "broadcastToolRemoved",
					"type": "event"
				},
				"0x8a54d0ef5a4223da74f83a162842f38dc7322440cd9171df28e987bb6f952bc5": {
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "toolAddress",
							"type": "address"
						}
					],
					"name": "broadcastToolAdded",
					"type": "event"
				}
			},
			"links": {},
			"address": "0xc98b6f6f8ebe05e0d1786c86500833a054f6f5db",
			"updated_at": 1501225588537
		}
	},
	"schema_version": "0.0.5",
	"updated_at": 1501225588537
};

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolManager = __webpack_require__(75);

var AddTool = function (_React$Component) {
  _inherits(AddTool, _React$Component);

  function AddTool() {
    _classCallCheck(this, AddTool);

    return _possibleConstructorReturn(this, (AddTool.__proto__ || Object.getPrototypeOf(AddTool)).apply(this, arguments));
  }

  _createClass(AddTool, [{
    key: 'getRFID',
    value: function getRFID() {
      fetch("http://localhost:8080/rfid").then(function (resp) {
        return resp.json();
      }).then(function (data) {
        document.getElementById("toolAddress").value = web3.sha3(data[data.length - 1].cardUID);
      });
    }
  }, {
    key: 'addTool',
    value: function addTool(event) {
      event.preventDefault();
      ToolManager.start();
      var toolName = document.getElementById("toolName").value;
      var toolAddress = document.getElementById("toolAddress").value;
      var toolPrice = document.getElementById("toolPrice").value;
      if (!toolName || !toolAddress || !toolPrice || toolName == "" || toolAddress == "" || toolPrice == "") {
        alert("Please fill the Tool name, price and Tool address");
      } else {
        ToolManager.addTool(toolName, toolAddress, toolPrice);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $("#alertUser").hide();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card rounded' },
        _react2.default.createElement(
          'div',
          { className: 'card-block' },
          _react2.default.createElement(
            'h4',
            { className: 'card-title' },
            'Add tool'
          ),
          _react2.default.createElement(
            'form',
            { className: true, onSubmit: this.addTool },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Tool name'
              ),
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'toolName',
                placeholder: 'eg. Wire (5m)'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Price'
              ),
              _react2.default.createElement('input', {
                type: 'number',
                className: 'form-control',
                id: 'toolPrice',
                min: '0',
                placeholder: 'eg. 75'
              })
            ),
            _react2.default.createElement(
              'fieldset',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'Tool ID' },
                'Tool ID'
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-group' },
                _react2.default.createElement('input', {
                  type: 'text',
                  id: 'toolAddress',
                  className: 'form-control form-control-sm',
                  placeholder: 'eg. 0xac60e905167f51a083f252f36...........',
                  'aria-describedby': 'basic-addon1'
                }),
                _react2.default.createElement(
                  'div',
                  { className: 'input-group-btn' },
                  _react2.default.createElement(
                    'button',
                    { className: 'btn btn-success', type: 'button', onClick: this.getRFID },
                    'Scan RFID'
                  )
                )
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-muted form-text' },
                'Use scan RFID to automatically enter the last scanned tool ID.'
              )
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'btn btn-primary' },
              'Add Tool'
            )
          )
        )
      );
    }
  }]);

  return AddTool;
}(_react2.default.Component);

module.exports = AddTool;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolManager = __webpack_require__(75);

var AddScannedTools = function (_React$Component) {
  _inherits(AddScannedTools, _React$Component);

  function AddScannedTools() {
    _classCallCheck(this, AddScannedTools);

    return _possibleConstructorReturn(this, (AddScannedTools.__proto__ || Object.getPrototypeOf(AddScannedTools)).apply(this, arguments));
  }

  _createClass(AddScannedTools, [{
    key: 'selectAll',
    value: function selectAll() {
      $('#toolList option').prop('selected', true);
    }
  }, {
    key: 'addSelectedTools',
    value: function addSelectedTools(event) {
      event.preventDefault();
      ToolManager.start();
      var scannedToolsName = document.getElementById("scannedToolsName").value;
      var scannedToolsPrice = document.getElementById("scannedToolsPrice").value;
      var listOfTools = $('#toolList').val();
      if (!scannedToolsName || !listOfTools || !scannedToolsPrice || scannedToolsName == "" || listOfTools == "" || scannedToolsPrice == "") {
        alert("Please fill the Tool name, price and choose at least one Tool address");
      } else {
        for (var i = 0; i < listOfTools.length; i++) {
          ToolManager.addTool(scannedToolsName, listOfTools[i], scannedToolsPrice);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $("#alertUser").hide();

      fetch("http://localhost:8080/rfid").then(function (resp) {
        return resp.json();
      }).then(function (data) {
        for (var i = 0; i < data.length; i++) {
          var temp = web3.sha3(data[i].cardUID);
          $('#toolList').append(new Option("Tool Address: " + temp, temp));
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card rounded' },
        _react2.default.createElement(
          'div',
          { className: 'card-block' },
          _react2.default.createElement(
            'h4',
            { className: 'card-title' },
            'Add already scanned tools'
          ),
          _react2.default.createElement(
            'form',
            { className: true },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Name of scanned tools'
              ),
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'scannedToolsName',
                placeholder: 'eg. Screws (5mm)'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Price of each tool'
              ),
              _react2.default.createElement('input', {
                type: 'number',
                min: '0',
                className: 'form-control',
                id: 'scannedToolsPrice',
                placeholder: 'eg. 100'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Select the tools to add'
              ),
              _react2.default.createElement('select', { id: 'toolList', multiple: true, className: 'form-control' }),
              _react2.default.createElement(
                'small',
                { className: 'text-muted form-text' },
                'Use Ctrl+Click to choose multiple options'
              )
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-outline-primary', onClick: this.selectAll },
              'Select All'
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'btn btn-primary ml-4', onClick: this.addSelectedTools },
              'Add tools'
            )
          )
        )
      );
    }
  }]);

  return AddScannedTools;
}(_react2.default.Component);

module.exports = AddScannedTools;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolManager = __webpack_require__(75);

var RemoveTool = function (_React$Component) {
  _inherits(RemoveTool, _React$Component);

  function RemoveTool() {
    _classCallCheck(this, RemoveTool);

    return _possibleConstructorReturn(this, (RemoveTool.__proto__ || Object.getPrototypeOf(RemoveTool)).apply(this, arguments));
  }

  _createClass(RemoveTool, [{
    key: 'getRFID',
    value: function getRFID() {
      fetch("http://localhost:8080/rfid").then(function (resp) {
        return resp.json();
      }).then(function (data) {
        document.getElementById("rmToolAddress").value = web3.sha3(data[data.length - 1].cardUID);
      });
    }
  }, {
    key: 'deleteTool',
    value: function deleteTool(event) {
      event.preventDefault();
      var rmToolAddress = document.getElementById("rmToolAddress").value;
      if (!rmToolAddress || rmToolAddress == "") {
        alert("Please enter the tool address to delete");
      } else {
        var result = confirm("Are you sure you want to delete the tool " + rmToolAddress + " ?");
        if (result) {
          ToolManager.start();
          ToolManager.removeTool(rmToolAddress);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      $("#alertUser").hide();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card rounded' },
        _react2.default.createElement(
          'div',
          { className: 'card-block' },
          _react2.default.createElement(
            'h4',
            { className: 'card-title' },
            'Remove tool'
          ),
          _react2.default.createElement(
            'form',
            { className: true },
            _react2.default.createElement(
              'fieldset',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'exampleInputEmail1' },
                'Tool ID'
              ),
              _react2.default.createElement(
                'div',
                { className: 'input-group' },
                _react2.default.createElement('input', {
                  type: 'text',
                  id: 'rmToolAddress',
                  className: 'form-control form-control-sm',
                  placeholder: 'eg. 0xac60e905167f51a083f252f36...........',
                  'aria-describedby': 'basic-addon1'
                }),
                _react2.default.createElement(
                  'div',
                  { className: 'input-group-btn', onClick: this.getRFID },
                  _react2.default.createElement(
                    'button',
                    { className: 'btn btn-success', type: 'button' },
                    'Scan RFID'
                  )
                )
              ),
              _react2.default.createElement(
                'small',
                { className: 'text-danger form-text' },
                _react2.default.createElement(
                  'strong',
                  null,
                  'Caution!'
                ),
                ' Removing a tool is irrevocable.'
              )
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'btn btn-primary', onClick: this.deleteTool },
              'Remove Tool'
            )
          )
        )
      );
    }
  }]);

  return RemoveTool;
}(_react2.default.Component);

module.exports = RemoveTool;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _truffleContract = __webpack_require__(109);

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _ToolSupplier = __webpack_require__(429);

var _ToolSupplier2 = _interopRequireDefault(_ToolSupplier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolSupplier = (0, _truffleContract2.default)(_ToolSupplier2.default);

function alertUser(alertLevel, alertText) {
  $("#alertUser").html('<div id="alertBox" class="alert alert-' + alertLevel + ' alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + alertText + "</div>");
  $("#alertUser").show();
}

var ToolManager = {
  address: null,
  iter: 0,

  start: function start() {
    var self = this;

    ToolSupplier.setProvider(window.web3.currentProvider);

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

    ToolSupplier.deployed().then(function (instance) {
      self.getBalance();

      $("#addressButton").html('<button type="button" class="btn btn-outline-warning" data-clipboard-text="' + instance.address + '"><i class="fa fa-key" aria-hidden="true"></i></button>');
    });

    return true;
  },

  getBalance: function getBalance() {
    var self = this;
    ToolSupplier.deployed().then(function (instance) {
      return instance.getBalanceOf.call(self.address, { from: self.address });
    }).then(function (value) {
      document.getElementById("balance").innerHTML = "FITcoin balance " + value.valueOf();
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error!</strong> Could not get the number of available tools. Check logs!");
    });
  },

  getNoOfToolsAvailable: function getNoOfToolsAvailable() {
    var self = this;
    ToolSupplier.deployed().then(function (instance) {
      return instance.getNoOfToolsAvailable.call(self.address, {
        from: self.address
      });
    }).then(function (value) {
      document.getElementById("noOfTools").innerHTML = value.valueOf();
      if (value.valueOf() > 0) {
        for (var i = 0; i < value.valueOf(); i++) {
          self.getToolData(i);
        }
      } else {
        $("#listTable").remove();
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error!</strong> Could not get the number of available tools. Check logs!");
    });
  },

  getToolData: function getToolData(item) {
    var self = this;

    ToolSupplier.deployed().then(function (instance) {
      return instance.getToolData.call(item, { from: self.address });
    }).then(function (value) {
      if (value[2]) {
        $("#TableBody").append('<tr> <td>' + value[0] + '</td> <td>' + value[1] + '</td><td ><i class="fa fa-check text-success" aria-hidden="true"></i> Available</td></tr>');
      } else {
        $("#TableBody").append('<tr class="text-muted"> <td>' + value[0] + '</td> <td>' + value[1] + '</td> <td ><i class="fa fa-external-link text-danger" aria-hidden="true"></i> Lent</td>  </tr>');
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error!</strong> Could not get the number of available tools. Check logs!");
    });
  },

  addTool: function addTool(toolName, toolAddress, toolPrice) {
    var self = this;

    alertUser("warning", "<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ");

    ToolSupplier.deployed().then(function (instance) {
      return instance.addTool(toolName, toolAddress, toolPrice, {
        from: self.address
      });
    }).then(function (result) {
      var success = false;

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "broadcastToolAdded") {
          alertUser("success", "<strong>Tool added successfully!!</strong>");
          success = true;
          break;
        }
      }

      if (!success) {
        alertUser("danger", "<strong>Error adding tool!!</strong> Possible error: Tool already exist in your inventory");
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error adding tool!!</strong> Check logs!");
    });
  },

  removeTool: function removeTool(toolAddress) {
    var self = this;

    alertUser("warning", "<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ");

    ToolSupplier.deployed().then(function (instance) {
      return instance.removeTool(toolAddress, { from: self.address });
    }).then(function (result) {
      var success = false;

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "broadcastToolRemoved") {
          alertUser("success", "<strong>Tool deleted successfully!!</strong>");
          success = true;
          break;
        }
      }

      if (!success) {
        alertUser("danger", "<strong>Error adding tool!!</strong> Possible error: Tool does not exist in your inventory");
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("warning", "<strong>Error deleting tool!!</strong> Check logs!");
    });
  }
};

module.exports = ToolManager;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ })

},[242]);