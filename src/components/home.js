"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
      <h1>Welcome snuffyKL</h1>
      <p1>This is a test from React and Flux</p1>
      <p />
      <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
});

module.exports = Home;