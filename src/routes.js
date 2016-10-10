"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

var App = require('./components/app');
var Home = require('./components/home');
var About = require('./components/about/aboutPage');
var Authors = require('./components/authors/authorPage');
var NotFound = require('./components/notFoundPage');

var routes = (
<Route path="/" component={App}>
	<IndexRoute component={Home} />
	<Route name="authors" path="authors" component={Authors} ></Route>
	<Route name="about" path="about" component={About} ></Route>
	<Redirect from="about-us" to="about" />
	<Route path="*" component={NotFound} ></Route>
</Route>
);

module.exports = routes;
