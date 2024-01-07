import { render } from '@testing-library/react';
import NumberOfBeings from './numberOfBeings';

test('renders form element', () => {
	const { container } = render(<NumberOfBeings numberOfBeings="3" onChangeNumberOfBeings={() => {}} validate={() => []} />);
  expect(container).toBeInTheDocument();
});
