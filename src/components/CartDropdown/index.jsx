import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import Button from '../Button';
import CartItem from '../CartItem';
import { CartContext } from '../../contexts/CartContext';

const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useContext(CartContext);
	const navigate = useNavigate();

	const handleGoToCheckout = () => {
		setIsCartOpen(false);
		navigate('/checkout');
	};

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</div>

			<Button onClick={handleGoToCheckout}>CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
