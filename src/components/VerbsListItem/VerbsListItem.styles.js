import styled, { css } from 'styled-components';

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid ${(props) => props.theme.colors.secondaryColor};
  list-style: none;

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
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.secondaryColor};
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
      font-family: Arial, Calibri, Helvetica, sans-serif;
      font-size: 1rem;
      color: inherit;
      content: '${props.level}';
    }
  `}
`;

const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  width: 22rem;
  border-right: 1px solid ${(props) => props.theme.colors.secondaryColor};
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

const TriggerWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 2.6rem;
  right: -1.5rem;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.secondaryColor};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.secondaryColorHover};
  }
`;

const VerbType = styled.span`
  display: inline-block;
  margin-top: 2.5rem;
  font-size: 3rem;
  color: ${(props) => props.theme.colors.secondaryColor};
  cursor: default;
`;

const ParticleWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  width: 100%;
  margin: 2rem 0;
  padding: 0 0 0 2rem;
`;

const ParticleList = styled.ul`
  list-style: none;
`;

const ParticleListItem = styled.li`
  display: inline-block;
  margin: .4rem;
  padding: .2rem .7rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.secondaryColor};
  font-size: 1.5rem;
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
  TriggerWrapper,
  VerbType,
  ParticleWrapper,
  ParticleList,
  ParticleListItem,
  ParticleLabel
};
