/**
 * @jsx React.DOM
 */
'use strict';

var redirect = {
  attemptedTransition: null,

  getAttemptedTransition: function() {
    return this.attemptedTransition;
  },

  set: function(value) {
    this.attemptedTransition = value;
  },

  clearAttemptedTransition: function () {
    this.attemptedTransition = null;
  }
};

module.exports = redirect;
