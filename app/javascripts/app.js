//  Load bootstrap
require('expose-loader?$!expose-loader?jQuery!jquery');
require("expose-loader?Tether!tether");
require('bootstrap');
//  Load the css file
require('../stylesheets/app.css')

//  Connect to node using web3
var Connection = require('./connect')
Connection.start()

var React = require('react');
var ReactDOM = require('react-dom');

var Navigation = require('./Navigation')

$("#alertBox").hide();
