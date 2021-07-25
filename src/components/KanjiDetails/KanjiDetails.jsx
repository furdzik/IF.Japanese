import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import {
  kanjiReadingShape,
  tagsShape,
  statusShape,
  metadataShape
} from '@types/commonDetailsShape';
import { strokesShape, examplesShape } from '@types/kanjiDetailsShape';

import Details from '@components/Details';
import DetailsSecondarySection from '@components/DetailsSecondarySection';
import DetailsSubHeader from '@components/DetailsSubHeader';
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
      additionalBox={props.strokes?.count ? (
        <div>
          {intl.formatMessage(messages.numberOfStrokes, {
            number: <StrokeNumberWrapper>{props.strokes?.count}</StrokeNumberWrapper>
          })}
        </div>
      ) : null}
      mainSectionHeader={intl.formatMessage(messages.mainHeader)}
      mainSection={(
        <ReadingList>
          <ReadingListItem>
            <b>{intl.formatMessage(messages.meaningText)}</b>
            {props.meaning}
          </ReadingListItem>
          {
            props.reading?.kunyomi ? (
              <ReadingListItem>
                <b>{intl.formatMessage(messages.kunyomiText)}</b>
                {props.reading?.kunyomi.join(', ')}
              </ReadingListItem>
            ) : null
          }
          {
            props.reading?.onyomi ? (
              <ReadingListItem>
                <b>{intl.formatMessage(messages.onyomiText)}</b>
                {props.reading?.onyomi.join(', ')}
              </ReadingListItem>
            ) : null
          }
        </ReadingList>
      )}
      secondarySection={props.radicals ? (
        <DetailsSecondarySection>
          <DetailsSubHeader>
            {intl.formatMessage(messages.radicalsHeader)}
          </DetailsSubHeader>
        </DetailsSecondarySection>
      ) : null}
      sections={[
        {
          title: intl.formatMessage(messages.strokesHeader),
          section: props.strokes ? (
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
        },
        props.examples ? {
          title: intl.formatMessage(messages.examplesHeader),
          section: (
            <ExampleWrapper>
              {
                props.examples.map((example, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <p key={index}>
                    {example.japanese}: {example.meaning}
                  </p>
                ))
              }
              <MoreExamplesLink href={`https://jisho.org/search/*${props.kanji}*`} target="_blank">
                {intl.formatMessage(messages.examplesMoreText)}
              </MoreExamplesLink>
            </ExampleWrapper>
          )
        } : null
      ]}
    />
  );
};

KanjiDetails.propTypes = {
  kanji: PropTypes.string.isRequired,
  examples: examplesShape,
  meaning: PropTypes.string,
  metadata: metadataShape,
  radicals: PropTypes.arrayOf(PropTypes.string),
  reading: kanjiReadingShape,
  status: statusShape,
  strokes: strokesShape,
  tags: tagsShape
};

KanjiDetails.defaultProps = {
  examples: null,
  meaning: null,
  metadata: null,
  radicals: null,
  reading: null,
  status: null,
  strokes: null,
  tags: null
};

export default KanjiDetails;
