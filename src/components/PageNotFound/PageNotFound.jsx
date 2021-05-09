import React from 'react';
import { useIntl } from 'react-intl';

import {
  Wrapper
} from './PageNotFound.styles.js';
import messages from './PageNotFound.messages';

const PageNotFound = () => {
  const intl = useIntl();

  return (
    <Wrapper>
      {intl.formatMessage(messages.copy)}
    </Wrapper>
  );
};

export default PageNotFound;
