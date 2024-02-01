import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import './ProductDetailsModal.css';

const ProductDetailsModal = ({ product, handleClose, handleAddToCart }) => {
	const [quantity, setQuantity] = useState(1);

	//set quantity for each product before adding to the cart
	const handleIncrement = () => {
		setQuantity(quantity + 1);
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1);
		}
	};

	//add a product to the cart
	const handleAddToCartFromModal = () => {
		handleAddToCart(product, quantity);
		handleClose();
	};

	return (
		<Dialog
			open={true}
			onClose={handleClose}
			className='product-details-dialog'
			BackdropComponent={Backdrop}
			BackdropProps={{
				style: { backdropFilter: 'blur(5px)' },
			}}
		>
			<DialogContent>
				<img src={product.image} alt='' className='product-img' />
				<p className='product-title-modal'>{product.title}</p>
				<p className='product-description'>{product.description}</p>
				<div className='quantity-controls'>
					<button onClick={handleDecrement}>-</button>
					<div>{quantity}</div>
					<button onClick={handleIncrement}>+</button>
				</div>
				<p className='product-price'>
					Total: £{product.price * quantity}
				</p>
			</DialogContent>
			<Button
				// className='add-to-cart'
				onClick={handleAddToCartFromModal}
				style={{ background: '#14213d', color: '#fff', padding: '2%' }}
			>
				Add To Cart
			</Button>
		</Dialog>
	);
};

export default ProductDetailsModal;
