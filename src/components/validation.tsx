// Validation.tsx
import React, { useState } from 'react';
import { ValidateFunction } from "./validate_validation";

interface ValidationProps {
  validate: ValidateFunction; // Use a common type for validation functions
}

const Validation: React.FC<ValidationProps> = ({ validate }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('4');

  const errorMessages = validate(selectedAnswer, '4'); // Call the validation function with correct parameters

  const handleAnswerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <>
      <p>
        <label htmlFor="answer">What is 2 + 2?</label>
        <select id="answer" name="answer" value={selectedAnswer} onChange={handleAnswerChange}>
          <option value="4">4</option>
          <option value="not4">Not 4</option>
        </select>

        {errorMessages.length > 0 && (
          <span className="error">
            {errorMessages.join(', ')}
          </span>
        )}
      </p>
    </>
  );
};

export default Validation;
