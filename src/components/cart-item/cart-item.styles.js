import styled from 'styled-components';

export const Name = styled.span`
  font-size: 1.6rem;
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 2rem;
`;

export const Img = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 6rem;
  margin-bottom: 1.5rem;
  justify-content: normal;
  align-items: center;

  ${Img}
  ${ItemDetails} {
    ${Name}
  }
`;
