import styled from '@emotion/styled';

const KanjiMeaning = styled.div`
  margin: -.8rem 0 1rem;
  font-size: ${(props) => props.theme.typography.fontSize.small};
`;

const KanjiReading = styled.div`
  font-size: ${(props) => props.theme.typography.fontSize.extraSmall};
`;

export {
  KanjiMeaning,
  KanjiReading
};
