import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

import { getVocabSpecificReading } from '@utils/vocabulary';

import Loader from '@components/Loader';
import VocabularyDetailsComponent from '@components/VocabularyDetails';

import { PROPER_NAME_TYPE, getProperName } from './utils';

import { getVocabularyDetails } from './VocabularyDetails.reducer';
import selector from './VocabularyDetails.selector';

const VocabularyDetails = (props) => {
  const params = useParams();
  const [name, setName] = useState(getProperName(params.vocab, PROPER_NAME_TYPE.KANJI));

  useEffect(() => {
    setName(getProperName(params.vocab, PROPER_NAME_TYPE.KANJI));

    props.getVocabularyDetails(name, params.vocab, getVocabSpecificReading(params.vocab));
  }, [params.vocab]);

  return !props.loading ? (
    <VocabularyDetailsComponent
      name={name}
      meaning={props.meaning}
      usuallyInKana={props.usuallyInKana}
      metadata={props.metadata}
      status={props.status}
      translations={props.translations}
      additionalExplanation={props.additionalExplanation}
      antonyms={props.antonyms}
      counter={props.counter}
      examples={props.examples}
      japaneseForm={props.japaneseForm}
      kanjiParts={props.kanjiParts}
      otherForms={props.otherForms}
      problems={props.problems}
      tags={props.tags}
      verb={props.verb}
      apiError={props.apiError}
    />
  ) : <Loader covered />;
};

VocabularyDetails.propTypes = {
  getVocabularyDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  meaning: PropTypes.string.isRequired,
  metadata: metadataShape.isRequired,
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

const mapDispatchToProps = {
  getVocabularyDetails
};

export default connect(selector, mapDispatchToProps)(VocabularyDetails);
