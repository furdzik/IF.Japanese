import styled, { css } from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 3rem 0 2rem;
`;

const Heading = styled.h2`
  margin: 3rem 0;
  color: ${(props) => props.theme.colors.primaryColor};
`;

const Legend = styled.div`
  display: inline-block;
  margin-left: auto;
  padding: .5rem 1rem .3rem;
  background: ${(props) => props.theme.colors.secondaryColor};
  border-radius: .4rem;
`;

const Spaced = styled.span`
  display: inline-block;
  margin-right: 3rem;
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  border-radius: .4rem;
  min-width: 41rem;
  min-height: 6.2rem;

  ${(props) => !props.secondary && css`
    background: ${(props) => props.theme.colors.secondaryColor};
    margin-right: auto;
  `}
`;

export {
  Header,
  Heading,
  Legend,
  Spaced,
  Filters
};
