webpackJsonp([0],{

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(8);
var ReactDOM = __webpack_require__(33);

__webpack_require__(435);

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(8);
var ReactDOM = __webpack_require__(33);

var BorrowedTools = __webpack_require__(436);
var TakeToolFromBox = __webpack_require__(438);
var PutToolToBox = __webpack_require__(439);
var OrderTool = __webpack_require__(440);
var ReturnTool = __webpack_require__(441);
var AddToBox = __webpack_require__(442);

var OrderManager = function (_React$Component) {
  _inherits(OrderManager, _React$Component);

  function OrderManager(props) {
    _classCallCheck(this, OrderManager);

    var _this = _possibleConstructorReturn(this, (OrderManager.__proto__ || Object.getPrototypeOf(OrderManager)).call(this, props));

    var temp = localStorage.getItem('page') == null ? 'borrowedToolsList' : localStorage.getItem('page');
    _this.state = { page: temp };

    // This binding is necessary to make `this` work in the callback
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(OrderManager, [{
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
        case "borrowedToolsList":
          ReactDOM.render(React.createElement(BorrowedTools, null), document.getElementById("toolForm"));
          break;
        case "takeToolFromBox":
          ReactDOM.render(React.createElement(TakeToolFromBox, null), document.getElementById("toolForm"));
          break;
        case "putToolToBox":
          ReactDOM.render(React.createElement(PutToolToBox, null), document.getElementById("toolForm"));
          break;
        case "orderTool":
          ReactDOM.render(React.createElement(OrderTool, null), document.getElementById("toolForm"));
          break;
        case "returnTool":
          ReactDOM.render(React.createElement(ReturnTool, null), document.getElementById("toolForm"));
          break;
        case "addToBox":
          ReactDOM.render(React.createElement(AddToBox, null), document.getElementById("toolForm"));
          break;
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
            { className: "nav-link " + this.isActive("borrowedToolsList"), id: 'borrowedToolsList', onClick: this.handleClick },
            'Leased Tools'
          )
        ),
        React.createElement(
          'li',
          { className: 'nav-item' },
          React.createElement(
            'a',
            { className: "nav-link " + this.isActive("takeToolFromBox"), id: 'takeToolFromBox', onClick: this.handleClick },
            'Take tool from Box'
          )
        ),
        React.createElement(
          'li',
          { className: 'nav-item' },
          React.createElement(
            'a',
            { className: "nav-link " + this.isActive("putToolToBox"), id: 'putToolToBox', onClick: this.handleClick },
            'Put tool to Box'
          )
        ),
        React.createElement(
          'li',
          { className: 'nav-item' },
          React.createElement(
            'a',
            { className: "nav-link " + this.isActive("orderTool"), id: 'orderTool', onClick: this.handleClick },
            'Order tool'
          )
        ),
        React.createElement(
          'li',
          { className: 'nav-item' },
          React.createElement(
            'a',
            { className: "nav-link " + this.isActive("returnTool"), id: 'returnTool', onClick: this.handleClick },
            'Return tool'
          )
        ),
        React.createElement(
          'li',
          { className: 'nav-item' },
          React.createElement(
            'a',
            { className: "nav-link " + this.isActive("addToBox"), id: 'addToBox', onClick: this.handleClick },
            'Add Box'
          )
        )
      );
    }
  }]);

  return OrderManager;
}(React.Component);

ReactDOM.render(React.createElement(OrderManager, null), document.getElementById("menu"));

/***/ }),

/***/ 436:
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

var Worker = __webpack_require__(47);

var Tablesort = __webpack_require__(86);

var divStyle = {
  borderTop: "1px solid rgba(0,0,0,0.1)",
  width: "90%"
};

