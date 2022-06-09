import { Link } from 'react-router-dom';

import ProductCard from '../ProductCard';
import './styles.scss';

const CategoryPreview = ({ title, products }) => {
	return (
		<div className='category-preview-container'>
			<Link to={title} className='category-preview-title'>
				<div className='category-preview-header'>
					<h2>{title.toUpperCase()}</h2>
					more {title} &#10141;
				</div>
			</Link>
			<div className='preview'>
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
