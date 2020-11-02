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
                  {/*restrictions: []*/}
                  {/*see_also: []*/}
                  {/*source: []*/}
                  {/*tags: []*/}
                  {console.log(el)}
                </SensesListItem>
              ))
            }
          </SensesList>
        </SensesWrapper>
      </Content>
    </VocabularyDetailsWrapper>
  );
}

VocabularyDetails.propTypes = {
  name: PropTypes.string.isRequired,
  senses: PropTypes.arrayOf(PropTypes.object).isRequired,
  reading: PropTypes.string,
  jlpt: PropTypes.arrayOf(PropTypes.string),
  isCommon: PropTypes.bool,
  tags: PropTypes.arrayOf(PropTypes.string),
  known: PropTypes.bool,
  inProgress: PropTypes.bool,
  pitch: PropTypes.string,
  verb: PropTypes.object,
  japanese: PropTypes.arrayOf(PropTypes.object)
};

VocabularyDetails.defaultProps = {
  jlpt: [],
  isCommon: null,
  tags: [],
  reading: '',
  know: false,
  inProgress: false,
  pitch: '',
  verb: {},
  japanese: []
};

export default VocabularyDetails;
