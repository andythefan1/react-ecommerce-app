import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import './styles.scss';

const CheckoutItem = (item) => {
	const { addItemToCart, removeItemFromCart, updateItemQuantity } =
		useContext(CartContext);
	const { id, imageUrl, name, price, quantity } = item;

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
				<div className='arrow' onClick={() => removeItemFromCart(item)}>
					{'<'}
				</div>
				<span className='value'>{quantity} </span>
				<div className='arrow' onClick={() => addItemToCart(item)}>
					{'>'}
				</div>
			</span>
			<div className='price'>{price}</div>
			<span
				className='remove-button'
				onClick={() => handleUpdateItemQuantity(0)}
			>
				x
			</span>
		</div>
	);
};

export default CheckoutItem;
