import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

describe('Footer component', () => {
	it('renders the footer with copyright text', () => {
		const { container } = render(<Footer />);
		expect(container).toMatchSnapshot();
		const footerElement = screen.getByText(/© BM 2024/i);
		expect(footerElement).toBeInTheDocument();
	});
});
