import React from 'react';

import StartGrammar from '@components/grammar/StartGrammar';
import N1wan2desuGrammar from '@components/grammar/N1wan2desuGrammar';
import KaraGrammar from '@components/grammar/KaraGrammar';

export const getComponentGrammar = (grammarId) => {
  switch (grammarId) {
    case 'start': return <StartGrammar />;
    case 'n1wan2desu': return <N1wan2desuGrammar />;
    case 'kara': return <KaraGrammar />;

    default: return null;
  }
};
