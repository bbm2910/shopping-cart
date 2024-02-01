import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import ShopPage from './components/ShopPage';

import { CartProvider } from './components/CartContext';

const App = () => {
	const [showCart, setShowCart] = useState(false);

	return (
		<Router>
			<CartProvider>
				<div>
					<Navbar setShowCart={setShowCart} />

					<Routes>
						<Route
							path='/shop'
							element={
								<ShopPage
									showCart={showCart}
									setShowCart={setShowCart}
								/>
							}
						/>
						<Route
							path='/'
							element={<HomePage showCart={showCart} />}
						/>
						<Route
							path='/about'
							element={<AboutPage showCart={showCart} />}
						/>
					</Routes>
				</div>
			</CartProvider>
			<Footer />
		</Router>
	);
};

export default App;
