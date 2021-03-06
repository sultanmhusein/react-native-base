import { createReducer, createActions } from 'reduxsauce'

// Initial State
const INITIAL_STATE = {
    list: [],
    error: null
}

// Cases
const success = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        list: action.payload,
        error: null
    }
}

const failure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        list: [],
        error: action.error
    }
}

// Action
const { Types, Creators } = createActions({
    moviesRequest: null,
    moviesSuccess: ['payload'],
    moviesFailure: ['error']
})

// Handlers
const HANDLERS = {
    [Types.MOVIES_REQUEST]: null,
    [Types.MOVIES_SUCCESS]: success,
    [Types.MOVIES_FAILURE]: failure
}

// Export
export default Creators
export const MovieTypes = Types
export const reducer = createReducer(INITIAL_STATE, HANDLERS)