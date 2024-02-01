import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Backdrop from '@mui/material/Backdrop';
import { useCart } from './CartContext';
import { Button } from '@mui/material';
import ShoppingCart from '../assets/ShoppingCart.svg';
import React from 'react';
import CloseCircle from '../assets/close-circle.svg';
import ThumbsUp from '../assets/thumbs-up.svg';
import './CartModal.css';

const CartModal = ({
	open,
	handleCloseCart,
	text,
	setText,
	handleSubmitOrder,
	isLoading,
}) => {
	const { cart, removeFromCart } = useCart();
	console.log(cart);

	// Function to calculate the total of a product
	const calculateTotal = () => {
		let total = 0;
		cart.forEach((item) => {
			total += item.product.price * item.quantity;
		});
		console.log('Total before rounding:', total);
		return total;
	};

	return (
		<Dialog
			open={open}
			onClose={handleCloseCart}
			BackdropComponent={Backdrop}
			BackdropProps={{
				style: { backdropFilter: 'blur(5px)' },
			}}
		>
			<DialogTitle className='dialog-title'>
				Shopping Cart{' '}
				<Button onClick={handleCloseCart}>
					<img src={CloseCircle} alt='' className='close-cart-icon' />
				</Button>
			</DialogTitle>
			<DialogContent>
				{Array.isArray(cart) && cart.length === 0 ? (
					<React.Fragment key='empty-cart'>
						<p className='empty-cart'>Empty cart</p>
						<img
							src={ShoppingCart}
							alt=''
							className='empty-cart-icon'
						/>
					</React.Fragment>
				) : (
					<>
						<div>
							{cart.map((item) => (
								<div
									key={item.product.id}
									className='item-in-cart'
								>
									<img
										src={item.product.image}
										alt=''
										className='product-img'
									/>
									<div className='product-details'>
										<h2 className='item-in-cart-title'>
											{item.product.title}
										</h2>
										<p className='product-quantity'>
											Quantity:{' '}
											<span>{item.quantity}</span>
										</p>
										<p className='product-price'>
											$
											{item.product.price * item.quantity}
										</p>
										<Button
											onClick={() =>
												removeFromCart(item.product.id)
											}
										>
											Remove
										</Button>
									</div>
								</div>
							))}
						</div>
						<p className='total-price'>
							Total: ${calculateTotal().toFixed(2)}
						</p>
					</>
				)}
			</DialogContent>
			{text && (
				<div className='success-order'>
					<p>Thanks for your order</p>
					<p className='warning-closing-cart'>
						The cart will automatically close in 5 seconds.
					</p>
					<img src={ThumbsUp} alt='' />
				</div>
			)}

			<Button
				onClick={handleSubmitOrder}
				disabled={cart.length === 0}
				style={{ background: '#14213d', color: '#fff', padding: '2%' }}
			>
				Submit order
			</Button>
		</Dialog>
	);
};

export default CartModal;
