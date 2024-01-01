import Link from '@components/templates/link/linkTemplate';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Link Template Tests', () => {
	it('Renders children', () => {
		const text = 'Hello World';

		render(<Link href="#">{text}</Link>);

		const link = screen.getByText(text);

		expect(link).toBeInTheDocument();
		expect(link).toHaveTextContent(text);
	});

	it('Renders href', () => {
		const text = 'Hello World';
		const href = '#test';

		render(<Link href={href}>{text}</Link>);

		const link = screen.getByRole('link');

		expect(link).toBeInTheDocument();
		expect(link).toHaveAttribute('href', href);
	});

	it('Renders custom class', () => {
		const text = 'Hello World';
		const className = 'red';

		render(
			<Link href="#" className={className}>
				{text}
			</Link>,
		);

		const link = screen.getByRole('link');

		expect(link).toBeInTheDocument();
		expect(link).toHaveClass(className);
	});
});
