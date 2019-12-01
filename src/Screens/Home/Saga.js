import { call, put } from 'redux-saga/effects';
import NavigationService from '../../AppNavigator/NavigationService'
import firebase from '@firebase/app';
import '@firebase/auth';


import { LOGIN_FETCHING_DATA, LOGIN_FETCHING_DATA_FAILURE, LOGIN_FETCHING_DATA_SUCCESS } from './Action';
function* loginUserInFirebase(state) {
    const {email, password} = state.payload;
    yield put ({type: LOGIN_FETCHING_DATA})
    
    try{
        console.warn(state,"state")
        firebase.auth().signInWithEmailAndPassword(email,password)
		.then(user => {
            alert("Login Success")
            NavigationService.navigate("picker")
        })
        .catch((err) =>{
            alert(err)
        });

        yield put ({type: LOGIN_FETCHING_DATA_SUCCESS})
    }catch(e) {
        yield put({type: LOGIN_FETCHING_DATA_FAILURE})
    }
}

export {
    loginUserInFirebase
}