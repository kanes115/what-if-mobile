import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) =>
    (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{'What If'}</Text>
        </View>
    );

const styles = {
    viewStyle: {
        backgroundColor: '#2980b6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {height: 2, width: 0},
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        color: "#fff",
        fontSize: 25
    }
};

export default Header;
