import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

class LoggedInScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = props;
    }

    onLogout = () => {
        firebase.auth().signOut();
        this.state.onLogout();
    }

    render(){
        return (
            <View>
                <Text style={{fontSize: 30}}>
                    Logged in!
                </Text>
                <TouchableOpacity onPress={this.onLogout}>
                    <Text>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default LoggedInScreen;
