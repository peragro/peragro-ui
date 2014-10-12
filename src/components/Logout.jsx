/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var auth = require('../utils/authentication.jsx');

var Logout = React.createClass({
  componentDidMount: function() {
    auth.logout();
  },

  render: function() {
    return <p>You are now logged out</p>;
  }
});

module.exports = Logout;
