import React, { Component}  from 'react';
import { StyleSheet, View } from 'react-native';
import { initializeApp } from 'firebase';

import {
    apiKey, authDomain, databaseURL,
    storageBucket, messagingSenderId,
    projectId,
} from 'react-native-dotenv';

import Navigator from './src/components/Navigator';

export default class App extends Component {
    constructor(props){
        super(props);

        initializeApp({
            apiKey,
            authDomain,
            databaseURL,
            storageBucket,
            messagingSenderId,
            projectId,
        });
    }

    render() {
      return (
          <Navigator />
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
