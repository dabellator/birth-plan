import { combineReducers } from 'redux';
import testingPage from './testingPage';
import session from './session';

const appReducer = combineReducers ({
  testingPage,
  session
});

export default appReducer;
