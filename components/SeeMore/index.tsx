import {
	Container, Button
} from './style'

import { BsArrowRight } from 'react-icons/bs'

const SeeMore = ({ link, title, color }) => {	

	return(
		<Container>
			<Button to={link} color={color}>{title} <BsArrowRight /></Button>
		</Container>
	)
}

export default SeeMore