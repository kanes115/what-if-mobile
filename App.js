import React, { Component}  from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './src/screens/Main';

export default class App extends Component {
    render() {
      return (
          <View>
              <MainScreen error={null}/>
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
