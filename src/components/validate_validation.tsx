// validate_validation.ts
export type ValidateFunction = (value: string, correctAnswer: string) => string[];

const validateValidation: ValidateFunction = (answer, correctAnswer) => {
  const errors: string[] = [];

  if (answer !== correctAnswer) {
    errors.push('Wrong answer.');
  }
  return errors;
};

export default validateValidation;
