import { call, put } from 'redux-saga/effects';
import NavigationService from '../../AppNavigator/NavigationService'
import firebase from 'firebase';


import { STORE_FETCHING_DATA, STORE_FETCHING_DATA_FAILURE, STORE_FETCHING_DATA_SUCCESS } from './Action';
uploadImage = async (image) => {
        console.warn(image.uri)
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const date = new Date();
        const ref = firebase.storage().ref().child("images/"+date.getTime())
        ref.put(blob).then(()=>{
            alert("success")
        }).catch((err) => {
            alert("failed:  "+err.message)
            console.warn(err,"error")
        })
}
function* storeInFirebase(state) {
    const image = state.payload;
    yield put ({type: STORE_FETCHING_DATA})
    try{
        uploadImage(image)
    }catch(e) {
        console.warn(e,"error")
        yield put({type: STORE_FETCHING_DATA_FAILURE})
    }
}

export {
    storeInFirebase
}