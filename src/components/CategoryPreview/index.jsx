import { Link } from 'react-router-dom';

import ProductCard from '../ProductCard';
import {
	CategoryPreviewContainer,
	CategoryPreviewHeader,
	CategoryPreviewTitle,
	CategoryPreviewPreview,
} from './styles';

const CategoryPreview = ({ title, products }) => {
	return (
		<CategoryPreviewContainer>
			<CategoryPreviewTitle to={title} className='category-preview-title'>
				<CategoryPreviewHeader>
					<h1>{title.toUpperCase()}</h1>
					more {title} &#10141;
				</CategoryPreviewHeader>
			</CategoryPreviewTitle>
			<CategoryPreviewPreview>
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryPreviewPreview>
		</CategoryPreviewContainer>
	);
};

export default CategoryPreview;
