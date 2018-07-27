import React from 'react';
import ReactDOM from 'react-dom';
// import menuApi from './api/menu';
// import Menu from './components/Menu';
// import Basket from './components/Basket';
import configureStore from './state/configureStore';
import rootReducer from './state/reducers';
// import App from './components/App';
import {
    selectSubreddit,
    fetchPostsIfNeeded,
    fetchItems
} from './state/actions';

const store = configureStore(window.__INITIAL_STATE__);

// menuApi.getData()
//     .then(({ menu, basket }) => {
//         ReactDOM.render(
//             <Menu menu={menu} />,
//             document.querySelector('[data-menu]')
//         );

//         ReactDOM.render(
//             <Basket basket={basket} />,
//             document.querySelector('[data-basket]')
//         );
//     });

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.querySelector('[data-todo')
// );

// store.dispatch(selectSubreddit('reactjs'))
// store
//     .dispatch(fetchPostsIfNeeded('reactjs'))
//     .then(() => console.log(store.getState()));

// store
//     .dispatch(fetchItems())
//     .then(() => console.log(store.getState()));

