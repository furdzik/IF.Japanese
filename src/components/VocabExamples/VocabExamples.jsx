import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import { simpleExamplesShape, vocabExamplesShape } from '@types/vocabExamplesShape';

import Tag from '@components/Tag';

import {
  List,
  ListItem,
  ListItemContent,
  TagWrapper,
  ExampleWrapper,
  StyledTile,
  StyledButton,
  MeaningWrapper
} from './VocabExamples.styles.js';
import messages from './VocabExamples.messages';
import Character from '../Character';
import { characterType } from '../../config/constants';

const VocabExamples = (props) => {
  const intl = useIntl();

  return (
    <React.Fragment>
      {
        props.vocabExamples.length ? (
          <List>
            {
              props.vocabExamples.map((el) => (
                <ListItem key={uuidv4()} hasTags={!!el.tags.length}>
                  <ListItemContent>
                    <div>
                      {
                        el.tags.length ? (
                          <TagWrapper>
                            {
                              el.tags.map((tag) => (
                                <Tag
                                  small
                                  tagType={tag.tagType}
                                  key={uuidv4()}
                                >
                                  {tag.label}
                                </Tag>
                              ))
                            }
                          </TagWrapper>
                        ) : null
                      }
                      <ExampleWrapper>
                        <StyledTile
                          level={0}
                          known={el.status?.known}
                          nowLearning={el.status?.nowLearning}
                          inProgress={el.status?.inProgress}
                          isWideElement
                          noOrder
                        >
                          {
                            el.original ? (
                              <Link
                                to={
                                  `/vocab/${el.original.meaning
                                    ? `${el.original.vocab},${el.original.meaning},${el.original.vocab}`
                                    : el.vocab}`
                                }
                              >
                                <Character
                                  type={characterType.FURIGANA}
                                  elements={el.japaneseForm?.furigana}
                                  mainCharacters={false}
                                  small
                                />
                                <Character
                                  type={characterType.KANJI}
                                  elements={el.japaneseForm?.kanji}
                                  mainCharacters={false}
                                  small
                                />
                              </Link>
                            ) : el.vocab
                          }
                        </StyledTile>
                        <MeaningWrapper>
                          {el.meaning}
                        </MeaningWrapper>
                      </ExampleWrapper>
                    </div>
                  </ListItemContent>
                </ListItem>
              ))
            }
          </List>
        ) : null
      }
      {
        props.showLoadMoreButton ? (
          <StyledButton
            type="button"
            onClick={() => props.getVocabExamples(props.examples, props.vocabExamples.length)}
          >
            {intl.formatMessage(messages.seeMoreLabel)}
          </StyledButton>
        ) : null
      }
    </React.Fragment>
  );
};

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