import React from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import Container from '@components/ui/Container';

import {
  Wrapper,
  SkeletonWrapper,
  StyledSkeleton,
  HeaderSkeleton,
  ContentSkeletonWrapper,
  TileSkeleton,
  MenuSkeletonWrapper,
  MenuSkeleton
} from './VocabularyListLoading.styles.js';

const VocabularyListLoading = (props) => {
  const menuCount = 5;
  const loadersCount = 200;

  return (
    <Wrapper
      className={props.className}
    >
      <HeaderSkeleton variant="rect" height={70} />
      <Container>
        <MenuSkeletonWrapper>
          {[...Array(menuCount)].map(() => (
            <MenuSkeleton key={uuidv4()} variant="rect" width={54} height={40} />
          ))}
        </MenuSkeletonWrapper>
        <SkeletonWrapper>
          <StyledSkeleton variant="rect" width={558} height={64} />
        </SkeletonWrapper>
        <SkeletonWrapper>
          <StyledSkeleton variant="rect" height={35} />
        </SkeletonWrapper>
        <SkeletonWrapper>
          <StyledSkeleton variant="rect" height={15} />
        </SkeletonWrapper>
        <ContentSkeletonWrapper>
          {
            [...Array(loadersCount)].map(() => (
              <TileSkeleton key={uuidv4()} variant="rect" width={100 * Math.random()} height={40} />
            ))
          }
        </ContentSkeletonWrapper>
      </Container>
    </Wrapper>
  );
};

VocabularyListLoading.propTypes = {
  className: PropTypes.string
};

VocabularyListLoading.defaultProps = {
  className: ''
};

export default VocabularyListLoading;
