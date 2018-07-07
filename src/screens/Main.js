import React from 'react';
import { auth, initializeApp } from 'firebase';
// eslint-disable-next-line
import {
  apiKey, authDomain, databaseURL,
  storageBucket, messagingSenderId,
  projectId,
} from 'react-native-dotenv';
import LoginForm from './Login';
import LoggedInScreen from './LoggedIn';

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  messagingSenderId,
  projectId,
};

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    initializeApp(firebaseConfig);
    this.state = {
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.authSubscription = auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user,
      });
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }


    onLogin = async (email, password) => {
      try {
        await auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        this.setState({ error });
      }
    };

    onRegister = async (email, password) => {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
      } catch (error) {
        this.setState({ error });
      }
    };

    onAnonymous = async () => {
      this.setState({ user: { email: 'Guest' } });
    };

    onLogout = () => {
      this.setState({ error: null, user: null });
    };

    render() {
      const { loading, user, error } = this.state;
      if (loading) return null;
      if (user) {
        return (
          <LoggedInScreen
            onLogout={this.onLogout}
            user={user}
          />
        );
      }
      return (
        <LoginForm
          onLogin={this.onLogin}
          onRegister={this.onRegister}
          onAnonymous={this.onAnonymous}
          error={error}
        />
      );
    }
}

export default MainScreen;
