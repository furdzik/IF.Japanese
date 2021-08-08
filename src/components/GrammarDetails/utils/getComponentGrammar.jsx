import React from 'react';

import StartGrammar from '@components/grammar/StartGrammar';
import N1han2desuGrammar from '@components/grammar/N1han2desuGrammar';
import KaraGrammar from '@components/grammar/KaraGrammar';

export const getComponentGrammar = (grammarId) => {
  switch (grammarId) {
    case 'start': return <StartGrammar />;
    case 'n1han2desu': return <N1han2desuGrammar />;
    case 'kara': return <KaraGrammar />;

    default: return null;
  }
};
