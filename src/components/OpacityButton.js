import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import { buttonStyles } from './../utils/Styles';

const OpacityButton = (props) =>
    (
        <TouchableOpacity
            style={buttonStyles.buttonStyle}
            onPress={props.onPress}
        >
            <Text style={buttonStyles.buttonText}>{props.text}</Text>
        </TouchableOpacity>
    );

export default OpacityButton;