import React from 'react';
import { useCart } from './CartContext';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';

const StarRating = ({ rate }) => {
	const { cart } = useCart();

	return (
		<Box component='fieldset' borderColor='transparent'>
			<Rating name='read-only' value={rate} readOnly />
		</Box>
	);
};

export default StarRating;
