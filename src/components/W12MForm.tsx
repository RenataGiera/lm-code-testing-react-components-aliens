import { useState } from 'react';
import W12MHeader from './W12MHeader';
import PlanetName from './planetName';
import SpeciesName from './speciesName';
import NumberOfBeings from './numberOfBeings';
import ReasonForSparing from './reasonForSparing';
import Validation from './validation';
import SendButton from './sendButton';

const W12MForm = () => {
	return (
		<section className='w12MForm'>
			<W12MHeader />
			<form id="alienForm">
				<SpeciesName />
				<PlanetName />
				<NumberOfBeings />
				<Validation />
				<ReasonForSparing />
				<SendButton />
			</form>

		</section>
	);
};

export default W12MForm;
