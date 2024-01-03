import "../style.css"

const PlanetName : React.FC = () => {

return (
<>
<p>
  <label htmlFor="planetName">Planet Name:</label>
  <input type="text" id="planetName" name="planetName" required />
  <span className="error" id="planetError"></span>
</p>
</>
)
}

export default PlanetName;
