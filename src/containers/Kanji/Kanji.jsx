import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';

import { FILTERS_IDS } from '@config/constants';

import { kanjiShape } from '@types/kanjiShape';
import { filtersLengthShape, selectedFiltersShape } from '@types/filtersShape';

import { filterLabels, secondaryFilterLabels } from '@utils/filters';

import Loader from '@components/ui/Loader';
import Filters from '@components/Filters';
import Legend from '@components/Legend';
import KanjiList from '@components/KanjiList';
import ProgressBar from '@components/ProgressBar';

import selector from './Kanji.selector';
import { getKanji, changeFilters } from './Kanji.reducer';

import messages from './Kanji.messages';

const Kanji = (props) => {
  const intl = useIntl();

  useEffect(() => {
    props.getKanji();
  }, [props.selectedFilters]);

  const additionalFilterList = [
    {
      value: FILTERS_IDS.JOYO_KANJI,
      label: intl.formatMessage(messages.joyo)
    }
  ];

  return !props.loading ? (
    <React.Fragment>
      <Filters
        length={props.kanjiLength}
        changeFilters={props.changeFilters}
        selectedFilters={props.selectedFilters}
        filterList={filterLabels}
        secondaryFilterList={secondaryFilterLabels}
        additionalFilterList={additionalFilterList}
      />
      <Legend length={props.kanjiLength} />
      <ProgressBar length={props.kanjiLength} />
      <KanjiList kanji={props.kanji} />
    </React.Fragment>
  ) : <Loader static />;
};

Kanji.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  getKanji: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  kanji: kanjiShape,
  kanjiLength: filtersLengthShape,
  selectedFilters: selectedFiltersShape
};

Kanji.defaultProps = {
  kanji: [],
  kanjiLength: 0,
  selectedFilters: null
};

const mapDispatchToProps = {
  changeFilters,
  getKanji
};

export default connect(selector, mapDispatchToProps)(Kanji);
