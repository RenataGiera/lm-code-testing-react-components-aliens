// validate_number_of_beings.ts
const validateNumberOfBeings: (NumberOfBeings: string) => string[] = (NumberOfBeings) => {
  const errors: string[] = [];

  const numericValue = parseInt(NumberOfBeings, 10);
  
  if (isNaN(numericValue) || numericValue < 1000000000) {
    errors.push('Numbers ONLY. Must be at least 1,000,000,000.');
  }
  
  return errors;
};

export default validateNumberOfBeings;
