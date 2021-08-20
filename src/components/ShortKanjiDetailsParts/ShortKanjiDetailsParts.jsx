import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import {
  KanjiMeaning,
  KanjiReading
} from './ShortKanjiDetailsParts.styles.js';
import messages from './ShortKanjiDetailsParts.messages';

const ShortKanjiDetailsParts = (props) => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <KanjiMeaning>{props.meaning}</KanjiMeaning>
      <KanjiReading>
        {
          props.reading?.kunyomi ? (
            <div>
              {intl.formatMessage(messages.kanjiPartsKunLabel)}
              {props.reading?.kunyomi}
            </div>
          ) : null
        }
        {
          props.reading?.onyomi ? (
            <div>
              {intl.formatMessage(messages.kanjiPartsOnLabel)}
              {props.reading?.onyomi}
            </div>
          ) : null
        }
      </KanjiReading>
    </React.Fragment>
  );
};

ShortKanjiDetailsParts.propTypes = {
  meaning: PropTypes.string.isRequired,
  reading: PropTypes.shape({
    kunyomi: PropTypes.string,
    onyomi: PropTypes.string
  }).isRequired
};

export default ShortKanjiDetailsParts;