var BorrowedTools = function (_React$Component) {
  _inherits(BorrowedTools, _React$Component);

  function BorrowedTools() {
    _classCallCheck(this, BorrowedTools);

    return _possibleConstructorReturn(this, (BorrowedTools.__proto__ || Object.getPrototypeOf(BorrowedTools)).apply(this, arguments));
  }

  _createClass(BorrowedTools, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $("#alertUser").hide();
      Worker.start();
      $('#OrderTableBody').empty();
      $('#BorrowedTableBody').empty();
      Worker.getNoOfOrderedTools();
      Worker.getNoOfBorrowedTools();
      new Tablesort(document.getElementById('OrderlistTable'));
      new Tablesort(document.getElementById('BorrowedlistTable'));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      $('#OrderTableBody').empty();
      $('#BorrowedTableBody').empty();
      Worker.getNoOfOrderedTools();
      Worker.getNoOfBorrowedTools();
      new Tablesort(document.getElementById('OrderlistTable'));
      new Tablesort(document.getElementById('BorrowedlistTable'));
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
            'You have ordered ',
            _react2.default.createElement('span', { className: 'text-muted', id: 'noOfOrderedTools' }),
            ' tools'
          ),
          _react2.default.createElement(
            'table',
            { className: 'table table-bordered mt-5', id: 'OrderlistTable' },
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  { className: 'text-center', 'data-sort-default': true },
                  'Tool name'
                ),
                _react2.default.createElement(
                  'th',
                  { className: 'text-center' },
                  'Tool Address'
                ),
                _react2.default.createElement(
                  'th',
                  { className: 'text-center' },
                  'Status'
                )
              )
            ),
            _react2.default.createElement('tbody', { id: 'OrderTableBody' })
          )
        ),
        _react2.default.createElement('div', { className: 'mx-auto', style: divStyle }),
        _react2.default.createElement(
          'div',
          { className: 'card-block' },
          _react2.default.createElement(
            'h4',
            { className: 'card-title text' },
            'You have leased ',
            _react2.default.createElement('span', { className: 'text-muted', id: 'noOfBorrowedTools' }),
            ' tools'
          ),
          _react2.default.createElement(
            'table',
            { className: 'table table-bordered mt-5', id: 'BorrowedlistTable' },
            _react2.default.createElement(
              'thead',
              null,
              _react2.default.createElement(
                'tr',
                null,
                _react2.default.createElement(
                  'th',
                  { className: 'text-center', 'data-sort-default': true },
                  'Tool name'
                ),
                _react2.default.createElement(
                  'th',
                  { className: 'text-center' },
                  'Tool Address'
                ),
                _react2.default.createElement(
                  'th',
                  { className: 'text-center' },
                  'Status'
                )
              )
            ),
            _react2.default.createElement('tbody', { id: 'BorrowedTableBody' })
          )
        )
      );
    }
  }]);

  return BorrowedTools;
}(_react2.default.Component);

