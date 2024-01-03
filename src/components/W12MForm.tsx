import { useState } from 'react';
import W12MHeader from './W12MHeader';
import PlanetName from './planetName';
import SpeciesName from './speciesName';
import NumberOfBeings from './numberOfBeings';
import ReasonForSparing from './reasonForSparing';
import Validation from './validation';
import SendButton from './sendButton';
import "../style.css"


const W12MForm = () => {
	const [speciesName, setSpeciesName] = useState('humans');
	const [numberOfBeings, setNumberOfBeings] = useState('1');
	const [planetName, setPlanetName] = useState('Earth');
	const [reasonForSparing, setReasonForSparing] = useState('I must finish the course');
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form id="alienForm">
				<SpeciesName speciesName={speciesName} onChangeSpeciesName={(value) => setSpeciesName(value)} />
				<PlanetName planetName={planetName} onChangePlanetName={(value) => setPlanetName(value)} />
				<NumberOfBeings numberOfBeings={numberOfBeings} onChangeNumberOfBeings={(value) => setNumberOfBeings(value)} />
				<Validation />
				<ReasonForSparing reasonForSparing={reasonForSparing} onChangeReasonForSparing={(value) => setReasonForSparing(value)}  />
				<SendButton />
			</form>

		</section>
	);
};

export default W12MForm;
