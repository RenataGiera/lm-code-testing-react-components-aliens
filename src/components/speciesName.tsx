import "../style.css"

const SpeciesName : React.FC = () => {

return (
<>
<p>
  <label htmlFor="speciesName">Species Name:</label>
  <input type="text" id="speciesName" name="speciesName" required />
  <span className="error" id="speciesNameError"></span>
</p>
</>
)
}

export default SpeciesName;