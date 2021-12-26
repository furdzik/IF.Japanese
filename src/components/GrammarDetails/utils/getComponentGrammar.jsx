import React from 'react';

import KaraGrammar from '@components/grammar/KaraGrammar';
import N1wan2desuGrammar from '@components/grammar/N1wan2desuGrammar';
import StartGrammar from '@components/grammar/StartGrammar';

export const getComponentGrammar = (grammarId) => {
  switch (grammarId) {
    case 'kara': return <KaraGrammar />;
    case 'n1wan2desu': return <N1wan2desuGrammar />;
    case 'start': return <StartGrammar />;

    default: return null;
  }
};
