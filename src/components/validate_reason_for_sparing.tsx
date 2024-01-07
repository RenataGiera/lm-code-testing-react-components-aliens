const validateReasonForSparing: (reasonForSparing: string) => string[] = (reasonForSparing) => {
 
  const errors: string[] = [];

  if (reasonForSparing.length < 17 || reasonForSparing.length > 153) {
    errors.push('Must be between 17 and 153 characters.');
  }
  return errors;
};

export default validateReasonForSparing;