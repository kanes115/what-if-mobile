import React, { Component } from 'react';
import { auth } from 'firebase';
import {
  StyleSheet, TextInput, View, Text, KeyboardAvoidingView, ImageBackground, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo';

import Error from './Error';
import buttonStyles from '../styles/Button';

const localColors = {
  lightWhite: '#D8D8D8',
  white: '#fff',
  black: '#000',
  red: '#E03E18',
  redGradient1: '#E93D13',
  redGradient2: '#DF3C16',
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  view: {
    display: 'flex',
    alignItems: 'center',
  },
  keyboardAvoidingView: {
    paddingTop: '10%',
    width: '100%',
  },
  logoView: {
    height: '40%',
    width: '100%',
    margin: '10% 0%',
  },
  logo: {
    width: '50%',
    height: '100%',
  },
  inputView: {
    width: '80%',
    borderBottomColor: localColors.black,
    borderBottomWidth: 2,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    fontSize: 20,
    color: localColors.white,
  },
  loginView: {
    height: 40,
    width: '80%',
  },
  loginButton: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    margin: 0,
  },
  signUpInfoView: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signUpInfoText: {
    fontSize: 20,
  },
  signUpInfoText1: {
    color: localColors.white,
    marginRight: 15,
  },
  signUpInfoText2: {
    color: localColors.red,
  },
});

class Login extends Component {
  state = {
    user: {
      email: '',
      password: '',
    },
    error: '',
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
          error: '',
        });
      }
    });
  }

  componentWillUnmount() {
    this.authSubscription();
  }

  onEmailChange = (email) => {
    const { user: { password } } = this.state;
    this.setState({ user: { email, password }, error: '' });
  };

  onPasswordChange = (password) => {
    const { user: { email } } = this.state;
    this.setState({ user: { email, password }, error: '' });
  };

  onLogin = async () => {
    const { user: { email, password } } = this.state;

    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      this.setState({ error });
    }
  };

  navigate = (user) => {
    const { navigation: { navigate } } = this.props;
    navigate('LoggedIn', { user });
  };

  render() {
    const { error } = this.state;
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./../../assets/background.png')}
      >
        <KeyboardAvoidingView behavior="padding" style={[styles.view, styles.keyboardAvoidingView]}>
          <View style={[styles.view, styles.logoView]}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require('./../../assets/logo.png')}
            />
          </View>
          <View style={[styles.view, styles.inputView]}>
            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              keyboardType="email-address"
              onChangeText={this.onEmailChange}
              placeholder="Email"
            />
          </View>
          <View style={[styles.view, styles.inputView]}>
            <TextInput
              style={styles.input}
              placeholderTextColor="white"
              onChangeText={this.onPasswordChange}
              secureTextEntry
              placeholder="Password"
            />
          </View>
          {!!error && <Error error={error} />}
          <View style={[styles.loginView]}>
            <LinearGradient colors={[localColors.redGradient1, localColors.redGradient2]}>
              <TouchableOpacity
                style={[styles.loginButton]}
                onPress={this.onLogin}
              >
                <Text style={buttonStyles.buttonText}>
                  LOGIN
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={[styles.view, styles.signUpInfoView]}>
            <Text style={[styles.signUpInfoText, styles.signUpInfoText1]}>
              No   account   yet?
            </Text>
            <Text
              style={[styles.signUpInfoText, styles.signUpInfoText2]}
              onPress={() => {
                const { navigation: { navigate } } = this.props;
                navigate('SignUp');
              }}
            >
              Sign   up!
            </Text>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
