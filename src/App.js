import React, { Component } from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import ClientList from './Clients';
import { store } from './redux/store';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">With You</h1>
            </header>
            <p className="App-intro">
                I'd like to see a client list, please
            </p>
            <ClientList></ClientList>
          </div>
        </Provider>
    );
  }
}

export default App;
