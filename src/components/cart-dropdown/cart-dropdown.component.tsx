import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckout = () => {
    navigate('/checkout');
  };

  const cartOpenHandler = () => setIsCartOpen(false);

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-item' />
      {cartItems.map((item) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
      <Button
        onClick={() => {
          goToCheckout();
          cartOpenHandler();
        }}
      >
        {' '}
        Go to checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
