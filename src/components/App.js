import React from 'react'
import auth from '../utils/auth'

import DefaultLayout from '../layouts/DefaultLayout'

import GlobalActions from '../actions/GlobalActions'

export default React.createClass({
    getInitialState() {
      return {
        loggedIn: auth.loggedIn()
      }
    },

    updateAuth(loggedIn) {
      this.setState({
        loggedIn: loggedIn
      })
    },

    componentWillMount() {
      auth.onChange = this.updateAuth
      auth.login()
      this.interval = setInterval(this.tick, 5000)
    },

    componentWillUnmount: function() {
      clearInterval(this.interval);
    },

    tick: function() {
      console.log('ticking...');
      GlobalActions.tick(this);
    },

    render: function() {
      return this.state.loggedIn ? (
        <DefaultLayout>
          {this.props.children}
        </DefaultLayout>
    ): (<div>{this.props.children}</div>)
    }
});
