import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import CartItem from '../CartItem';
import { CartContext } from '../../contexts/CartContext';

import {
	CartDropdownContainer,
	CartButton,
	CartItems,
	EmptyMessage,
} from './styles';

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const handleGoToCheckout = () => {
		setIsCartOpen(false);
		navigate('/checkout');
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length === 0 && <EmptyMessage>cart is empty</EmptyMessage>}
				{cartItems.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</CartItems>

			<CartButton onClick={handleGoToCheckout}>CHECKOUT</CartButton>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
