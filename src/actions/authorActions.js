"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(author){
        var newAuthor = AuthorApi.saveAuthor(author); // Just a mock api, in real world this will be in Async using Promises/AJAX

        // Dispatcher will go tell all Stores that an author just created
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function(author){
        var updateAuthor = AuthorApi.saveAuthor(author); // Just a mock api, in real world this will be in Async using Promises/AJAX
       
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updateAuthor
        });
    },

    deleteAuthor: function(id){
        AuthorApi.deleteAuthor(id); // Just a mock api, in real world this will be in Async using Promises/AJAX
       
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }

};

module.exports = AuthorActions;