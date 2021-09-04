import React from 'react';
import { useIntl } from 'react-intl';

import DetailsSubHeader from '@components/DetailsSubHeader';
import PartOfSpeechBox from '@components/ui/PartOfSpeechBox';

import {

} from './N1han2desuGrammar.styles.js';
import messages from './N1han2desuGrammar.messages';

const N1han2desuGrammar = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <DetailsSubHeader bigger>{intl.formatMessage(messages.particleHaHeader)}</DetailsSubHeader>
      <p>
        {intl.formatMessage(messages.particleHaCopy)}
      </p>
      <p>
        {intl.formatMessage(messages.particleHaCopy2, {
          noun: <PartOfSpeechBox>noun</PartOfSpeechBox>
        })}
      </p>
      <p>{intl.formatMessage(messages.particleHaCopy3)}</p>
      <p>{intl.formatMessage(messages.particleHaCopy4)}</p>
    </React.Fragment>
  );
};

export default N1han2desuGrammar;
