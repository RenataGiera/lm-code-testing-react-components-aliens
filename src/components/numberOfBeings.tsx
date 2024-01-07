import validateNumberOfBeings from "./validate_number_of_beings"
interface NumberOfBeingsProps {
  numberOfBeings: string;
	onChangeNumberOfBeings: (value: string) => void;
  validate: (value: string) => string[];
}
const NumberOfBeings : React.FC<NumberOfBeingsProps> = ({numberOfBeings, onChangeNumberOfBeings, validate}) => {

  const errorMessages = validateNumberOfBeings(numberOfBeings);

  return (
  <>
    <p>
      <label htmlFor="numOfBeings">Number of Beings:</label>
      <input type="number" id="numOfBeings" name="numOfBeings" min="1" value={numberOfBeings} onChange={(e) => onChangeNumberOfBeings(e.target.value)}  required />
      {errorMessages.length > 0 && (
      <span className="error">
        {errorMessages.join(', ')}
      </span>
    )}
    </p>
  </>
  )
}

export default NumberOfBeings;