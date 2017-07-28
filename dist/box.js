webpackJsonp([3],{

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(8);
var ReactDOM = __webpack_require__(33);

__webpack_require__(444);

/***/ }),

/***/ 444:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(8);
var ReactDOM = __webpack_require__(33);

var BoxInventory = __webpack_require__(445);

var BoxManager = function (_React$Component) {
  _inherits(BoxManager, _React$Component);

  function BoxManager(props) {
    _classCallCheck(this, BoxManager);

    var _this = _possibleConstructorReturn(this, (BoxManager.__proto__ || Object.getPrototypeOf(BoxManager)).call(this, props));

    var temp = localStorage.getItem('page') == null ? 'inventoryList' : localStorage.getItem('page');
    _this.state = { page: temp };

    // This binding is necessary to make `this` work in the callback
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(BoxManager, [{
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
              'Tools in Box'
            )
          )
        )
      );
    }
  }]);

  return BoxManager;
}(React.Component);

ReactDOM.render(React.createElement(BoxManager, null), document.getElementById("menu"));

/***/ }),

/***/ 445:
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

var BoxManager = __webpack_require__(446);

var Tablesort = __webpack_require__(86);

var BoxInventory = function (_React$Component) {
  _inherits(BoxInventory, _React$Component);

  function BoxInventory() {
    _classCallCheck(this, BoxInventory);

    return _possibleConstructorReturn(this, (BoxInventory.__proto__ || Object.getPrototypeOf(BoxInventory)).apply(this, arguments));
  }

  _createClass(BoxInventory, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      $("#alertUser").hide();
      BoxManager.start();
      $('#TableBody').empty();
      BoxManager.getNoOfToolsInBox();
      new Tablesort(document.getElementById('listTable'));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      $('#TableBody').empty();
      BoxManager.getNoOfToolsInBox();
      new Tablesort(document.getElementById('listTable'));
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
            'There are ',
            _react2.default.createElement('span', { className: 'text-muted', id: 'noOfTools' }),
            ' tools in Box'
          ),
          _react2.default.createElement(
            'table',
            { className: 'table table-bordered mt-5', id: 'listTable' },
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
            _react2.default.createElement('tbody', { id: 'TableBody' })
          )
        )
      );
    }
  }]);

  return BoxInventory;
}(_react2.default.Component);

module.exports = BoxInventory;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _truffleContract = __webpack_require__(109);

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _Box = __webpack_require__(447);

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
      self.getBalance();
      $('#addressButton').html('<button type="button" class="btn btn-outline-warning" data-clipboard-text="' + instance.address + '"><i class="fa fa-key" aria-hidden="true"></i></button>');
    });

    return true;
  },

  getBalance: function getBalance() {
    var self = this;
    Box.deployed().then(function (instance) {
      return instance.getBalanceOf.call(self.address, { from: self.address });
    }).then(function (value) {
      document.getElementById("balance").innerHTML = "FITcoin balance " + value.valueOf();
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error!</strong> Could not get the number of available tools. Check logs!");
    });
  },

  getNoOfToolsInBox: function getNoOfToolsInBox() {
    var self = this;
    Box.deployed().then(function (instance) {
      return instance.getNoOfToolsInBox.call(self.address, { from: self.address });
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
      alertUser("danger", '<strong>Error!</strong> Could not get the number of available tools in Box. Check logs!');
    });
  },

  getToolData: function getToolData(item) {
    var self = this;

    Box.deployed().then(function (instance) {
      return instance.getOrderData.call(item, { from: self.address });
    }).then(function (value) {
      if (value[5]) {
        $("#TableBody").append('<tr> <td>' + value[1] + '</td> <td>' + value[2] + '</td><td ><i class="fa fa-check text-success" aria-hidden="true"></i> Available</td></tr>');
      } else {
        $("#TableBody").append('<tr class="text-muted"> <td>' + value[1] + '</td> <td>' + value[2] + '</td> <td ><i class="fa fa-external-link text-danger" aria-hidden="true"></i> Checked out</td>  </tr>');
      }
    }).catch(function (e) {
      console.log(e);
      alertUser("danger", "<strong>Error!</strong> Could not get the number of available tools. Check logs!");
    });
  }

};

