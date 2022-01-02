import React from 'react';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { Global, ThemeProvider } from '@emotion/react';

import { IntlProvider } from 'react-intl';

import '@formatjs/intl-relativetimeformat/dist/locale-data/en';

import { production } from '@config/environment';
import { defaultLocale } from '@config/lang';

import theme from '@styles/theme';
import { GlobalStyles } from '@styles/global.styles';

import { english } from '@lang';

import RoutesConfig from '@routes';

import reducers from '@containers/reducers';

console.log('process.env', process?.env);

const middlewareEnhancer = applyMiddleware(thunk);
const enhancer = production ? middlewareEnhancer : composeWithDevTools(middlewareEnhancer);
const store = createStore(reducers, undefined, enhancer);

const App = () => (
  <IntlProvider
    locale={defaultLocale}
    messages={english}
  >
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <Provider store={store}>
        <RoutesConfig />
      </Provider>
    </ThemeProvider>
  </IntlProvider>
);

export default App;
