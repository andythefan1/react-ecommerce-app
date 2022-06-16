import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../CartItem';
import { CartContext } from '../../contexts/CartContext';
import Button from '../Button';

import { CartDropdownContainer, CartItems, EmptyMessage } from './styles';

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

			<Button onClick={handleGoToCheckout}>CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
