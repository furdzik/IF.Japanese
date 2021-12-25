import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Tile from '@components/ui/Tile';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -4rem;
  padding: 2rem 0 2rem 4rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGray};

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
`;

const SmallTags = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  font-size: ${(props) => props.theme.typography.fontSize.small};
`;

const ElementWrapper = styled.div`
  ${(props) => !props.isWideElement && css`
    display: flex;
  `};
`;

const TileWrapper = styled.div`
  ${(props) => props.isWideElement && css`
     display: flex;
     width: 100%;
  `};
`;

const StyledTile = styled(Tile)`
  && {
    margin: 0 2rem 0 0;

    ${(props) => props.isWideElement && css`
      margin-right: 0;
      margin-bottom: 1rem;
    `};
  }
`;

const MeaningWrapper = styled.div`
  font-size: 1.6rem;

  ${(props) => !props.isWideElement && css`
    max-width: 19.5rem;
  `};
`;

export {
  Wrapper,
  SmallTags,
  ElementWrapper,
  TileWrapper,
  StyledTile,
  MeaningWrapper
};
