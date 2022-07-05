import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 25rem;
  align-items: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 13rem;
    font-size: 1.2rem;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  .footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;

    .name {
      width: 90%;
      margin-bottom: 1.5rem;
    }

    .price {
      width: 10%;
    }
  }
`;
