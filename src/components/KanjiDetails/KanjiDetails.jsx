import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { tagTypes } from '@config/constants';

import { objectShape } from '@types/objectShape';

import Details from '@components/Details';
import Tag from '@components/Tag';

import {
  ReadingList,
  ReadingListItem,
  StrokeWrapper,
  StrokeBox,
  StrokeImage,
  StrokeNumberWrapper,
  ExampleWrapper,
  MoreExamplesLink
} from './KanjiDetails.styles.js';
import messages from './KanjiDetails.messages';

const KanjiDetails = (props) => {
  const intl = useIntl();

  const getTags = () => {
    const tags = [];
    // TODO: change object to one tags (like VocabularyDetails)
    if (props.isJoyo) {
      tags.push(
        <Tag tagType={tagTypes.JOYO}>{intl.formatMessage(messages.joyo)}</Tag>
      );
    }
    if (props.level !== 0) {
      tags.push(
        <Tag tagType={tagTypes.JLPT}>
          {intl.formatMessage(messages.jlptLevelText, { level: props.level })}
        </Tag>
      );
    }
    if (props.grade) {
      tags.push(
        <Tag>{intl.formatMessage(messages.gradeLevelText, { grade: props.grade })}</Tag>
      );
    }

    return tags;
  };

  return (
    <Details
      name={props.kanji}
      known={props.known}
      inProgress={props.inProgress}
      nowLearning={props.nowLearning}
      jishoLink={`https://jisho.org/search/%23kanji%20${props.kanji}`}
      tags={getTags()}
      additionalBox={props.numberOfStrokes ? (
        <div>
          {intl.formatMessage(messages.numberOfStrokes, {
            number: <StrokeNumberWrapper>{props.numberOfStrokes}</StrokeNumberWrapper>
          })}
        </div>
      ) : null}
      mainSectionHeader={intl.formatMessage(messages.mainHeader)}
      mainSection={(
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
      )}
      sections={[
        {
          title: intl.formatMessage(messages.strokesHeader),
          section: props.strokes ? (
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
          ) : null
        },
        {
          title: intl.formatMessage(messages.examplesHeader),
          section: props.examples ? (
            <ExampleWrapper>
              {
                props.examples.map((example, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <p key={index}>
                    {example.japanese}: {example.meaning?.english}
                  </p>
                ))
              }
              <MoreExamplesLink href={`https://jisho.org/search/*${props.kanji}*`} target="_blank">
                {intl.formatMessage(messages.examplesMoreText)}
              </MoreExamplesLink>
            </ExampleWrapper>
          ) : null
        }
      ]}
    />
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
  nowLearning: PropTypes.bool,
  numberOfStrokes: PropTypes.number,
  onyomi: PropTypes.string,
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
  nowLearning: null,
  numberOfStrokes: null,
  onyomi: null,
  strokes: null
};

export default KanjiDetails;
