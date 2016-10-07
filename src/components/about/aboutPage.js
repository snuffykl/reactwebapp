"use strict";

var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<div>
				<h1>About</h1>
				<p>
				Technologies used by this application as following:
					<ul>
						<li>React</li>
						<li>React Router</li>
						<li>Flux</li>
						<li>Node</li>
						<li>Gulp</li>
					</ul>
				</p>
			</div>
			);
	}
});

module.exports = About;