import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';

import { mdiArrowLeftRight } from '@mdi/js';

import { Link } from 'react-router-dom';

import { GRAMMAR_TYPES, TAG_TYPES, VERB_TYPE } from '@constants';

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
  otherFormsShape,
  counterShape
} from '@types/vocabularyDetails';

import conjugationMessages from '@lang/messages/conjugation.messages';

import AdditionalExplanationBox from '@components/AdditionalExplanationBox';
import CounterConjugationTable from '@components/CounterConjugationTable';
import Details from '@components/Details';
import DetailsParts from '@components/DetailsParts';
import KanjiWithFurigana from '@components/KanjiWithFurigana';
import Modal from '@components/Modal';
import ProblemsBox from '@components/ProblemsBox';
import ShortKanjiDetailsParts from '@components/ShortKanjiDetailsParts';
import SubHeading from '@components/SubHeading';
import Tag from '@components/Tag';
import VerbConjugationGroup from '@components/VerbConjugationGroup';

import {
  ConjugationLink,
  TranslationsList,
  TranslationsListItem,
  AdditionalInfo,
  PartOfSpeechWrapper,
  PartOfSpeechBox,
  AntonymsBox,
  VerbBox,
  VerbTypeInfoBox,
  VerbTypeVerbWrapper,
  StyledTile,
  StyledVerbType,
  StyledIcon,
  AntonymsLink,
  ExamplesWrapper,
  OtherFormsWrapper,
  ConjugationHeader
} from './VocabularyDetails.styles.js';
import messages from './VocabularyDetails.messages';

