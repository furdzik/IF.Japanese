import styled, { css } from 'styled-components';

const ListWrapper = styled.ul`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 -1rem 3rem;
  padding: 0;
  list-style: none;

  @media print {
    display: block;
    text-align: justify;
  }
`;

const ListItem = styled.li`
  position: relative;
  order: 2;
  margin: 1rem;
  padding: .6rem 1.2rem .4rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.secondaryColor};
  font-size: 2rem;

  @media print {
    & {
      display: inline-block;
      height: 3.5rem;
      margin: .5rem .5rem;
      padding: .5rem .5rem;
      page-break-inside: avoid;
      &::before {
        display: none;
      }
    }
  }

  ${(props) => props.known && css`
    order: 0;
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
    &::before {
      color: ${props.theme.colors.white};
      text-shadow: -1px 1px 8px #750101;
    }
  `}
  ${(props) => props.inProgress && css`
    order: 1;
    background: repeating-linear-gradient(45deg, #ef8888, #fba5a5 2px, ${props.theme.colors.tartaryColor} 4px, ${props.theme.colors.tartaryColor} 6px);
    color: ${props.theme.colors.white};
    text-shadow: -1px 1px 8px #750101;
    &::before {
      color: ${props.theme.colors.white};
      text-shadow: -1px 1px 8px #750101;
    }
    @media print {
      background: #fba5a5;
      color: ${props.theme.colors.black};
      text-shadow: none;
    }
  `}
  ${(props) => props.inProgress && props.known && css`
    order: 3;
    background: ${props.theme.colors.black};
    color: ${props.theme.colors.white};
    &::before {
      color: ${props.theme.colors.white};
    }
  `}

  ${(props) => props.level && props.level !== 0 && css`
    &::before {
      position: absolute;
      top: 0;
      right: .3rem;
      font-family: Arial, Calibri, Helvetica, sans-serif;
      font-size: 1rem;
      color: inherit;
      content: '${props.level}';
    }
  `}
`;

export {
  ListWrapper,
  ListItem
};
