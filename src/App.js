import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import TestingPage from './Containers/TestingPage';
import store from './Services/Store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <TestingPage />
        </Provider>
      </div>
    );
  }
}

export default App;
