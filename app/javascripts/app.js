//  Connect to node using web3
var Connection = require('./connect')
Connection.start()

//  Load bootstrap
require('expose-loader?$!expose-loader?jQuery!jquery');
require("expose-loader?Tether!tether");
require('bootstrap');
require('font-awesome/css/font-awesome.css')
//  Load the css file
require('../stylesheets/app.css')


import clipboard from 'clipboard';

new clipboard('.btn');
