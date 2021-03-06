import { all, takeLatest } from 'redux-saga/effects'

import Api from '../source/remote'
import Storage from '../source/asyncstorage'

import { MovieTypes } from '../reducer/movieReducer'
import { CredentialTypes } from '../reducer/credentialReducer'

import MovieSaga from '../saga/movieSaga'
import CredentialSaga from '../saga/credentialSaga'

const api = Api.create()
const storage = Storage.createStorage()

export default function* root() {
    yield all([
        takeLatest(CredentialTypes.GET_SAVED_TOKEN, CredentialSaga.getCurrentCredential, storage),
        takeLatest(CredentialTypes.STORE_TOKEN, CredentialSaga.storeToken, storage),
        takeLatest(MovieTypes.MOVIES_REQUEST, MovieSaga.getMovie, api)
    ])
}