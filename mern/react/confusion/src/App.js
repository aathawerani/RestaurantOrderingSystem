import React, { Component } from 'react';
import logo from './logo.svg';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { configStore } from './redux/configureStore';

const store = configStore();

class App extends Component {

  
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
}
}

export default App;