import { render } from '@testing-library/react';
import Validation from './validation';

test('renders form element', () => {
	const { container } = render(<Validation validate={() => []} />);
  expect(container).toBeInTheDocument();
});