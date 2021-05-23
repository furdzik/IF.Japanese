import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { bunpouTypes } from '@config/constants';
import { verbItemShape } from '@types/verbShape';

import Details from '@components/Details';
import Modal from '@components/ui/Modal';
import VerbConjugationGroup from '@components/VerbConjugationGroup';

import conjugationMessages from '@components/VerbsListItem/VerbsListItem.messages';

import {
  Tag,
  ConjugationLink,
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

  const getTags = () => {
    const tags = [];

    if (props.isVerb) {
      tags.push(
        <Tag verb>
          <ConjugationLink type="button" onClick={() => setConjugationOpen(true)}>
            {intl.formatMessage(messages.conjugationText)}
          </ConjugationLink>
        </Tag>
      );
    }
    if (props.isCommon) {
      tags.push(
        <Tag isCommon>{intl.formatMessage(messages.common)}</Tag>
      );
    }
    if (props.jlpt) {
      props.jlpt.forEach((el, index) => {
        // eslint-disable-next-line react/no-array-index-key
        tags.push(<Tag isJlpt key={index}>{el}</Tag>);
      });
    }
    if (props.tags) {
      props.tags.forEach((el, index) => {
        // eslint-disable-next-line react/no-array-index-key
        tags.push(<Tag key={index}>{el}</Tag>);
      });
    }

    return tags;
  };

  return (
    <Details
      name={props.name}
      reading={props.reading}
      known={props.known}
      inProgress={props.inProgress}
      nowLearning={props.nowLearning}
      jishoLink={`https://jisho.org/word/${props.slug}`}
      tags={getTags()}
      additionalBox={(
        <React.Fragment>
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
        </React.Fragment>
      )}
      mainSectionHeader={intl.formatMessage(messages.mainHeader)}
      mainSection={(
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
      )}
      sections={[
        {
          title: intl.formatMessage(messages.additionalExplanationHeader),
          section: props.additionalExplanation ? (
            <AdditionalExplanationWrapper>
              {props.additionalExplanation}
            </AdditionalExplanationWrapper>
          ) : null
        },
        {
          title: intl.formatMessage(messages.examplesHeader),
          section: props.examples ? (
            <AdditionalExplanationWrapper>
              {
                props.examples.map((el, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index}>{el}</div>
                ))
              }
            </AdditionalExplanationWrapper>
          ) : null
        }
      ]}
    >
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
    </Details>
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
  nowLearning: PropTypes.bool,
  reading: PropTypes.string,
  slug: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  verb: verbItemShape
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
  nowLearning: false,
  reading: '',
  slug: null,
  tags: [],
  verb: null
};

export default VocabularyDetails;
