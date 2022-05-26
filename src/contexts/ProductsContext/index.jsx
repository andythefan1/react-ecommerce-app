import { createContext, useState } from 'react';

import SAMPLE_PRODUCTS from '../../shop-data.json';

// "Context value"
export const ProductsContext = createContext({
	products: [],
});

// Context Provider
export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(SAMPLE_PRODUCTS);
	const value = { products };

	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
};
