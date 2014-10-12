/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var $ = require('jquery');
window.$ = $;
window.jQuery = $;

var auth = require('../utils/authentication.jsx');
var AuthenticatedRoute = require('../mixins/authenticated_route.jsx');


var SparkeLine = React.createClass({

  componentDidMount: function() {
    var myvalues = [10,8,5,7,4,4,1];
    var stacked_color = '#6AA6D6';
    var config = {type: 'bar', barWidth: 5, highlightColor: '#000', barSpacing: 2, height: 30, stackedBarColor: '#6AA6D6'};
    $(document).ready(function () {
      $('#sparklinetd').sparkline(myvalues, config);
    });
  },

  render: function() {
    return (
      <div className="col-xs-6 col-sm-4 col-md-4">
				<div className="sparkline-dashboard" id="sparklinetd"></div>
				<div className="sparkline-dashboard-info">
					<i className="fa fa-clock-o"></i> 0
					<span className="txt-info">Next 7 Days</span>
				</div>
			</div>
    );
  }
});


var Dashboard = React.createClass({
  mixins: [AuthenticatedRoute],

  render: function() {
    var token = auth.getToken();
    return (
      <div id="dashboard-header" className="row">
      	<div className="col-xs-10 col-sm-2">
      		<h3>DASHBOARD</h3>
      	</div>
        <div className="clearfix visible-xs"></div>
      	<div className="col-xs-12 col-sm-8 col-md-7 pull-right">
      		<div className="row">
      		  <div className="col-xs-0 col-sm-2 col-md-1"></div>
            <SparkeLine />
      			<div className="col-xs-0 col-sm-2 col-md-3"></div>
      		</div>
      	</div>
      </div>
    );
  }
});

module.exports = Dashboard;
