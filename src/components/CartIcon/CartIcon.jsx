import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { CartIconContainer, StyledShoppingIcon, ItemCount } from './styles';

const CartIcon = ({ onClickHandler }) => {
	const { isCartOpen, quantity, setIsCartOpen } = useContext(CartContext);

	const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<StyledShoppingIcon />
			<ItemCount>{quantity}</ItemCount>
		</CartIconContainer>
	);
};
export default CartIcon;
