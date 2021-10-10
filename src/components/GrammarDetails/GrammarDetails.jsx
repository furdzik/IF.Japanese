import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';

import {
  additionalExplanationShape,
  statusShape,
  tagsShape,
  problemsShape
} from '@types/commonDetailsShape';
import {
  examplesShape,
  similarGrammarDetailsShape,
  shortExplanationShape
} from '@types/grammarShape';

import Tag from '@components/ui/Tag';

import Details from '@components/Details';
import DetailsAdditionalExplanation from '@components/DetailsAdditionalExplanation';
import DetailsSubHeader from '@components/DetailsSubHeader';
import DetailsParts from '@components/DetailsParts';
import DetailsProblems from '@components/DetailsProblems';

import { getComponentGrammar } from './utils';

import {
  MainSectionWrapper,
  ExamplesWrapper,
  ExampleWord,
  ExampleElement,
  ShortExplanationWrapper
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
      wide={props.wide}
      known={props.status?.known}
      inProgress={props.status?.inProgress}
      nowLearning={props.status?.nowLearning}
      toRepeat={props.status?.toRepeat}
      tags={getTags()}
      mainSectionHeader={intl.formatMessage(messages.mainHeader)}
      mainSection={(
        <MainSectionWrapper>
          {ComponentGrammar}
        </MainSectionWrapper>
      )}
      additionalBox={props.shortExplanation ? (
        <ShortExplanationWrapper>{props.shortExplanation}</ShortExplanationWrapper>
      ) : null}
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
        props.examples ? {
          title: intl.formatMessage(messages.examplesHeader),
          section: (
            <ExamplesWrapper>
              {
                props.examples.map((example) => (
                  <ExampleWord key={uuidv4()}>
                    {
                      example.map((el) => (
                        <ExampleElement
                          key={uuidv4()}
                          isGrammarWord={el.grammarWord}
                          grammarWordIndex={el.grammarWordIndex}
                        >
                          {el.word}
                        </ExampleElement>
                      ))
                    }
                  </ExampleWord>
                ))
              }
            </ExamplesWrapper>
          )
        } : null,
        props.additionalExplanation ? {
          section: (
            <DetailsAdditionalExplanation
              header={intl.formatMessage(messages.additionalExplanationHeader)}
              additionalExplanation={props.additionalExplanation}
            />
          )
        } : null,
        props.problems?.length ? {
          section: (
            <DetailsProblems
              header={intl.formatMessage(messages.problemsHeader)}
              problems={props.problems}
            />
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
  additionalExplanation: additionalExplanationShape,
  examples: examplesShape,
  problems: problemsShape,
  shortExplanation: shortExplanationShape,
  similarGrammar: similarGrammarDetailsShape,
  tags: tagsShape,
  wide: PropTypes.bool
};

GrammarDetails.defaultProps = {
  additionalExplanation: null,
  examples: null,
  shortExplanation: null,
  problems: null,
  similarGrammar: null,
  tags: null,
  wide: false
};

export default GrammarDetails;
