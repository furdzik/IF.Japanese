import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import { Link } from 'react-router-dom';

import { statusShape, tagsShape } from '@types/commonDetails';

import Tag from '@components/Tag';

import {
  Wrapper,
  SmallTags,
  ElementWrapper,
  TileWrapper,
  StyledTile,
  MeaningWrapper
} from './DetailsParts.styles.js';

const DetailsParts = (props) => (
  <Wrapper>
    {
      props.tags ? (
        <SmallTags>
          {
            props.tags.map((tag) => (
              <Tag
                small
                tagType={tag.tagType}
                key={uuidv4()}
              >
                {tag.label}
              </Tag>
            ))
          }
        </SmallTags>
      ) : null
    }
    <ElementWrapper isWideElement={props.isWideElement}>
      <TileWrapper isWideElement={props.isWideElement}>
        <StyledTile
          level={0}
          known={props.status?.known}
          nowLearning={props.status?.nowLearning}
          inProgress={props.status?.inProgress}
          toRepeat={props.status?.toRepeat}
          isWideElement={props.isWideElement}
          noOrder
        >
          <Link to={props.link}>
            {props.element}
          </Link>
        </StyledTile>
      </TileWrapper>
      <MeaningWrapper isWideElement={props.isWideElement}>
        {props.children}
      </MeaningWrapper>
    </ElementWrapper>
  </Wrapper>
);

DetailsParts.propTypes = {
  element: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node,
  isWideElement: PropTypes.bool,
  status: statusShape,
  tags: tagsShape
};

DetailsParts.defaultProps = {
  children: '',
  isWideElement: false,
  tags: [],
  status: null
};

export default DetailsParts;
