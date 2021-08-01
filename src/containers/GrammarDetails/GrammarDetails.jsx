import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { verbItemShape } from '@types/verbShape';
import { statusShape, tagsShape, metadataShape } from '@types/commonDetailsShape';
import {
  japaneseFormShape,
  translationsShape,
  kanjiPartsShape,
  otherFormsShape
} from '@types/vocabularyDetailsShape';

import { getVocabSpecificReading } from '@utils/vocabulary';

import Loader from '@components/ui/Loader';

import VocabularyDetailsComponent from '@components/VocabularyDetails';

import { PROPER_NAME_TYPE, getProperName } from './utils';

import selector from './GrammarDetails.selector';
import { getVocabularyDetails } from './GrammarDetails.reducer';

const GrammarDetails = (props) => {
  const [name, setName] = useState(getProperName(props.name, PROPER_NAME_TYPE.KANJI));

  useEffect(() => {
    setName(getProperName(props.name, PROPER_NAME_TYPE.KANJI));

    props.getVocabularyDetails(name, props.name, getVocabSpecificReading(props.name));
  }, [props.name]);

  return !props.loading ? (
    <VocabularyDetailsComponent
      meaning={props.meaning}
      metadata={props.metadata}
      name={name}
      status={props.status}
      translations={props.translations}
      additionalExplanation={props.additionalExplanation}
      antonyms={props.antonyms}
      examples={props.examples}
      japaneseForm={props.japaneseForm}
      kanjiParts={props.kanjiParts}
      otherForms={props.otherForms}
      tags={props.tags}
      verb={props.verb}
    />
  ) : <Loader covered />;
};

GrammarDetails.propTypes = {
  getVocabularyDetails: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  meaning: PropTypes.string.isRequired,
  metadata: metadataShape.isRequired,
  name: PropTypes.string.isRequired,
  status: statusShape.isRequired,
  translations: translationsShape.isRequired,
  additionalExplanation: PropTypes.string,
  antonyms: PropTypes.arrayOf(PropTypes.string),
  examples: PropTypes.arrayOf(PropTypes.string),
  japaneseForm: japaneseFormShape,
  kanjiParts: kanjiPartsShape,
  otherForms: otherFormsShape,
  tags: tagsShape,
  verb: verbItemShape
};

GrammarDetails.defaultProps = {
  additionalExplanation: null,
  antonyms: null,
  examples: null,
  japaneseForm: null,
  kanjiParts: null,
  otherForms: null,
  tags: null,
  verb: null
};

const mapDispatchToProps = {
  getVocabularyDetails
};

export default connect(selector, mapDispatchToProps)(GrammarDetails);
