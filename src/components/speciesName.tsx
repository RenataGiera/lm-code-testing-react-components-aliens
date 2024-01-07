import validateSpeciesName from "./validate_species_name"
interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (value: string) => void;
  validate: (value: string) => string[];
}

const SpeciesName : React.FC<SpeciesNameProps> = ({speciesName, onChangeSpeciesName, validate}) => {

  const errorMessages = validateSpeciesName(speciesName);
  
  return (
  <>
  <p>
    <label htmlFor="speciesName">Species Name:</label>
    <input type="text" id="speciesName" name="speciesName" value={speciesName} onChange={(e) => onChangeSpeciesName(e.target.value)} required />
    {errorMessages.length > 0 && (
      <span className="error">
        {errorMessages.join(', ')}
      </span>
    )}
  </p>
  </>
  )
  }

export default SpeciesName;