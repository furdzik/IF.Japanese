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

const Legend = styled.div`
  display: inline-block;
  margin-left: auto;
  padding: .5rem 1rem .3rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.secondaryColor};

  @media print {
    display: flex;
    padding: 0;
    background: none;
  }
`;

const Spaced = styled.span`
  display: inline-block;
  margin-right: 3rem;

  @media print {
    margin-left: 3rem;
  }
`;

const FiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 41rem;
  min-height: 6.2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};

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
  Legend,
  Spaced,
  FiltersWrapper
};
