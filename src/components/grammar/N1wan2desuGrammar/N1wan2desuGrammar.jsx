import React from 'react';
import { useIntl } from 'react-intl';

import DetailsSubHeader from '@components/DetailsSubHeader';
import PartOfSpeechBox from '@components/ui/PartOfSpeechBox';

import {
  GrammarLink
} from './N1wan2desuGrammar.styles.js';
import messages from './N1wan2desuGrammar.messages';

const N1wan2desuGrammar = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <DetailsSubHeader bigger>{intl.formatMessage(messages.particleWaHeader)}</DetailsSubHeader>
      <p>
        {intl.formatMessage(messages.particleWaCopy)}
      </p>
      <p>
        {intl.formatMessage(messages.particleWaCopy2, {
          noun: <PartOfSpeechBox>noun</PartOfSpeechBox>
        })}
      </p>
      <p>{intl.formatMessage(messages.particleWaCopy3)}</p>
      <p>{intl.formatMessage(messages.particleWaCopy4)}</p>
      <DetailsSubHeader bigger>{intl.formatMessage(messages.desuHeader)}</DetailsSubHeader>
      <p>
        {intl.formatMessage(messages.desuCopy, {
          noun: <PartOfSpeechBox>noun</PartOfSpeechBox>
        })}
      </p>
      <p>
        {intl.formatMessage(messages.desuCopy2, {
          n1wan2jaarimasen: <GrammarLink to="/grammar/n1wan2jaarimasen">{intl.formatMessage(messages.n1wan2janaidesuGrammar)}</GrammarLink>
        })}
      </p>
    </React.Fragment>
  );
};

export default N1wan2desuGrammar;
