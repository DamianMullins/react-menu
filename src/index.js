import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import { messages } from './i18n';
import MenuContainer from './containers/MenuContainer';
import BasketContainer from './containers/BasketContainer';
import configureStore from './state/configureStore';

const store = configureStore(window.__INITIAL_STATE__);

addLocaleData([...en]);

const locale = document.querySelector('html').getAttribute('lang');

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={locale} messages={messages[locale]}>
            <MenuContainer />
        </IntlProvider>
    </Provider>,
    document.querySelector('[data-menu]')
);

ReactDOM.render(
    <Provider store={store}>
        <IntlProvider locale={locale} messages={messages[locale]}>
            <BasketContainer />
        </IntlProvider>
    </Provider>,
    document.querySelector('[data-basket]')
);
