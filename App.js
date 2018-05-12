import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import MainScreen from './src/components/MainScreen';

export default class App extends React.Component {

    render() {
      return (
          <View>
              <Header headerText={'What If'}/>
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
