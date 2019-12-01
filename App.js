import React, { Component } from 'react';
import {
  View,
  StatusBar,
  SafeAreaView,
  ActivityIndicator
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import NavigationService from './src/AppNavigator/NavigationService';
import { persistor, store } from './src/Redux/createStore';
import firebase from '@firebase/app';
import '@firebase/auth';
import AppNavigator from './src/AppNavigator/AppNavigator';

class App extends Component {
  componentDidMount(){
    const firebaseConfig = {
      apiKey: "AIzaSyAFBiiRl_KhshJoyb2tGZAVuzFKY2FCNf8",
      authDomain: "apptest-c9769.firebaseapp.com",
      databaseURL: "https://apptest-c9769.firebaseio.com",
      projectId: "apptest-c9769",
      storageBucket: "apptest-c9769.appspot.com",
      messagingSenderId: "458818073698",
      appId: "1:458818073698:web:c0a6c39fc2f05a2d1ccd3b",
      measurementId: "G-7X5ZJ2K68Z"
    };
      firebase.initializeApp(firebaseConfig);
    
		  
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <Provider store={store}>
          <PersistGate loading={<ActivityIndicator size="small" />} persistor={persistor}>
            <View style={{ flex: 1 }}>
              <StatusBar hidden />
              <AppNavigator         
              />
            </View>
          </PersistGate>
        </Provider>
      </SafeAreaView>
    );
  }
}

export default App;