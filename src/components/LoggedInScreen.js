import React from 'react';
import { Text, View, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';
import { auth } from 'firebase';

import { get } from '../utils/HttpRequestHelper';
import { buttonStyles } from '../utils/Styles';

class LoggedInScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = props;
    }

    onLogout = () => {
        auth().signOut();
        this.state.onLogout();
    };

    onTest = async () => {
        const res = await get('/test');
        console.log("status: " + res.status);
        if(res.status === 200)
            console.log(await res.json());
    };



    render(){
        return (
            <View>
                <Text style={{fontSize: 30}}>
                    Hello { this.state.user.email }!
                </Text>
                <View style={styles.navbar}>
                    <TouchableOpacity 
                        onPress={this.onLogout}
                        style={buttonStyles.buttonStyle}>
                        <Text style={buttonStyles.buttonText}>
                            Logout
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={this.onTest}
                        style={buttonStyles.buttonStyle}>
                        <Text style={buttonStyles.buttonText}>
                            Test
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

export default LoggedInScreen;
