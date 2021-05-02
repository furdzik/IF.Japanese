import React  from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { objectShape } from '@utils/types/objectShape';

import Details from '@components/Details';

import {
  Tag,
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

  const getTags = () => {
    const tags = [];

    props.isJoyo ? tags.push(
      <Tag isCommon>{intl.formatMessage(messages.joyo)}</Tag>
    ) : null;

    props.level !== 0 ? tags.push(
      <Tag isJlpt>{intl.formatMessage(messages.jlptLevelText, {
        level: props.level
      })}</Tag>
    ) : null;

    return tags;
  };

  return (
    <Details
      name={props.kanji}
      known={props.known}
      inProgress={props.inProgress}
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
          ): null
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
