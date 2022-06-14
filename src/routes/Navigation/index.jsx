import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown';
import { CartContext } from '../../contexts/CartContext';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/utils';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import {
	LogoContainer,
	NavigationContainer,
	NavLinks,
	NavLink,
} from './styles';

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);
	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to='/'>
					<CrwnLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>SHOP</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			{/* Renders sub-route component */}
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
