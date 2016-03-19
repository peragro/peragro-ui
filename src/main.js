import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRedirect, IndexRoute } from 'react-router'

import NoneSelected from './components/NoneSelected'
import NotFound from './components/NotFound'
import App from './components/App'
import Login from './components/Login'
import Logout from './components/Logout'
import Dashboard from './components/Dashboard'
import Asset from './components/Asset'
import Assets from './components/Assets'
import ReferenceTasks from './components/ReferenceTasks'
import ReferenceTask from './components/ReferenceTask'

import auth from './utils/auth'


render((
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={App}>
        <IndexRedirect to="dashboard"/>
        <Route path="login" component={Login} />
        <Route path="logout" component={Logout} />
        <Route path="dashboard" name="Dashboard" component={Dashboard} onEnter={requireAuth}/>
        <Route name="Assets" path="assets" component={Assets} onEnter={requireAuth}>
          <IndexRoute component={NoneSelected} />
          <Route name="Asset" path=":id" component={Asset} />
          <Route path="*" component={NotFound} alt="404as"/>
        </Route>
        <Route name="Tasks" path="tasks" component={ReferenceTasks}>
          <IndexRoute component={NoneSelected} />
          <Route name="Task" path=":id" component={ReferenceTask} alt="Task" />
          <Route path="*" component={NotFound} alt="404as"/>
        </Route>
    </Route>
  </Router>
), document.getElementById('application'))

function requireAuth(nextState, replace) {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