module.exports = BorrowedTools;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 437:
/***/ (function(module, exports) {

module.exports = {
	"contract_name": "Worker",
	"abi": [
		{
			"constant": false,
			"inputs": [
				{
					"name": "toolAddress",
					"type": "address"
				}
			],
			"name": "putToolInBox",
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
			"name": "getBorrowedToolsData",
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
					"name": "toolSupplier",
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
					"name": "toolSupplier",
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
					"name": "toolSupplier",
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
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getNoOfOrderedTools",
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
			"name": "getNoOfBorrowedTools",
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
					"name": "boxAddress",
					"type": "address"
				}
			],
			"name": "addWorkerToBox",
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
			"name": "getToolFromBox",
			"outputs": [],
			"payable": false,
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "assignedBox",
			"outputs": [
				{
					"name": "",
					"type": "address"
				}
			],
			"payable": false,
			"type": "function"
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
			"name": "toolOrdered",
			"type": "event"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"name": "boxAddress",
					"type": "address"
				}
			],
			"name": "boxAdded",
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
			"name": "toolReturned",
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
			"name": "tookToolFromBox",
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
			"name": "putToolToBoxEvent",
			"type": "event"
		}
	],
	"unlinked_binary": "0x60606040526000805460a060020a60ff0219169055341561001c57fe5b5b6109f78061002c6000396000f300606060405236156100885763ffffffff60e060020a60003504166356e60ce3811461008a57806360e8abbc146100a85780636ed5a2061461017d5780638afc6ca6146101a15780638d4c3a60146101c55780639201de55146101e7578063dcb0a9cd1461027a578063ecb8cd871461029c578063f0690651146102ba578063f966df15146102d8575bfe5b341561009257fe5b6100a6600160a060020a0360043516610304565b005b34156100b057fe5b6100bb6004356103df565b604051808060200185600160a060020a0316600160a060020a0316815260200184600160a060020a0316600160a060020a0316815260200183151515158152602001828103825286818151815260200191508051906020019080838360008314610140575b80518252602083111561014057601f199092019160209182019101610120565b505050905090810190601f16801561016c5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b341561018557fe5b6100a6600160a060020a0360043581169060243516610457565b005b34156101a957fe5b6100a6600160a060020a03600435811690602435166105bd565b005b34156101cd57fe5b6101d561070f565b60408051918252519081900360200190f35b34156101ef57fe5b6101fa600435610716565b604080516020808252835181830152835191928392908301918501908083838215610240575b80518252602083111561024057601f199092019160209182019101610220565b505050905090810190601f16801561026c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561028257fe5b6101d561084e565b60408051918252519081900360200190f35b34156102a457fe5b6100a6600160a060020a0360043516610855565b005b34156102c257fe5b6100a6600160a060020a03600435166108ba565b005b34156102e057fe5b6102e8610997565b60408051600160a060020a039092168252519081900360200190f35b60005460a060020a900460ff16151561031d5760006000fd5b600080546040805160e060020a63847333e5028152600160a060020a0385811660048301529151919092169263847333e5926024808201939182900301818387803b151561036757fe5b6102c65a03f1151561037557fe5b505050600160a060020a0381166000818152600160209081526040918290206003908101805460ff191690558054600019019055815192835290517f4cea37d8933e6ba155343ce112a838e8445fb8e18d764f0777fb6dc7664620f69281900390910190a15b5b50565b6103e76109a7565b600082815260026020818152604080842054600160a060020a03168085526001909252832090910154909190819061041e90610716565b600160a060020a0380851660009081526001602081905260409091209081015460039091015492965016925060ff1690505b9193509193565b6000805460a060020a900460ff1615156104715760006000fd5b60008054604080516020908101849052815160e160020a63376ad103028152600160a060020a038881166004830152878116602483015292519290931693636ed5a2069360448082019492918390030190829087803b15156104cf57fe5b6102c65a03f115156104dd57fe5b5050604080518051600480546000908152600260208181528683208054600160a060020a0319908116600160a060020a038d8116918217909355608089018a52865489528d8316848a01908152898b0189815260608b018881528389526001808852988d90209b518c5591518b8901805490951695169490941790925591519388019390935591516003909601805460ff1916961515969096179095558254909101909155835190815292519094507fa68b0f27927a536e07b750e188b1e1f9f9e6c6296cb5c1e9aa2b8b090bcc21089350918290030190a15b5b505050565b60008054819060a060020a900460ff1615156105d95760006000fd5b600080546040805160e160020a63457e3653028152600160a060020a038881166004830152878116602483015291519190921692638afc6ca6926044808201939182900301818387803b151561062b57fe5b6102c65a03f1151561063957fe5b505050600160a060020a0380841660008181526001602081815260408084208054600480546000199081018852600280875285892054848a52868a208054600160a060020a031990811692909d169182179055808a52888852868a2085905589865597850180548c1690558085018990556003909401805460ff191690558154810188529285529583902080549098169097558454019093558251938452915193955093507fa92a0ca69e05affe5817f58dc18cef1125a3a5d83114e2c0771251acf720f91f92918290030190a15b5b50505050565b6004545b90565b61071e6109a7565b6107266109a7565b6000600060006107346109a7565b60206040518059106107435750595b908082528060200260200182016040525b50945060009350600092505b60208310156107be576008830260020a87029150600160f860020a03198216156107b25781858581518110151561079357fe5b906020010190600160f860020a031916908160001a9053506001909301925b5b600190920191610760565b836040518059106107cc5750595b908082528060200260200182016040525b509050600092505b838310156108405784838151811015156107fb57fe5b90602001015160f860020a900460f860020a02818481518110151561081c57fe5b906020010190600160f860020a031916908160001a9053505b6001909201916107e5565b8095505b5050505050919050565b6003545b90565b6000805460a060020a60ff0219600160a060020a038416600160a060020a031990921682171660a060020a1790915560408051918252517fc48a73a09071aef39630abc6583074b41ffc4381c5ecf4fe64e5950e5278c4c79181900360200190a15b50565b60005460a060020a900460ff1615156108d35760006000fd5b600080546040805160e160020a633b013e47028152600160a060020a038581166004830152915191909216926376027c8e926024808201939182900301818387803b151561091d57fe5b6102c65a03f1151561092b57fe5b505050600160a060020a0381166000818152600160208181526040928390206003908101805460ff1916841790558054909201909155815192835290517f6b2f6aca8d8619f778e7f875ed773d0e3bb0d0064d5874da1f957c671688b8da9281900390910190a15b5b50565b600054600160a060020a03165b90565b60408051602081019091526000815290565b604080516020810190915260008152905600a165627a7a723058201d80569fcb392610dd7f5ece8c024da6dbc52fd04f29e859bdc1eae296731ef10029",
	"networks": {
		"21": {
			"events": {
				"0x5ff1fb847b54b2dce07b1cca298995aee42312b1c6ecb99263242fb6bc8c58dd": {
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "toolSuppAd",
							"type": "address"
						},
						{
							"indexed": false,
							"name": "toolAd",
							"type": "address"
						},
						{
							"indexed": false,
							"name": "boxAd",
							"type": "address"
						}
					],
					"name": "toolOrder",
					"type": "event"
				},
				"0x828fe1a0b72c0c8c965de0c857042910c7630724f767cdc2083caacfc7649712": {
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "toolSuppAd",
							"type": "address"
						},
						{
							"indexed": false,
							"name": "toolAd",
							"type": "address"
						},
						{
							"indexed": false,
							"name": "boxAd",
							"type": "address"
						}
					],
					"name": "isTheToolOrdered",
					"type": "event"
				},
				"0xa68b0f27927a536e07b750e188b1e1f9f9e6c6296cb5c1e9aa2b8b090bcc2108": {
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "toolAddress",
							"type": "address"
						}
					],
					"name": "toolOrdered",
					"type": "event"
				},
				"0xc48a73a09071aef39630abc6583074b41ffc4381c5ecf4fe64e5950e5278c4c7": {
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "boxAddress",
							"type": "address"
						}
					],
					"name": "boxAdded",
					"type": "event"
				},
				"0xa92a0ca69e05affe5817f58dc18cef1125a3a5d83114e2c0771251acf720f91f": {
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "toolAddress",
							"type": "address"
						}
					],
					"name": "toolReturned",
					"type": "event"
				},
				"0x6b2f6aca8d8619f778e7f875ed773d0e3bb0d0064d5874da1f957c671688b8da": {
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "toolAddress",
							"type": "address"
						}
					],
					"name": "tookToolFromBox",
					"type": "event"
				},
				"0x4cea37d8933e6ba155343ce112a838e8445fb8e18d764f0777fb6dc7664620f6": {
					"anonymous": false,
					"inputs": [
						{
							"indexed": false,
							"name": "toolAddress",
							"type": "address"
						}
					],
					"name": "putToolToBoxEvent",
					"type": "event"
				}
			},
			"links": {},
			"address": "0x66fb87341801e27febc47a66bd01365bdf8b23d5",
			"updated_at": 1501225588545
		}
	},
	"schema_version": "0.0.5",
	"updated_at": 1501225588545
};

