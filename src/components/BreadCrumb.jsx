/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var BreadCrumb = React.createClass({
  mixins: [Router.ActiveState],
  componentDidMount: function() {

    function MessagesMenuWidth(){
      var width = window.innerWidth;
      var widthMenu = $('#sidebar-left').outerWidth();
      var widthMessages = (width-widthMenu)*16.666666666666664/100;
      $('#messages-menu').width(widthMessages);
    }

    $(document).ready(function () {
      $('.show-sidebar').on('click', function (e) {
        e.preventDefault();
        $('div#main').toggleClass('sidebar-show');
        setTimeout(MessagesMenuWidth, 250);
      });
    });
  },

/*
  render: function() {
    return (
      <div className="row">
    		<div id="breadcrumb" className="col-xs-12">
    			<ol className="breadcrumb pull-left">
    				<li><Link to="dashboard">Dashboard</Link></li>
    				<li><Link to="assets">Assets</Link></li>
    			</ol>
    		</div>
    	</div>
    );
  }
  */
  getCrumbRoutes: function () {
    return this.getActiveRoutes().filter(function (r) { return !r.props.isDefault; });
  },
  render: function() {
    var crumbs = [];
    var routes = this.getCrumbRoutes();

    routes.forEach(function (route, i, arr) {
      var name = route.props.alt || route.props.handler.displayName;
      var link = name;
      if (i != arr.length-1) {
        link = <Link to={route.props.path}>{name}</Link>;
      }
      crumbs.push(
        <li key={route.props.path+''+crumbs.length}>
          {link}
        </li>
      );
      //console.log(route);
    });
    return (
      <div className="row">
        <div id="breadcrumb" className="col-xs-12">
          <ol className="breadcrumb pull-left">{crumbs}</ol>
        </div>
      </div>
      );
  }

});

module.exports = BreadCrumb;
