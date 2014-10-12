/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Router = require('react-router');
var auth = require('../utils/authentication.jsx');
var Route = Router.Route;
var Routes = Router.Routes;
var Link = Router.Link;

var DefaultLayout = require('../layouts/DefaultLayout.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: auth.loggedIn()
    };
  },

  setStateOnAuth: function(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    });
  },

  componentWillMount: function() {
    auth.onChange = this.setStateOnAuth;
    auth.login();
  },

  render: function() {
    return this.state.loggedIn ? (
      <DefaultLayout>
        <this.props.activeRouteHandler />
      </DefaultLayout>
    ): (<this.props.activeRouteHandler />);
  }
});

module.exports = App;
