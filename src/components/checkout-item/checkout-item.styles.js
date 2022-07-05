import styled from 'styled-components';

export const RemoveButton = styled.div`
  padding-left: 1.2rem;
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 1rem;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Quantity = styled.div`
  display: flex;
  width: 23%;
`;

export const Name = styled.span`
  width: 23%;
`;

export const Price = styled.span`
  width: 23%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 1.5rem;
`;

export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 10rem;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;

  ${ImageContainer} {
    ${Img}
  }
  ${Name},
  ${Quantity},
  ${Price}

  ${Quantity} {
    ${Arrow}

    ${Value}
  }

  ${RemoveButton}
`;