const VocabularyDetails = (props) => {
  const intl = useIntl();
  const [verbConjugationOpen, setVerbConjugationOpen] = useState(false);
  const [counterConjugationOpen, setCounterConjugationOpen] = useState(false);

  const getTags = () => {
    const tags = [];

    if (props.tags) {
      props.tags.forEach((el) => {
        if (el.tagType === TAG_TYPES.isVerb) {
          tags.push(
            <Tag tagType={el.tagType} key={uuidv4()}>
              <ConjugationLink type="button" onClick={() => setVerbConjugationOpen(true)}>
                {el.label}
              </ConjugationLink>
            </Tag>
          );
        } else if (el.tagType === TAG_TYPES.counter) {
          tags.push(
            <Tag tagType={el.tagType} key={uuidv4()}>
              <ConjugationLink type="button" onClick={() => setCounterConjugationOpen(true)}>
                {el.label}
              </ConjugationLink>
            </Tag>
          );
        } else {
          tags.push(
            <Tag tagType={el.tagType} key={uuidv4()}>{el.label}</Tag>
          );
        }
      });
    }

    return tags;
  };

  return (
    <Details
      name={props.name}
      meaning={props.meaning}
      usuallyInKana={props.usuallyInKana}
      known={props.status?.known}
      inProgress={props.status?.inProgress}
      nowLearning={props.status?.nowLearning}
      japaneseForm={props.japaneseForm}
      jishoLink={`https://jisho.org/word/${props.metadata.slug}`}
      tags={getTags()}
      additionalBox={(
        <React.Fragment>
          {
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
          }
          {
            props.verb && props.verb?.oppositeVerb ? (
              <VerbBox>
                <SubHeading>
                  {intl.formatMessage(messages.verbHeader)}
                </SubHeading>
                <VerbTypeInfoBox>
                  <VerbTypeVerbWrapper isTransitive={props.verb.verbType === VERB_TYPE.transitive}>
                    <StyledTile
                      level={0}
                      known={props.status?.known}
                      nowLearning={props.status?.nowLearning}
                      inProgress={props.status?.inProgress}
                      noOrder
                    >
                      <KanjiWithFurigana
                        kanji={props.japaneseForm?.kanji}
                        furigana={props.japaneseForm?.furigana}
                      />
                    </StyledTile>
                    <StyledVerbType verbType={props.verb?.verbType} />
                  </VerbTypeVerbWrapper>
                  <StyledIcon path={mdiArrowLeftRight} size={2} />
                  {
                    props.verb.oppositeVerb ? (
                      <VerbTypeVerbWrapper
                        isTransitive={props.verb.oppositeVerb.verbType === VERB_TYPE.transitive}
                      >
                        <StyledTile
                          level={0}
                          known={props.verb.oppositeVerb.status?.known}
                          nowLearning={props.verb.oppositeVerb.status?.nowLearning}
                          inProgress={props.verb.oppositeVerb.status?.inProgress}
                          noOrder
                        >
                          <Link
                            to={
                              `/vocab/${props.verb.oppositeVerb.opposite}`
                            }
                          >
                            <KanjiWithFurigana
                              kanji={props.verb.oppositeVerb.japaneseForm?.kanji}
                              furigana={props.verb.oppositeVerb.japaneseForm?.furigana}
                            />
                          </Link>
                        </StyledTile>
                        <StyledVerbType verbType={props.verb.oppositeVerb.verbType} />
                      </VerbTypeVerbWrapper>
                    ) : null
                  }
                </VerbTypeInfoBox>
              </VerbBox>
            ) : null
          }
          {
            props.otherForms.length ? (
              <OtherFormsWrapper>
                <SubHeading>
                  {intl.formatMessage(messages.otherFormsHeader)}
                </SubHeading>
                {
                  props.otherForms.map((otherForm, otherFormIndex) => (
                    <div key={uuidv4()}>
                      {otherForm.word} 【{otherForm.reading}】
                      {props.otherForms.length - 1 !== otherFormIndex ? '、' : null}
                    </div>
                  ))
                }
              </OtherFormsWrapper>
            ) : null
          }
        </React.Fragment>
      )}
      mainSectionHeader={intl.formatMessage(messages.mainHeader)}
      mainSection={(
        <TranslationsList>
          {
            props.translations && props.translations.map((el, translationsIndex) => (
              <TranslationsListItem number={translationsIndex + 1} key={uuidv4()}>
                <div>
                  <PartOfSpeechWrapper>
                    {
                      el.partsOfSpeech.map((partsOfSpeech) => (
                        <PartOfSpeechBox key={uuidv4()}>{partsOfSpeech}</PartOfSpeechBox>
                      ))
                    }
                  </PartOfSpeechWrapper>
                  <div>
                    {
                      el.englishDefinitions.map((definition, definitionIndex) => (
                        <React.Fragment key={uuidv4()}>
                          {definition}
                          {el.englishDefinitions.length !== definitionIndex + 1 ? ', ' : ''}
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
                        el.seeAlso.map((seeAlsoEl) => (
                          <AdditionalInfo key={uuidv4()}>
                            {intl.formatMessage(messages.SeeAlsoText)}
                            <Link to={`vocab/${seeAlsoEl}`}>{seeAlsoEl}</Link>
                          </AdditionalInfo>
                        ))
                      ) : null
                    }
                    {
                      el.source ? (
                        el.source.map((sourceEl) => (
                          <AdditionalInfo key={uuidv4()}>
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
        </TranslationsList>
      )}
      secondarySection={props.kanjiParts ? (
        <React.Fragment>
          <SubHeading>
            {intl.formatMessage(messages.kanjiPartsHeader)}
          </SubHeading>
          {
            props.kanjiParts.map((kanji) => (
              <DetailsParts
                key={uuidv4()}
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
                props.examples.map((example) => (
                  <div key={uuidv4()}>{example}</div>
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
      apiError={props.apiError}
    >
      {
        verbConjugationOpen ? (
          <Modal
            header={(
              <React.Fragment>
                <b>{props.name}</b>
                <ConjugationHeader>
                  {intl.formatMessage(messages.verbConjugationText)}
                </ConjugationHeader>
              </React.Fragment>
            )}
            onClose={() => setVerbConjugationOpen(false)}
          >
            <VerbConjugationGroup
              showLabel
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.jishouForm}Label`])}
              verb={props.verb}
              grammar={[GRAMMAR_TYPES.jishouForm]}
              politeForm
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.kanouForm}Label`])}
              verb={props.verb}
              grammar={[GRAMMAR_TYPES.kanouForm]}
              politeForm
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.taiForm}Label`])}
              verb={props.verb}
              grammar={[GRAMMAR_TYPES.taiForm]}
              politeForm
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.teForm}Label`])}
              verb={props.verb}
              grammar={[GRAMMAR_TYPES.teForm]}
              noPast
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.ikouForm}Label`])}
              verb={props.verb}
              grammar={[GRAMMAR_TYPES.ikouForm]}
              noPast
              noNegative
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.meireiForm}Label`])}
              verb={props.verb}
              grammar={[GRAMMAR_TYPES.meireiForm]}
              noPast
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.joukenBaForm}Label`])}
              verb={props.verb}
              grammar={[GRAMMAR_TYPES.joukenBaForm]}
              noPast
            />
            <VerbConjugationGroup
              showLine
              showLabel
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.joukenTaraForm}Label`])}
              verb={props.verb}
              grammar={[GRAMMAR_TYPES.joukenTaraForm]}
              noPast
            />
            <VerbConjugationGroup
              showLabel
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.ukemiForm}Label`])}
              verb={props.verb}
              grammar={[GRAMMAR_TYPES.ukemiForm]}
              politeForm
            />
            <VerbConjugationGroup
              showLabel
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.shiekiForm}Label`])}
              verb={props.verb}
              grammar={[GRAMMAR_TYPES.shiekiForm]}
              politeForm
            />
            <VerbConjugationGroup
              showLabel
              label={intl.formatMessage(conjugationMessages[`${GRAMMAR_TYPES.shiekiukemiForm}Label`])}
              verb={props.verb}
              grammar={[GRAMMAR_TYPES.shiekiukemiForm, GRAMMAR_TYPES.shiekiukemiShortForm]}
              politeForm
            />
          </Modal>
        ) : null
      }
      {
        counterConjugationOpen ? (
          <Modal
            header={(
              <React.Fragment>
                <b>~{props.name}</b>
                <ConjugationHeader>
                  {intl.formatMessage(messages.counterConjugationText)}
                </ConjugationHeader>
              </React.Fragment>
            )}
            onClose={() => setCounterConjugationOpen(false)}
          >
            <CounterConjugationTable
              vocab={props.counter?.reading ? props.counter?.reading : props.name}
              japaneseForm={props.japaneseForm}
              counterGroup={props.counter?.counterGroup}
              additionalNumbers={props.counter?.additionalNumbers}
              question={props.counter?.question}
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
  usuallyInKana: PropTypes.bool.isRequired,
  additionalExplanation: additionalExplanationShape,
  antonyms: PropTypes.arrayOf(PropTypes.string),
  apiError: PropTypes.bool,
  counter: counterShape,
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
  apiError: false,
  counter: null,
  examples: null,
  japaneseForm: null,
  kanjiParts: null,
  otherForms: null,
  problems: null,
  tags: null,
  verb: null
};

export default VocabularyDetails;
