import { Routes, Route } from 'react-router-dom';
// import './styles.jsx';

import CategoriesPreview from '../CategoriesPreview';
import Category from '../../routes/Category';

const Shop = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
