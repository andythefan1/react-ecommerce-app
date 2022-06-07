import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/CartDropdownContext';
import './styles.scss';

const CartIcon = ({ onClickHandler }) => {
	const { isCartOpen, quantity, setIsCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	return (
		<div className='cart-icon-container' onClick={toggleIsCartOpen}>
			<ShoppingIcon className='shopping-icon' />
			<span className='item-count'>{quantity}</span>
		</div>
	);
};
export default CartIcon;