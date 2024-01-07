import validatePlanetName from "./validate_planet_name"
interface PlanetNameProps {
	planetName: string;
	onChangePlanetName: (value: string) => void;
  validate: (value: string) => string[];
}
const PlanetName : React.FC<PlanetNameProps> = ({planetName, onChangePlanetName, validate}) => {

const errorMessages = validatePlanetName(planetName);

return (
<>
<p>
  <label htmlFor="planetName">Planet Name:</label>
  <input type="text" id="planetName" name="planetName" value={planetName} onChange={(e) => onChangePlanetName(e.target.value)} required />
  {errorMessages.length > 0 && (
      <span className="error">
        {errorMessages.join(', ')}
      </span>
    )}
</p>
</>
)
}

export default PlanetName;
