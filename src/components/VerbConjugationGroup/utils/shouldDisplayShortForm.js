import { GRAMMAR_TYPES, VERB_GROUP_TYPES } from '@constants';

export const shouldDisplayShortForm = (grammar, verbGroup) => (
  grammar !== GRAMMAR_TYPES.shiekiukemiShortForm
  || (verbGroup !== VERB_GROUP_TYPES.group2
    && verbGroup !== VERB_GROUP_TYPES.specialVerb1
    && verbGroup !== VERB_GROUP_TYPES.specialVerb2
  )
);
