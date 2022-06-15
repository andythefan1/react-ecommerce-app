import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button from '../Button';

import { ProductCardContainer, Footer } from './styles';

const ProductCard = ({ product }) => {
	const { name, imageUrl, price } = product;
	const { addItemToCart } = useContext(CartContext);

	const addProductToCart = () => addItemToCart(product);

	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</Footer>
			<Button buttonType='inverted' onClick={addProductToCart}>
				Add to cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;
