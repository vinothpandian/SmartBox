webpackJsonp([1],{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(7);
var ReactDOM = __webpack_require__(33);

__webpack_require__(333);

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(7);
var ReactDOM = __webpack_require__(33);

var InventoryList = __webpack_require__(334);
var AddTool = __webpack_require__(420);
var AddScannedTools = __webpack_require__(421);
var RemoveTool = __webpack_require__(422);

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
      );
    }
  }]);

  return InventoryManager;
}(React.Component);

ReactDOM.render(React.createElement(InventoryManager, null), document.getElementById("menu"));

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolManager = __webpack_require__(75);

var InventoryList = function (_React$Component) {
  _inherits(InventoryList, _React$Component);

  function InventoryList() {
    _classCallCheck(this, InventoryList);

    return _possibleConstructorReturn(this, (InventoryList.__proto__ || Object.getPrototypeOf(InventoryList)).apply(this, arguments));
  }

  _createClass(InventoryList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      ToolManager.start();
      ToolManager.getNoOfToolsAvailable();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      ToolManager.getNoOfToolsAvailable();
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
            " tools in your inventory"
          )
        )
      );
    }
  }]);

  return InventoryList;
}(_react2.default.Component);

module.exports = InventoryList;

/***/ }),

/***/ 419:
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
			"constant": false,
			"inputs": [
				{
					"name": "toolAddress",
					"type": "address"
				}
			],
			"name": "lendTool",
			"outputs": [],
			"payable": false,
			"type": "function"
		},
		{
			"constant": false,
			"inputs": [
				{
					"name": "toolName",
					"type": "string"
				},
				{
					"name": "toolAddress",
					"type": "address"
				}
			],
			"name": "addTool",
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
			"name": "removeTool",
			"outputs": [],
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
		}
	],
	"unlinked_binary": "0x6060604052341561000c57fe5b5b6104358061001c6000396000f300606060405263ffffffff60e060020a6000350416635528b360811461004d5780635eed1e2c1461006b5780637d61d4881461008957806389479985146100ec578063979831741461010a575bfe5b341561005557fe5b610069600160a060020a036004351661012c565b005b341561007357fe5b610069600160a060020a036004351661018a565b005b341561009157fe5b610069600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375094965050509235600160a060020a031692506101e9915050565b005b34156100f457fe5b610069600160a060020a03600435166102a7565b005b341561011257fe5b61011a61031a565b60408051918252519081900360200190f35b600160a060020a03811660009081526001602081905260409091200154819060ff16156101595760006000fd5b600160a060020a038216600090815260016020819052604082208101805460ff19168217905581540190555b5b5050565b600160a060020a03811660009081526001602081905260409091200154819060ff1615156101b85760006000fd5b600160a060020a0382166000908152600160208190526040822001805460ff1916905580546000190190555b5b5050565b600160a060020a038116600090815260016020819052604090912001548190610100900460ff161561021b5760006000fd5b6040805160608101825284815260016020808301829052828401829052600160a060020a038616600090815291815292902081518051929391926102629284920190610321565b5060208201516001918201805460409094015115156101000261ff001992151560ff199095169490941791909116929092179091556000805490910190555b5b505050565b600160a060020a038116600090815260016020819052604090912001548190610100900460ff1615156102da5760006000fd5b600160a060020a0382166000908152600160205260408120906102fd82826103a0565b50600101805461ffff19169055600080546000190190555b5b5050565b6000545b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061036257805160ff191683800117855561038f565b8280016001018555821561038f579182015b8281111561038f578251825591602001919060010190610374565b5b5061039c9291506103e8565b5090565b50805460018160011615610100020316600290046000825580601f106103c657506103e4565b601f0160209004906000526020600020908101906103e491906103e8565b5b50565b61031e91905b8082111561039c57600081556001016103ee565b5090565b905600a165627a7a723058208bc1fafa7f9f28cb2cdbab1f3a370bc3a2131afc8262ddc06110b7737f13616e0029",
	"networks": {
		"21": {
			"events": {},
			"links": {},
			"address": "0xf53b2a275a3201a6fc83fbf0699dee31d40f3664",
			"updated_at": 1499361838413
		}
	},
	"schema_version": "0.0.5",
	"updated_at": 1499361838413
};

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

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
      if (!toolName || !toolAddress || toolName == "" || toolAddress == "") {
        alert("Please fill the Tool name and Tool address");
      } else {
        ToolManager.addTool(toolName, toolAddress);
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

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

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
    value: function addSelectedTools() {
      ToolManager.start();
      var scannedToolsName = document.getElementById("scannedToolsName").value;
      var listOfTools = $('#toolList').val();
      if (!scannedToolsName || !listOfTools || scannedToolsName == "" || listOfTools == "") {
        alert("Please fill the Tool name and choose at least one Tool address");
      } else {
        for (var i = 0; i < listOfTools.length; i++) {
          ToolManager.addTool(scannedToolsName, listOfTools[i]);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

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
    value: function deleteTool() {
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

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _truffleContract = __webpack_require__(108);

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _ToolSupplier = __webpack_require__(419);

var _ToolSupplier2 = _interopRequireDefault(_ToolSupplier);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToolSupplier = (0, _truffleContract2.default)(_ToolSupplier2.default);

function alertUser(alertLevel, alertText) {
  $("#alertUser").html('<div id="alertBox" class="alert alert-' + alertLevel + ' alert-dismissible fade show" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + alertText + '</div>');
  $("#alertUser").show();
}

var ToolManager = {

  address: null,
  availableTools: null,
  toolSupplierAddress: null,

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
      $('#addressButton').html('<button type="button" class="btn btn-outline-warning" data-clipboard-text="' + instance.address + '"><i class="fa fa-key" aria-hidden="true"></i></button>');
    });

    return true;
  },

  getNoOfToolsAvailable: function getNoOfToolsAvailable() {
    var self = this;
    ToolSupplier.deployed().then(function (instance) {
      return instance.getNoOfToolsAvailable.call(self.address, { from: self.address });
    }).then(function (value) {
      document.getElementById("noOfTools").innerHTML = value.valueOf();
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", '<strong>Error!</strong> Could not get the number of available tools. Check logs!');
    });
  },

  addTool: function addTool(toolName, toolAddress) {
    var self = this;

    alertUser("warning", "<strong>Initiating Transaction!</strong> Please wait....");

    ToolSupplier.deployed().then(function (instance) {
      return instance.addTool(toolName, toolAddress, { from: self.address });
    }).then(function () {
      alertUser("success", "<strong>Transaction success!!</strong>");
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error adding tool!!</strong> Check logs!");
    });
  },

  removeTool: function removeTool(toolAddress) {
    var self = this;

    alertUser("warning", "<strong>Initiating Transaction!</strong> Please wait....");

    ToolSupplier.deployed().then(function (instance) {
      return instance.removeTool(toolAddress, { from: self.address });
    }).then(function () {
      alertUser("success", "<strong>Tool deleted successfully!!</strong>");
    }).catch(function (e) {
      console.log(e);
      alertUser("warning", "<strong>Error deleting tool!!</strong> Check logs!");
    });
  }
};

module.exports = ToolManager;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31)))

/***/ })

},[232]);