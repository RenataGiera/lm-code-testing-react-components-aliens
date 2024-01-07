import validateReasonForSparing from "./validate_reason_for_sparing"
interface ReasonForSparingProps {
	reasonForSparing: string;
	onChangeReasonForSparing: (value: string) => void;
  validate: (value: string) => string[];
}
const ReasonForSparing : React.FC<ReasonForSparingProps> = ({reasonForSparing, onChangeReasonForSparing}) => {

  const errorMessages = validateReasonForSparing(reasonForSparing);
  
  return (
  <>
    <p>
      <label htmlFor="reasonForSparing">Reason for sparing: </label>
      <textarea id="reasonForSparing" name="reasonForSparing" rows={4} value={reasonForSparing} onChange={(e) => onChangeReasonForSparing(e.target.value)} required  data-testid="reasonForSparing"></textarea>
      {errorMessages.length > 0 && (
      <span className="error">
        {errorMessages.join(', ')}
      </span>
    )}
    </p>
  </>
  )
}

export default ReasonForSparing;