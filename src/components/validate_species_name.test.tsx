import validateSpeciesName from "./validate_species_name"
it('returns no errors for a valid species name', () => {
  const errors = validateSpeciesName('validSpeciesName');
  expect(errors).toEqual([]);
});

it('returns an error for a too short species name', () => {
  const errors = validateSpeciesName('ab');
  expect(errors).toEqual(['Species Name must be between 3 and 23 characters.']);
});

it('returns an error for a too long species name', () => {
  const errors = validateSpeciesName('aVeryLongSpeciesNameThatIsTooLong');
  expect(errors).toEqual(['Species Name must be between 3 and 23 characters.']);
});
