import React from 'react';
import { useIntl } from 'react-intl';

import PartOfSpeechBox from '@components/ui/PartOfSpeechBox';
import SubHeading from '@components/SubHeading';

import {
  GrammarLink
} from './N1wan2desuGrammar.styles.js';
import messages from './N1wan2desuGrammar.messages';

const N1wan2desuGrammar = () => {
  const intl = useIntl();

  return (
    <React.Fragment>
      <SubHeading bigger>{intl.formatMessage(messages.particleWaHeader)}</SubHeading>
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
      <SubHeading bigger>{intl.formatMessage(messages.desuHeader)}</SubHeading>
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
