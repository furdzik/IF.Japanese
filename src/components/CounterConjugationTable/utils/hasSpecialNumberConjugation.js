import { COUNTERS_GROUPS, NUMBERS } from '@constants';

export const hasSpecialNumberConjugation = (counterGroup, number) => (
  (
    (
      counterGroup === COUNTERS_GROUPS.s
      || counterGroup === COUNTERS_GROUPS.so
    ) && (
      number === NUMBERS.one
      || number === NUMBERS.eight
      || number === NUMBERS.ten
    )
  )
  || (
    (
      counterGroup === COUNTERS_GROUPS.k
      || counterGroup === COUNTERS_GROUPS.h
      || counterGroup === COUNTERS_GROUPS.f
    ) && (
      number === NUMBERS.one
      || number === NUMBERS.six
      || number === NUMBERS.eight
      || number === NUMBERS.ten
    )
  )
  || (
    counterGroup === COUNTERS_GROUPS.gatsu && (
      number === NUMBERS.four
      || number === NUMBERS.seven
      || number === NUMBERS.nine
    )
  )
  || (
    counterGroup === COUNTERS_GROUPS.tsu && (
      number === NUMBERS.one
      || number === NUMBERS.two
      || number === NUMBERS.three
      || number === NUMBERS.four
      || number === NUMBERS.five
      || number === NUMBERS.six
      || number === NUMBERS.eight
      || number === NUMBERS.nine
      || number === NUMBERS.ten
    )
  )
  || (
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
  || (
    counterGroup === COUNTERS_GROUPS.sai && (
      number === NUMBERS.one
      || number === NUMBERS.eight
      || number === NUMBERS.ten
      || number === NUMBERS.twenty
    )
  )
  || (
    counterGroup === COUNTERS_GROUPS.ji && (
      number === NUMBERS.four
      || number === NUMBERS.seven
      || number === NUMBERS.nine
    )
  )
  || (
    counterGroup === COUNTERS_GROUPS.nin && (
      number === NUMBERS.one
      || number === NUMBERS.two
      || number === NUMBERS.four
    )
  )
  || (
    counterGroup === COUNTERS_GROUPS.nen && (
      number === NUMBERS.four
    )
  )
);
