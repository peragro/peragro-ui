import React from 'react'
import Reflux from 'reflux'
import { Link } from 'react-router'

import auth from '../utils/auth'

import ReferenceTaskStore from '../stores/ReferenceTaskStore'

import BreadCrumb from './BreadCrumb'

import {ListAsset} from './Assets'

export default React.createClass({
  mixins: [Reflux.listenTo(ReferenceTaskStore, "update")],

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
        <BreadCrumb routes={this.props.routes}/>
            <div className="row">

                <div className="col-xs-4  scrollable">
                        <ul>
                          {assets}
                        </ul>
                </div>

                <div className="col-xs-8 full-calendar">
                    {this.props.children}
                </div>
         </div>
      </div>
    );
  }
});
