import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, StatusBar, KeyboardAvoidingView  } from 'react-native';
import ErrorWindow from './ErrorWindow';
import buttonStyles from '../utils/Styles';

class LoginForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: props.error,
            onLogin: props.onLogin,
            onRegister: props.onRegister,
            email: null,
            password: null
        };
        console.log("constructor: " + this.state.error);
    }

    componentWillReceiveProps(newProps) {
        this.setState({error: newProps.error});
    }


    render(){
        const { inputStyle } = styles;
        return (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.backgroundStyle}>
                <Text style={{fontSize: 25, paddingVertical: 15}}>Welcome</Text>
                <StatusBar barStyle="light-content"/>
                <TextInput
                    style={inputStyle}
                    onChangeText={(email) => this.setState({email: email})}
                    placeholder={'E-mail'}/>
                <TextInput
                    style={inputStyle}
                    onChangeText={(password) => this.setState({password: password})}
                    secureTextEntry
                    placeholder={'Password'}/>
                <View style={styles.controlPanel}>
                    <View style={styles.buttonsLayout}>
                        <TouchableOpacity
                            style={buttonStyles.buttonStyle}
                            onPress={() =>
                                    this.state.onLogin(this.state.email, this.state.password)}>
                            <Text style={buttonStyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={buttonStyles.buttonStyle}
                            onPress={() =>
                                    this.state.onRegister(this.state.email, this.state.password)}>
                            <Text style={buttonStyles.buttonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    {this.shouldPrint(this.state.error) && this.renderError(this.state.error)}
                </View>
            </View>
             </KeyboardAvoidingView>
        );
    }

    renderError = (error) => <ErrorWindow error={error}/>;

    shouldPrint(error){
        if(!error)
            return false;
        if(error.code === 'auth/invalid-api-key'){
            console.log("[Error] " + error.message);
            return false;
        }
        return true;
    }
}

const styles = StyleSheet.create({
    controlPanel: {
        flexDirection: 'column'
    },
    buttonsLayout: {
        flexDirection: 'row'
    },
    inputStyle: {
        backgroundColor: '#95a5a6',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '70%',
        margin: 15
    },
    backgroundStyle: {
        //flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
});

export default LoginForm;
