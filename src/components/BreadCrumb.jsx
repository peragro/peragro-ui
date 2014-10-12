/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

var Router = require('react-router');
var Link = Router.Link;

var BreadCrumb = React.createClass({
  componentDidMount: function() {

    function MessagesMenuWidth(){
      var W = window.innerWidth;
      var W_menu = $('#sidebar-left').outerWidth();
      var w_messages = (W-W_menu)*16.666666666666664/100;
      $('#messages-menu').width(w_messages);
    }

    $(document).ready(function () {
      $('.show-sidebar').on('click', function (e) {
        e.preventDefault();
        $('div#main').toggleClass('sidebar-show');
        setTimeout(MessagesMenuWidth, 250);
      });
    });
  },


  render: function() {
    return (
      <div className="row">
    		<div id="breadcrumb" className="col-xs-12">
    			<a href="#" className="show-sidebar">
    				<i className="fa fa-bars"></i>
    			</a>
    			<ol className="breadcrumb pull-left">
    				<li><Link to="dashboard">Dashboard</Link></li>
    				<li><Link to="assets">Assets</Link></li>
    			</ol>
    		</div>
    	</div>
    );
  }

});

module.exports = BreadCrumb;
