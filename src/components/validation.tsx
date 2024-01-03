import "../style.css"

const Validation : React.FC = () => {

return (
<>
  <p>
    <label htmlFor="answer">What is 2 + 2?</label>
    <select id="answer" name="answer">
      <option value="4">4</option>
      <option value="not4">Not 4</option>
    </select>
    <span className="error" id="validationError"></span>
  </p>
</>
)
}

export default Validation;