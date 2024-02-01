import { render } from '@testing-library/react';
import HomePage from '../src/components/HomePage';

describe('HomePage component', () => {
	it('renders the component with .homepage class', () => {
		const { container } = render(<HomePage />);
		expect(container).toMatchSnapshot();

		const homepageElement = container.querySelector('.homepage');
		expect(homepageElement).toBeInTheDocument();
		expect(homepageElement).toHaveClass('homepage');
	});
});
