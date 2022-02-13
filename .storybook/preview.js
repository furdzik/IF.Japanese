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
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Story {...context} />
  </ThemeProvider>
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'fullscreen'
}

export const decorators = [
  withThemeProvider,
  withIntl
];
