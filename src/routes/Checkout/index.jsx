import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/CheckoutItem';

import './styles.scss';

const Checkout = () => {
	const { cartItems, totalPrice } = useContext(CartContext);

	return (
		<div className='checkout-container'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>product</span>
				</div>
				<div className='header-block'>
					<span>description</span>
				</div>
				<div className='header-block'>
					<span>quantity</span>
				</div>
				<div className='header-block'>
					<span>price</span>
				</div>
				<div className='header-block'>
					<span>remove</span>
				</div>
			</div>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} {...item} />
			))}
			<div className='total'>Total: ${totalPrice}</div>
		</div>
	);
};

export default Checkout;
