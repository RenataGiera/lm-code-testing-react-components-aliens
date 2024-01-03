interface NumberOfBeingsProps {
  numberOfBeings: string;
	onChangeNumberOfBeings: (value: string) => void;
}
const NumberOfBeings : React.FC<NumberOfBeingsProps> = ({numberOfBeings, onChangeNumberOfBeings}) => {

return (
<>
  <p>
    <label htmlFor="numOfBeings">Number of Beings:</label>
    <input type="number" id="numOfBeings" name="numOfBeings" min="1" value={numberOfBeings} onChange={(e) => onChangeNumberOfBeings(e.target.value)}  required />
    <span className="error" id="numOfBeingsError"></span>
  </p>
</>
)
}

export default NumberOfBeings;