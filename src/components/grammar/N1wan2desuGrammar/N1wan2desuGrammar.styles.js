import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GrammarLink = styled(Link)`
  color: ${(props) => props.theme.mainColors.primary};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

export {
  GrammarLink
};
