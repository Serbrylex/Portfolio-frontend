import {
	AddsContainer, Add, AddImage, AddTitle, AddDescription
} from './style'

import Code from '../../images/Code.svg'

const Adds = () => { 

	return(
		<AddsContainer>
			<Add>	
				<AddImage src={Code}/>
				<AddTitle>Contratanos</AddTitle>
				<AddDescription>
					Trabaja con nosotros y desarrollaremos tu idea de negocio multimillonaria
				</AddDescription>
			</Add>
			<Add>
				<AddImage src={Code}/>
				<AddTitle>Contratanos</AddTitle>
				<AddDescription>
					Trabaja con nosotros y desarrollaremos tu idea de negocio multimillonaria
				</AddDescription>							
			</Add>
		</AddsContainer>	
	)
}

export default Adds