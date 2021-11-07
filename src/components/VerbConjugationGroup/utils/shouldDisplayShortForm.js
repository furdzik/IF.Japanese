import { grammarTypes, verbGroupTypes } from '@constants';

export const shouldDisplayShortForm = (grammar, verbGroup) => (
  grammar !== grammarTypes.SHIEKIUKEMI_SHORT_FORM
  || (verbGroup !== verbGroupTypes.group2
    && verbGroup !== verbGroupTypes.specialVerb1
    && verbGroup !== verbGroupTypes.specialVerb2
  )
);
