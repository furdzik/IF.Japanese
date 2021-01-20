import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';

import {
  KNOWN_VERBS,
  IN_PROGRESS_VERBS,
  NOT_KNOWN_VERBS,
  LEVEL_5_VERBS,
  LEVEL_4_VERBS,
  LEVEL_3_VERBS,
  LEVEL_2_VERBS,
  LEVEL_1_VERBS,
  OTHER_VERBS
} from '@config/constants';

import { vocabType, vocabLengthType } from '@components/VocabularyList/VocabularyList.types';

import Filters from '@components/Filters';
import VerbsList from '@components/VerbsList';
import ProgressBar from '@components/ProgressBar';

import { getVerbs, changeFilters } from './Verbs.reducer';

import selector from './Verbs.selector';
import messages from './Verbs.messages.js';

const Verbs = (props) => {
  const intl = useIntl();

  useEffect(() => {
    props.getVerbs();
  }, [props.selectedFilters]);

  const filterList = [
    {
      value: KNOWN_VERBS,
      label: intl.formatMessage(messages.known)
    },
    {
      value: IN_PROGRESS_VERBS,
      label: intl.formatMessage(messages.inProgress)
    },
    {
      value: NOT_KNOWN_VERBS,
      label: intl.formatMessage(messages.notKnown)
    }
  ];

  const secondaryFilterList = [
    {
      value: LEVEL_5_VERBS,
      label: intl.formatMessage(messages.n5)
    },
    {
      value: LEVEL_4_VERBS,
      label: intl.formatMessage(messages.n4)
    },
    {
      value: LEVEL_3_VERBS,
      label: intl.formatMessage(messages.n3)
    },
    {
      value: LEVEL_2_VERBS,
      label: intl.formatMessage(messages.n2)
    },
    {
      value: LEVEL_1_VERBS,
      label: intl.formatMessage(messages.n1)
    },
    {
      value: OTHER_VERBS,
      label: intl.formatMessage(messages.other)
    }
  ];

  return props.verbs ? (
    <React.Fragment>
      <Filters
        length={props.verbsLength}
        changeFilters={props.changeFilters}
        selectedFilters={props.selectedFilters}
        filterList={filterList}
        secondaryFilterList={secondaryFilterList}
      />
      <ProgressBar
        length={props.verbsLength}
      />
      <VerbsList
        verbs={props.verbs}
      />
    </React.Fragment>
  ) : null;
};

Verbs.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  getVerbs: PropTypes.func.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.number).isRequired,
  verbsLength: vocabLengthType.isRequired,
  verbs: vocabType
};

Verbs.defaultProps = {
  verbs: null
};

const mapDispatchToProps = {
  changeFilters,
  getVerbs
};

export default connect(selector, mapDispatchToProps)(Verbs);
