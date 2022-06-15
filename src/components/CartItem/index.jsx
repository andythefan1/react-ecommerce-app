import { CartItemContainer, ItemDetails, CartItemName } from './styles';

const CartItem = ({ imageUrl, name, price, quantity }) => {
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={name} />
			<ItemDetails>
				<b>{name}</b>
				<span>
					{quantity} x ${price}{' '}
				</span>
			</ItemDetails>
		</CartItemContainer>
	);
};

export default CartItem;
