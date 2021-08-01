import styled from 'styled-components';

import { breakpointMixin } from '@styles/mixins';

const Wrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  margin-top: 4rem;


  ${breakpointMixin.laptop`
    width: ${(props) => props.width}rem;
    margin-top: 0;
    margin-left: auto;
    padding-left: 4rem;
    border-left: 1px dotted ${(props) => props.theme.mainColors.secondary};
    border-radius: ${(props) => props.theme.layout.borderRadius};
  `}
`;

export {
  Wrapper
};
