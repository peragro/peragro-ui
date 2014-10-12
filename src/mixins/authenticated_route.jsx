/**
 * @jsx React.DOM
 */
'use strict';

var auth = require('../utils/authentication.jsx');
var redirect = require('../utils/redirect.jsx');

var AuthenticatedRoute = {
  statics: {
    willTransitionTo: function (transition) {
      if (!auth.loggedIn()) {
        redirect.set(transition);
        transition.redirect('/login');
      }
    }
  }
};

module.exports = AuthenticatedRoute;
