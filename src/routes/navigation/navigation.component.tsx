import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIconComponent from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const cartOpenHandler = () => setIsCartOpen(false);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/' onClick={cartOpenHandler}>
          <CrwnLogo className='logo' />
        </Link>

        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop' onClick={cartOpenHandler}>
            SHOP
          </Link>
          {currentUser ? (
            <span
              className='nav-link'
              onClick={signOutUser}
              onClick={cartOpenHandler}
            >
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth' onClick={cartOpenHandler}>
              SIGN IN
            </Link>
          )}
          <CartIconComponent />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
