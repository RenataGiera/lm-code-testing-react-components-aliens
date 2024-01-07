import validateReasonForSparing from "./validate_reason_for_sparing"
it('returns no errors for a valid reason for sparing', () => {
  const errors = validateReasonForSparing('valid reason for sparing');
  expect(errors).toEqual([]);
});

it('returns an error for a too short reason for sparing', () => {
  const errors = validateReasonForSparing('abd');
  expect(errors).toEqual(['Must be between 17 and 153 characters.']);
});
