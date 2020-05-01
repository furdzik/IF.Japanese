import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { vocabType } from '@components/VocabularyList/VocabularyList.types';

import Container from '@components/Container';

import Heading from '@components/VocabularyHeading';
import VocabularyList from '@components/VocabularyList';

import { loadVocabularyData } from './Vocabulary.reducer';
import selector from './Vocabulary.selector';

const Vocabulary = (props) => {
  props.loadVocabularyData();

  const knownLength = props.vocab && props.vocab.filter((el) => el.known).length;
  const inProgressLength = props.vocab && props.vocab.filter((el) => el.inProgress).length;

  const changeFilters = (filter) => {
    console.log(filter);
  };

  return props.vocab ? (
    <Container>
      <Heading
        vocabLength={props.vocab.length}
        knownLength={knownLength}
        inProgressLength={inProgressLength}
        changeFilters={changeFilters}
      />
      <VocabularyList
        vocab={props.vocab}
      />
    </Container>
  ) : null;
};

Vocabulary.propTypes = {
  loadVocabularyData: PropTypes.func.isRequired,
  vocab: vocabType
};

Vocabulary.defaultProps = {
  vocab: null
};

const mapDispatchToProps = {
  loadVocabularyData
};

export default connect(selector, mapDispatchToProps)(Vocabulary);
