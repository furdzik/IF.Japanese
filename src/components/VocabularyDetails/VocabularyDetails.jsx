import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import {
  VocabularyDetailsWrapper,
  WordHeader,
  WordHeaderSeparator,
  TagsWrapper,
  Tag,
  Content,
  MeaningHeader,
  SensesWrapper,
  SensesList,
  SensesListItem,
  AdditionalInfo,
  PartOfSpeechWrapper,
  PartOfSpeechBox
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
        {props.name}
        {
          props.name !== props.reading ? (
            <React.Fragment>
              <WordHeaderSeparator>/</WordHeaderSeparator>
              {props.reading}
            </React.Fragment>
          ) : null
        }
      </WordHeader>
      <Content>
        <TagsWrapper>
          {
            props.isCommon ? (
              <Tag>{intl.formatMessage(messages.common)}</Tag>
            ) : null
          }
          {
            props.jlpt && props.jlpt.map((el) => (
              <Tag>{el}</Tag>
            ))
          }
          {
            props.tags && props.tags.map((el) => (
              <Tag>{el}</Tag>
            ))
          }
        </TagsWrapper>
        <MeaningHeader>{intl.formatMessage(messages.meaningHeader)}</MeaningHeader>
        <SensesWrapper>
          <SensesList>
            {
              props.senses && props.senses.map((el, index) => (
                <SensesListItem number={index + 1}>
                  <div>
                    <PartOfSpeechWrapper>
                      {
                        el.parts_of_speech.map((s) => (
                          <PartOfSpeechBox>
                            {s}
                          </PartOfSpeechBox>
                        ))
                      }
                    </PartOfSpeechWrapper>
                    <div>
                      {
                        // eslint-disable-next-line no-shadow
                        el.english_definitions.map((def, index) => (
                          <React.Fragment>
                            {def}
                            {el.english_definitions.length !== index + 1 ? ', ' : ''}
                          </React.Fragment>
                        ))
                      }
                      {el.antonyms ? el.antonyms : ''}
                      <AdditionalInfo>{el.info}</AdditionalInfo>
                    </div>
                  </div>
                  {/* restrictions: [] */}
                  {/* see_also: [] */}
                  {/* source: [] */}
                  {/* tags: [] */}
                  {console.log(el)}
                </SensesListItem>
              ))
            }
          </SensesList>
        </SensesWrapper>
      </Content>
    </VocabularyDetailsWrapper>
  );
};

VocabularyDetails.propTypes = {
  name: PropTypes.string.isRequired,
  senses: PropTypes.arrayOf(PropTypes.object).isRequired,
  inProgress: PropTypes.bool,
  isCommon: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  japanese: PropTypes.arrayOf(PropTypes.object),
  jlpt: PropTypes.arrayOf(PropTypes.string),
  known: PropTypes.bool,
  reading: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
};

VocabularyDetails.defaultProps = {
  jlpt: [],
  isCommon: null,
  tags: [],
  reading: '',
  known: false,
  inProgress: false,
  japanese: []
};

export default VocabularyDetails;
