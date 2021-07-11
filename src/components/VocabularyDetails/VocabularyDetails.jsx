import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { grammarTypes } from '@config/constants';

import { verbItemShape } from '@types/verbShape';

import Modal from '@components/ui/Modal';

import Details from '@components/Details';
import VerbConjugationGroup from '@components/VerbConjugationGroup';
import Tag from '@components/Tag';

import conjugationMessages from '@utils/defaultMessages/conjugation.messages';

import {
  ConjugationLink,
  SensesList,
  SensesListItem,
  AdditionalInfo,
  PartOfSpeechWrapper,
  PartOfSpeechBox,
  AntonymsBox,
  AntonymsLink,
  AdditionalExplanationWrapper,
  KanjiParts
} from './VocabularyDetails.styles.js';
import messages from './VocabularyDetails.messages';

const VocabularyDetails = (props) => {
  const intl = useIntl();
  const [conjugationOpen, setConjugationOpen] = useState(false);

  const getTags = () => {
    const tags = [];

    if (props.isVerb) {
      tags.push(
        <Tag isVerb>
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
                    <AdditionalInfo>{el.tags.join(', ')}</AdditionalInfo>
                  </div>
                </div>
              </SensesListItem>
            ))
          }
        </SensesList>
      )}
      secondarySection={props.kanjiParts ? (
        <KanjiParts>
          {
            props.kanjiParts.map((el) => (
              <div>{el}</div>
            ))
          }
        </KanjiParts>
      ) : null}
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
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.JISHOU_FORM}Label`])}
              verb={props.verb}
              grammar={[grammarTypes.JISHOU_FORM]}
              politeForm
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.KANOU_FORM}Label`])}
              verb={props.verb}
              grammar={[grammarTypes.KANOU_FORM]}
              politeForm
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.TAI_FORM}Label`])}
              verb={props.verb}
              grammar={[grammarTypes.TAI_FORM]}
              politeForm
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.TE_FORM}Label`])}
              verb={props.verb}
              grammar={[grammarTypes.TE_FORM]}
              noPast
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.IKOU_FORM}Label`])}
              verb={props.verb}
              grammar={[grammarTypes.IKOU_FORM]}
              noPast
              noNegative
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.IKOU_FORM}Label`])}
              verb={props.verb}
              grammar={[grammarTypes.MEIREI_FORM]}
              noPast
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.JOUKEN_BA_FORM}Label`])}
              verb={props.verb}
              grammar={[grammarTypes.JOUKEN_BA_FORM]}
              noPast
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.JOUKEN_TARA_FORM}Label`])}
              verb={props.verb}
              grammar={[grammarTypes.JOUKEN_TARA_FORM]}
              noPast
            />
            <VerbConjugationGroup
              showLabel
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.UKEMI_FORM}Label`])}
              verb={props.verb}
              grammar={[grammarTypes.UKEMI_FORM]}
              politeForm
            />
            <VerbConjugationGroup
              showLabel
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.SHIEKI_FORM}Label`])}
              verb={props.verb}
              grammar={[grammarTypes.SHIEKI_FORM]}
              politeForm
            />
            <VerbConjugationGroup
              showLabel
              label={intl.formatMessage(conjugationMessages[`${grammarTypes.SHIEKIUKEMI_FORM}Label`])}
              verb={props.verb}
              grammar={[grammarTypes.SHIEKIUKEMI_FORM, grammarTypes.SHIEKIUKEMI_SHORT_FORM]}
              politeForm
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
  kanjiParts: PropTypes.arrayOf(PropTypes.object),
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
  kanjiParts: null,
  known: false,
  nowLearning: false,
  reading: '',
  slug: null,
  tags: [],
  verb: null
};

export default VocabularyDetails;
