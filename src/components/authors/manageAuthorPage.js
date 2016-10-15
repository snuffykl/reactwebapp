"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');

var ManageAuthorPage = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	componentWillMount: function() {
		var authorId = this.props.params.id; //from path author/:id

		if(authorId){
			this.setState({author: AuthorStore.getAuthorById(authorId)});
		}
   },

	componentDidMount: function() {
		this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
   },

    routerWillLeave: function(nextLocation) {
		if(this.state.dirty === true) {
			return 'Your work is not saved! Are you sure you want to leave?';
		}       
    },

	getInitialState: function() {
		return {
			author: { id: '', firstName: '', lastName: '' },
			errors: {},
			dirty: false
		};
	},

	setAuthorState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.author[field] = value;
		return this.setState({author: this.state.author});
	},

	isAuthorFormValid: function() {
		var isFormValid = true;
		this.state.errors = {}; // Clear previous errors.

		if(this.state.author.firstName.length === 0){
			this.state.errors.firstName = "First name must not be empty";
			isFormValid = false;
		}

		if(this.state.author.lastName.length === 0){
			this.state.errors.lastName = "Last name must not be empty";
			isFormValid = false;
		}

		this.setState({errors: this.state.errors});
		return isFormValid;
	},

	saveAuthor: function(event) {
		event.preventDefault();

		if(!this.isAuthorFormValid()){
			return;
		}

		if(this.state.author.id){
			AuthorActions.updateAuthor(this.state.author);
		}
		else {
			AuthorActions.createAuthor(this.state.author);
		}
		
		this.state.dirty = false; // Directly access object state to set it instead of this.setState({dirty: false}); not working
		toastr.success('Author saved');
		this.context.router.push('authors');
	},

	render: function () {
		return (
				<AuthorForm  
					author={this.state.author}
					onChange={this.setAuthorState} 
					onSave={this.saveAuthor}
					errors={this.state.errors} />
			);
	}
}); 

module.exports = ManageAuthorPage;