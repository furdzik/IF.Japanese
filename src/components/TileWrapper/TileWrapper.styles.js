import styled from 'styled-components';

const List = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 -1rem 3rem;
  padding: 0;
  list-style: none;

  @media print {
    display: block;
    text-align: justify;
  }
`;

export {
  List
};
