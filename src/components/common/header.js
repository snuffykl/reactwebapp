"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Header = React.createClass({
	render: function () {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<Link to="/" className="navbar-brand">
						<img src="images/google.png" width="100" />
					</Link>
					<ul className="nav navbar-nav">
						<li><Link to="/">Home</Link></li>
						<li><Link to="authors">Authors</Link></li>
						<li><Link to="about-us">About</Link></li>
					</ul>
				</div>
			</nav>
			);
	}

});

module.exports = Header;