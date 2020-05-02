import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { vocabType, vocabLengthType } from '@components/VocabularyList/VocabularyList.types';

import Container from '@components/Container';

import VocabularyHeading from '@components/VocabularyHeading';
import VocabularyList from '@components/VocabularyList';

import { getVocabulary, changeFilters } from './Vocabulary.reducer';
import selector from './Vocabulary.selector';

const Vocabulary = (props) => {
  useEffect(() => {
    props.getVocabulary();
  }, [props.selectedFilters]);

  return props.vocab ? (
    <Container>
      <VocabularyHeading
        length={props.vocabLength}
        changeFilters={props.changeFilters}
        selectedFilters={props.selectedFilters}
      />
      <VocabularyList
        vocab={props.vocab}
      />
    </Container>
  ) : null;
};

Vocabulary.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  getVocabulary: PropTypes.func.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.number).isRequired,
  vocabLength: vocabLengthType.isRequired,
  vocab: vocabType
};

Vocabulary.defaultProps = {
  vocab: null
};

const mapDispatchToProps = {
  changeFilters,
  getVocabulary
};

export default connect(selector, mapDispatchToProps)(Vocabulary);
