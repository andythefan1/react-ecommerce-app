import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, product) => {
	const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);
	if (existingItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === product.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		);
	}

	return [...cartItems, { ...product, quantity: 1 }];
};

export const calculateQuantity = (cartItems) => {
	return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
};

export const CartContext = createContext({
	addItemToCart: () => {},
	cartItems: [],
	isCartOpen: false,
	setIsCartOpen: () => {},
	quantity: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [quantity, setQuantity] = useState(0);

	useEffect(() => {
		const quantity = calculateQuantity(cartItems);
		setQuantity(quantity);
	}, [cartItems]);

	const addItemToCart = (product) => {
		const updatedCart = addCartItem(cartItems, product);
		setCartItems(updatedCart);
	};

	const value = {
		addItemToCart,
		cartItems,
		isCartOpen,
		quantity,
		setIsCartOpen,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
