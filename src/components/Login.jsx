/**
 * @jsx React.DOM
 */
 'use strict';

var React = require('react');
var Router = require('react-router');
var redirect = require('../utils/redirect.jsx');
var auth = require('../utils/authentication.jsx');

var Login = React.createClass({
  mixins: [ Router.Navigation ],

  statics: {
    attemptedTransition: null
  },

  getInitialState: function() {
    return {
      error: false
    };
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var email = this.refs.email.getDOMNode().value;
    var pass = this.refs.pass.getDOMNode().value;
    auth.login(email, pass, function(loggedIn) {
      if (!loggedIn) {
        return this.setState({ error: true });
      }
      if (redirect.getAttemptedTransition()) {
        var transition = redirect.getAttemptedTransition();
        redirect.clearAttemptedTransition();
        transition.retry();
      } else {
        this.replaceWith('/about');
      }
    }.bind(this));
  },

  render: function() {
    var errors = this.state.error ? <p>Bad login information</p> : '';
    return (
      <div className="col-xs-12 col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
  			<div className="text-right">
          {errors}(hint: password1)
  			</div>
  			<div className="box">
  				<div className="box-content">
            <form onSubmit={this.handleSubmit}>
    					<div className="text-center">
    						<h3 className="page-header">Login</h3>
    					</div>
    					<div className="form-group">
    						<label className="control-label">Username</label>
    						<input ref="email" placeholder="email" defaultValue="joe@example.com" className="form-control" />
    					</div>
    					<div className="form-group">
    						<label className="control-label">Password</label>
    						<input ref="pass" placeholder="password" type="password" className="form-control" />
    					</div>
    					<div className="text-center">
    						<button type="submit" className="btn btn-primary">Sign in</button>
    					</div>
            </form>
  				</div>
  			</div>
  		</div>
    );
  }
});

module.exports = Login;
