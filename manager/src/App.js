import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyDnL38ygcr5Ts5tbw0VQ4rIH9S9nEBn-0Y',
    authDomain: 'manager-66796.firebaseapp.com',
    databaseURL: 'https://manager-66796.firebaseio.com',
    storageBucket: 'manager-66796.appspot.com',
    messagingSenderId: '28653751141'
  };
  firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
