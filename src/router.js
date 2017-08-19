import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './Services/Store';
import './index.css';

import AccountVerification from './Containers/AccountVerification';
import ViewPlan from './Containers/ViewPlan';
import EditPlan from './Containers/EditPlan';
import Settings from './Containers/Settings';
import Share from './Containers/Share';


function init () {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Route path='/login' component={AccountVerification} />
          <Route path='/sign-up' component={AccountVerification} />
          <Route path='/forgot-password' component={AccountVerification} />
          <Route path='/view' component={ViewPlan} />
          <Route path='/edit' component={EditPlan} />
          <Route path='/settings' component={Settings} />
          <Route path='/share' component={Share} />
        </div>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root')
  );
}

export function initRouter () {
  init();
}
