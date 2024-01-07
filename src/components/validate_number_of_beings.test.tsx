import validateNumberOfBeings from "./validate_number_of_beings"
it('returns no errors for a valid number of being', () => {
  const errors = validateNumberOfBeings('2000000000');
  expect(errors).toEqual([]);
});

it('returns an error for a too small number of being', () => {
  const errors = validateNumberOfBeings('20');
  expect(errors).toEqual(['Numbers ONLY. Must be at least 1,000,000,000.']);
});

