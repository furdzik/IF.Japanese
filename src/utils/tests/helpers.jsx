import React from 'react';
import renderer from 'react-test-renderer';
import { IntlProvider } from 'react-intl';

const createComponentWithIntl = (children, props = { locale: 'pl' }) => renderer.create(
  // eslint-disable-next-line react/jsx-props-no-spreading
  <IntlProvider {...props}>{children}</IntlProvider>
);

export default createComponentWithIntl;
