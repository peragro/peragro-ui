/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

var auth = require('../../utils/authentication.jsx');
var AuthenticatedRoute = require('../../mixins/authenticated_route.jsx');

var ReferenceTaskStore = require('../../stores/ReferenceTaskStore.jsx');

var BreadCrumb = require('../BreadCrumb.jsx');

var ReferenceTasks = React.createClass({
  mixins: [AuthenticatedRoute, Reflux.listenTo(ReferenceTaskStore, "update")],

  getInitialState: function() {
    return {
      tasks: ReferenceTaskStore.getAll(),
      loading: true
    };
  },

  update: function (tasks) {
    if (!this.isMounted()) {
      return;
    }

    this.setState({
      tasks: tasks,
      loading: false
    });
  },

  render: function() {
    var token = auth.getToken();
    //console.log(this.state.assets);
    var assets = this.state.tasks.map(function(asset, i) {
      //return <li key={asset.id}><Link to="asset" params={asset}>{asset.subname}</Link></li>;
      return <ListAsset key={i} asset={asset} />;
    });
    return (
      <div className="container-fluid">
        <BreadCrumb />
            <div className="row">

                <div className="col-xs-4  scrollable">
                        <ul>
                          {assets}
                        </ul>
                </div>

                <div className="col-xs-8 full-calendar">
                    <this.props.activeRouteHandler />
                </div>
         </div>
      </div>
    );
  }
});

var ListAsset = React.createClass({

  render: function() {
    return (
      <li className="row one-list-asset" id="msg-one">
        <Link to="task" params={this.props.asset}>
          <div className="col-xs-1 checkbox">
            <label>
              <input type="checkbox" />
              <i className="fa fa-square-o small"></i>
            </label>
          </div>
          <div className="col-xs-9 message-title">{this.props.asset.subname}</div>
          <div className="col-xs-2 message-date">12/31/13</div>
        </Link>
      </li>
    );
  }

});

module.exports = ReferenceTasks;
