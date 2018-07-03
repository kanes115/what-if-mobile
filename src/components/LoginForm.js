import React from 'react';
import { StyleSheet, TextInput, View, Text, StatusBar, KeyboardAvoidingView  } from 'react-native';

import OpacityButton from './OpacityButton';
import ErrorWindow from './ErrorWindow';

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: props.error,
            email: '',
            password: '',
        };
    }

    componentWillReceiveProps(newProps) {
        this.setState({ error: newProps.error });
    }

    render(){
        const { inputStyle } = styles;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.backgroundStyle}>
                    <View style={styles.viewStyle}>
                        <OpacityButton text="Play without logging!" onPress={() => this.props.onAnonymous()}/>
                        <Text style={{fontSize: 25, paddingVertical: 15}}>Sign up/in</Text>
                        <Text style={{fontSize: 15}}>After logging you would see history of your plays</Text>
                        <StatusBar barStyle="light-content"/>
                        <TextInput
                            style={inputStyle}
                            keyboardType={'email-address'}
                            onChangeText={(email) => this.setState({email: email})}
                            placeholder={'E-mail'}
                        />
                        <TextInput
                            style={inputStyle}
                            onChangeText={(password) => this.setState({password: password})}
                            secureTextEntry
                            placeholder={'Password'}
                        />

                        <View style={styles.controlPanel}>
                            <View style={styles.buttonsLayout}>
                                <OpacityButton text="Sign in" onPress={() => this.props.onLogin(this.state.email, this.state.password)}/>
                                <OpacityButton text="Sign up" onPress={() => this.props.onRegister(this.state.email, this.state.password)}/>
                            </View>
                            {this.shouldPrint(this.state.error) && this.renderError(this.state.error)}
                        </View>
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
        flexDirection: 'column',
    },
    buttonsLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        backgroundColor: '#D8D8D8',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '60%',
        margin: 15,
    },
    viewStyle: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: '10%',
        width: '100%',
    },
    backgroundStyle: {
        height: '100%',
        backgroundColor: '#ecf0f1',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
});

export default LoginForm;
