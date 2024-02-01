import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import About from '../src/components/AboutPage';

describe('AboutPage component', () => {
	it('renders links correctly', () => {
		render(
			<Router>
				<About />
			</Router>
		);

		const links = screen.getAllByRole('link');

		expect(links[0]).toHaveAttribute(
			'href',
			'https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart'
		);
		expect(links[0]).toHaveAttribute('target', '_blank');
		expect(links[0]).toHaveTextContent(/The Odin Project/i);

		expect(links[1]).toHaveAttribute(
			'href',
			'https://unsplash.com/photos/person-walking-and-using-umbrella-near-boutique-VobXg0hVigk'
		);
		expect(links[1]).toHaveAttribute('target', '_blank');
		expect(links[1]).toHaveTextContent(/Jan Antonin Kolar/i);

		expect(links[2]).toHaveAttribute('href', 'https://mui.com/');
		expect(links[2]).toHaveAttribute('target', '_blank');
		expect(links[2]).toHaveTextContent(
			/Material UI. Move faster with intuitive React UI tools/i
		);

		expect(links[3]).toHaveAttribute('href', 'https://iconduck.com/');
		expect(links[3]).toHaveAttribute('target', '_blank');
		expect(links[3]).toHaveTextContent(/Iconduck/i);

		expect(links[4]).toHaveAttribute('href', 'https://fakestoreapi.com/');
		expect(links[4]).toHaveAttribute('target', '_blank');
		expect(links[4]).toHaveTextContent(/Fake Store API/i);
	});
});
