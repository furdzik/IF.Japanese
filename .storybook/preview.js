import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';

import theme from '@styles/theme';
import { GlobalStyles } from '@styles/global.styles';

export const decorators = [
  (Story) => (
    <React.Fragment>
      <Global styles={GlobalStyles} />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </React.Fragment>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
