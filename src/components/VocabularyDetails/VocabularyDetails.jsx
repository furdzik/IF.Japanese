import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { grammarTypes, tagTypes } from '@config/constants';

import { verbItemShape } from '@types/verbShape';
import {
  translationsShape,
  metadataShape,
  statusShape,
  kanjiPartsShape,
  otherFormsShape
} from '@types/vocabularyDetailsShape';
import { tagsShape } from '@types/commonDetailsShape';

import Modal from '@components/ui/Modal';

import Details from '@components/Details';
import VerbConjugationGroup from '@components/VerbConjugationGroup';
import Tag from '@components/Tag';

import conjugationMessages from '@utils/defaultMessages/conjugation.messages';

import {
  ConjugationLink,
  TranslationsList,
  TranslationsListItem,
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
  console.log(props);

  const getTags = () => {
    const tags = [];

    if (props.tags) {
      props.tags.forEach((el, index) => {
        if (el.tagType === tagTypes.IS_VERB) {
          tags.push(
            // eslint-disable-next-line react/no-array-index-key
            <Tag tagType={el.tagType} key={index}>
              <ConjugationLink type="button" onClick={() => setConjugationOpen(true)}>
                {el.label}
              </ConjugationLink>
            </Tag>
          );
        } else {
          // eslint-disable-next-line react/no-array-index-key
          tags.push(<Tag tagType={el.tagType} key={index}>{el.label}</Tag>);
        }
      });
    }

    return tags;
  };

  return (
    <Details
      name={props.name}
      meaning={props.meaning}
      known={props.status.known}
      inProgress={props.status.inProgress}
      nowLearning={props.status.nowLearning}
      jishoLink={`https://jisho.org/word/${props.metadata.slug}`}
      tags={getTags()}
      additionalBox={(
        props.antonyms.length > 0 ? (
          <AntonymsBox key={props.antonyms}>
            {intl.formatMessage(messages.antonymText)}
            {
              props.antonyms.map((antonym) => (
                <AntonymsLink key={antonym} to={`/vocab/${antonym}`}>
                  {antonym}
                </AntonymsLink>
              ))
            }
          </AntonymsBox>
        ) : null
      )}
      mainSectionHeader={intl.formatMessage(messages.mainHeader)}
      mainSection={(
        <TranslationsList>
          {
            props.translations && props.translations.map((el, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <TranslationsListItem number={index + 1} key={index}>
                <div>
                  <PartOfSpeechWrapper>
                    {
                      el.partsOfSpeech.map((s, key) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <PartOfSpeechBox key={key}>{s}</PartOfSpeechBox>
                      ))
                    }
                  </PartOfSpeechWrapper>
                  <div>
                    {
                      // eslint-disable-next-line no-shadow
                      el.englishDefinitions.map((def, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <React.Fragment key={index}>
                          {def}
                          {el.englishDefinitions.length !== index + 1 ? ', ' : ''}
                        </React.Fragment>
                      ))
                    }
                    <AdditionalInfo>{el.info}</AdditionalInfo>
                    <AdditionalInfo>{el.tags.join(', ')}</AdditionalInfo>
                  </div>
                </div>
              </TranslationsListItem>
            ))
          }
          {/* @TODO other forms */}
          {console.log(props.otherForms)}
        </TranslationsList>
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
  meaning: PropTypes.string.isRequired,
  metadata: metadataShape.isRequired,
  name: PropTypes.string.isRequired,
  status: statusShape.isRequired,
  translations: translationsShape.isRequired,
  additionalExplanation: PropTypes.string,
  antonyms: PropTypes.arrayOf(PropTypes.string),
  examples: PropTypes.arrayOf(PropTypes.string),
  kanjiParts: kanjiPartsShape,
  otherForms: otherFormsShape,
  tags: tagsShape,
  verb: verbItemShape
};

VocabularyDetails.defaultProps = {
  additionalExplanation: null,
  antonyms: null,
  examples: null,
  kanjiParts: null,
  otherForms: null,
  tags: null,
  verb: null
};

export default VocabularyDetails;
