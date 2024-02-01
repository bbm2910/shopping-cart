import { Link } from 'react-router-dom';
import './NavBar.css';
import ShoppingCart from '../assets/shopping-cart.svg';
import { useCart } from './CartContext';

const Navbar = ({ setShowCart }) => {
	const { cart } = useCart();

	//add the quantity in the cart icon
	const totalQuantity = cart.reduce(
		(total, item) => total + item.quantity,
		0
	);

	const handleCartClick = () => {
		setShowCart(true);
	};
	return (
		<nav>
			<div className='links'>
				<Link to='/'>Homepage</Link>
				<Link to='/shop'>Shop</Link>
				<Link to='/about'>About</Link>
			</div>
			<Link to='/shop' className='cart-btn' onClick={handleCartClick}>
				<img src={ShoppingCart} alt='' />
				<p>{totalQuantity}</p>
			</Link>
		</nav>
	);
};

export default Navbar;
