import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  selectCartItems,
  selectIsCartOpen,
} from '../../store/cart/cart.selector';

import { setIsCartOpen } from '../../store/cart/cart.action';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  };

  const cartOpenHandler = () => dispatch(setIsCartOpen(false));

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
