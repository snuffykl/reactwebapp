$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var Home = require('./components/home');
var Authors = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');
var Header = require('./components/common/header');

(function (win){

"use strict";

var App = React.createClass({
	render: function (){
		var Child;

		switch(this.props.route){
			case 'about': Child = About; break;
			case 'authors': Child = Authors; break;
			default: Child = Home; break;
		}

		return (
			<div>
				<Header />
				<Child />
				</div>
			);
	}
});

function render() {
	var route = win.location.hash.substr(1);
	ReactDOM.render(<App route={route} />, document.getElementById('app'));
}

win.addEventListener('hashchanged', render);
render();
})(window);


// ReactDOM.render(<Home />, document.getElementById('app'));

// var app = console.log('Hello from Browserify');

// module.exports = app;
