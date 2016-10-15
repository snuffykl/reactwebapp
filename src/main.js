"use strict";

var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var routes = require('./routes');
var InitActions = require('./actions/initActions');

InitActions.initApp();

ReactDOM.render(<Router routes={routes} />, document.getElementById('app'));

// ReactDOM.render(<Home />, document.getElementById('app'));

// var app = console.log('Hello from Browserify');

// module.exports = app;
