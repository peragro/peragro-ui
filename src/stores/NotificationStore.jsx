/**
 * @jsx React.DOM
 */
'use strict';

var Reflux = require('reflux');

var GlobalActions = require('../actions/GlobalActions.jsx');

var NotificationStore = module.exports = Reflux.createStore({
  listenables: [GlobalActions],

  init: function(){
    this.count = 10;
  },

  onTick: function(){
    console.log('Application ticked');
    this.trigger();
    this.count++;
  },

  getUnreadNotifications: function () {
    return this.count;
  }
});