/***/ }),

/***/ 438:
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

var Worker = __webpack_require__(47);

var TakeToolFromBox = function (_React$Component) {
  _inherits(TakeToolFromBox, _React$Component);

  function TakeToolFromBox() {
    _classCallCheck(this, TakeToolFromBox);

    return _possibleConstructorReturn(this, (TakeToolFromBox.__proto__ || Object.getPrototypeOf(TakeToolFromBox)).apply(this, arguments));
  }

  _createClass(TakeToolFromBox, [{
    key: 'getRFID',
    value: function getRFID() {
      fetch("http://localhost:8080/rfid").then(function (resp) {
        return resp.json();
      }).then(function (data) {
        document.getElementById("toolAddress").value = web3.sha3(data[data.length - 1].cardUID);
      });
    }
  }, {
    key: 'takeTool',
    value: function takeTool(event) {
      event.preventDefault();
      Worker.start();
      var toolAddress = document.getElementById("toolAddress").value;
      if (!toolAddress || toolAddress == "") {
        alert("Please fill the Tool address");
      } else {
        Worker.takeToolFromBox(toolAddress);
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
            'Take tool out from the Box'
          ),
          _react2.default.createElement(
            'form',
            { className: true, onSubmit: this.takeTool },
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
              'Take Tool'
            )
          )
        )
      );
    }
  }]);

  return TakeToolFromBox;
}(_react2.default.Component);

