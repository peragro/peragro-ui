/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var auth = require('../utils/authentication.jsx');
var AuthenticatedRoute = require('../mixins/authenticated_route.jsx');

var AssetStore = require('../stores/AssetStore.jsx');

var BreadCrumb = require('./BreadCrumb.jsx');

var Assets = React.createClass({
  mixins: [AuthenticatedRoute],

  getInitialState: function() {
    return {
      assets: AssetStore.getAssets(),
      loading: true
    };
  },

  componentWillMount: function () {
    AssetStore.init();
  },

  componentDidMount: function() {
    AssetStore.addChangeListener(this.update);
  },

  componentWillUnmount: function () {
    AssetStore.removeChangeListener(this.update);
  },

  update: function () {
    if (!this.isMounted()) {
      return;
    }

    this.setState({
      assets: AssetStore.getAssets(),
      loading: false
    });
  },

  render: function() {
    var token = auth.getToken();
    console.log(this.state.assets);
    var assets = this.state.assets.map(function(asset) {
      //return <li key={asset.id}><Link to="asset" params={asset}>{asset.subname}</Link></li>;
      return <ListAsset asset={asset} />;
    });
    return (
      <div className="container-fluid max-height">
        <BreadCrumb />
        <div className="row max-height">
          <div className="container max-height no-overflow">
            <div className="row max-height">

                <div className="col-xs-4  scrollable">
                        <ul>
                          <li>item 1</li>
                          <li>item 1</li>
                          <li>item 1</li>
                          <li>item 1</li>
                          <li>item 1</li>
                          <li>item 1</li>
                          <li>item 1</li>
                          <li>item 1</li>
                          <li>item 1</li>
                          <li>item 1</li>
                          <li>item 1</li>
                          <li>item 1</li>
                        </ul>
                </div>

                <div className="col-xs-8 scrollable">
                    <div className="pad40-top">
                        right sidebar contents
                    </div>
                </div>

            </div>
          </div>
		    </div>
      </div>
    );
  }
});

var ListAsset = React.createClass({

  render: function() {
    return (
      <li className="row one-list-asset" id="msg-one">
        <Link to="asset" params={this.props.asset}>
          <div className="col-xs-1 checkbox">
            <label>
              <input type="checkbox" />
              <i className="fa fa-square-o small"></i>
            </label>
          </div>
          <div className="col-xs-9 message-title">{this.props.asset.subname}</div>
          <div className="col-xs-2 message-date">12/31/13</div>
        </Link>
      </li>
    );
  }

});

module.exports = Assets;
