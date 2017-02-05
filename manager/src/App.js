import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hallo
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
