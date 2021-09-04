import styled from 'styled-components';

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.typography.fontSize.headingBig};
  font-weight: ${(props) => props.theme.typography.fontWeight.bold};
`;

export {
  Title
};
