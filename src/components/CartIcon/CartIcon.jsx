import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { CartIconContainer, ShoppingIcon, ItemCount } from './styles';

const CartIcon = ({ onClickHandler }) => {
	const { isCartOpen, quantity, setIsCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon />
			<ItemCount>{quantity}</ItemCount>
		</CartIconContainer>
	);
};
export default CartIcon;
