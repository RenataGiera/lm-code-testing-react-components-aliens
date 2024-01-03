
import "../style.css"

const NumberOfBeings : React.FC = () => {

return (
<>
  <p>
    <label htmlFor="numOfBeings">Number of Beings:</label>
    <input type="number" id="numOfBeings" name="numOfBeings" min="1" required />
    <span className="error" id="numOfBeingsError"></span>
  </p>
</>
)
}

export default NumberOfBeings;