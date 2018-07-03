import React, { Component}  from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import MainScreen from './src/components/MainScreen';

export default class App extends Component {
    render() {
      return (
          <View>
              <Header/>
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
