import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import {
  additionalExplanationShape,
  kanjiReadingShape,
  metadataShape,
  problemsShape,
  statusShape,
  tagsShape
} from '@types/commonDetailsShape';
import { strokesShape, examplesShape, similarKanjiArrayShape } from '@types/kanjiDetailsShape';

import Details from '@components/Details';
import DetailsSubHeader from '@components/DetailsSubHeader';
import DetailsParts from '@components/DetailsParts';
import ShortKanjiDetailsParts from '@components/ShortKanjiDetailsParts';
import Tag from '@components/Tag';

import VocabExamples from '@containers/VocabExamples';

import {
  ReadingList,
  ReadingListItem,
  StrokeWrapper,
  StrokeBox,
  StrokeImage,
  StrokeNumberWrapper,
  StrokeNumber,
  ExampleWrapper,
  MoreExamplesLink
} from './KanjiDetails.styles.js';
import messages from './KanjiDetails.messages';

const KanjiDetails = (props) => {
  const intl = useIntl();

  const getTags = () => {
    const tags = [];

    if (props.tags) {
      props.tags.forEach((el, index) => {
        // eslint-disable-next-line react/no-array-index-key
        tags.push(<Tag tagType={el.tagType} key={index}>{el.label}</Tag>);
      });
    }

    return tags;
  };

  return (
    <Details
      name={props.kanji}
      known={props.status?.known}
      inProgress={props.status?.inProgress}
      nowLearning={props.status?.nowLearning}
      jishoLink={`https://jisho.org/search/%23kanji%20${props.metadata?.slug}`}
      tags={getTags()}
      mainSectionHeader={intl.formatMessage(messages.mainHeader)}
      mainSection={(
        <ReadingList>
          <ReadingListItem>
            <b>{intl.formatMessage(messages.meaningText)}</b>
            {props.meaning}
          </ReadingListItem>
          {
            props.reading?.kunyomi.length ? (
              <ReadingListItem>
                <b>{intl.formatMessage(messages.kunyomiText)}</b>
                {props.reading?.kunyomi}
              </ReadingListItem>
            ) : null
          }
          {
            props.reading?.onyomi.length ? (
              <ReadingListItem>
                <b>{intl.formatMessage(messages.onyomiText)}</b>
                {props.reading?.onyomi}
              </ReadingListItem>
            ) : null
          }
        </ReadingList>
      )}
      secondarySection={props.similarKanji?.length ? (
        <React.Fragment>
          <DetailsSubHeader>
            {intl.formatMessage(messages.similarKanjiHeader)}
          </DetailsSubHeader>
          {
            props.similarKanji.map((kanji, index) => (
              <DetailsParts
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                tags={kanji.tags}
                status={kanji.status}
                link={`/kanji/${kanji.kanji}`}
                element={kanji.kanji}
              >
                <ShortKanjiDetailsParts
                  meaning={kanji.meaning}
                  reading={kanji.reading}
                />
              </DetailsParts>
            ))
          }
        </React.Fragment>
      ) : null}
      additionalBox={props.radicals?.length ? (
        <DetailsSubHeader>
          {intl.formatMessage(messages.radicalsHeader)}
        </DetailsSubHeader>
      ) : null}
      sections={[
        props.strokes ? {
          title: intl.formatMessage(messages.strokesHeader),
          section: (
            <React.Fragment>
              {
                props.strokes?.count ? (
                  <StrokeNumberWrapper>
                    {intl.formatMessage(messages.numberOfStrokes, {
                      number: <StrokeNumber>{props.strokes?.count}</StrokeNumber>
                    })}
                  </StrokeNumberWrapper>
                ) : null
              }
              {
                props.strokes?.graphs ? (
                  <StrokeWrapper>
                    {
                      props.strokes?.graphs.map((image, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <StrokeBox key={index}>
                          <StrokeImage src={image} alt="" />
                        </StrokeBox>
                      ))
                    }
                  </StrokeWrapper>
                ) : null
              }
            </React.Fragment>
          )
        } : null,
        props.examples ? {
          title: intl.formatMessage(messages.examplesHeader),
          section: (
            <ExampleWrapper>
              {
                props.examples.length ? (
                  <VocabExamples examples={props.examples} />
                ) : null
              }
              <MoreExamplesLink href={`https://jisho.org/search/*${props.kanji}*`} target="_blank">
                {intl.formatMessage(messages.examplesMoreText)}
              </MoreExamplesLink>
            </ExampleWrapper>
          )
        } : null,
        props.additionalExplanation ? {
          title: intl.formatMessage(messages.additionalExplanationHeader),
          section: (
            <ExampleWrapper>
              {
                props.additionalExplanation.map((el, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index}>{el}</div>
                ))
              }
            </ExampleWrapper>
          )
        } : null,
        props.problems ? {
          title: intl.formatMessage(messages.problemsHeader),
          section: (
            <ExampleWrapper>
              {
                props.problems.map((el, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index}>{el.problem}</div>
                ))
              }
            </ExampleWrapper>
          )
        } : null
      ]}
    />
  );
};

KanjiDetails.propTypes = {
  kanji: PropTypes.string.isRequired,
  additionalExplanation: additionalExplanationShape,
  examples: examplesShape,
  meaning: PropTypes.string,
  metadata: metadataShape,
  problems: problemsShape,
  radicals: PropTypes.arrayOf(PropTypes.string),
  reading: kanjiReadingShape,
  similarKanji: similarKanjiArrayShape,
  status: statusShape,
  strokes: strokesShape,
  tags: tagsShape
};

KanjiDetails.defaultProps = {
  examples: null,
  meaning: null,
  metadata: null,
  problems: null,
  radicals: null,
  reading: null,
  similarKanji: null,
  status: null,
  strokes: null,
  tags: null
};

export default KanjiDetails;
