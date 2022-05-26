import { useContext } from 'react';
import './styles.scss';
import Button from '../Button';
import { CartContext } from '../../contexts/CartDropdownContext';

const CartDropdown = () => {
	const { isCartOpen, setIsCartOpen } = useContext(CartContext);

	return (
		<div className='cart-dropdown-container'>
			<div className='cart-items'></div>
			<Button onClick={() => setIsCartOpen(!isCartOpen)}>CHECKOUT</Button>
		</div>
	);
};

export default CartDropdown;
