import styled, { css } from 'styled-components';

const Item = styled.li`
  list-style: none;
  border: 1px solid ${(props) => props.theme.colors.secondaryColor};
  display: flex;
  flex-wrap: wrap;

  &:first-child {
    border-radius: .4rem .4rem 0 0;
  }
  &:last-child {
    border-radius: 0 0 .4rem .4rem;
  }
  & + & {
    margin-top: -1px;
  }
`;

const VerbBox = styled.div`
  position: relative;
  margin: 2.1rem 2rem 0;
  padding: .6rem 1.2rem .4rem;
  background: ${(props) => props.theme.colors.secondaryColor};
  border-radius: .4rem;
  font-size: 2rem;

  ${(props) => props.known && css`
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
    &::before {
      color: ${props.theme.colors.white};
      text-shadow: -1px 1px 8px #750101;
    }
  `}
  ${(props) => props.inProgress && css`
     background: repeating-linear-gradient(45deg, #ef8888, #fba5a5 2px, ${props.theme.colors.tartaryColor} 4px, ${props.theme.colors.tartaryColor} 6px);
    color: ${props.theme.colors.white};
    text-shadow: -1px 1px 8px #750101;
    &::before {
      color: ${props.theme.colors.white};
      text-shadow: -1px 1px 8px #750101;
    }
  `}
  ${(props) => props.inProgress && props.known && css`
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
      color: inherit;
      font-family: Arial, Calibri, Helvetica, sans-serif;
      font-size: 1rem;
      content: '${props.level}';
    }
  `}
`

const MainBox = styled.div`
  display: flex;
  width: 22rem;
  align-items: flex-start;
  border-right: 1px solid ${(props) => props.theme.colors.secondaryColor};
  flex-wrap: wrap;
  align-content: flex-start;
`;

const BoxWrapper = styled.div`
  width: 100%;
`;

const BoxContent = styled.div`
  position: relative;
  width: calc(100% - 22rem);
  margin-top: 2rem;

  ${(props) => props.smallerMargin && css`
    margin-top: 1rem;
  `}

`;

const MeaningBox = styled.div`
  padding: 2rem;
  margin-top: 2rem;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.secondaryColor};
  font-size: 1.4rem;
`;

const Meaning = styled.div`
  font-family: Open Sans, Arial, sans-serif;
`;

const TriggerWrapper = styled.div`
  position: absolute;
  right: -1.5rem;
  top: 2.6rem;
  background: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 50%;
  color: ${(props) => props.theme.colors.white};
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.secondaryColorHover};
  }
`;

const ShowMeaning = styled.button`
  background: ${(props) => props.theme.colors.secondaryColor};
  border-radius: .4rem;
  display: inline-block;
  cursor: pointer;
  &:focus {
    border: none;
    outline: none;
  }
  &:hover {
    background: ${(props) => props.theme.colors.secondaryColorHover};
  }

  ${(props) => props.withMargin && css`
    margin-top: 1rem;
  `}
`;

const VerbType = styled.span`
  display: inline-block;
  margin-top: 2.5rem;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.secondaryColor};
  cursor: default;
`;

const ParticleWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 0 1rem;
  display: flex;
  flex: 1 0 auto;
  align-items: center;
`;

const ParticleList = styled.ul`
  list-style: none;
`;

const ParticleListItem = styled.li`
  background: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 50%;
  display: inline-block;
  margin: .4rem;
  font-size: 1.5rem;
  padding: .2rem .7rem;
`;

const ParticleLabel = styled.span`
  margin-right: .7rem;
  white-space: nowrap;
`;

export {
  Item,
  VerbBox,
  MainBox,
  BoxContent,
  BoxWrapper,
  MeaningBox,
  Meaning,
  TriggerWrapper,
  ShowMeaning,
  VerbType,
  ParticleWrapper,
  ParticleList,
  ParticleListItem,
  ParticleLabel
};
