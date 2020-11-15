import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components'

import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import StoryRouter from 'storybook-react-router';

import reducers from '@containers/reducers';

import theme from '@styles/theme';
import { GlobalStyles } from '@styles/global.styles';

const req = require.context('../src/components', true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

const store = createStore(reducers);

setIntlConfig({
  locales: ['en'],
  defaultLocale: 'en',
  getMessages: () => [],
  getFormats: () => [],
});

addDecorator(withA11y);
addDecorator(StoryRouter());
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
});
addDecorator((story) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {story()}
      <GlobalStyles />
    </ThemeProvider>
  </Provider>
));
addDecorator(withIntl);

configure(loadStories, module);
