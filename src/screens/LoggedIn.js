import React from 'react';
import {
  Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { auth } from 'firebase';

import buttonStyles from '../styles/Button';

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


function LoggedIn({ navigation }) {
  const { email } = navigation.getParam('user', { email: 'guest' });

  return (
    <View>
      <Text style={styles.welcomeText}>
        {`Hello ${email} !`}
      </Text>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => auth().signOut()}
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

LoggedIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoggedIn;
