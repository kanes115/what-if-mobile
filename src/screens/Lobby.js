/* eslint-disable indent */
import React, { Component } from 'react';
import {
  Text, FlatList, View,
} from 'react-native';


class Lobby extends Component {
    state = {
      user: {
        email: '',
        password: '',
      },
      error: null,
    };

    getRooms() {
        return [{ key: 'pokoj franczaka' }, { key: 'pokoj ignasika' }]; // TODO implement
    }

    render() {
        const { navigation } = this.props;
        const { email } = navigation.getParam('user', { email: 'Guest' });

        return (
          <View>
            <Text>
                Hello
              {' '}
              {email}
            </Text>
            <FlatList
              data={this.getRooms()}
              renderItem={({ item }) => (
                <Text>
                  {item.key}
                </Text>
              )}
            />
          </View>
        );
    }
}

export default Lobby;
