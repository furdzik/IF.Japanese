import styled from 'styled-components';

// import { breakpointMixin } from '@styles/mixins';

const Wrapper = styled.div`

`;

const LoadMoreButton = styled.button`

`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  &::before {
    display: inline-block;
    flex-shrink: 0;
    width: .8rem;
    height: .8rem;
    margin-top: 1.3rem;
    margin-right: 2rem;
    border-radius: 50%;
    background: red;
    content: '';
  }
`;

const ListItemContent = styled.div`
  display: flex;
  width: 100%;
`;

const TagWrapper = styled.div`
  flex-shrink: 0;
`;

export {
  Wrapper,
  LoadMoreButton,
  List,
  ListItem,
  ListItemContent,
  TagWrapper
};
