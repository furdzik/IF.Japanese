import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import { simpleExamplesShape, vocabExamplesShape } from '@types/vocabExamplesShape';

import Tag from '@components/Tag';

import {
  Wrapper,
  LoadMoreButton,
  List,
  ListItem,
  ListItemContent,
  TagWrapper
} from './VocabExamples.styles.js';

import { StyledTile } from '../DetailsParts/DetailsParts.styles';

const VocabExamples = (props) => (
  <Wrapper>
    {console.log(props.vocabExamples)}
    {
      props.vocabExamples.length ? (
        <List>
          {
            props.vocabExamples.map((el) => (
              <ListItem key={uuidv4()}>
                <ListItemContent>
                  <TagWrapper>
                    {
                      el.tags ? el.tags.map((tag) => (
                        <Tag
                          small
                          tagType={tag.tagType}
                          key={uuidv4()}
                        >
                          {tag.label}
                        </Tag>
                      )) : null
                    }
                  </TagWrapper>
                  <div>
                    {el.vocab} / {el.reading} / {el.meaning}
                  </div>
                  <StyledTile
                    level={0}
                    known={el.status?.known}
                    nowLearning={el.status?.nowLearning}
                    inProgress={el.status?.inProgress}
                    isWideElement
                    noOrder
                  >
                    {
                      el.status ? (
                        <Link to={el.meaning ? `${el.vocab},${el.meaning}}` : el.vocab}>
                          {el.vocab}
                        </Link>
                      ) : el.vocab
                    }
                  </StyledTile>
                </ListItemContent>
              </ListItem>
            ))
          }
        </List>
      ) : null
    }
    {
      props.showLoadMoreButton ? (
        <LoadMoreButton
          type="button"
          onClick={() => props.getVocabExamples(props.examples, props.vocabExamples.length)}
        >
          See more
        </LoadMoreButton>
      ) : null
    }
  </Wrapper>
);

VocabExamples.propTypes = {
  getVocabExamples: PropTypes.func.isRequired,
  examples: simpleExamplesShape,
  showLoadMoreButton: PropTypes.bool,
  vocabExamples: vocabExamplesShape
};

VocabExamples.defaultProps = {
  examples: [],
  showLoadMoreButton: true,
  vocabExamples: []
};

export default VocabExamples;
