import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { breakpointMixin } from '@styles/mixins';

import Button from '@components/Button';
import SimpleLoader from '@components/SimpleLoader';
import Tile from '@components/Tile';

const ListWrapper = styled.div`
  position: relative;
  padding-bottom: 2rem;
`;

const List = styled.ul`
  margin-bottom: 0;
  list-style: none;
`;

const ListItem = styled.li`
  display: inline-block;
  width: 100%;
  min-height: 6rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px dashed ${(props) => props.theme.mainColors.secondary};

  ${(props) => props.hasTags && css`
    margin-top: 3rem;
  `};

  ${breakpointMixin.landscapeTablet(css`
    width: calc(50% - 1rem);
    &:nth-of-type(2n) {
      margin-left: 2rem;
    }
  `)};
`;

const ListItemContent = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  width: 100%;

  &::before {
    display: inline-block;
    flex-shrink: 0;
    width: .8rem;
    height: .8rem;
    margin-top: 1.7rem;
    margin-right: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme.mainColors.primary};
    content: '';
  }
`;

const TagWrapper = styled.div`
  flex-shrink: 0;
  width: 100%;
  margin-top: -3.7rem;
  margin-bottom: .5rem;
`;

const ExampleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTile = styled(Tile)`
  && {
    flex-shrink: 0;
    margin: 0 2rem 0 0;
  }
`;

const StyledButton = styled(Button)`
  margin-right: 2rem;
`;

const MeaningWrapper = styled.div`
  font-size: 1.4rem;
`;

const StyledSimpleLoader = styled(SimpleLoader)`
  position: absolute;
  bottom: .7rem;
`;

export {
  ListWrapper,
  List,
  ListItem,
  ListItemContent,
  TagWrapper,
  ExampleWrapper,
  StyledTile,
  StyledButton,
  MeaningWrapper,
  StyledSimpleLoader
};
