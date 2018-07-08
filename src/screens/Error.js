import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const localColors = {
  warningRed: '#e74c3c',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: localColors.warningRed,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  errorText: {
    fontSize: 11,
  },
});

const transformMessage = ({ message, code }) => {
  if (code === 'auth/network-request-failed') return 'Internet connection issues';
  if (code === 'auth/user-disabled') return 'You have been banned';
  if (code === 'auth/user-not-found') return 'User does not exits';
  return message;
};


const ErrorWindow = ({ error }) => (
  <View style={styles.container}>
    <Text style={styles.errorText}>
      {transformMessage(error)}
    </Text>
  </View>
);

ErrorWindow.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
  }).isRequired,
};

export default ErrorWindow;
