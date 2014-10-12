/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');
var SideBar = require('../components/Sidebar.jsx');
var TopBar = require('../components/Topbar.jsx');

var DefaultLayout = React.createClass({
  render: function () {
    return (
      <div>
        <TopBar />
        <div id="main" className="container-fluid">
          <div className="row">
            <SideBar />
            <div id="content" className="col-xs-12 col-sm-10 full-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DefaultLayout;
