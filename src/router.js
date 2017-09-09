import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route } from 'react-router'
import { Provider } from 'react-redux';
import store from './Services/Store';
import './index.css';

import App from './Containers/App';
import AccountVerification from './Containers/AccountVerification';
import ViewPlan from './Containers/ViewPlan';
import EditPlan from './Containers/EditPlan';
import Settings from './Containers/Settings';
import Share from './Containers/Share';

import { fetchAll } from './Actions/session';
import Api from './Services/Api';

function init () {
  render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <Route path='/login' component={AccountVerification} />
          <Route path='/sign-up' component={AccountVerification} />
          <Route path='/forgot-password' component={AccountVerification} />
          <Route path='/view' component={ViewPlan} />
          <Route path='/edit' component={EditPlan} />
          <Route path='/settings' component={Settings} />
          <Route path='/share' component={Share} />
        </Route>
      </Router>
    </Provider>
    , document.getElementById('root')
  );
}

export function initRouter () {
  init();
}
