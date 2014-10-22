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

var GlobalActions = require('../actions/GlobalActions.jsx');


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
    this.interval = setInterval(this.tick, 5000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  tick: function() {
    console.log('ticking...');
    GlobalActions.tick(this);
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
