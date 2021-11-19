import { COUNTERS_GROUPS, NUMBERS } from '@constants';

export const hasSpecialNumberConjugation = (counterGroup, number) => (
  (
    counterGroup !== COUNTERS_GROUPS.gatsu || (
      counterGroup === COUNTERS_GROUPS.gatsu && (
        number === NUMBERS.four
        || number === NUMBERS.seven
        || number === NUMBERS.nine
      )
    )
  )
  && (
    counterGroup !== COUNTERS_GROUPS.nichi || (
      counterGroup === COUNTERS_GROUPS.nichi && (
        number === NUMBERS.one
        || number === NUMBERS.two
        || number === NUMBERS.three
        || number === NUMBERS.four
        || number === NUMBERS.five
        || number === NUMBERS.six
        || number === NUMBERS.seven
        || number === NUMBERS.eight
        || number === NUMBERS.nine
        || number === NUMBERS.ten
        || number === NUMBERS.fourteen
        || number === NUMBERS.seventeen
        || number === NUMBERS.nineteen
        || number === NUMBERS.twenty
        || number === NUMBERS.twentyFour
        || number === NUMBERS.twentySeven
        || number === NUMBERS.twentyNine
      )
    )
  )
);
