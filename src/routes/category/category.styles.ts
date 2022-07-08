import styled from 'styled-components';

export const CategoryTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 2.5rem;
  text-transform: uppercase;
  color: #333;
  font-family: Inter, 'sans-serif';
  text-align: center;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 5rem;
`;
