import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { vocabLengthType } from '@components/VocabularyList/VocabularyList.types';

import CheckboxList from '@components/ui/CheckboxList';

import {
  Header,
  Legend,
  LegendElement,
  FiltersWrapper
} from './Filters.styles.js';
import messages from './Filters.messages.js';

const Filters = (props) => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <Header>
        <FiltersWrapper>
          <CheckboxList
            name="filters"
            onCheckboxClick={props.changeFilters}
            items={props.filterList}
            selected={props.selectedFilters}
          />
        </FiltersWrapper>
        <div>
          <FiltersWrapper secondary noHeight={props.additionalFilterList}>
            <CheckboxList
              name="filters"
              onCheckboxClick={props.changeFilters}
              items={props.secondaryFilterList}
              selected={props.selectedFilters}
            />
          </FiltersWrapper>
          {
            props.additionalFilterList ? (
              <FiltersWrapper additional noHeight={props.additionalFilterList}>
                <CheckboxList
                  name="filters"
                  onCheckboxClick={props.changeFilters}
                  items={props.additionalFilterList}
                  selected={props.selectedFilters}
                />
              </FiltersWrapper>
            ) : null
          }
        </div>
        <Legend>
          <LegendElement>
            <span>{intl.formatMessage(messages.all)}{props.length.all}</span>
            <span>{intl.formatMessage(messages.notKnown)}: {props.length.notKnown}</span>
          </LegendElement>
          <LegendElement>
            <span>{intl.formatMessage(messages.known)}: {props.length.known}</span>
            <span>{intl.formatMessage(messages.inProgress)}: {props.length.inProgress}</span>
          </LegendElement>
        </Legend>
      </Header>
    </React.Fragment>
  );
};

Filters.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  filterList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string
  })).isRequired,
  length: vocabLengthType.isRequired,
  secondaryFilterList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string
  })).isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.number).isRequired,
  additionalFilterList: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string
  }))
};

Filters.defaultProps = {
  additionalFilterList: null
};

export default Filters;
