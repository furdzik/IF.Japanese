import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Link } from 'react-router-dom';

import { breakpointMixin } from '@styles/mixins';

import Tile from '@components/Tile';

const Item = styled.li`
  border: 1px solid ${(props) => props.theme.mainColors.secondary};
  list-style: none;

  &:first-of-type {
    border-radius: .4rem .4rem 0 0;
  }
  &:last-child {
    border-radius: 0 0 .4rem .4rem;
  }
  & + & {
    margin-top: -.1rem;
  }

  ${breakpointMixin.smallLaptop(css`
    display: flex;
    flex-wrap: wrap;
  `)};
`;

const TileStyled = styled(Tile)`
  && {
    position: relative;
    order: initial;
    margin: 2.1rem 2rem 0;
  }
`;

const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.mainColors.secondary};

  ${(props) => breakpointMixin.smallLaptop(css`
    width: 22rem;
    border-right: 1px solid ${props.theme.mainColors.secondary};
    border-bottom: 0;
  `)};
`;

const VocabLink = styled(Link)`
  color: inherit;
`;

const BoxWrapper = styled.div`
  width: 100%;
`;

const BoxContent = styled.div`
  position: relative;
  width: 100%;
  margin: 2rem 0;

  ${(props) => props.smallerMargin && css`
    margin: 1rem 0;
  `};

  ${breakpointMixin.smallLaptop(css`
    width: calc(100% - 22rem);
  `)};
`;

const TriggerWrapper = styled.div`
  position: absolute;
  top: -.5rem;
  right: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${(props) => props.theme.mainColors.secondary};
  color: ${(props) => props.theme.colors.black};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.darkGray};
  }

  ${(props) => props.isCollaps && css`
    top: -1.5rem;
  `};

  ${(props) => breakpointMixin.smallLaptop(css`
    top: 2.6rem;
    right: -1.5rem;

    ${props.isCollaps && css`
      top: 1.6rem;
    `};
  `)};
`;

const VerbType = styled.span`
  display: inline-block;
  margin-top: 2.5rem;
  font-size: 3rem;
  color: ${(props) => props.theme.mainColors.secondary};
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
  background: ${(props) => props.theme.mainColors.secondary};
  font-size: 1.5rem;
`;

const ParticleLabel = styled.span`
  margin-right: .7rem;
  white-space: nowrap;
`;

export {
  Item,
  TileStyled,
  MainBox,
  VocabLink,
  BoxContent,
  BoxWrapper,
  TriggerWrapper,
  VerbType,
  ParticleWrapper,
  ParticleList,
  ParticleListItem,
  ParticleLabel
};
