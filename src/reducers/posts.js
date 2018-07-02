import {handleActions} from 'redux-actions';

import {loadStarted, loadCompleted, loadFailed} from "actions/posts";

const initialState = {
    loading: false,
    error: null,
    items: []
};


export default handleActions({
    [loadStarted]: (state) => {
        return {
            ...state,
            error: null,
            loading: true
        }
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            items: action.payload,
            loading: false,
        }
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            error: action.payload,
            loading: false,
        }
    },

}, initialState);