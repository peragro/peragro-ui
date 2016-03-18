import React from 'react'
import Reflux from 'reflux'

var ReferenceTaskStore = require('../stores/ReferenceTaskStore');

import Tabs  from './Tabs'
import { Column, Row, Preview, Details } from './Assets'

export default React.createClass({
  displayName: 'ReferenceTask',
  mixins: [Reflux.listenTo(ReferenceTaskStore, 'update')],

  update: function () {
    if (!this.isMounted()) return;
    this.setState(this.getStateFromStore());
  },

  getStateFromStore: function(props) {
    props = props || this.props;
    return {
      asset: ReferenceTaskStore.get(props.params.id) || {references:[{}]}
    };
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState(this.getStateFromStore(nextProps));
  },
  render: function() {
    var url = this.state.asset.references[0].url || '';
    console.log(url);
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
