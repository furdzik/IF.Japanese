import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { verbItemShape } from '@types/verbShape';
import {
  translationsShape,
  metadataShape,
  statusShape,
  kanjiPartsShape
} from '@types/vocabularyDetailsShape';
import { tagsShape } from '@types/commonDetailsShape';
import { getVocabSpecificReading } from '@utils/vocabulary';

import Loader from '@components/ui/Loader';

import VocabularyDetailsComponent from '@components/VocabularyDetails';

import { PROPER_NAME_TYPE, getProperName } from './utils';

import selector from './VocabularyDetails.selector';
import { getVocabularyDetails } from './VocabularyDetails.reducer';

const VocabularyDetails = (props) => {
  const [name, setName] = useState(getProperName(props.name, PROPER_NAME_TYPE.KANJI));

  useEffect(() => {
    setName(getProperName(props.name, PROPER_NAME_TYPE.KANJI));

    props.getVocabularyDetails(name, props.name, getVocabSpecificReading(props.name));
  }, [props.name]);

  return !props.loading ? (
    <VocabularyDetailsComponent
      name={name}
      meaning={props.meaning}
      translations={props.translations}
      additionalExplanation={props.additionalExplanation}
      antonyms={props.antonyms}
      examples={props.examples}
      status={props.status}
      metadata={props.metadata}
      tags={props.tags}
      verb={props.verb}
      kanjiParts={props.kanjiParts}
    />
  ) : <Loader covered />;
};

VocabularyDetails.propTypes = {
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
  kanjiParts: kanjiPartsShape,
  tags: tagsShape,
  verb: verbItemShape
};

VocabularyDetails.defaultProps = {
  additionalExplanation: null,
  antonyms: null,
  examples: null,
  kanjiParts: null,
  tags: null,
  verb: null
};

const mapDispatchToProps = {
  getVocabularyDetails
};

export default connect(selector, mapDispatchToProps)(VocabularyDetails);
