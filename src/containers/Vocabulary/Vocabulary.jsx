import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';

import {
  KNOWN_VOCAB,
  IN_PROGRESS_VOCAB,
  NOT_KNOWN_VOCAB,
  LEVEL_5_VOCAB,
  LEVEL_4_VOCAB,
  LEVEL_3_VOCAB,
  LEVEL_2_VOCAB,
  LEVEL_1_VOCAB,
  OTHER_VOCAB
} from '@config/constants';

import { vocabType, vocabLengthType } from '@components/VocabularyList/VocabularyList.types';

import Filters from '@components/Filters';
import VocabularyList from '@components/VocabularyList';
import ProgressBar from '@components/ProgressBar';

import { getVocabulary, changeFilters } from './Vocabulary.reducer';

import selector from './Vocabulary.selector';
import messages from './Vocabulary.messages.js';

const Vocabulary = (props) => {
  const intl = useIntl();

  useEffect(() => {
    props.getVocabulary();
  }, [props.selectedFilters]);

  const filterList = [
    {
      value: KNOWN_VOCAB,
      label: intl.formatMessage(messages.known)
    },
    {
      value: IN_PROGRESS_VOCAB,
      label: intl.formatMessage(messages.inProgress)
    },
    {
      value: NOT_KNOWN_VOCAB,
      label: intl.formatMessage(messages.notKnown)
    }
  ];

  const secondaryFilterList = [
    {
      value: LEVEL_5_VOCAB,
      label: intl.formatMessage(messages.n5)
    },
    {
      value: LEVEL_4_VOCAB,
      label: intl.formatMessage(messages.n4)
    },
    {
      value: LEVEL_3_VOCAB,
      label: intl.formatMessage(messages.n3)
    },
    {
      value: LEVEL_2_VOCAB,
      label: intl.formatMessage(messages.n2)
    },
    {
      value: LEVEL_1_VOCAB,
      label: intl.formatMessage(messages.n1)
    },
    {
      value: OTHER_VOCAB,
      label: intl.formatMessage(messages.other)
    }
  ];

  return props.vocab ? (
    <React.Fragment>
      <Filters
        length={props.vocabLength}
        changeFilters={props.changeFilters}
        selectedFilters={props.selectedFilters}
        filterList={filterList}
        secondaryFilterList={secondaryFilterList}
      />
      <ProgressBar
        length={props.vocabLength}
      />
      <VocabularyList
        vocab={props.vocab}
      />
    </React.Fragment>
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
