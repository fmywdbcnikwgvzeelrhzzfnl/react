import {handleActions} from 'redux-actions';

import {loadUsers} from "actions/users";

const initialState = {
    loading: false,
    users: []
};

export default handleActions({
    [loadUsers]: (state, action) => {
        return {
            ...state,
            users: [{
                id: 1,
                name: "test"
            }]
        }
    }
}, initialState);