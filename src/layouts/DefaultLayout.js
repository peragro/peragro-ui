import React from 'react'
import SideBar from '../components/SideBar'
import TopBar from '../components/TopBar'

export default React.createClass({
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
