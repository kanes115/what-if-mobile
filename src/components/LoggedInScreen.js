import React from 'react';
import { Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import * as firebase from 'firebase';
import { get } from '../utils/HttpRequestHelper';

class LoggedInScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = props;
    }

    onLogout = () => {
        firebase.auth().signOut();
        this.state.onLogout();
    }

    onTest = async () => {
        const res = await get('/test');
        console.log("status: " + res.status);
        if(res.status === 200)
            console.log(await res.json());
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
                <TouchableOpacity onPress={this.onTest}>
                    <Text>
                        Test
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

}

export default LoggedInScreen;
