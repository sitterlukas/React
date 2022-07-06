import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIconComponent from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import {
  NavigationContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from './navigation.styles';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import { selectIsCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';

import { setIsCartOpen } from '../../store/cart/cart.action';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const cartOpenHandler = () => dispatch(setIsCartOpen(false));

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
