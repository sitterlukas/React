import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 15rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border: 1px solid black;
  background-color: white;
  top: 9rem;
  right: 4rem;
  z-index: 5;
  overflow: scroll;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 1.8rem;
  margin: 8rem auto;
  text-align: center;
`;

export const CartItems = styled.div`
  height: 24rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
