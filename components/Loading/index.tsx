// Assets
import circle from '@public/images/circle.svg' 

import {
	ImageLoading, Container
} from './style'


const Loading = () => {
	return(
		<Container>
			<ImageLoading src={circle} alt='loading' />
		</Container>
	)
}

export default Loading