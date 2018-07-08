import React, { Component } from 'react';
import { auth } from 'firebase';
import {
  StyleSheet, TextInput, View, Text, StatusBar, KeyboardAvoidingView,
} from 'react-native';
import PropTypes from 'prop-types';

import OpacityButton from '../components/OpacityButton';
import Error from './Error';

const localColors = {
  lightWhite: '#D8D8D8',
};

const styles = StyleSheet.create({
  controlPanel: {
    flexDirection: 'column',
  },
  buttonsLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStyle: {
    backgroundColor: localColors.lightWhite,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '60%',
    margin: 15,
  },
  viewStyle: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: '10%',
    width: '100%',
  },
  backgroundStyle: {
    height: '100%',
    backgroundColor: localColors.lightWhite,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  signUpText: {
    fontSize: 25,
    paddingVertical: 15,
  },
  infoText: {
    fontSize: 15,
  },
});

class Login extends Component {
  state = {
    user: {
      email: '',
      password: '',
    },
    error: null,
  };

  componentDidMount() {
    this.authSubscription = auth().onAuthStateChanged((user) => {
      if (user) {
        this.navigate({ email: user.email });
      } else {
        this.setState({
          user: {
            email: '',
            password: '',
          },
        });
      }
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  onEmailChange = (email) => {
    const { user: { password } } = this.state;
    this.setState({ user: { email, password } });
  };

  onPasswordChange = (password) => {
    const { user: { email } } = this.state;
    this.setState({ user: { email, password } });
  };

  onLogin = async () => {
    const { user: { email, password } } = this.state;
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      this.setState({ error });
    }
  };

  onRegister = async () => {
    const { user: { email, password } } = this.state;

    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      this.setState({ error });
    }
  };

  onAnonymous = () => {
    this.navigate({ email: 'Guest' });
  };

  navigate = (user) => {
    const { navigation: { navigate } } = this.props;
    navigate('LoggedIn', { user });
  };

  render() {
    const { error } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.backgroundStyle}>
          <View style={styles.viewStyle}>
            <OpacityButton text="Play without logging!" onPress={this.onAnonymous} />
            <Text style={styles.signUpText}>
              Sign up/in
            </Text>
            <Text style={styles.infoText}>
              After logging you would see history of your plays
            </Text>
            <StatusBar barStyle="light-content" />
            <TextInput
              style={styles.inputStyle}
              keyboardType="email-address"
              onChangeText={this.onEmailChange}
              placeholder="E-mail"
            />
            <TextInput
              style={styles.inputStyle}
              onChangeText={this.onPasswordChange}
              secureTextEntry
              placeholder="Password"
            />
            <View style={styles.controlPanel}>
              <View style={styles.buttonsLayout}>
                <OpacityButton text="Sign in" onPress={this.onLogin} />
                <OpacityButton text="Sign up" onPress={this.onRegister} />
              </View>
              {!!error && <Error error={error} />}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
