import React from 'react';
import { auth, initializeApp } from 'firebase';

import LoginForm from './LoginForm';
import LoggedInScreen from './LoggedInScreen';

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        const firebaseConfig = {
            apiKey: "AIzaSyBfD1xp4uiTmcvclR-px-6EGEU85Oon3wA",
            authDomain: "tai-what-if.firebaseapp.com",
            databaseURL: "https://tai-what-if.firebaseio.com",
            storageBucket: "tai-what-if.appspot.com",
            messagingSenderId: "409114524950",
            projectId: "tai-what-if"
        };

        initializeApp(firebaseConfig);
        this.state = {
            loading: true,
            error: null
        };
    }

    componentWillReceiveProps(newProps){
        this.setState({...newProps});
    }

    componentDidMount() {
        this.authSubscription = auth().onAuthStateChanged((user) => {
            this.setState({
                loading: false,
                user,
            });
        });
    }

    componentWillUnmount() {
        this.authSubscription();
    }



    onLogin = (email, password) => {
        console.log("Logging in: " + email + " " + password);
	    auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log("Logged in...");
            })
            .catch((error) => {
                const { code, message } = error;
                    console.log("error: " + message);
                    this.setState({error: error});
    			}
            );
    };

    onRegister = (email, password) => {
  	    auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log("Registered...");
            })
            .catch((error) => {
                const { code, message } = error;
                console.log("error: " + message);
                this.setState({error: error});
            }
        );
    };

    onAnonymous = async () => {
        this.setState({ user: { email: 'Guest' } });
    };

    onLogout = () => {
        this.setState({error: null, user: null});
    };

    render() {
        if (this.state.loading) return null;
        if (this.state.user) return (
            <LoggedInScreen
                onLogout={this.onLogout}
                user={this.state.user}/>
        );

        return (
            <LoginForm
                onLogin={this.onLogin}
                onRegister={this.onRegister}
                onAnonymous={this.onAnonymous}
                error={this.state.error}/>
        );
    }
}

export default MainScreen;