module.exports = TakeToolFromBox;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 439:
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

var Worker = __webpack_require__(47);

var PutToolToBox = function (_React$Component) {
  _inherits(PutToolToBox, _React$Component);

  function PutToolToBox() {
    _classCallCheck(this, PutToolToBox);

    return _possibleConstructorReturn(this, (PutToolToBox.__proto__ || Object.getPrototypeOf(PutToolToBox)).apply(this, arguments));
  }

  _createClass(PutToolToBox, [{
    key: 'getRFID',
    value: function getRFID() {
      fetch("http://localhost:8080/rfid").then(function (resp) {
        return resp.json();
      }).then(function (data) {
        document.getElementById("toolAddress").value = web3.sha3(data[data.length - 1].cardUID);
      });
    }
  }, {
    key: 'putTool',
    value: function putTool(event) {
      event.preventDefault();
      Worker.start();
      var toolAddress = document.getElementById("toolAddress").value;
      if (!toolAddress || toolAddress == "") {
        alert("Please fill the Tool address");
      } else {
        Worker.putToolToBox(toolAddress);
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
            'Return the tool to the Box'
          ),
          _react2.default.createElement(
            'form',
            { className: true, onSubmit: this.putTool },
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
              'Put Tool'
            )
          )
        )
      );
    }
  }]);

  return PutToolToBox;
}(_react2.default.Component);

module.exports = PutToolToBox;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 440:
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

var Worker = __webpack_require__(47);

var OrderTool = function (_React$Component) {
  _inherits(OrderTool, _React$Component);

  function OrderTool() {
    _classCallCheck(this, OrderTool);

    return _possibleConstructorReturn(this, (OrderTool.__proto__ || Object.getPrototypeOf(OrderTool)).apply(this, arguments));
  }

  _createClass(OrderTool, [{
    key: 'getRFID',
    value: function getRFID() {
      fetch("http://localhost:8080/rfid").then(function (resp) {
        return resp.json();
      }).then(function (data) {
        document.getElementById("toolAddress").value = web3.sha3(data[data.length - 1].cardUID);
      });
    }
  }, {
    key: 'orderTool',
    value: function orderTool(event) {
      event.preventDefault();
      Worker.start();
      var toolSupplierAddress = document.getElementById("toolSupplierAddress").value;
      var toolAddress = document.getElementById("toolAddress").value;
      if (!toolSupplierAddress || !toolAddress || toolSupplierAddress == "" || toolAddress == "") {
        alert("Please fill the Tool supplier address and Tool address");
      } else {
        Worker.orderThisTool(toolSupplierAddress, toolAddress);
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
            'Order tool from Tool Supplier'
          ),
          _react2.default.createElement(
            'form',
            { className: true, onSubmit: this.orderTool },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Tool Supplier Address'
              ),
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'toolSupplierAddress',
                placeholder: 'eg. 0xbd60e3457851a083f252f36...........'
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
              'Order Tool'
            )
          )
        )
      );
    }
  }]);

  return OrderTool;
}(_react2.default.Component);

module.exports = OrderTool;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 441:
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

var Worker = __webpack_require__(47);

