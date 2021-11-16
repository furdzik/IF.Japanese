import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { useTheme } from '@emotion/react';

import { mdiAlert } from '@mdi/js';
import Icon from '@mdi/react';

import {
  Wrapper,
  Message
} from './ErrorMessageBox.styles.js';
import messages from './ErrorMessageBox.messages';

const ErrorMessageBox = (props) => {
  const theme = useTheme();
  const intl = useIntl();

  return (
    <Wrapper simple={props.simple}>
      <Icon
        path={mdiAlert}
        size={2}
        color={theme.colors.red}
      />
      <Message>{props.message || intl.formatMessage(messages.defaultErrorMessage)}</Message>
    </Wrapper>
  );
};

ErrorMessageBox.propTypes = {
  message: PropTypes.string,
  simple: PropTypes.bool
};

ErrorMessageBox.defaultProps = {
  message: null,
  simple: false
};

export default ErrorMessageBox;
