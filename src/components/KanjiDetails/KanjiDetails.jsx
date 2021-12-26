import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';

import {
  additionalExplanationShape,
  kanjiReadingShape,
  metadataShape,
  problemsShape,
  statusShape,
  tagsShape
} from '@types/commonDetails';
import { strokesShape, examplesShape, similarKanjiArrayShape } from '@types/kanjiDetails';

import AdditionalExplanationBox from '@components/AdditionalExplanationBox';
import Details from '@components/Details';
import DetailsParts from '@components/DetailsParts';
import ProblemsBox from '@components/ProblemsBox';
import ShortKanjiDetailsParts from '@components/ShortKanjiDetailsParts';
import SubHeading from '@components/SubHeading';
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
      props.tags.forEach((el) => {
        tags.push(<Tag tagType={el.tagType} key={uuidv4()}>{el.label}</Tag>);
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
          {
            props.meaning ? (
              <ReadingListItem>
                <b>{intl.formatMessage(messages.meaningText)}</b>
                {props.meaning}
              </ReadingListItem>
            ) : null
          }
          {
            props.reading?.kunyomi?.length ? (
              <ReadingListItem>
                <b>{intl.formatMessage(messages.kunyomiText)}</b>
                {props.reading?.kunyomi}
              </ReadingListItem>
            ) : null
          }
          {
            props.reading?.onyomi?.length ? (
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
          <SubHeading>
            {intl.formatMessage(messages.similarKanjiHeader)}
          </SubHeading>
          {
            props.similarKanji.map((kanji) => (
              <DetailsParts
                key={uuidv4()}
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
        <SubHeading>
          {intl.formatMessage(messages.radicalsHeader)}
        </SubHeading>
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
                      props.strokes?.graphs.map((image) => (
                        <StrokeBox key={uuidv4()}>
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
        props.examples.length ? {
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
          section: (
            <AdditionalExplanationBox
              header={intl.formatMessage(messages.additionalExplanationHeader)}
              additionalExplanation={props.additionalExplanation}
            />
          )
        } : null,
        props.problems?.length ? {
          section: (
            <ProblemsBox
              header={intl.formatMessage(messages.problemsHeader)}
              problems={props.problems}
            />
          )
        } : null
      ]}
      apiError={props.apiError}
    />
  );
};

KanjiDetails.propTypes = {
  kanji: PropTypes.string.isRequired,
  additionalExplanation: additionalExplanationShape,
  apiError: PropTypes.bool,
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
  additionalExplanation: null,
  apiError: false,
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
