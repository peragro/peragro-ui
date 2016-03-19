import React from 'react'

export default React.createClass({
  getDefaultProps: function() {
    return {
        tabs: [
            {title: 'first', content: 'Content 1'},
            {title: 'second', content: 'Content 2'}
          ],
          active: 0
        };
  },
  getInitialState: function() {
    return {active: this.props.active?this.props.active:0};
  },
  componentWillReceiveProps: function(nextProps) {
    this.state.active = nextProps.active?nextProps.active:0;
    this.setState(this.state);
  },
  render: function() {
    return <div className="ui-tabs ui-widget ui-widget-content ui-corner-all">
        <TabsPane items={this.props.tabs} active={this.state.active} onTabClick={this.handleTabClick}/>
        <TabsContent items={this.props.tabs} active={this.state.active}/>
    </div>;
  },
  handleTabClick: function(index) {
    this.setState({active: index});
  }
});



const TabsPane = React.createClass({
  render: function() {
    var active = this.props.active;
    var items = this.props.items.map(function(item, index) {
      return <li key={index} className={'ui-state-default ui-corner-top ' + (active == index ? 'ui-tabs-active ui-state-active' : '')}>
      <a  className='ui-tabs-anchor' href="#"  onClick={this.onClick.bind(this, index)}>
        {item.title}
      </a></li>;
    }.bind(this));
    return <ul className="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">{items}</ul>;
  },
  onClick: function(index, event) {
    event.preventDefault();
    this.props.onTabClick(index);
  }
});

const TabsContent = React.createClass({
  render: function() {
    var active = this.props.active;
    var items = this.props.items.map(function(item, index) {
      var style = {display: active == index ? 'block' : 'none'};
      return <div key={index} className={'ui-tabs-panel ui-widget-content ui-corner-bottom ' + (active == index ? 'tabs-panel_selected' : '')} style={style}>{item.content}</div>;
    });
    return <div className="tabsSwitcher-content">{items}</div>;
  }
});
