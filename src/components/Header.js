import React from 'react';
import { Text, View } from 'react-native';


const localColors = {
  lightblue: '#2980b6',
  black: '#000',
  white: '#fff',
};

const styles = {
  viewStyle: {
    backgroundColor: localColors.lightblue,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    paddingTop: 15,
    shadowColor: localColors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    color: localColors.white,
    fontSize: 25,
  },
};

const Header = () => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>
      {'What If'}
    </Text>
  </View>
);


export default Header;
