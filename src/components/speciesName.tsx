interface SpeciesNameProps {
	speciesName: string;
	onChangeSpeciesName: (value: string) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({speciesName, onChangeSpeciesName}) => {

return (
<>
<p>
  <label htmlFor="speciesName">Species Name:</label>
  <input type="text" id="speciesName" name="speciesName" value={speciesName} onChange={(e) => onChangeSpeciesName(e.target.value)} required />
  <span className="error" id="speciesNameError"></span>
</p>
</>
)
}

export default SpeciesName;