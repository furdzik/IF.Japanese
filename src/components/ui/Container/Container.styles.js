import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { breakpointMixin } from '@styles/mixins';

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.layout.containerWidth};
  margin: 0 auto;
  padding: ${(props) => props.theme.layout.mobilePadding};

  ${(props) => breakpointMixin.portraitTablet(css`
    padding: ${props.theme.layout.padding};
  `)};
`;

export {
  Wrapper
};
