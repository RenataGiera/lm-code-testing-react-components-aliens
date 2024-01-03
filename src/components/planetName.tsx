interface PlanetNameProps {
	planetName: string;
	onChangePlanetName: (value: string) => void;
}
const PlanetName : React.FC<PlanetNameProps> = ({planetName, onChangePlanetName}) => {

return (
<>
<p>
  <label htmlFor="planetName">Planet Name:</label>
  <input type="text" id="planetName" name="planetName" value={planetName} onChange={(e) => onChangePlanetName(e.target.value)} required />
  <span className="error" id="planetError"></span>
</p>
</>
)
}

export default PlanetName;
