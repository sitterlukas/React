import { Outlet, Link } from 'react-router-dom';
import { useContext } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIconComponent from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from './navigation.styles';

import { UserContext } from '../../contexts/user.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const cartOpenHandler = () => setIsCartOpen(false);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/' onClick={cartOpenHandler}>
          <CrwnLogo className='logo' />
        </LogoContainer>

        <NavLinks>
          <NavLink to='/shop' onClick={cartOpenHandler}>
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink
              as='span'
              className='nav-link'
              onClick={() => {
                signOutUser();
                cartOpenHandler();
              }}
            >
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink className='nav-link' to='/auth' onClick={cartOpenHandler}>
              SIGN IN
            </NavLink>
          )}
          <CartIconComponent />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
