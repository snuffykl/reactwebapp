"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory;
var routes = require('./routes');

ReactDOM.render(<Router history={browserHistory}>{routes}</Router>, document.getElementById('app'));

// ReactDOM.render(<Home />, document.getElementById('app'));

// var app = console.log('Hello from Browserify');

// module.exports = app;
