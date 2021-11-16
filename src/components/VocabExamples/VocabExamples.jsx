import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import { characterType } from '@constants';

import { simpleExamplesShape, vocabExamplesShape } from '@types/vocabExamples';

import Character from '@components/ui/Character';
import ErrorMessageBox from '@components/ui/ErrorMessageBox';
import Tag from '@components/ui/Tag';

import {
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
} from './VocabExamples.styles.js';
import messages from './VocabExamples.messages';

const VocabExamples = (props) => {
  const intl = useIntl();

  const kanjiWithFurigana = (el) => (
    <React.Fragment>
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
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {
        !props.apiError && props.vocabExamples.length ? (
          <ListWrapper>
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
                            joyo={!!el.original}
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
                                  {kanjiWithFurigana(el)}
                                </Link>
                              ) : (
                                <a
                                  href={`https://jisho.org/search/${el.vocab}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {kanjiWithFurigana(el)}
                                </a>
                              )
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
            {
              props.showMoreLoading ? (
                <StyledSimpleLoader />
              ) : null
            }
          </ListWrapper>
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
      {
        props.apiError ? (
          <ErrorMessageBox message={intl.formatMessage(messages.apiErrorMsg)} simple />
        ) : null
      }
    </React.Fragment>
  );
};

VocabExamples.propTypes = {
  getVocabExamples: PropTypes.func.isRequired,
  apiError: PropTypes.bool,
  examples: simpleExamplesShape,
  showLoadMoreButton: PropTypes.bool,
  showMoreLoading: PropTypes.bool,
  vocabExamples: vocabExamplesShape
};

VocabExamples.defaultProps = {
  apiError: false,
  examples: [],
  showLoadMoreButton: false,
  showMoreLoading: false,
  vocabExamples: []
};

export default VocabExamples;
