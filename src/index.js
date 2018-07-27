import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MenuContainer from './containers/MenuContainer';
import BasketContainer from './containers/BasketContainer';
import configureStore from './state/configureStore';

const store = configureStore(window.__INITIAL_STATE__);

ReactDOM.render(
    <Provider store={store}>
        <MenuContainer />
    </Provider>,
    document.querySelector('[data-menu]')
);

ReactDOM.render(
    <Provider store={store}>
        <BasketContainer />
    </Provider>,
    document.querySelector('[data-basket]')
);
