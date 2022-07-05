import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  };

  const cartOpenHandler = () => setIsCartOpen(false);

  return (
    <CartDropdownContainer className='cart-dropdown-container'>
      <CartItems className='cart-item' />
      {!cartItems.length ? (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
      )}

      <Button
        onClick={() => {
          goToCheckout();
          cartOpenHandler();
        }}
      >
        {' '}
        Go to checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
