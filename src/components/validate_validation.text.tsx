// Validation.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Validation from './validation';
import validateValidation from './validate_validation';

jest.mock('./validate_validation');

describe('Validation component', () => {
  it('displays an error message for an incorrect answer', () => {
    (validateValidation as jest.Mock).mockReturnValue(['Wrong answer.']);
    render(<Validation validate={validateValidation} />);
    userEvent.selectOptions(screen.getByLabelText('What is 2 + 2?'), 'not4');
    expect(screen.getByText('Wrong answer.')).toBeInTheDocument();
  });

  it('does not display an error message for the correct answer', () => {
    (validateValidation as jest.Mock).mockReturnValue([]);
    render(<Validation validate={validateValidation} />);
    userEvent.selectOptions(screen.getByLabelText('What is 2 + 2?'), '4');
    expect(screen.queryByText('Wrong answer.')).not.toBeInTheDocument();
  });
});
