/** @jsx React.DOM */

(function() {
  'use strict';

  var React = require('react');
  var Router = require('react-router');
  var Route = Router.Route;
  var Routes = Router.Routes;
  var DefaultRoute = Router.DefaultRoute;
  var NotFoundRoute = Router.NotFoundRoute;
  var Link = Router.Link;


  var App = require('./components/App.jsx');
  var Login = require('./components/Login.jsx');
  var Dashboard = require('./components/Dashboard.jsx');
  var Logout = require('./components/Logout.jsx');


  var Assets = require('./components/Assets.jsx');


  var Asset = React.createClass({
    render: function() {
      return <h1>Asset {this.props.params.id}</h1>;
    }
  });

  var NotFound = React.createClass({
    render: function() {
      return <h1>AssetNotFound</h1>;
    }
  });

  var routes = (
    <Routes>
      <Route handler={App}>
        <DefaultRoute handler={Dashboard} />
        <Route name="login" handler={Login}/>
        <Route name="logout" handler={Logout}/>
        <Route name="dashboard" handler={Dashboard}/>
        <Route name="assets" handler={Assets}>
          <Route name="asset" path="/assets/:id" handler={Asset} />
          <NotFoundRoute handler={NotFound}/>
        </Route>
        <NotFoundRoute handler={NotFound}/>
      </Route>
    </Routes>
  );

  React.renderComponent(routes, document.getElementById('application'));

}());
