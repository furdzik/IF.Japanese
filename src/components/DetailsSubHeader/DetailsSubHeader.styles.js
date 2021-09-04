import styled, { css } from 'styled-components';

const Title = styled.h3`
  width: 100%;
  margin-bottom: .5rem;
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};

  ${(props) => props.bigger && css`
    margin-bottom: 1.5rem;
    font-size: ${props.theme.typography.fontSize.headingSmall};
  `};
`;

export {
  Title
};
