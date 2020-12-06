import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { Link } from 'react-router-dom';

import {
  VocabularyDetailsWrapper,
  WordHeader,
  JishoLink,
  WordHeaderSeparator,
  TagsWrapper,
  Tag,
  Content,
  MeaningWrapper,
  WordWrapper,
  MeaningHeader,
  SensesWrapper,
  SensesList,
  SensesListItem,
  AdditionalInfo,
  PartOfSpeechWrapper,
  PartOfSpeechBox,
  AntonymsBox,
  AntonymsLink,
  AdditionalExplanationWrapper
} from './VocabularyDetails.styles.js';
import messages from './VocabularyDetails.messages';

const VocabularyDetails = (props) => {
  const intl = useIntl();

  return (
    <VocabularyDetailsWrapper>
      <WordHeader
        known={props.known}
        inProgress={props.inProgress}
      >
        <span>{props.name}</span>
        {
          props.name !== props.reading ? (
            <React.Fragment>
              <WordHeaderSeparator>/</WordHeaderSeparator>
              {props.reading}
            </React.Fragment>
          ) : null
        }
        <JishoLink
          href={`https://jisho.org/word/${props.name}`}
          target="_blank"
          notKnow={!props.known && !props.inProgress}
        >
          {intl.formatMessage(messages.jishoLinkText)}
        </JishoLink>
      </WordHeader>
      <Content>
        <TagsWrapper>
          {
            props.isVerb ? (
              // eslint-disable-next-line react/no-array-index-key
              <Tag verb>
                <Link to={`/verbs#${props.name}`}>
                  {intl.formatMessage(messages.conjugationText)}
                </Link>
              </Tag>
            ) : null
          }
          {
            props.isCommon ? (
              <Tag>{intl.formatMessage(messages.common)}</Tag>
            ) : null
          }
          {
            props.jlpt && props.jlpt.map((el, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tag key={index}>{el}</Tag>
            ))
          }
          {
            props.tags && props.tags.map((el, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tag key={index}>{el}</Tag>
            ))
          }
        </TagsWrapper>
        <MeaningHeader>{intl.formatMessage(messages.meaningHeader)}</MeaningHeader>
        <MeaningWrapper>
          <WordWrapper>
            {props.name}
          </WordWrapper>
          <SensesWrapper>
            <SensesList>
              {
                props.senses && props.senses.map((el, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <SensesListItem number={index + 1} key={index}>
                    <div>
                      <PartOfSpeechWrapper>
                        {
                          el.parts_of_speech.map((s, key) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <PartOfSpeechBox key={key}>{s}</PartOfSpeechBox>
                          ))
                        }
                      </PartOfSpeechWrapper>
                      <div>
                        {
                          // eslint-disable-next-line no-shadow
                          el.english_definitions.map((def, index) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <React.Fragment key={index}>
                              {def}
                              {el.english_definitions.length !== index + 1 ? ', ' : ''}
                            </React.Fragment>
                          ))
                        }
                        {
                          el.antonyms.map((antonyms, key) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <AntonymsBox key={key}>
                              {intl.formatMessage(messages.antonymText)}
                              <AntonymsLink to={`/vocab/${antonyms}`}>{antonyms}</AntonymsLink>
                            </AntonymsBox>
                          ))
                        }
                        <AdditionalInfo>{el.info}</AdditionalInfo>
                      </div>
                    </div>
                  </SensesListItem>
                ))
              }
            </SensesList>
          </SensesWrapper>
        </MeaningWrapper>
        {
          props.additionalExplanation ? (
            <SensesWrapper>
              <MeaningHeader smallMargin>
                {intl.formatMessage(messages.additionalExplanationHeader)}
              </MeaningHeader>
              <AdditionalExplanationWrapper>
                {props.additionalExplanation}
              </AdditionalExplanationWrapper>
            </SensesWrapper>
          ) : null
        }
        {
          props.examples ? (
            <SensesWrapper>
              <MeaningHeader smallMargin>
                {intl.formatMessage(messages.examplesHeader)}
              </MeaningHeader>
              <AdditionalExplanationWrapper>
                {
                  props.examples.map((el) => (
                    <div>{el}</div>
                  ))
                }
              </AdditionalExplanationWrapper>
            </SensesWrapper>
          ) : null
        }
      </Content>
    </VocabularyDetailsWrapper>
  );
};

VocabularyDetails.propTypes = {
  name: PropTypes.string.isRequired,
  senses: PropTypes.arrayOf(PropTypes.object).isRequired,
  additionalExplanation: PropTypes.string,
  examples: PropTypes.arrayOf(PropTypes.string),
  inProgress: PropTypes.bool,
  isCommon: PropTypes.bool,
  isVerb: PropTypes.bool,
  jlpt: PropTypes.arrayOf(PropTypes.string),
  known: PropTypes.bool,
  reading: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

VocabularyDetails.defaultProps = {
  additionalExplanation: null,
  examples: [],
  inProgress: false,
  isCommon: null,
  isVerb: false,
  jlpt: [],
  known: false,
  reading: '',
  tags: []
};

export default VocabularyDetails;
