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
  var Asset = require('./components/Asset.jsx');

  var ReferenceTasks = require('./components/reference-tasks');

  var NotFound = React.createClass({
    render: function() {
      return <h1>AssetNotFound</h1>;
    }
  });

  var NoneSelected = React.createClass({
    render: function() {
      return <h1>Please select</h1>;
    }
  });

  var routes = (
    <Routes>
      <Route  path="/" handler={App} alt="Home">
        <DefaultRoute handler={Dashboard} />
        <Route name="login" handler={Login}/>
        <Route name="logout" handler={Logout}/>
        <Route name="dashboard" handler={Dashboard}/>
        <Route name="assets" path="assets" handler={Assets}>
          <Route name="asset" path=":id" handler={Asset} />
          <NotFoundRoute handler={NotFound} alt="404as"/>
          <DefaultRoute handler={NoneSelected} />
        </Route>
        <Route name="tasks" path="tasks" handler={ReferenceTasks.ReferenceTasks}>
          <Route name="task" path=":id" handler={ReferenceTasks.ReferenceTask} alt="Task" />
          <NotFoundRoute handler={NotFound} alt="404task"/>
          <DefaultRoute handler={NoneSelected} />
        </Route>
        <NotFoundRoute handler={NotFound} alt="404"/>
      </Route>
    </Routes>
  );

  React.renderComponent(routes, document.getElementById('application'));

}());
