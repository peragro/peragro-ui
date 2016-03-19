import React from 'react'
import Reflux from 'reflux'
import { Link } from 'react-router'

var NotificationStore = require('../stores/NotificationStore.js');
import auth from '../utils/auth'

const Badge = React.createClass({
  render: function() {
    var className = 'fa fa-'+this.props.icon;
    return (
    <li className="hidden-xs">
      <Link to={this.props.to}>
        <i className={className}></i>
        <span className="badge">{this.props.count}</span>
      </Link>
    </li>);
  }
});

var storeStateFunctionMixin = function (listenable,key,func) {
  return {
    getInitialState: function() {
      var state = {};
      state[key] = listenable[func]();
      return state;
    },
    componentDidMount: function(){
      for(var m in Reflux.ListenerMethods){
        if (this[m] !== Reflux.ListenerMethods[m]){
          if (this[m]){
            throw "Can't have other property '"+m+"' when using Reflux.listenTo!";
          }
          this[m] = Reflux.ListenerMethods[m];
        }
      }
      var me = this, cb = function(){ var state = {}; state[key] = listenable[func](); me.setState(state);};
      this.listenTo(listenable,cb,cb);
    },
    componentWillUnmount: Reflux.ListenerMixin.componentWillUnmount
  };
};

const NotificationBadge = React.createClass({
  //mixins: [Reflux.listenTo(NotificationStore, 'update')],
  mixins: [storeStateFunctionMixin(NotificationStore, 'count', 'getUnreadNotifications')],

  render: function() {
    return (<Badge to="assets" icon="bell" count={this.state.count} />);
  },
});

export default React.createClass({

  render: function() {
    return (
<header className="navbar">
	<div className="container-fluid expanded-panel">
		<div className="row">
			<div id="logo" className="col-xs-12 col-sm-2">
				<a href="">Peragro-UI</a>
			</div>
			<div id="top-panel" className="col-xs-12 col-sm-10">
				<div className="row">
					<div className="col-xs-8 col-sm-4">
						<a className="show-sidebar">
						  <i className="fa fa-bars"></i>
						</a>
						<div id="search">
							<input type="text" placeholder="search"/>
							<i className="fa fa-search"></i>
						</div>
					</div>
					<div className="col-xs-4 col-sm-8 top-panel-right">
						<ul className="nav navbar-nav pull-right panel-menu">
							<NotificationBadge />
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
    );
  }

});
