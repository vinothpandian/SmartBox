webpackJsonp([0],{

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(7);
var ReactDOM = __webpack_require__(33);

__webpack_require__(425);

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(7);
var ReactDOM = __webpack_require__(33);

var BorrowedTools = __webpack_require__(426);
var TakeToolFromBox = __webpack_require__(428);
var PutToolToBox = __webpack_require__(429);
var OrderTool = __webpack_require__(430);
var ReturnTool = __webpack_require__(431);
var AddToBox = __webpack_require__(432);

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
            'Borrowed Tools'
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

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Worker = __webpack_require__(47);

var BorrowedTools = function (_React$Component) {
  _inherits(BorrowedTools, _React$Component);

  function BorrowedTools() {
    _classCallCheck(this, BorrowedTools);

    return _possibleConstructorReturn(this, (BorrowedTools.__proto__ || Object.getPrototypeOf(BorrowedTools)).apply(this, arguments));
  }

  _createClass(BorrowedTools, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      Worker.start();
      Worker.getNoOfOrderedTools();
      Worker.getNoOfBorrowedTools();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      Worker.getNoOfOrderedTools();
      Worker.getNoOfBorrowedTools();
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
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'card-block' },
          _react2.default.createElement(
            'h4',
            { className: 'card-title' },
            'You have borrowed ',
            _react2.default.createElement('span', { className: 'text-muted', id: 'noOfBorrowedTools' }),
            ' tools'
          )
        )
      );
    }
  }]);

  return BorrowedTools;
}(_react2.default.Component);

module.exports = BorrowedTools;

/***/ }),

/***/ 427:
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
		}
	],
	"unlinked_binary": "0x60606040526000805460a060020a60ff0219169055341561001c57fe5b5b6104d08061002c6000396000f300606060405236156100725763ffffffff60e060020a60003504166356e60ce381146100745780636ed5a206146100925780638afc6ca6146100b65780638d4c3a60146100da578063dcb0a9cd146100fc578063ecb8cd871461011e578063f06906511461013c578063f966df151461015a575bfe5b341561007c57fe5b610090600160a060020a0360043516610186565b005b341561009a57fe5b610090600160a060020a0360043581169060243516610229565b005b34156100be57fe5b610090600160a060020a0360043581169060243516610302565b005b34156100e257fe5b6100ea6103ae565b60408051918252519081900360200190f35b341561010457fe5b6100ea6103b5565b60408051918252519081900360200190f35b341561012657fe5b610090600160a060020a03600435166103bc565b005b341561014457fe5b610090600160a060020a03600435166103ed565b005b341561016257fe5b61016a610494565b60408051600160a060020a039092168252519081900360200190f35b60005460a060020a900460ff16151561019f5760006000fd5b600080546040805160e060020a63847333e5028152600160a060020a0385811660048301529151919092169263847333e5926024808201939182900301818387803b15156101e957fe5b6102c65a03f115156101f757fe5b505050600160a060020a0381166000908152600160205260409020805460ff19169055600280546000190190555b5b50565b60005460a060020a900460ff1615156102425760006000fd5b600080546040805160e160020a63376ad103028152600160a060020a038681166004830152858116602483015291519190921692636ed5a206926044808201939182900301818387803b151561029457fe5b6102c65a03f115156102a257fe5b50506003805460010190555060005460408051600160a060020a038086168252808516602083015290921682820152517f828fe1a0b72c0c8c965de0c857042910c7630724f767cdc2083caacfc76497129181900360600190a15b5b5050565b60005460a060020a900460ff16151561031b5760006000fd5b600080546040805160e160020a63457e3653028152600160a060020a038681166004830152858116602483015291519190921692638afc6ca6926044808201939182900301818387803b151561036d57fe5b6102c65a03f1151561037b57fe5b50506003805460001901905550600160a060020a0381166000908152600160205260409020805460ff191690555b5b5050565b6003545b90565b6002545b90565b6000805460a060020a600160a060020a0319909116600160a060020a0384161760a060020a60ff0219161790555b50565b60005460a060020a900460ff1615156104065760006000fd5b600080546040805160e160020a633b013e47028152600160a060020a038581166004830152915191909216926376027c8e926024808201939182900301818387803b151561045057fe5b6102c65a03f1151561045e57fe5b505050600160a060020a0381166000908152600160208190526040909120805460ff1916821790556002805490910190555b5b50565b600054600160a060020a03165b905600a165627a7a723058200ca6b76b46d8dc1ee042d602dab07b7bdc8b581e851e0cbcfcdce8c9458e311d0029",
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
				}
			},
			"links": {},
			"address": "0x36d44c9d9727ca45a271e325256326e45c4e4361",
			"updated_at": 1499361838413
		}
	},
	"schema_version": "0.0.5",
	"updated_at": 1499361838413
};

/***/ }),

/***/ 428:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

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

/***/ }),

/***/ 429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

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

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

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

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

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

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

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

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _truffleContract = __webpack_require__(108);

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _Worker = __webpack_require__(427);

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

    alertUser("warning", "<strong>Initiating Transaction!</strong> Please wait....");

    Worker.deployed().then(function (instance) {
      return instance.getToolFromBox(toolAddress, { from: self.address });
    }).then(function () {
      alertUser("success", "<strong>Transaction success!!</strong>");
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error adding Worker to Box!!</strong> Check logs!");
    });
  },

  putToolToBox: function putToolToBox(toolAddress) {
    var self = this;

    alertUser("warning", "<strong>Initiating Transaction!</strong> Please wait....");

    Worker.deployed().then(function (instance) {
      return instance.putToolInBox(toolAddress, { from: self.address });
    }).then(function () {
      alertUser("success", "<strong>Transaction success!!</strong>");
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error adding Worker to Box!!</strong> Check logs!");
    });
  },

  orderThisTool: function orderThisTool(toolSupplierAddress, toolAddress) {
    var self = this;

    alertUser("warning", "<strong>Initiating Transaction!</strong> Please wait....");

    Worker.deployed().then(function (instance) {
      return instance.orderTool(toolSupplierAddress, toolAddress, { from: self.address });
    }).then(function (result) {
      for (var i = 0; i < result.logs.length; i++) {
        var log = result.logs[i];

        if (log.event == "isTheToolOrdered") {
          // We found the event!
          alertUser("success", "<strong>Transaction success!!</strong>");
          break;
        }
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error adding tool!!</strong> Check logs!");
    });
  },

  returnThisTool: function returnThisTool(toolSupplierAddress, toolAddress) {
    var self = this;

    alertUser("warning", "<strong>Initiating Transaction!</strong> Please wait....");

    Worker.deployed().then(function (instance) {
      return instance.returnTool(toolSupplierAddress, toolAddress, { from: self.address });
    }).then(function (result) {
      alertUser("success", "<strong>Transaction success!!</strong>");
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error adding tool!!</strong> Check logs!");
    });
  },

  addToBox: function addToBox(boxAddress) {
    var self = this;

    alertUser("warning", "<strong>Initiating Transaction!</strong> Please wait....");

    Worker.deployed().then(function (instance) {
      return instance.addWorkerToBox(boxAddress, { from: self.address });
    }).then(function () {
      alertUser("success", "<strong>Transaction success!!</strong>");
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
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", '<strong>Error!</strong> Could not get the number of ordered tools. Check logs!');
    });
  }

};

module.exports = WorkerManager;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ })

},[424]);