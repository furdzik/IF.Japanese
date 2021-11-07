import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { Link } from 'react-router-dom';

import { grammarTypes, tagTypes } from '@constants';

import { verbItemShape } from '@types/verb';
import {
  additionalExplanationShape,
  statusShape,
  tagsShape,
  metadataShape,
  problemsShape
} from '@types/commonDetails';
import {
  japaneseFormShape,
  translationsShape,
  kanjiPartsShape,
  otherFormsShape
} from '@types/vocabularyDetails';

import Modal from '@components/ui/Modal';
import Tag from '@components/ui/Tag';

import AdditionalExplanationBox from '@components/AdditionalExplanationBox';
import Details from '@components/Details';
import DetailsParts from '@components/DetailsParts';
import ProblemsBox from '@components/ProblemsBox';
import ShortKanjiDetailsParts from '@components/ShortKanjiDetailsParts';
import SubHeading from '@components/SubHeading';
import VerbConjugationGroup from '@components/VerbConjugationGroup';

import conjugationMessages from '@lang/defaultMessages/conjugation.messages';

import {
  ConjugationLink,
  TranslationsList,
  TranslationsListItem,
  AdditionalInfo,
  PartOfSpeechWrapper,
  PartOfSpeechBox,
  AntonymsBox,
  AntonymsLink,
  ExamplesWrapper,
  OtherFormsWrapper
} from './VocabularyDetails.styles.js';
import messages from './VocabularyDetails.messages';

const VocabularyDetails = (props) => {
  const intl = useIntl();
  const [conjugationOpen, setConjugationOpen] = useState(false);

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
      known={props.status?.known}
      inProgress={props.status?.inProgress}
      nowLearning={props.status?.nowLearning}
      japaneseForm={props.japaneseForm}
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
                    {
                      el.restrictions.length ? (
                        <AdditionalInfo>
                          {intl.formatMessage(messages.restrictionsText)} {el.restrictions.join(', ')}
                        </AdditionalInfo>
                      ) : null
                    }
                    <AdditionalInfo>{el.info}</AdditionalInfo>
                    <AdditionalInfo>{el.tags.join(', ')}</AdditionalInfo>
                    {
                      el.seeAlso ? (
                        el.seeAlso.map((seeAlsoEl, seeAlsoIndex) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <AdditionalInfo key={seeAlsoIndex}>
                            {intl.formatMessage(messages.SeeAlsoText)}
                            <Link to={`vocab/${seeAlsoEl}`}>{seeAlsoEl}</Link>
                          </AdditionalInfo>
                        ))
                      ) : null
                    }
                    {
                      el.source ? (
                        el.source.map((sourceEl, sourceIndex) => (
                          // eslint-disable-next-line react/no-array-index-key
                          <AdditionalInfo key={sourceIndex}>
                            {intl.formatMessage(messages.sourceText, {
                              language: sourceEl.language,
                              word: sourceEl.word
                            })}
                          </AdditionalInfo>
                        ))
                      ) : null
                    }
                  </div>
                </div>
              </TranslationsListItem>
            ))
          }
          {
            props.otherForms.length ? (
              <OtherFormsWrapper>
                <SubHeading>
                  {intl.formatMessage(messages.otherFormsHeader)}
                </SubHeading>
                {
                  props.otherForms.map((form, index) => (
                    <div key={`${form.word}_${form.reading}`}>
                      {form.word} 【{form.reading}】
                      {props.otherForms.length - 1 !== index ? '、' : null}
                    </div>
                  ))
                }
              </OtherFormsWrapper>
            ) : null
          }
        </TranslationsList>
      )}
      secondarySection={props.kanjiParts ? (
        <React.Fragment>
          <SubHeading>
            {intl.formatMessage(messages.kanjiPartsHeader)}
          </SubHeading>
          {
            props.kanjiParts.map((kanji, kanjiIndex) => (
              <DetailsParts
                // eslint-disable-next-line react/no-array-index-key
                key={kanjiIndex}
                tags={kanji.tags}
                status={kanji.status}
                link={`/kanji/${kanji.kanji}`}
                element={kanji.kanji}
              >
                <ShortKanjiDetailsParts
                  meaning={kanji.meaning}
                  reading={kanji.reading}
                />
              </DetailsParts>
            ))
          }
        </React.Fragment>
      ) : null}
      sections={[
        {
          title: intl.formatMessage(messages.examplesHeader),
          section: props.examples ? (
            <ExamplesWrapper>
              {
                props.examples.map((el, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <div key={index}>{el}</div>
                ))
              }
            </ExamplesWrapper>
          ) : null
        },
        props.additionalExplanation ? {
          section: (
            <AdditionalExplanationBox
              header={intl.formatMessage(messages.additionalExplanationHeader)}
              additionalExplanation={props.additionalExplanation}
            />
          )
        } : null,
        props.problems?.length ? {
          section: (
            <ProblemsBox
              header={intl.formatMessage(messages.problemsHeader)}
              problems={props.problems}
            />
          )
        } : null
      ]}
    >
      {
        conjugationOpen ? (
          <Modal
            header={(
              <React.Fragment>
                <b>{props.name}</b> {intl.formatMessage(messages.conjugationText)}
              </React.Fragment>
            )}
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
  additionalExplanation: additionalExplanationShape,
  antonyms: PropTypes.arrayOf(PropTypes.string),
  examples: PropTypes.arrayOf(PropTypes.string),
  japaneseForm: japaneseFormShape,
  kanjiParts: kanjiPartsShape,
  otherForms: otherFormsShape,
  problems: problemsShape,
  tags: tagsShape,
  verb: verbItemShape
};

VocabularyDetails.defaultProps = {
  additionalExplanation: null,
  antonyms: null,
  examples: null,
  japaneseForm: null,
  kanjiParts: null,
  otherForms: null,
  problems: null,
  tags: null,
  verb: null
};

export default VocabularyDetails;
