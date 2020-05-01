import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import CheckboxList from '@components/ui/CheckboxList';

import {
  Header, Heading, Legend, Spaced, Filters
} from './VocabularyHeading.styles.js';
import messages from './VocabularyHeading.messages.js';

const VocabularyHeading = (props) => {
  const intl = useIntl();

  const filterList = [
    {
      id: '1',
      label: intl.formatMessage(messages.known)
    },
    {
      id: '2',
      label: intl.formatMessage(messages.inProgress)
    }
  ];

  return (
    <React.Fragment>
      <Heading>{intl.formatMessage(messages.heading)}</Heading>
      <Header>
        <Filters>
          <CheckboxList
            name="filters"
            onCheckboxClick={props.changeFilter}
            items={filterList}
          />
        </Filters>
        <Legend>
          <div>{intl.formatMessage(messages.all)}{props.vocabLength}</div>
          <div>
            <Spaced>{intl.formatMessage(messages.known)}: {props.knownLength}</Spaced>
            {intl.formatMessage(messages.inProgress)}: {props.inProgressLength}
          </div>
        </Legend>
      </Header>
    </React.Fragment>
  );
};

VocabularyHeading.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  inProgressLength: PropTypes.number.isRequired,
  knownLength: PropTypes.number.isRequired,
  vocabLength: PropTypes.number.isRequired
};

export default VocabularyHeading;
