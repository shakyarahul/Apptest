import { FETCHING_DATA, FETCHING_DATA_FAILURE, FETCHING_DATA_SUCCESS } from './Action';
import firebase from '@firebase/app';
import '@firebase/auth';
import { call, put, delay } from 'redux-saga/effects';
import NavigationService from '../../AppNavigator/NavigationService'

function* registerUserInFirebase(state) {
    const {email, password} = state.payload;
    try{
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(user=>{
                alert("please login with your credentials")
                NavigationService.navigate("home")
                console.warn(user)
            }).catch((err)=>{
                alert(err.message)
                console.warn(err)
            })
    }catch(e) {
        yield put({type: FETCHING_DATA_FAILURE})
    }
}
export {
    registerUserInFirebase
}