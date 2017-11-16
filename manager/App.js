import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {View, Text} from 'react-native';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Route from './Router';

class App extends Component{
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyARw383otGgEdhU3D6Mp05PJvBqQoH0qxA",
      authDomain: "manager-cfc27.firebaseapp.com",
      databaseURL: "https://manager-cfc27.firebaseio.com",
      projectId: "manager-cfc27",
      storageBucket: "manager-cfc27.appspot.com",
      messagingSenderId: "544436664657"
    });
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
        <Route />
      </Provider>
    )
  }
}

export default App;
