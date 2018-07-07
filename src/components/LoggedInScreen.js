import React from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import * as firebase from 'firebase';
import PropTypes from 'prop-types';
import buttonStyles from '../utils/Styles';

const localColors = {
  white: '#FFF',
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: localColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  welcomeText: {
    fontSize: 30,
  },
});


class LoggedInScreen extends React.Component {
  onLogout = () => {
    const { auth } = firebase;
    const { onLogout } = this.props;
    auth().signOut();
    onLogout();
  };


  render() {
    const { user: { email } } = this.props;
    return (
      <View>
        <Text style={styles.welcomeText}>
          {`Hello ${email} !`}
        </Text>
        <View style={styles.navbar}>
          <TouchableOpacity
            onPress={this.onLogout}
            style={buttonStyles.buttonStyle}
          >
            <Text style={buttonStyles.buttonText}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

LoggedInScreen.propTypes = {
  user: PropTypes.shape({ email: PropTypes.string }).isRequired,
  onLogout: PropTypes.func.isRequired,
};


export default LoggedInScreen;
