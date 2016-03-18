import React from 'react'
import Reflux from 'reflux'

const AssetStore = require('../stores/AssetStore');

import Tabs from './Tabs'

export default React.createClass({
  displayName: 'Asset',
  mixins: [Reflux.listenTo(AssetStore, 'update')],

  update: function () {
    if (!this.isMounted()) return;
    this.setState(this.getStateFromStore());
  },

  getStateFromStore: function(props) {
    props = props || this.props;
    return {
      asset: AssetStore.getAsset(props.params.id) || {}
    };
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState(this.getStateFromStore(nextProps));
  },
  render: function() {
    var url = this.state.asset.url || '';
    var tabs = [
      {title: 'Activity', content: 'Activity'},
      {title: 'Task', content: 'Task'},
      {title: 'Revisions', content: 'Revisions'},
      {title: 'Comments', content: 'Comments'},
    ];
    return (
      <div>
        <Row>
          <Column size={4}>
            <Preview url={url+'preview'} />
          </Column>
          <Column size={8}>
            <Details asset={this.state.asset} />
          </Column>
        </Row>
        <Row>
          <Column size={12}>
            <Tabs tabs={tabs}/>
          </Column>
        </Row>
      </div>
    );
  }

});


const Row = React.createClass({
  render: function() {
    return (
      <div className="row">
        {this.props.children}
      </div>
    );
  }
});

export const Column = React.createClass({
  render: function() {
    //col-sm-12 col-md-12 col-lg-6
    return (
      <div className={'col-lg-'+this.props.size}>{this.props.children}</div>
    );
  }
});


export const Preview = React.createClass({

  render: function() {
    return (
      <div><img src={this.props.url} alt="Preview" /></div>
    );
  }

});

export const Details = React.createClass({

  render: function() {
    return (
      <div>Details</div>
    );
  }

});
