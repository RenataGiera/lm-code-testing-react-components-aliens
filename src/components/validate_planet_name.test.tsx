import validatePlanetName from "./validate_planet_name"
it('returns no errors for a valid species name', () => {
  const errors = validatePlanetName('validPlanetName');
  expect(errors).toEqual([]);
});

it('returns an error for a too short planet name', () => {
  const errors = validatePlanetName('a');
  expect(errors).toEqual(['Must be between 2 and 49 characters.']);
});

it('returns an error for a too long planet name', () => {
  const errors = validatePlanetName('aVeryLongSpeciesNameThatIsTovvddddggdsddoLonggfgfgfgfgfgfg');
  expect(errors).toEqual(['Must be between 2 and 49 characters.']);
});

it('returns an error for a special characters', () => {
  const errors = validatePlanetName('palnet!');
  expect(errors).toEqual(['Numbers are allowed, but no special characters.']);
});
