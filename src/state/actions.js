import fetch from 'cross-fetch';
import menuApi from '../api/menu';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
});

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});


export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const selectSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
});

export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';
export const invalidateSubreddit = subreddit => ({
    type: INVALIDATE_SUBREDDIT,
    subreddit
});

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const requestPosts = subreddit => ({
    type: REQUEST_POSTS,
    subreddit
});

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const receivePosts = (subreddit, json) => ({
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
});

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))
function fetchPosts (subreddit) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
    return dispatch => {
        // First dispatch: the app state is updated to inform
        // that the API call is starting.
        dispatch(requestPosts(subreddit))

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(
                response => response.json(),
                // Do not use catch, because that will also catch
                // any errors in the dispatch and resulting render,
                // causing a loop of 'Unexpected batch number' errors.
                // https://github.com/facebook/react/issues/6895
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.
                dispatch(receivePosts(subreddit, json))
            )
    }
}

function shouldFetchPosts (state, subreddit) {
    const posts = state.postsBySubreddit[subreddit];

    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
}

export function fetchPostsIfNeeded (subreddit) {
    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.

    // This is useful for avoiding a network request if
    // a cached value is already available.

    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            // Dispatch a thunk from thunk!
            return dispatch(fetchPosts(subreddit));
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve();
        }
    };
}

export function fetchItems () {
    return dispatch => menuApi.getData()
        .then(({ menu }) => {
            dispatch(receiveItems(menu.items));
        });
}

export const MENU_GET_ALL_ITEMS = 'MENU_GET_ALL_ITEMS';
export const receiveItems = items => ({
    type: MENU_GET_ALL_ITEMS,
    items
});

export const BASKET_ADD_ITEM = 'BASKET_ADD_ITEM';
export const BASKET_REMOVE_ITEM = 'BASKET_REMOVE_ITEM';
export const BASKET_INCREMENT_ITEM_QUANTITY = 'BASKET_INCREMENT_ITEM_QUANTITY';
export const BASKET_DECREMENT_ITEM_QUANTITY = 'BASKET_DECREMENT_ITEM_QUANTITY';