import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducer from './src/reducers/';
import Navigator from './src/navigation/';
import NavigationService from './src/navigation/NavigationService';
import firebase from '@firebase/app'

//  Your web app's Firebase configuration
//  Please go https://firebase.google.com and get your own key. 
 var firebaseConfig = {
  apiKey: "get your own key from firebase",
  authDomain: "get your own key from firebase",
  databaseURL: "get your own key from firebase",
  projectId: "get your own key from firebase",
  storageBucket: "get your own key from firebase",
  messagingSenderId: "get your own key from firebase",
  appId: "get your own key from firebase"
};
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }; 
  render() {
    return (
      <Provider store={store} >
        <Navigator
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    );
  };
};