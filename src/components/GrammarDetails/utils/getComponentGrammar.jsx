import React from 'react';

import StartGrammar from '@components/grammar/StartGrammar';

export const getComponentGrammar = (grammarId) => {
  switch (grammarId) {
    case 'start': return <StartGrammar />;

    default: return null;
  }
};
