import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyDi78kw6k8mj7D0ePpGemoJV-l6sGFL2vs',
    authDomain: 'authentification-6cd2c.firebaseapp.com',
    databaseURL: 'https://authentification-6cd2c.firebaseio.com',
    storageBucket: 'authentification-6cd2c.appspot.com',
    messagingSenderId: '651556818486'
  });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentification' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
