import React from 'react';
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

class LoginForm extends React.Component {
    state = {
      email: '',
      password: '',
    };

    render() {
      const { email, password } = this.state;
      const {
        error, onAnonymous,
        onLogin, onRegister,
      } = this.props;
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.backgroundStyle}>
            <View style={styles.viewStyle}>
              <OpacityButton text="Play without logging!" onPress={onAnonymous} />
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
                onChangeText={text => this.setState({ email: text })}
                placeholder="E-mail"
              />
              <TextInput
                style={styles.inputStyle}
                onChangeText={text => this.setState({ password: text })}
                secureTextEntry
                placeholder="Password"
              />
              <View style={styles.controlPanel}>
                <View style={styles.buttonsLayout}>
                  <OpacityButton text="Sign in" onPress={() => onLogin(email, password)} />
                  <OpacityButton text="Sign up" onPress={() => onRegister(email, password)} />
                </View>
                {!!error && <Error error={error} />}
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
    }
}


LoginForm.propTypes = {
  error: PropTypes.string.isRequired,
  onAnonymous: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};

export default LoginForm;
