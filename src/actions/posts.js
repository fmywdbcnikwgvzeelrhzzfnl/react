import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Posts] load started');
export const loadCompleted = createAction('[Posts] load completed');
export const loadFailed = createAction('[Posts] load failed');
export const loadPosts = (dispatch) => {
    dispatch(loadStarted());
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadCompleted(posts))
        })
        .catch((error) => {
            dispatch(loadFailed(error))
        });
    createAction('[Posts] load');
};
export const loadPost = (dispatch, id) => {
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/posts/${+id}`)
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadCompleted(posts))
        })
        .catch((error) => {
            dispatch(loadFailed(error))
        });
    createAction('[Posts] load');
};