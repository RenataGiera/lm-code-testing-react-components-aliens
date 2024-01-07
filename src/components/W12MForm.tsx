import { useState } from 'react';
import W12MHeader from './W12MHeader';
import PlanetName from './planetName';
import validatePlanetName from "./validate_planet_name"
import SpeciesName from './speciesName';
import validateSpeciesName from "./validate_species_name"
import NumberOfBeings from './numberOfBeings';
import validateNumberOfBeings from "./validate_number_of_beings"
import ReasonForSparing from './reasonForSparing';
import validateReasonForSparing from "./validate_reason_for_sparing"
import Validation from './validation';
import validateValidation from "./validate_validation"
import SendButton from './sendButton';
import "../style.css"


const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('humans');
	const [numberOfBeings, setNumberOfBeings] = useState('1000000000');
	const [planetName, setPlanetName] = useState('Earth');
	const [reasonForSparing, setReasonForSparing] = useState('I must finish the course');
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form id="alienForm">
				<SpeciesName 
					speciesName={speciesName} 
					onChangeSpeciesName={(value) => setSpeciesName(value)}
					validate={validateSpeciesName}
			 />
				<PlanetName 
					planetName={planetName} 
					onChangePlanetName={(value) => setPlanetName(value)} 
					validate={validatePlanetName}
					/>
				<NumberOfBeings 
					numberOfBeings={numberOfBeings} 
					onChangeNumberOfBeings={(value) => setNumberOfBeings(value)} 
					validate={validateNumberOfBeings}
				/>
				<Validation validate={validateValidation} />
				<ReasonForSparing 
					reasonForSparing={reasonForSparing} onChangeReasonForSparing={(value) => setReasonForSparing(value)}
					validate={validateReasonForSparing}  />
				<SendButton />
			</form>

		</section>
	);
};

export default W12MForm;
