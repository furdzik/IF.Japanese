import React  from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { objectShape } from '@utils/types/objectShape';

import {
  DetailsWrapper,
  WordHeader,
  JishoLink,
  Content,
  Header,
  SectionWrapper,
  NameWrapper,
  Tag,
  TagsWrapper,
  CharacterWrapper,
  ReadingList,
  ReadingListItem,
  StrokeWrapper,
  StrokeBox,
  StrokeImage,
  StrokeNumberWrapper,
  ExampleWrapper
} from './KanjiDetails.styles.js';
import messages from './KanjiDetails.messages';

const KanjiDetails = (props) => {
  const intl = useIntl();
  console.log(props);
  return (
    <DetailsWrapper>
      {/* do wydzielenia z Vocab */}
      <WordHeader
        known={props.known}
        inProgress={props.inProgress}
      >
        <span>{props.kanji}</span>
        <JishoLink
          href={`https://jisho.org/search/%23kanji%20${props.kanji}`}
          target="_blank"
          notKnow={!props.known && !props.inProgress}
        >
          {intl.formatMessage(messages.jishoLinkText)}
        </JishoLink>
      </WordHeader>
      <Content>
        <TagsWrapper>
          {
            props.isJoyo ? (
              <Tag isCommon>{intl.formatMessage(messages.joyo)}</Tag>
            ) : null
          }
          {
            props.level !== 0 ? (
              <Tag isJlpt>{intl.formatMessage(messages.jlptLevelText, {
                level: props.level
              })}</Tag>
            ) : null
          }
          {
            props.tags && props.tags.map((el, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tag key={index}>{el}</Tag>
            ))
          }
        </TagsWrapper>
        <Header>{intl.formatMessage(messages.meaningHeader)}</Header>
        <SectionWrapper flex>
          <NameWrapper>
            <CharacterWrapper>{props.kanji}</CharacterWrapper>
            {
              props.numberOfStrokes ? (
                <div>
                  {intl.formatMessage(messages.numberOfStrokes, {
                    number: <StrokeNumberWrapper>{props.numberOfStrokes}</StrokeNumberWrapper>
                  })}
                </div>
              ) : null
            }
          </NameWrapper>
          <div>
            <ReadingList>
              <ReadingListItem>
                <b>{intl.formatMessage(messages.meaningText)}:</b> {props.meaning?.english}
              </ReadingListItem>
              {
                props.kunyomi && props.kunyomi !== '' ? (
                  <ReadingListItem>
                    <b>{intl.formatMessage(messages.kunyomiText)}:</b> {props.kunyomi}
                  </ReadingListItem>
                ) : null
              }
              {
                props.onyomi && props.onyomi !== '' ? (
                  <ReadingListItem>
                    <b>{intl.formatMessage(messages.onyomiText)}:</b> {props.onyomi}
                  </ReadingListItem>
                ) : null
              }
            </ReadingList>
          </div>
        </SectionWrapper>
        {
          props.strokes ? (
            <React.Fragment>
              <Header>{intl.formatMessage(messages.strokesHeader)}</Header>
              <SectionWrapper>
                <StrokeWrapper>
                  {
                    props.strokes.images.map((image, index) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <StrokeBox key={index}>
                        <StrokeImage src={image} alt="" />
                      </StrokeBox>
                    ))
                  }
                </StrokeWrapper>
              </SectionWrapper>
            </React.Fragment>
          ) : null
        }
        {
          props.examples ? (
            <React.Fragment>
              <Header>{intl.formatMessage(messages.examplesHeader)}</Header>
              <SectionWrapper>
                <ExampleWrapper>
                {
                  props.examples.map((example, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <p key={index}>
                      {example.japanese}: {example.meaning?.english}
                    </p>
                  ))
                }
                </ExampleWrapper>
              </SectionWrapper>
            </React.Fragment>
          ) : null
        }
      </Content>
    </DetailsWrapper>
  );
};

KanjiDetails.propTypes = {
  kanji: PropTypes.string.isRequired,
  examples: PropTypes.arrayOf(objectShape),
  grade: PropTypes.number,
  inProgress: PropTypes.bool,
  isJoyo: PropTypes.bool,
  known: PropTypes.bool,
  kunyomi: PropTypes.string,
  level: PropTypes.number,
  meaning: objectShape,
  numberOfStrokes: PropTypes.number,
  onyomi: PropTypes.string,
  radical: objectShape,
  strokes: objectShape
};

KanjiDetails.defaultProps = {
  examples: [],
  grade: null,
  inProgress: null,
  isJoyo: null,
  known: null,
  kunyomi: null,
  level: null,
  meaning: null,
  numberOfStrokes: null,
  onyomi: null,
  radical: null,
  strokes: null
};

export default KanjiDetails;
