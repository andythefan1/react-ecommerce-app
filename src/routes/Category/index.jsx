import { Fragment, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../../components/ProductCard';

import './styles.scss';

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
			<div className='category-container-header'>
				<div className='back-button' onClick={() => navigate(-1)}>
					&lt; CATEGORIES
				</div>
				<h2 className='category-title'>ALL {category.toUpperCase()}</h2>
				<div className='space'></div>
			</div>
			<div className='category-container'>
				{products &&
					products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</Fragment>
	);
};

export default Category;