var ReturnTool = function (_React$Component) {
  _inherits(ReturnTool, _React$Component);

  function ReturnTool() {
    _classCallCheck(this, ReturnTool);

    return _possibleConstructorReturn(this, (ReturnTool.__proto__ || Object.getPrototypeOf(ReturnTool)).apply(this, arguments));
  }

  _createClass(ReturnTool, [{
    key: 'getRFID',
    value: function getRFID() {
      fetch("http://localhost:8080/rfid").then(function (resp) {
        return resp.json();
      }).then(function (data) {
        document.getElementById("toolAddress").value = web3.sha3(data[data.length - 1].cardUID);
      });
    }
  }, {
    key: 'returnTool',
    value: function returnTool(event) {
      event.preventDefault();
      Worker.start();
      var toolSupplierAddress = document.getElementById("toolSupplierAddress").value;
      var toolAddress = document.getElementById("toolAddress").value;
      if (!toolSupplierAddress || !toolAddress || toolSupplierAddress == "" || toolAddress == "") {
        alert("Please fill the Tool supplier address and Tool address");
      } else {
        Worker.returnThisTool(toolSupplierAddress, toolAddress);
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
            'Return tool to Tool supplier'
          ),
          _react2.default.createElement(
            'form',
            { className: true, onSubmit: this.returnTool },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Tool Supplier Address'
              ),
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'toolSupplierAddress',
                placeholder: 'eg. 0xbd60e3457851a083f252f36...........'
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
              'Return Tool'
            )
          )
        )
      );
    }
  }]);

  return ReturnTool;
}(_react2.default.Component);

module.exports = ReturnTool;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 442:
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

var Worker = __webpack_require__(47);

var AddToBox = function (_React$Component) {
  _inherits(AddToBox, _React$Component);

  function AddToBox() {
    _classCallCheck(this, AddToBox);

    return _possibleConstructorReturn(this, (AddToBox.__proto__ || Object.getPrototypeOf(AddToBox)).apply(this, arguments));
  }

  _createClass(AddToBox, [{
    key: 'addToBox',
    value: function addToBox(event) {
      event.preventDefault();
      Worker.start();
      var boxAddress = document.getElementById('boxAddress').value;
      if (!boxAddress || boxAddress == "") {
        alert("Please fill the Box address");
      } else {
        Worker.addToBox(boxAddress);
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
            { className: true, onSubmit: this.addToBox },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                null,
                'Box address'
              ),
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'boxAddress',
                placeholder: 'eg. 0xff60e905167f51a1234252f36...........'
              })
            ),
            _react2.default.createElement(
              'button',
              { type: 'submit', className: 'btn btn-primary' },
              'Add Box'
            )
          )
        )
      );
    }
  }]);

  return AddToBox;
}(_react2.default.Component);

module.exports = AddToBox;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _truffleContract = __webpack_require__(109);

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _Worker = __webpack_require__(437);

