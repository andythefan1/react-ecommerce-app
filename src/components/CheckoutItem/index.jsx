import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './styles.scss';

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
		<div className='checkout-item-container' key={id}>
			<div className='image-container'>
				<img src={imageUrl} alt={name} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={handleRemoveItemFromCart}>
					&#10094;
				</div>
				<span className='value'>{quantity} </span>
				<div className='arrow' onClick={handleAddItemToCart}>
					&#10095;
				</div>
			</span>
			<div className='price'>{price}</div>
			<div
				className='remove-button'
				onClick={() => handleUpdateItemQuantity(0)}
			>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
