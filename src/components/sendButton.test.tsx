import { render } from '@testing-library/react';
import SendButton from './sendButton';

test('renders form element', () => {
	const { container } = render(<SendButton />);
  expect(container).toBeInTheDocument();
});
