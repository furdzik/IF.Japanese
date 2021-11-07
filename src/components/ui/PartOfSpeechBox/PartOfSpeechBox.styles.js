import styled from '@emotion/styled';

const Wrapper = styled.span`
  display: inline-block;
  padding: .1rem .3rem .3rem;
  border: 1px solid ${(props) => props.theme.mainColors.primary};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  line-height: 1.3;
  color: ${(props) => props.theme.colors.veryDarkGray};
  & + & {
    margin-left: 1rem;
  }
`;

export {
  Wrapper
};
