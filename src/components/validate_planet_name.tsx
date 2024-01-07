const validatePlanetName: (planetName: string) => string[] = (planetName) => {
  const errors: string[] = [];

  if (planetName.length < 2 || planetName.length > 49) {
    errors.push('Must be between 2 and 49 characters.');
  }
  
  if (!/^[a-zA-Z0-9]+$/.test(planetName))  {
    errors.push('Numbers are allowed, but no special characters.');
  }

  return errors;
};

export default validatePlanetName;