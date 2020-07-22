import styled, { css } from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 2rem;

  @media print {
    display: block;
    justify-content: left;
  }
`;

const Heading = styled.h2`
  margin: 3rem 0;
  color: ${(props) => props.theme.colors.primaryColor};

  @media print {
    margin-top: 0;
  }
`;

const Legend = styled.div`
  display: inline-block;
  margin-left: auto;
  padding: .5rem 1rem .3rem;
  background: ${(props) => props.theme.colors.secondaryColor};
  border-radius: .4rem;

  @media print {
    display: flex;
    background: none;
    padding: 0;
  }
`;

const Spaced = styled.span`
  display: inline-block;
  margin-right: 3rem;

  @media print {
    margin-left: 3rem;
  }
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
  border-radius: .4rem;
  min-width: 41rem;
  min-height: 6.2rem;

  ${(props) => !props.secondary && css`
    background: ${props.theme.colors.secondaryColor};
    margin-right: auto;
  `}

  @media print {
    justify-content: left;
    min-height: auto;
    margin-bottom: 1rem;

    ${(props) => !props.secondary && css`
      background: none;
    `}
  }
`;

export {
  Header,
  Heading,
  Legend,
  Spaced,
  Filters
};
