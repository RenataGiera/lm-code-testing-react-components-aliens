interface ReasonForSparingProps {
	reasonForSparing: string;
	onChangeReasonForSparing: (value: string) => void;
}
const ReasonForSparing : React.FC<ReasonForSparingProps> = ({reasonForSparing, onChangeReasonForSparing}) => {

return (
<>
  <p>
    <label htmlFor="reasonForSparing">Reason for sparing: </label>
    <textarea id="reasonForSparing" name="reasonForSparing" rows={4} value={reasonForSparing} onChange={(e) => onChangeReasonForSparing(e.target.value)} required></textarea>
    <span className="error" id="reasonForSparingError"></span>
  </p>
</>
)
}

export default ReasonForSparing;