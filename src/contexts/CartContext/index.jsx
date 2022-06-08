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

const removeCartItem = (cartItems, product) => {
	const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);
	if (existingItem) {
		if (existingItem.quantity === 1) {
			return cartItems.filter((cartItem) => cartItem.id !== product.id);
		}
		return cartItems.map((cartItem) =>
			cartItem.id === product.id
				? { ...cartItem, quantity: cartItem.quantity - 1 }
				: cartItem
		);
	}

	return [...cartItems];
};

const updateCartItemQuantity = (cartItems, product, newQuantity) => {
	const existingItem = cartItems.find((cartItem) => cartItem.id === product.id);

	if (existingItem) {
		// item already in cart
		if (newQuantity === 0) {
			return cartItems.filter((item) => item.id !== product.id);
		}

		return cartItems.map((cartItem) =>
			cartItem.id === product.id
				? { ...cartItem, quantity: newQuantity }
				: cartItem
		);
	} else {
		return [...cartItems, { ...product, quantity: newQuantity }];
	}
};

export const calculateQuantity = (cartItems) => {
	return cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
};

export const calculateTotalPrice = (cartItems) => {
	return cartItems.reduce(
		(totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
		0
	);
};

export const CartContext = createContext({
	addItemToCart: () => {},
	cartItems: [],
	isCartOpen: false,
	setIsCartOpen: () => {},
	removeItemFromCart: () => {},
	quantity: 0,
	totalPrice: 0,
});

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [quantity, setQuantity] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const quantity = calculateQuantity(cartItems);
		setQuantity(quantity);
		const totalPrice = calculateTotalPrice(cartItems);
		setTotalPrice(totalPrice);
	}, [cartItems]);

	const addItemToCart = (product) => {
		const updatedCart = addCartItem(cartItems, product);
		setCartItems(updatedCart);
	};

	const removeItemFromCart = (product) => {
		const updatedCart = removeCartItem(cartItems, product);
		setCartItems(updatedCart);
	};

	const updateItemQuantity = (product, quantity) => {
		const updatedCart = updateCartItemQuantity(cartItems, product, quantity);
		setCartItems(updatedCart);
	};

	const value = {
		addItemToCart,
		cartItems,
		removeItemFromCart,
		isCartOpen,
		quantity,
		setIsCartOpen,
		updateItemQuantity,
		totalPrice,
		setTotalPrice,
	};
	return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
