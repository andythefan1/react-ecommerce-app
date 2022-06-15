import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import {
	CheckoutItemContainer,
	ImageContainer,
	CheckoutSpan,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from './styles';

const CheckoutItem = ({ item }) => {
	const { addItemToCart, removeItemFromCart, updateItemQuantity } =
		useContext(CartContext);
	const { id, imageUrl, name, price, quantity } = item;

	const handleAddItemToCart = () => addItemToCart(item);
	const handleRemoveItemFromCart = () => removeItemFromCart(item);
	const handleUpdateItemQuantity = (quantity) => {
		updateItemQuantity(item, quantity);
	};

	return (
		<CheckoutItemContainer key={id}>
			<ImageContainer>
				<img src={imageUrl} alt={name} />
			</ImageContainer>
			<CheckoutSpan>{name}</CheckoutSpan>
			<Quantity>
				<Arrow onClick={handleRemoveItemFromCart}>&#10094;</Arrow>
				<Value>{quantity} </Value>
				<Arrow onClick={handleAddItemToCart}>&#10095;</Arrow>
			</Quantity>
			<CheckoutSpan>{price}</CheckoutSpan>
			<RemoveButton onClick={() => handleUpdateItemQuantity(0)}>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
