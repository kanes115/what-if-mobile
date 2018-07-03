import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class ErrorWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(newProps){
        this.setState({error: newProps.error});
    }

    render() {
        console.log("error code: " + this.state.error.code);
        return (
            <View style={styles.viewStyle}>
                <Text style={{fontSize: 11}}>
                    {ErrorWindow.transformMessage(this.state.error)}
                </Text>
            </View>
            );
    }

    static transformMessage({message, code}){
        if(code === 'auth/network-request-failed')
            return 'Internet connection issues';
        if(code === 'auth/user-disabled')
            return 'You have been banned'
        if(code === 'auth/user-not-found')
            return 'User does not exits';
        return message;
    }
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#e74c3c',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    }
});

export default ErrorWindow;
