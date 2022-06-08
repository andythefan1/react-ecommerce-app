import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../../components/ProductCard';
import './styles.scss';

const Shop = () => {
	const { categoriesMap } = useContext(CategoriesContext);
	return (
		<Fragment>
			{Object.keys(categoriesMap).map((title) => (
				<Fragment key={title}>
					<h2>{title}</h2>
					<div className='products-container'>
						{categoriesMap[title].map((product) => (
							<ProductCard key={product.id} {...product} />
						))}
					</div>
				</Fragment>
			))}
		</Fragment>
	);
};

export default Shop;
