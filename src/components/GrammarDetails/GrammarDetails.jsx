import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { statusShape, tagsShape } from '@types/commonDetailsShape';
import {
  examplesShape,
  similarGrammarDetailsShape,
  problemsShape,
  explanationShape
} from '@types/grammarShape';

import Details from '@components/Details';
import DetailsSubHeader from '@components/DetailsSubHeader';
import DetailsParts from '@components/DetailsParts';
import Tag from '@components/Tag';

import { getComponentGrammar } from './utils';

import {
  MainSectionWrapper,
  ExamplesWrapper,
  ProblemsWrapper
} from './GrammarDetails.styles.js';
import messages from './GrammarDetails.messages';

const GrammarDetails = (props) => {
  const intl = useIntl();
  const ComponentGrammar = getComponentGrammar(props.grammarId);

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
      name={props.grammarName}
      known={props.status?.known}
      inProgress={props.status?.inProgress}
      nowLearning={props.status?.nowLearning}
      toRepeat={props.status?.toRepeat}
      tags={getTags()}
      mainSectionHeader={intl.formatMessage(messages.mainHeader)}
      mainSection={(
        <MainSectionWrapper>
          {
            props.explanation ? (
              <div>{props.explanation}</div>
            ) : null
          }
          {ComponentGrammar}
        </MainSectionWrapper>
      )}
      secondarySection={props.similarGrammar?.length ? (
        <React.Fragment>
          <DetailsSubHeader>
            {intl.formatMessage(messages.similarGrammarHeader)}
          </DetailsSubHeader>
          {
            props.similarGrammar.map((grammar, index) => (
              <DetailsParts
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                tags={grammar.tags}
                status={grammar.status}
                link={`/grammar/${grammar.grammarId}`}
                element={grammar.grammarName}
                isWideElement
              >
                {grammar.explanation}
              </DetailsParts>
            ))
          }
        </React.Fragment>
      ) : null}
      sections={[
        props.examples?.length ? {
          title: intl.formatMessage(messages.examplesHeader),
          section: (
            <ExamplesWrapper>
              {
                props.examples.map((el, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index}>{el}</div>
                ))
              }
            </ExamplesWrapper>
          )
        } : null,
        props.problems?.length ? {
          title: intl.formatMessage(messages.problemsHeader),
          section: (
            <ProblemsWrapper>
              {
                props.problems.map((el, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index}>{el}</div>
                ))
              }
            </ProblemsWrapper>
          )
        } : null
      ]}
    />
  );
};

GrammarDetails.propTypes = {
  grammarId: PropTypes.string.isRequired,
  grammarName: PropTypes.string.isRequired,
  status: statusShape.isRequired,
  examples: examplesShape,
  explanation: explanationShape,
  problems: problemsShape,
  similarGrammar: similarGrammarDetailsShape,
  tags: tagsShape
};

GrammarDetails.defaultProps = {
  examples: [],
  explanation: null,
  problems: [],
  similarGrammar: [],
  tags: []
};

export default GrammarDetails;
