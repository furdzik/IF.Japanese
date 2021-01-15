import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { bunpouTypes } from '@config/constants';
import { objectShape } from '@utils/types/objectShape';

import Modal from '@components/ui/Modal';
import VerbConjugationGroup from '@components/VerbConjugationGroup';

import conjugationMessages from '@components/VerbsListItem/VerbsListItem.messages';

import {
  VocabularyDetailsWrapper,
  WordHeader,
  JishoLink,
  WordHeaderSeparator,
  TagsWrapper,
  Tag,
  ConjugationLink,
  Content,
  MeaningWrapper,
  WordWrapper,
  NameWrapper,
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

  const [conjugationOpen, setConjugationOpen] = useState(false);

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
          href={`https://jisho.org/word/${props.slug}`}
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
              <Tag verb>
                <ConjugationLink type="button" onClick={() => setConjugationOpen(true)}>
                  {intl.formatMessage(messages.conjugationText)}
                </ConjugationLink>
              </Tag>
            ) : null
          }
          {
            props.isCommon ? (
              <Tag isCommon>{intl.formatMessage(messages.common)}</Tag>
            ) : null
          }
          {
            props.jlpt && props.jlpt.map((el, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tag isJlpt key={index}>{el}</Tag>
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
          <NameWrapper>
            <WordWrapper>{props.name}</WordWrapper>
            {
              !props.antonyms && props.senses && props.senses
                .map((el, key) => el.antonyms.map((antonyms) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <AntonymsBox key={`${antonyms}_${key}`}>
                    {intl.formatMessage(messages.antonymText)}
                    <AntonymsLink to={`/vocab/${antonyms}`}>{antonyms}</AntonymsLink>
                  </AntonymsBox>
                )))
            }
            {
              props.antonyms ? (
                <AntonymsBox key={props.antonyms}>
                  {intl.formatMessage(messages.antonymText)}
                  <AntonymsLink to={`/vocab/${props.antonyms}`}>{props.antonyms}</AntonymsLink>
                </AntonymsBox>
              ) : null
            }
          </NameWrapper>
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
      {
        conjugationOpen ? (
          <Modal
            header={`${props.name} ${intl.formatMessage(messages.conjugationText)}`}
            onClose={() => setConjugationOpen(false)}
          >
            <VerbConjugationGroup
              showLabel
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.JISHOU_KEI}Label`])}
              verb={props.verb}
              bunpou={[bunpouTypes.JISHOU_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.KANOU_KEI}Label`])}
              verb={props.verb}
              bunpou={[bunpouTypes.KANOU_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.TAI_KEI}Label`])}
              verb={props.verb}
              bunpou={[bunpouTypes.TAI_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.TE_KEI}Label`])}
              verb={props.verb}
              bunpou={[bunpouTypes.TE_KEI]}
              noPast
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.IKOU_KEI}Label`])}
              verb={props.verb}
              bunpou={[bunpouTypes.IKOU_KEI]}
              noPast
              noNegative
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.IKOU_KEI}Label`])}
              verb={props.verb}
              bunpou={[bunpouTypes.MEIREI_KEI]}
              noPast
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.JOUKEN_BA_KEI}Label`])}
              verb={props.verb}
              bunpou={[bunpouTypes.JOUKEN_BA_KEI]}
              noPast
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.JOUKEN_TARA_KEI}Label`])}
              verb={props.verb}
              bunpou={[bunpouTypes.JOUKEN_TARA_KEI]}
              noPast
            />
            <VerbConjugationGroup
              showLabel
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.UKEMI_KEI}Label`])}
              verb={props.verb}
              bunpou={[bunpouTypes.UKEMI_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLabel
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.SHIEKI_KEI}Label`])}
              verb={props.verb}
              bunpou={[bunpouTypes.SHIEKI_KEI]}
              teineiKei
            />
            <VerbConjugationGroup
              showLabel
              label={intl.formatMessage(conjugationMessages[`${bunpouTypes.SHIEKIUKEMI_KEI}Label`])}
              verb={props.verb}
              bunpou={[bunpouTypes.SHIEKIUKEMI_KEI, bunpouTypes.SHIEKIUKEMI_SHORT_KEI]}
              teineiKei
            />
          </Modal>
        ) : null
      }
    </VocabularyDetailsWrapper>
  );
};

VocabularyDetails.propTypes = {
  name: PropTypes.string.isRequired,
  senses: PropTypes.arrayOf(PropTypes.object).isRequired,
  additionalExplanation: PropTypes.string,
  antonyms: PropTypes.string,
  examples: PropTypes.arrayOf(PropTypes.string),
  inProgress: PropTypes.bool,
  isCommon: PropTypes.bool,
  isVerb: PropTypes.bool,
  jlpt: PropTypes.arrayOf(PropTypes.string),
  known: PropTypes.bool,
  reading: PropTypes.string,
  slug: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  verb: objectShape
};

VocabularyDetails.defaultProps = {
  additionalExplanation: null,
  antonyms: null,
  examples: [],
  inProgress: false,
  isCommon: null,
  isVerb: false,
  jlpt: [],
  known: false,
  reading: '',
  slug: null,
  tags: [],
  verb: null
};

export default VocabularyDetails;
