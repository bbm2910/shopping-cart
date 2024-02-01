import './ShopPage.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Product from './Product';
import CartModal from './CartModal';
import { useCart } from './CartContext';
import ErrorIcon from '../assets/ErrorIcon.svg';

const ShopPage = ({ showCart, setShowCart, setCart }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const { cart, updateCart } = useCart();

	const [open, setOpen] = useState(false);
	const { removeFromCart } = useCart();
	const [text, setText] = useState(false);

	const [choice, setChoice] = useState('');

	const handleOpenCart = () => {
		setOpen(true);
	};

	const handleCloseCart = () => {
		setOpen(false);
		setShowCart(false);
		setText(false);
	};

	//submit the order and close the cart after 5 seconds
	const handleSubmitOrder = () => {
		// Check if the cart is not empty before processing the order
		if (cart.length > 0) {
			cart.forEach((item) => {
				removeFromCart(item.product.id);
			});

			// Set the text state only when the order is submitted
			setText(true);

			setTimeout(() => {
				handleCloseCart();
			}, 5000);
		}
	};

	//fetch the products from fake store API
	const getProducts = () => {
		setIsLoading(true);
		fetch('https://fakestoreapi.com/products?')
			.then((response) => {
				if (!response.ok) {
					throw new Error('Something went wrong');
				}
				return response.json();
			})
			.then((data) => {
				//filter the products by category
				if (choice) {
					setProducts(
						data.filter((product) => product.category === choice)
					);
				} else {
					setProducts(data);
				}
				setIsLoading(false);
			})
			.catch((error) => {
				setHasError(true);
				setIsLoading(false);
				console.error(error);
			});
	};

	useEffect(() => {
		getProducts();
	}, [choice]);

	if (isLoading) {
		return <div className='spinner'></div>;
	}

	if (hasError) {
		return (
			<div className='error-message'>
				<img src={ErrorIcon} alt='' />
				<p>An error has occurred.</p>
			</div>
		);
	}

	return (
		<div className='shop-page'>
			<h1>Shop</h1>
			<select value={choice} onChange={(e) => setChoice(e.target.value)}>
				<option value=''>All Products</option>
				<option value="men's clothing">Men's Clothing</option>
				<option value='jewelery'>Jewelry</option>
				<option value='electronics'>Electronics</option>
				<option value="women's clothing">Women's Clothing</option>
			</select>

			<div className='product-container'>
				{products.map((product, index) => (
					<Product
						key={index}
						product={product}
						updateCart={updateCart}
					/>
				))}
			</div>
			<CartModal
				open={showCart}
				handleCloseCart={handleCloseCart}
				cart={cart}
				setCart={setCart}
				updateCart={updateCart}
				removeFromCart={removeFromCart}
				handleSubmitOrder={handleSubmitOrder}
				text={text}
				setText={setText}
			/>
		</div>
	);
};
export default ShopPage;
