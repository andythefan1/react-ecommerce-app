import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CheckoutItem from '../../components/CheckoutItem';

import { CheckoutContainer, CheckoutHeader, Total } from './styles';

const Checkout = () => {
	const { cartItems, totalPrice } = useContext(CartContext);

	return (
		<CheckoutContainer>
			<CheckoutHeader>
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
			</CheckoutHeader>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} item={item} />
			))}
			<Total className='total'>Total: ${totalPrice}</Total>
		</CheckoutContainer>
	);
};

export default Checkout;
