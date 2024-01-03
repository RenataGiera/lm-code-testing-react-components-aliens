import "../style.css"

const ReasonForSparing : React.FC = () => {

return (
<>
  <p>
    <label htmlFor="reasonForSparing">Reason for sparing: </label>
    <textarea id="reasonForSparing" name="reasonForSparing" rows={4} required></textarea>
    <span className="error" id="reasonForSparingError"></span>
  </p>
</>
)
}

export default ReasonForSparing;