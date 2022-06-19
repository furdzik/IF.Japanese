import React from 'react';
import PropTypes from 'prop-types';

import { breakpoints, useBreakpoint } from 'css-in-js-styles-utils';

import { selectedFiltersShape, filterListShape } from '@types/filters';

import CheckboxList from '@components/CheckboxList';

import {
  Wrapper,
  FiltersBox,
  FiltersGroup
} from './Filters.styles.js';

const Filters = (props) => {
  const isMobile = useBreakpoint(breakpoints.smallLaptop);

  return (
    <Wrapper>
      <FiltersBox primary>
        <CheckboxList
          name="filters"
          onCheckboxClick={props.changeFilters}
          items={props.filterList}
          selected={props.selectedFilters}
          centered={!isMobile}
        />
      </FiltersBox>
      <FiltersGroup>
        <FiltersBox noHeight={props.additionalFilterList}>
          <CheckboxList
            name="filters"
            onCheckboxClick={props.changeFilters}
            items={props.secondaryFilterList}
            selected={props.selectedFilters}
            centered={!isMobile}
          />
        </FiltersBox>
        {
          props.additionalFilterList ? (
            <FiltersBox noHeight={props.additionalFilterList}>
              <CheckboxList
                name="filters"
                onCheckboxClick={props.changeFilters}
                items={props.additionalFilterList}
                selected={props.selectedFilters}
                centered={!isMobile}
              />
            </FiltersBox>
          ) : null
        }
      </FiltersGroup>
    </Wrapper>
  );
};

Filters.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  filterList: filterListShape.isRequired,
  secondaryFilterList: filterListShape.isRequired,
  selectedFilters: selectedFiltersShape.isRequired,
  additionalFilterList: filterListShape
};

Filters.defaultProps = {
  additionalFilterList: null
};

export default Filters;
