import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Header, Button, Spinner} from './src/components/common';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

class App extends Component{
  state = { loggedIn: null};

  componentWillMount(){
    firebase.initializeApp({
        apiKey: "AIzaSyBay_C7BsB-TH7y51Umc7obnu6luY_3t-I",
        authDomain: "auth-2b711.firebaseapp.com",
        databaseURL: "https://auth-2b711.firebaseio.com",
        projectId: "auth-2b711",
        storageBucket: "auth-2b711.appspot.com",
        messagingSenderId: "578528617387"
      });

      firebase.auth().onAuthStateChanged((user) =>{
        if (user){
          this.setState({loggedIn:true});
        }
        else {
          this.setState({loggedIn:false});
        }
      });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render(){
    return(
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    )
  }
}

export default App;
