import styled from 'styled-components';

import Skeleton from '@material-ui/lab/Skeleton';

import { breakpointMixin } from '@styles/mixins';

const Wrapper = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.colors.white};
`;

const SkeletonWrapper = styled.div`
  margin-bottom: 2rem;
`;

const StyledSkeleton = styled(Skeleton)`
  width: 100%;
  max-width: 100%;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.secondaryColorHover};
`;

const HeaderSkeleton = styled(Skeleton)`
  border-radius: 0;
`;

const ContentSkeletonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -1rem 0;

  ${breakpointMixin.laptop`
    justify-content: space-between;
    margin-left: -1rem;
    margin-right: -1rem;
  `}
`;

const TileSkeleton = styled(StyledSkeleton)`
  min-width: 4rem;
  margin: 1rem;
`;

const MenuSkeletonWrapper = styled.div`
  display: flex;
`;

const MenuSkeleton = styled(StyledSkeleton)`
  display: block;
  margin: 3rem 2rem 3rem 0;
`;

export {
  Wrapper,
  SkeletonWrapper,
  StyledSkeleton,
  HeaderSkeleton,
  ContentSkeletonWrapper,
  TileSkeleton,
  MenuSkeletonWrapper,
  MenuSkeleton
};
