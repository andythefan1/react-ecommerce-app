import { useContext } from 'react';
import './styles.scss';
import Button from '../Button';
import CartItem from '../CartItem';
import { CartContext } from '../../contexts/CartDropdownContext';

const CartDropdown = () => {
	const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'>
				{cartItems.map((item) => (
					<CartItem key={item.id} {...item} />
				))}
			</div>
			<Button onClick={() => setIsCartOpen(!isCartOpen)}>CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
