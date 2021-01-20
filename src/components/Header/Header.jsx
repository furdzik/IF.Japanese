import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';

import Container from '@components/Container';
import {
  Wrapper,
  Title
} from './Header.styles.js';
import messages from './Header.messages';

const Header = (props) => {
  const intl = useIntl();

  return (
    <Wrapper
      className={props.className}
    >
      <Container>
        <Title>
          <Link to="/">{intl.formatMessage(messages.title)}</Link>
        </Title>
      </Container>
    </Wrapper>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ''
};

export default Header;
