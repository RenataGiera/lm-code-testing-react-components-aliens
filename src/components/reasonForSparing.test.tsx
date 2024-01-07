import { render, screen } from '@testing-library/react';
import ReasonForSparing from './reasonForSparing';

test('renders form element', () => {
	const { container } = render(<ReasonForSparing reasonForSparing="I must finish the course" onChangeReasonForSparing={() => {}} validate={() => []} />);
  expect(container).toBeInTheDocument();
});
test('displays the correct reason for sparing', () => {
  render(<ReasonForSparing reasonForSparing="I must finish the course" onChangeReasonForSparing={() => {}} validate={() => []} />);
  const textareaElement = screen.getByLabelText('Reason for sparing:');
  expect(textareaElement).toHaveValue('I must finish the course');
});