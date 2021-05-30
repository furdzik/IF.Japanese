import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';

import { VOCAB_IDS } from '@config/constants';
import defaultMessages from '@utils/default.messages';

import { vocabShape } from '@types/vocabShape';
import { filtersLengthShape } from '@types/filtersLengthShape';

import Filters from '@components/Filters';
import VocabularyList from '@components/VocabularyList';
import ProgressBar from '@components/ProgressBar';

import { getVocabulary, changeFilters } from './Vocabulary.reducer';

import selector from './Vocabulary.selector';

const Vocabulary = (props) => {
  const intl = useIntl();

  useEffect(() => {
    props.getVocabulary();
  }, [props.selectedFilters]);

  const filterList = [
    {
      value: VOCAB_IDS.KNOWN,
      label: intl.formatMessage(defaultMessages.known)
    },
    {
      value: VOCAB_IDS.IN_PROGRESS,
      label: intl.formatMessage(defaultMessages.inProgress)
    },
    {
      value: VOCAB_IDS.NOT_KNOWN,
      label: intl.formatMessage(defaultMessages.notKnown)
    }
  ];

  const secondaryFilterList = [
    {
      value: VOCAB_IDS.LEVEL_5,
      label: intl.formatMessage(defaultMessages.n5)
    },
    {
      value: VOCAB_IDS.LEVEL_4,
      label: intl.formatMessage(defaultMessages.n4)
    },
    {
      value: VOCAB_IDS.LEVEL_3,
      label: intl.formatMessage(defaultMessages.n3)
    },
    {
      value: VOCAB_IDS.LEVEL_2,
      label: intl.formatMessage(defaultMessages.n2)
    },
    {
      value: VOCAB_IDS.LEVEL_1,
      label: intl.formatMessage(defaultMessages.n1)
    },
    {
      value: VOCAB_IDS.OTHER,
      label: intl.formatMessage(defaultMessages.other)
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
  vocabLength: filtersLengthShape.isRequired,
  vocab: vocabShape
};

Vocabulary.defaultProps = {
  vocab: null
};

const mapDispatchToProps = {
  changeFilters,
  getVocabulary
};

export default connect(selector, mapDispatchToProps)(Vocabulary);
