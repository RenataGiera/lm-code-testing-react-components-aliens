import { render, screen } from '@testing-library/react';
import SpeciesName from './speciesName';

test('renders form element', () => {
	const { container } = render(<SpeciesName speciesName="humans" onChangeSpeciesName={() => {}} />);
  expect(container).toBeInTheDocument();
});
test('displays the correct species name', () => {
  render(<SpeciesName speciesName="humans" onChangeSpeciesName={() => {}} />);
  const inputElement = screen.getByLabelText('Species Name:');
  expect(inputElement).toHaveValue('humans');
});
