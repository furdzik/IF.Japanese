import React from 'react';
import { useIntl } from 'react-intl';
import { v4 as uuidv4 } from 'uuid';

import Tooltip from '@components/ui/Tooltip';
import PartOfSpeechBox from '@components/ui/PartOfSpeechBox';
import SubHeading from '@components/SubHeading';

import {
  PartOfSpeechElementsWrapper
} from './StartGrammar.styles.js';
import messages from './StartGrammar.messages';

const START_GRAMMAR_TOOLTIP_ID = 'start_grammar';

const StartGrammar = () => {
  const intl = useIntl();
  const partOfSpeechElements = [
    'verbs',
    'adjectives',
    'nouns',
    'adverbs',
    'conjunctions',
    'particles'
  ];

  return (
    <React.Fragment>
      <SubHeading bigger>{intl.formatMessage(messages.aboutHeader)}</SubHeading>
      <p>{intl.formatMessage(messages.aboutCopy)}</p>
      <p><b>{intl.formatMessage(messages.aboutCopy2)}</b></p>
      <SubHeading>{intl.formatMessage(messages.japaneseWritingsHeader)}</SubHeading>
      <p>{intl.formatMessage(messages.japaneseWritingsCopy)}</p>
      <SubHeading>{intl.formatMessage(messages.partOfSpeechHeader)}</SubHeading>
      <p>{intl.formatMessage(messages.partOfSpeechCopy)}</p>
      <p>
        <PartOfSpeechElementsWrapper>
          {
            partOfSpeechElements.map((el) => (
              <PartOfSpeechBox
                key={uuidv4()}
                data-tip={intl.formatMessage(messages[`${el}Label`])}
                data-for={START_GRAMMAR_TOOLTIP_ID}
              >
                {intl.formatMessage(messages[el])}
              </PartOfSpeechBox>
            ))
          }
        </PartOfSpeechElementsWrapper>
      </p>
      <SubHeading bigger>{intl.formatMessage(messages.wordOrderHeader)}</SubHeading>
      <p>{intl.formatMessage(messages.wordOrderCopy)}</p>
      <Tooltip id={START_GRAMMAR_TOOLTIP_ID} place="top" />
    </React.Fragment>
  );
};

export default StartGrammar;
