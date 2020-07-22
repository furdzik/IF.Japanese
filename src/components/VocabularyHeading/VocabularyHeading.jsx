import React from 'react';
import PropTypes from 'prop-types';
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

import { vocabLengthType } from '@components/VocabularyList/VocabularyList.types';

import CheckboxList from '@components/ui/CheckboxList';

import {
  Header, Heading, Legend, Spaced, Filters
} from './VocabularyHeading.styles.js';
import messages from './VocabularyHeading.messages.js';

const VocabularyHeading = (props) => {
  const intl = useIntl();

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

  return (
    <React.Fragment>
      <Header>
        <Filters>
          <CheckboxList
            name="filters"
            onCheckboxClick={props.changeFilters}
            items={filterList}
            selected={props.selectedFilters}
          />
        </Filters>
        <Filters secondary>
          <CheckboxList
            name="filters"
            onCheckboxClick={props.changeFilters}
            items={secondaryFilterList}
            selected={props.selectedFilters}
          />
        </Filters>
        <Legend>
          <div>{intl.formatMessage(messages.all)}{props.length.all}</div>
          <div>
            <Spaced>{intl.formatMessage(messages.known)}: {props.length.known}</Spaced>
            {intl.formatMessage(messages.inProgress)}: {props.length.inProgress}
          </div>
        </Legend>
      </Header>
    </React.Fragment>
  );
};

VocabularyHeading.propTypes = {
  changeFilters: PropTypes.func.isRequired,
  length: vocabLengthType.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default VocabularyHeading;
