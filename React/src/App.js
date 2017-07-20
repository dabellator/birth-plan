import React, { Component } from 'react';
import TestingPage from './Containers/TestingPage';
import { Provider } from 'react-redux';
import store from './Services/Store';

class App extends Component {

  render() {
    console.log("store", store)
    return (
      <div className="App">
        <Provider store={store}>
          <TestingPage />
        </Provider>
      </div>
    )
  }
}

export default App;