module.exports = BoxManager;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 447:
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
			"outputs": [
				{
					"name": "toolName",
					"type": "bytes32"
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
			"inputs": [
				{
					"name": "i",
					"type": "uint256"
				}
			],
			"name": "getOrderData",
			"outputs": [
				{
					"name": "orderID",
					"type": "uint256"
				},
				{
					"name": "toolName",
					"type": "string"
				},
				{
					"name": "orderAddress",
					"type": "address"
				},
				{
					"name": "orderedBy",
					"type": "address"
				},
				{
					"name": "suppliedBy",
					"type": "address"
				},
				{
					"name": "available",
					"type": "bool"
				},
				{
					"name": "delivered",
					"type": "bool"
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
			"inputs": [
				{
					"name": "initialMoney",
					"type": "uint256"
				}
			],
			"payable": false,
			"type": "constructor"
		}
	],
	"unlinked_binary": "0x6060604052341561000c57fe5b60405160208061092f83398101604052515b600381905560006002555b505b6108f58061003a6000396000f300606060405236156100725763ffffffff60e060020a6000350416633d10b63981146100745780636ed5a2061461009657806376027c8e146100ca578063847333e5146100e85780638afc6ca6146101065780639201de551461012a57806395178c68146101bd578063ecbde5e614610291575bfe5b341561007c57fe5b6100846102b3565b60408051918252519081900360200190f35b341561009e57fe5b610084600160a060020a03600435811690602435166102ba565b60408051918252519081900360200190f35b34156100d257fe5b6100e6600160a060020a03600435166104d6565b005b34156100f057fe5b6100e6600160a060020a0360043516610540565b005b341561010e57fe5b6100e6600160a060020a03600435811690602435166105b4565b005b341561013257fe5b61013d6004356106ca565b604080516020808252835181830152835191928392908301918501908083838215610183575b80518252602083111561018357601f199092019160209182019101610163565b505050905090810190601f1680156101af5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156101c557fe5b6101d0600435610802565b60408051888152600160a060020a03808816928201929092528582166060820152908416608082015282151560a082015281151560c082015260e0602080830182815289519284019290925288516101008401918a01908083838215610251575b80518252602083111561025157601f199092019160209182019101610231565b505050905090810190601f16801561027d5780820380516001836020036101000a031916815260200191505b509850505050505050505060405180910390f35b341561029957fe5b61008461089e565b60408051918252519081900360200190f35b6002545b90565b60006000600084915081600160a060020a0316635eed1e2c856000604051604001526040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050604060405180830381600087803b151561032357fe5b6102c65a03f1151561033157fe5b505050604051805190602001805190508092508194505050806003600082825403925050819055508360016000600254815260200190815260200160002060006101000a815481600160a060020a030219169083600160a060020a0316021790555060c06040519081016040528060025481526020018460001916815260200133600160a060020a0316815260200186600160a060020a03168152602001600115158152602001600015158152506000600086600160a060020a0316600160a060020a03168152602001908152602001600020600082015181600001556020820151816001019060001916905560408201518160020160006101000a815481600160a060020a030219169083600160a060020a0316021790555060608201518160030160006101000a815481600160a060020a030219169083600160a060020a0316021790555060808201518160030160146101000a81548160ff02191690831515021790555060a08201518160030160156101000a81548160ff0219169083151502179055509050506002600081548092919060010191905055505b505092915050565b600160a060020a038116600090815260208190526040902060030154819060a060020a900460ff16151561050a5760006000fd5b600160a060020a0382166000908152602081905260409020600301805460a060020a61ffff02191660a860020a1790555b5b5050565b600160a060020a038116600090815260208190526040902060030154819060a060020a900460ff16156105735760006000fd5b600160a060020a0382166000908152602081905260409020600301805460a860020a60ff021960a060020a60ff021990911660a060020a171690555b5b5050565b60006000600084925082600160a060020a0316635528b360856040518263ffffffff1660e060020a0281526004018082600160a060020a0316600160a060020a03168152602001915050600060405180830381600087803b151561061457fe5b6102c65a03f1151561062257fe5b50505050600160a060020a038381166000908152602081815260408083208054600280546000199081018752600180875285882054848952868920805491909a16600160a060020a03199182168117909a5589895288885286892085905588865581860189905583860180548216905560039095018054600160b060020a031916905582548201885290955292909420805490911690558054909101905591505b5050505050565b6106d26108a5565b6106da6108a5565b6000600060006106e86108a5565b60206040518059106106f75750595b908082528060200260200182016040525b50945060009350600092505b6020831015610772576008830260020a87029150600160f860020a03198216156107665781858581518110151561074757fe5b906020010190600160f860020a031916908160001a9053506001909301925b5b600190920191610714565b836040518059106107805750595b908082528060200260200182016040525b509050600092505b838310156107f45784838151811015156107af57fe5b90602001015160f860020a900460f860020a0281848151811015156107d057fe5b906020010190600160f860020a031916908160001a9053505b600190920191610799565b8095505b5050505050919050565b600061080c6108a5565b600083815260016020818152604080842054600160a060020a031680855291849052832090910154909190819081908190610846906106ca565b600160a060020a03808716600090815260208190526040902080546002820154600390920154909a50929850811695508116935060ff60a060020a82048116935060a860020a9091041690505b919395979092949650565b6003545b90565b60408051602081019091526000815290565b604080516020810190915260008152905600a165627a7a72305820c66e4478f07e6fb96d20c5400a1b78803edf96d1a59b00265a60481a8c97a61d0029",
	"networks": {
		"21": {
			"events": {},
			"links": {},
			"address": "0x9b961dd487ebcdeae002c194dccbbdfb8ca61474",
			"updated_at": 1501225588545
		}
	},
	"schema_version": "0.0.5",
	"updated_at": 1501225588545
};

/***/ })

},[443]);