var _Worker2 = _interopRequireDefault(_Worker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Worker = (0, _truffleContract2.default)(_Worker2.default);

function alertUser(alertLevel, alertText) {
  $("#alertUser").html('<div id="alertBox" class="alert alert-' + alertLevel + ' alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + alertText + '</div>');
  $("#alertUser").show();
}

var WorkerManager = {

  address: null,
  availableTools: null,
  toolSupplierAddress: null,

  start: function start() {
    var self = this;

    Worker.setProvider(window.web3.currentProvider);

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

    Worker.deployed().then(function (instance) {
      $('#addressButton').html('<button type="button" class="btn btn-outline-warning" data-clipboard-text="' + instance.address + '"><i class="fa fa-key" aria-hidden="true"></i></button>');
    });

    return true;
  },

  takeToolFromBox: function takeToolFromBox(toolAddress) {
    var self = this;

    alertUser("warning", "<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ");

    Worker.deployed().then(function (instance) {
      return instance.getToolFromBox(toolAddress, { from: self.address });
    }).then(function (result) {

      var success = false;

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "tookToolFromBox") {
          alertUser("success", "<strong>Tool checked out of Box successfully!!</strong>");
          success = true;
          break;
        }
      }

      if (!success) {
        alertUser("danger", "<strong>Error checking out tool!!</strong> Possible error: Tool is not in Box");
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error adding Worker to Box!!</strong> Check logs!");
    });
  },

  putToolToBox: function putToolToBox(toolAddress) {
    var self = this;

    alertUser("warning", "<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ");

    Worker.deployed().then(function (instance) {
      return instance.putToolInBox(toolAddress, { from: self.address });
    }).then(function (result) {

      var success = false;

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "putToolToBoxEvent") {
          alertUser("success", "<strong>Tool checked back in to the Box successfully!!</strong>");
          success = true;
          break;
        }
      }

      if (!success) {
        alertUser("danger", "<strong>Error checking in tool!!</strong> Possible error: Tool address is wrong");
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error checking in tool!!</strong> Check logs!!");
    });
  },

  orderThisTool: function orderThisTool(toolSupplierAddress, toolAddress) {
    var self = this;

    alertUser("warning", "<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ");

    Worker.deployed().then(function (instance) {
      return instance.orderTool(toolSupplierAddress, toolAddress, { from: self.address });
    }).then(function (result) {

      var success = false;

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "toolOrdered") {
          alertUser("success", "<strong>Tool ordered from Tool Supplier to the Box successfully!!</strong>");
          success = true;
          break;
        }
      }

      if (!success) {
        alertUser("danger", "<strong>Error ordering tool!!</strong> Possible error: Tool address is wrong");
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error ordering tool!!</strong> Check logs!");
    });
  },

  returnThisTool: function returnThisTool(toolSupplierAddress, toolAddress) {
    var self = this;

    alertUser("warning", "<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ");

    Worker.deployed().then(function (instance) {
      return instance.returnTool(toolSupplierAddress, toolAddress, { from: self.address });
    }).then(function (result) {

      var success = false;

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "toolReturned") {
          alertUser("success", "<strong>Tool returned from Box to Tool Supplier successfully!!</strong>");
          success = true;
          break;
        }
      }

      if (!success) {
        alertUser("danger", "<strong>Error returning tool!!</strong> Possible error: Tool address is wrong");
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error returning tool!!</strong> Check logs!");
    });
  },

  addToBox: function addToBox(boxAddress) {
    var self = this;

    alertUser("warning", "<div class='loader'></div><strong class='ml-4'>Initiating Transaction!</strong> Please wait.... ");

    Worker.deployed().then(function (instance) {
      return instance.addWorkerToBox(boxAddress, { from: self.address });
    }).then(function (result) {

      var success = false;

      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];
        if (log.event == "boxAdded") {
          alertUser("success", "<strong>Worker added to Box!!</strong>");
          success = true;
          break;
        }
      }

      if (!success) {
        alertUser("danger", "<strong>Error adding Worker to Box!!</strong>");
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error adding Worker to Box!!</strong> Check logs!");
    });
  },

  getNoOfBorrowedTools: function getNoOfBorrowedTools() {
    var self = this;

    Worker.deployed().then(function (instance) {
      return instance.getNoOfBorrowedTools.call(self.address, { from: self.address });
    }).then(function (value) {
      document.getElementById("noOfBorrowedTools").innerHTML = value.valueOf();
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", '<strong>Error!</strong> Could not get the number of borrowed tools. Check logs!');
    });
  },

  getNoOfOrderedTools: function getNoOfOrderedTools() {
    var self = this;

    Worker.deployed().then(function (instance) {
      return instance.getNoOfOrderedTools.call(self.address, { from: self.address });
    }).then(function (value) {
      document.getElementById("noOfOrderedTools").innerHTML = value.valueOf();
      if (value.valueOf() > 0) {
        for (var i = 0; i < value.valueOf(); i++) {
          self.getBorrowedToolsData(i);
        }
      } else {
        $("#listTable").remove();
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", '<strong>Error!</strong> Could not get the number of ordered tools. Check logs!');
    });
  },

  getBorrowedToolsData: function getBorrowedToolsData(item) {
    var self = this;

    Worker.deployed().then(function (instance) {
      return instance.getBorrowedToolsData.call(item, { from: self.address });
    }).then(function (value) {
      if (value[3]) {
        $("#BorrowedTableBody").append('<tr> <td>' + value[0] + '</td> <td>' + value[1] + '</td><td ><i class="fa fa-external-link text-warning" aria-hidden="true"></i> Checked out</td></tr>');
      } else {
        $("#OrderTableBody").append('<tr> <td>' + value[0] + '</td> <td>' + value[1] + '</td> <td ><i class="fa fa-archive text-info" aria-hidden="true"></i> In Box</td>  </tr>');
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error!</strong> Could not get the number of available tools. Check logs!");
    });
  }

};

module.exports = WorkerManager;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ })

},[434]);