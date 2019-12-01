import {ATTEMPT_FIREBASE_CREATE_USER_DATA} from "../Screens/Register/Action"
import {ATTEMPT_LOGIN_FETCHING_DATA} from "../Screens/Home/Action"
import {ATTEMPT_STORE_FETCHING_DATA} from "../Screens/ImagePicker/Action"

import {takeLatest} from "redux-saga/effects"
import {registerUserInFirebase} from "../Screens/Register/Saga"
import {loginUserInFirebase} from "../Screens/Home/Saga"
import {storeInFirebase} from "../Screens/ImagePicker/Saga"
// WatcherSaga
function* rootSaga() {
    yield takeLatest(ATTEMPT_FIREBASE_CREATE_USER_DATA, registerUserInFirebase)
    yield takeLatest(ATTEMPT_LOGIN_FETCHING_DATA, loginUserInFirebase)
    yield takeLatest(ATTEMPT_STORE_FETCHING_DATA, storeInFirebase)
}

export default rootSaga;
