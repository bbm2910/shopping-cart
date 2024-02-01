import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const updateCart = (newCart) => {
		setCart(newCart);
	};

	const removeFromCart = (productId) => {
		setCart((prevCart) => {
			return prevCart.filter((item) => item.product.id !== productId);
		});
	};

	const handleAddToCart = (product, quantity) => {
		setCart((prevCart) => {
			const existingProductIndex = prevCart.findIndex(
				(item) => item.product.id === product.id
			);

			let newCart;

			if (existingProductIndex >= 0) {
				newCart = [...prevCart];
				newCart[existingProductIndex].quantity += quantity;
			} else {
				newCart = [...prevCart, { product, quantity }];
			}

			console.log('New Cart:', newCart);
			updateCart(newCart);

			return newCart;
		});
	};

	return (
		<CartContext.Provider
			value={{ cart, updateCart, removeFromCart, handleAddToCart }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => {
	const context = useContext(CartContext);
	return {
		cart: context.cart,
		updateCart: context.updateCart,
		removeFromCart: context.removeFromCart,
		handleAddToCart: context.handleAddToCart,
	};
};
