import { defineMessages } from 'react-intl';

export default defineMessages({
  ok: 'Ok',
  cancel: 'Anuluj',
  defaultErrorText: 'Ups... Coś poszło nie tak',
  required: 'Uzupełnij pole',
  requiredSecondary: 'Nie wybrałeś/aś żadnej odpowiedzi',
  searchRequired: 'Nie mamy takiego stanowiska, spróbuj jeszcze raz',
  maxLength: `{fieldName} nie może zawierać więcej niż {maxLength, plural,
    =0 {znaków}
    one {# znak}
    two {# znaki}
    few {# znaki}
    many {# znaków}
  }`,
  minLength: `{fieldName} nie może zawierać mniej niż {minLength, plural,
    =0 {znaków}
    one {# znak}
    two {# znaki}
    few {# znaki}
    many {# znaków}
  }`,
  minLengthDefault: `To pole nie może zawierać mniej niż {minLength, plural,
    =0 {znaków}
    one {# znak}
    two {# znaki}
    few {# znaki}
    many {# znaków}
  }`,
  brutto: 'brutto',
  netto: 'netto',
  yearInvalid: 'Twoja data urodzenia to {year}? Wydaje nam się, że to błąd.',
  tooBigNumber: 'Podana wartość jest za wysoka',
  lessThanZero: 'Podana wartość jest za niska',
  autocompleteError: 'Popraw pole, korzystając z autouzupełniania',
  raportGenerateError: 'Przykro nam, ale dla podanych przez Ciebie danych nie możemy wygenerować raportu. Przepraszamy i obiecujemy jak najszybciej poprawić ten błąd.',
  raportGenerateContact: 'W razie dodatkowych pytań zapraszamy do kontaktu'
});
