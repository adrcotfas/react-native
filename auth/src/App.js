import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDi78kw6k8mj7D0ePpGemoJV-l6sGFL2vs',
      authDomain: 'authentification-6cd2c.firebaseapp.com',
      databaseURL: 'https://authentification-6cd2c.firebaseio.com',
      storageBucket: 'authentification-6cd2c.appspot.com',
      messagingSenderId: '651556818486'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentification' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
