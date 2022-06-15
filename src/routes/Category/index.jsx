import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../../components/ProductCard';

import {
	CategoryContainer,
	CategoryHeader,
	CategoryTitle,
	Back,
	Space,
} from './styles';

const Category = () => {
	const { category } = useParams();
	const { categoriesMap } = useContext(CategoriesContext);
	const navigate = useNavigate();
	const [products, setProducts] = useState(categoriesMap[category]);

	// reduce re-renders if categories or products don't change
	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<CategoryHeader>
				<Back className='back-button' onClick={() => navigate(-1)}>
					&lt; CATEGORIES
				</Back>
				<CategoryTitle>ALL {category.toUpperCase()}</CategoryTitle>
				<Space></Space>
			</CategoryHeader>
			<CategoryContainer>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</CategoryContainer>
		</Fragment>
	);
};

export default Category;
