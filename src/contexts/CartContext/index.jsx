import { createContext, useReducer } from 'react';

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

const CART_ACTION_TYPES = {
	ADD_CART_ITEM: 'ADD_CART_ITEM',
	REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
	UPDATE_ITEM_QUANTITY: 'UPDATE_ITEM_QUANTITY',
	SET_IS_CART_OPENED: 'SET_IS_CART_OPENED',
};

const cartReducer = (state, action) => {
	const { cartItems } = state;
	switch (action.type) {
		case CART_ACTION_TYPES.ADD_CART_ITEM: {
			const updatedCart = addCartItem(cartItems, action.payload.product);
			return {
				...state,
				cartItems: updatedCart,
			};
		}
		case CART_ACTION_TYPES.REMOVE_CART_ITEM: {
			const updatedCart = removeCartItem(cartItems, action.payload.product);
			return {
				...state,
				cartItems: updatedCart,
			};
		}
		case CART_ACTION_TYPES.UPDATE_ITEM_QUANTITY: {
			const updatedCart = updateCartItemQuantity(
				cartItems,
				action.payload.product,
				action.payload.quantity
			);

			return { ...state, cartItems: updatedCart };
		}
		case CART_ACTION_TYPES.SET_IS_CART_OPENED: {
			return { ...state, isCartOpen: action.payload.isCartOpen };
		}
		default:
			throw new Error(
				'Unsupported action type in cartReducer(): ',
				action.type
			);
	}
};

const INITIAL_CART_STATE = {
	cartItems: [],
	isCartOpen: false,
	quantity: 0,
	totalPrice: 0,
};

export const CartContext = createContext({
	addItemToCart: () => {},
	cartItems: [],
	isCartOpen: false,
	setIsCartOpen: () => {},
	removeItemFromCart: () => {},
	updateCartItemQuantity: () => {},
	quantity: 0,
	totalPrice: 0,
});

export const CartProvider = ({ children }) => {
	const [{ cartItems, isCartOpen }, dispatch] = useReducer(
		cartReducer,
		INITIAL_CART_STATE
	);

	const quantity = calculateQuantity(cartItems);
	const totalPrice = calculateTotalPrice(cartItems);

	const setIsCartOpen = (isCartOpen) => {
		dispatch({
			type: CART_ACTION_TYPES.SET_IS_CART_OPENED,
			payload: { isCartOpen },
		});
	};

	const addItemToCart = (product) => {
		dispatch({
			type: CART_ACTION_TYPES.ADD_CART_ITEM,
			payload: { product },
		});
	};

	const removeItemFromCart = (product) => {
		dispatch({
			type: CART_ACTION_TYPES.REMOVE_CART_ITEM,
			payload: { product },
		});
	};

	const updateItemQuantity = (product, quantity) => {
		dispatch({
			type: CART_ACTION_TYPES.UPDATE_ITEM_QUANTITY,
			payload: { product, quantity },
		});
	};

	const cartContext = {
		addItemToCart,
		cartItems,
		removeItemFromCart,
		isCartOpen,
		quantity: quantity,
		setIsCartOpen,
		updateItemQuantity,
		totalPrice: totalPrice,
	};
	return (
		<CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
	);
};
