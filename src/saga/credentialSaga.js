import { call, put } from "redux-saga/effects"
import CredentialTypes from '../reducer/credentialReducer'

function* getCurrentCredential(storage, action) {
    const token = yield call(storage.retriveToken)
    yield put(CredentialTypes.setCurrentToken(token))
}

function* storeToken(storage, action) {
    if (action.token == null)
        yield call(storage.removeToken)
    else
        yield call(storage.storeToken, action.token)

    const token = yield call(storage.retriveToken)
    yield put(CredentialTypes.setCurrentToken(token))
    yield put(CredentialTypes.tokenStored(action.token != null))
}

export default {
    getCurrentCredential,
    storeToken
}