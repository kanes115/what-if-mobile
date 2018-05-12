import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from './LoginForm';
import LoggedInScreen from './LoggedInScreen';
import * as firebase from 'firebase';


class MainScreen extends React.Component {

    constructor() {
        super();
        const firebaseConfig = {
            apiKey: "AIzaSyBfD1xp4uiTmcvclR-px-6EGEU85Oon3wA",
            authDomain: "tai-what-if.firebaseapp.com",
            databaseURL: "https://tai-what-if.firebaseio.com",
            storageBucket: "tai-what-if.appspot.com",
            messagingSenderId: "409114524950",
            projectId: "tai-what-if"
        };

        firebase.initializeApp(firebaseConfig);
        this.state = {
            loading: true,
            error: null
        };
        this.onLogin = this.onLogin.bind(this)
        this.onRegister = this.onRegister.bind(this)
        this.onLogout = this.onLogout.bind(this)
    }

    componentWillReceiveProps(newProps){
        this.setState({...newProps});
    }

    onLogin = (email, password) => {
        console.log("Logging in: " + email + " " + password);
	firebase.auth().signInWithEmailAndPassword(email, password)
    			.then((user) => {
                            console.log("logged in");
    			})
    			.catch((error) => {
      				const { code, message } = error;
                                console.log("error: " + message);
                                this.setState({error: error});
    			});
    }

    onRegister = (email, password) => {
  	firebase.auth().createUserWithEmailAndPassword(email, password)
    			.then((user) => {
                            console.log("logged in");
    			})
    			.catch((error) => {
	                        const { code, message } = error;
                                console.log("error: " + message);
                                this.setState({error: error});
    			});
    }


    componentDidMount() {
        this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
            this.setState({
                loading: false,
                user,
            });
        });
    }


    componentWillUnmount() {
        this.authSubscription();
    }

    onLogout = () => {
        this.setState({error: null, user: null});
    }

    render() {
        if (this.state.loading) return null;
        if (this.state.user) return <LoggedInScreen
                                        onLogout={this.onLogout}
                                        user={this.state.user}/>;
        return <LoginForm
            onLogin={this.onLogin}
            onRegister={this.onRegister}
            error={this.state.error}/>;
  }
}

export default MainScreen;
