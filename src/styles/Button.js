import { StyleSheet } from 'react-native';

const localColors = {
  lightblue: '#2980b6',
  white: '#fff',
};


export default StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: 45,
    margin: 15,
    padding: 10,
  },
  buttonText: {
    color: localColors.white,
    textAlign: 'center',
    fontWeight: '700',
  },
});
