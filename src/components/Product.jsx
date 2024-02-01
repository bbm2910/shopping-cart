import './Product.css';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import ProductDetailsModal from './ProductDetailsModal';
import { useCart } from './CartContext';
import StarRating from './StarRating';

const Product = ({ product }) => {
	const { handleAddToCart } = useCart();
	const [isModalOpen, setIsModalOpen] = useState(false);

	//open and close cart
	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	// console.log(JSON.stringify(product, null, 2));

	return (
		<div className='product-item'>
			<img src={product.image} alt='' className='product-img' />
			<p className='product-title'>{product.title}</p>
			<p className='product-price'>£ {product.price}</p>
			<StarRating rate={product.rating.rate} />
			<Button onClick={openModal}>View Details</Button>

			{isModalOpen && (
				<ProductDetailsModal
					product={product}
					handleClose={closeModal}
					handleAddToCart={handleAddToCart}
				/>
			)}
		</div>
	);
};

export default Product;
