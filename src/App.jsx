import React from 'react';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { ThemeProvider } from 'styled-components';

import { IntlProvider } from 'react-intl';

import Routes from '@root/routes';

import { production } from '@config/environment';

import reducers from '@containers/reducers';

import '@formatjs/intl-relativetimeformat/dist/locale-data/en';
import { defaultLocale } from '@lang/config';
import { english } from '@lang';

import theme from '@styles/theme';
import { GlobalStyles } from '@styles/global.styles';

const middlewareEnhancer = applyMiddleware(thunk);
const enhancer = production ? middlewareEnhancer : composeWithDevTools(middlewareEnhancer);
const store = createStore(reducers, undefined, enhancer);

const App = () => (
  <IntlProvider
    locale={defaultLocale}
    messages={english}
  >
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  </IntlProvider>
);

export default App;
