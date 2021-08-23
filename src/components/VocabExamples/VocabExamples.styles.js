import styled, { css } from 'styled-components';

// import { breakpointMixin } from '@styles/mixins';
import Button from '@components/ui/Button';
import Tile from '@components/ui/Tile';

const List = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const ListItem = styled.li`
  display: inline-block;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px dashed ${(props) => props.theme.mainColors.secondary};
  width: calc(50% - 1rem);
  min-height: 6.5rem;
  &:nth-child(2n) {
    margin-left: 2rem;
  }

  ${(props) => props.hasTags && css`
    margin-top: 3rem;
  `}
`;

const ListItemContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
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
  margin-bottom: .5rem;
  margin-top: -3.7rem;
`;

const ExampleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTile = styled(Tile)`
  flex-shrink: 0;
  margin: 0 2rem 0 0;
`;

const StyledButton = styled(Button)`
  margin-right: 2rem;
`;

const MeaningWrapper = styled.div`
  font-size: 1.4rem;
`;

export {
  List,
  ListItem,
  ListItemContent,
  TagWrapper,
  ExampleWrapper,
  StyledTile,
  StyledButton,
  MeaningWrapper
};
