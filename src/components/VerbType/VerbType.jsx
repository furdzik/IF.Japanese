import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { VERB_TYPE } from '@constants';

import detailsMessages from '@lang/messages/details.messages';

import {
  Wrapper
} from './VerbType.styles.js';

const VerbType = (props) => {
  const intl = useIntl();

  const verbTypeLabel = (type, symbol = false) => {
    switch (type) {
      case VERB_TYPE.transitive: {
        return symbol
          ? intl.formatMessage(detailsMessages.verbTypeTransitive)
          : intl.formatMessage(detailsMessages.verbTypeTransitiveText);
      }
      case VERB_TYPE.intransitive: {
        return symbol
          ? intl.formatMessage(detailsMessages.verbTypeIntransitive)
          : intl.formatMessage(detailsMessages.verbTypeIntransitiveText);
      }
      case VERB_TYPE.other: {
        return symbol
          ? intl.formatMessage(detailsMessages.verbTypeOther)
          : intl.formatMessage(detailsMessages.verbTypeOtherText);
      }

      default:
        return null;
    }
  };

  return (
    <Wrapper className={props.className} title={verbTypeLabel(props.verbType)}>
      {verbTypeLabel(props.verbType, props.symbol)}
    </Wrapper>
  );
};

VerbType.propTypes = {
  verbType: PropTypes.string.isRequired,
  className: PropTypes.string,
  symbol: PropTypes.bool
};

VerbType.defaultProps = {
  className: '',
  symbol: true
};

export default VerbType;
