import { render, screen, waitFor } from '@testing-library/react';
import { CartProvider, useCart } from '../src/components/CartContext';
import { useEffect } from 'react';

describe('CartContext component', () => {
	it('starts with empty cart', async () => {
		const TestComponent = () => {
			const { cart } = useCart();
			return <div data-testid='cart'>{JSON.stringify(cart)}</div>;
		};

		render(
			<CartProvider>
				<TestComponent />
			</CartProvider>
		);

		// Add a delay to allow time for rendering
		await new Promise((resolve) => setTimeout(resolve, 1000));

		// Log the HTML content of the document to inspect the structure
		console.log(document.body.innerHTML);

		await waitFor(() => {
			// Wait for the component to finish rendering
			const cartElement = screen.getByTestId('cart');
			const cartData = JSON.parse(cartElement.textContent);

			expect(cartData).toEqual([]);
		});
	});
});
