import {  render, screen } from '@testing-library/react';
import PlanetName from './planetName';

test('renders form element', () => {
	const { container } = render(<PlanetName planetName="Earth" onChangePlanetName={() => {}} validate={() => []} />);
  expect(container).toBeInTheDocument();
});

test('displays the correct planet name', () => {
  render(<PlanetName planetName="Mars" onChangePlanetName={() => {}} validate={() => []} />);
  const inputElement = screen.getByLabelText('Planet Name:');
  expect(inputElement).toHaveValue('Mars');
});

