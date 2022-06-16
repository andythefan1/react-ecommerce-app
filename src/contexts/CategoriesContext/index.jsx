import { createContext, useState, useEffect } from 'react';

// import SHOP_DATA from '../../shop-data.js';
import { getCategoriesAndDocuments } from '../../utils/firebase/utils.js';

// Context value
export const CategoriesContext = createContext({
	categoriesMap: {},
});

// Context Provider
export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	// populate firebase with sample data
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA, []);
	// });

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesMap = await getCategoriesAndDocuments();
			setCategoriesMap(categoriesMap);
		};
		getCategoriesMap();
	}, []);

	const value = { categoriesMap };

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
