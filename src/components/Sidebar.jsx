/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var Router = require('react-router');
var Link = Router.Link;


var Entry = React.createClass({

  render: function() {
    var icon = "fa fa-"+this.props.icon;
    return (
      <Link className="ajax-link" to={this.props.to}>
        <i className={icon}></i>
        <span className="hidden-xs">{this.props.name}</span>
      </Link>
    );
  }

});


var SideBar = React.createClass({

  render: function() {
    return (
      <div id="sidebar-left" className="col-xs-2 col-sm-2">
        <ul className="nav main-menu">
          <li>
            <Entry to="dashboard" name="Dashboard" icon="dashboard"/>
            <Entry to="assets" name="Assets" icon="file-image-o"/>
          </li>
        </ul>
      </div>
    );
  }

});

module.exports = SideBar;
