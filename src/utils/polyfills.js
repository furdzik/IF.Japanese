import 'core-js/features/promise';

if (!Intl.PluralRules) {
  /* eslint-disable global-require */
  require('@formatjs/intl-pluralrules/polyfill');
  require('@formatjs/intl-pluralrules/locale-data/en');
}
