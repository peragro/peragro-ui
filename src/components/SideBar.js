import React from 'react'

import { Link } from 'react-router'

const Entry = React.createClass({

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


export default React.createClass({

  render: function() {
    return (
      <div id="sidebar-left" className="col-xs-2 col-sm-2">
        <ul className="nav main-menu">
          <li>
            <Entry to="dashboard" name="Dashboard" icon="dashboard"/>
            <Entry to="assets" name="Assets" icon="file-image-o"/>
            <Entry to="tasks" name="Tasks" icon="file-image-o"/>
          </li>
        </ul>
      </div>
    );
  }

});
