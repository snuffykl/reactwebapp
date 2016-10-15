"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var objectAssign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _authors = [];

// Basic template for any Flux store.
var AuthorStore = objectAssign({}, EventEmitter.prototype, {
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function () {
        return _authors;
    },

    getAuthorById: function(id) {
        return _.find(_authors, {id: id});
    }
});

//Register to Dispatcher and note it is private implementation.
Dispatcher.register(function(action) {
    switch(action.actionType){
        case ActionTypes.INITIALIZE:
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            AuthorStore.emitChange(); // Everytime store changes we call emitChange
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existAuthor = _.find(_authors, {id: action.author.id});
            var existAuthorIndex = _.indexOf(_authors, existAuthor);
            _authors.splice(existAuthorIndex, 1, action.author);
            AuthorStore.emitChange();
            break;
        case ActionTypes.DELETE_AUTHOR:
            _.remove(_authors, function(author) {
                return action.id === author.id;
            });
            AuthorStore.emitChange();
            break;
        default: //nothing
    }
});

module.exports = AuthorStore;