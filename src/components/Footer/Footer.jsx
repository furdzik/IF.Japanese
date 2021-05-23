import React from 'react';
import { useIntl } from 'react-intl';

import Container from '@components/ui/Container';

import {
  FooterWrapper
} from './Footer.styles.js';
import messages from './Footer.messages';

const Footer = () => {
  const intl = useIntl();

  return (
    <FooterWrapper>
      <Container>
        {intl.formatMessage(messages.content)}
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
