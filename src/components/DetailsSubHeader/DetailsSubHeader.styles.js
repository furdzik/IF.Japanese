import styled from 'styled-components';

const Title = styled.h3`
  width: 100%;
  margin-bottom: .5rem;
  font-size: ${(props) => props.theme.typography.fontSize.normal};
  font-weight: ${(props) => props.theme.typography.fontWeight.semibold};
`;

export {
  Title
};
