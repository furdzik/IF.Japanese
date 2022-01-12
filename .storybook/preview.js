import React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { ThemeProvider } from '@emotion/react';

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';

import theme from '@styles/theme';
import { GlobalStyles } from '@styles/global.styles';

import reducers from '@containers/reducers';

const store = createStore(reducers);

setIntlConfig({
  locales: ['en'],
  defaultLocale: 'en',
  getMessages: () => [],
  getFormats: () => [],
});

const withThemeProvider = (Story, context) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Story {...context} />
      {console.log('preview', Story)}
      <GlobalStyles />
    </ThemeProvider>
  </Provider>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  layout: 'fullscreen',
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true
  }
}
export const decorators = [
  withThemeProvider,
  withIntl
];