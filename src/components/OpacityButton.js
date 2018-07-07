import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import buttonStyles from '../utils/Styles';

const OpacityButton = ({ onPress, text }) => (
  <TouchableOpacity
    style={buttonStyles.buttonStyle}
    onPress={onPress}
  >
    <Text style={buttonStyles.buttonText}>
      { text }
    </Text>
  </TouchableOpacity>
);

OpacityButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default OpacityButton;
