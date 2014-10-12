/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var TopBar = React.createClass({

  render: function() {
    return (
      <div>
        <div id="screensaver">
	<canvas id="canvas"></canvas>
	<i className="fa fa-lock" id="screen_unlock"></i>
</div>
<div id="modalbox">
	<div className="devoops-modal">
		<div className="devoops-modal-header">
			<div className="modal-header-name">
				<span>Basic table</span>
			</div>
			<div className="box-icons">
				<a className="close-link">
					<i className="fa fa-times"></i>
				</a>
			</div>
		</div>
		<div className="devoops-modal-inner">
		</div>
		<div className="devoops-modal-bottom">
		</div>
	</div>
</div>
<header className="navbar">
	<div className="container-fluid expanded-panel">
		<div className="row">
			<div id="logo" className="col-xs-12 col-sm-2">
				<a href="">Peragro-UI</a>
			</div>
			<div id="top-panel" className="col-xs-12 col-sm-10">
				<div className="row">
					<div className="col-xs-8 col-sm-4">
						<a href="#" className="show-sidebar">
						  <i className="fa fa-bars"></i>
						</a>
						<div id="search">
							<input type="text" placeholder="search"/>
							<i className="fa fa-search"></i>
						</div>
					</div>
					<div className="col-xs-4 col-sm-8 top-panel-right">
						<ul className="nav navbar-nav pull-right panel-menu">
							<li className="hidden-xs">
								<a href="ajax/loader.php?page=notifications" className="ajax-link">
									<i className="fa fa-bell"></i>
									<span className="badge">0</span>
								</a>
							</li>
							<li className="hidden-xs">
								<a className="ajax-link" href="ajax/calendar.html">
									<i className="fa fa-calendar"></i>
									<span className="badge">0</span>
								</a>
							</li>
							<li className="hidden-xs">
								<a href="ajax/page_messages.html" className="ajax-link">
									<i className="fa fa-envelope"></i>
									<span className="badge">0</span>
								</a>
							</li>
							<li className="dropdown">
								<a href="#" className="dropdown-toggle account" data-toggle="dropdown">
									<div className="avatar">
										<img src="assets/img/avatar.jpg" className="img-rounded" alt="avatar" />
									</div>
									<i className="fa fa-angle-down pull-right"></i>
									<div className="user-mini pull-right">
										<span className="welcome">Welcome,</span>
										<span>username</span>
									</div>
								</a>
								<ul className="dropdown-menu">
									<li>
										<a href="#">
											<i className="fa fa-user"></i>
											<span className="hidden-sm text">Profile</span>
										</a>
									</li>
									<li>
										<a href="#">
											<i className="fa fa-cog"></i>
											<span className="hidden-sm text">Settings</span>
										</a>
									</li>
									<li>
										<Link to="logout">
											<i className="fa fa-power-off"></i>
											<span className="hidden-sm text">Logout</span>
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
      </div>
    );
  }

});

module.exports = TopBar;
