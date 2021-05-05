import { useRef } from 'react'

import {
	ImageContainer, Image, Button, Input
} from './style'

const ImageSection = ({ edit = true, image, setImage, setFileImage}) => {
	
	const hiddenFileInput = useRef(null);	

	const handleClick = e => {
		hiddenFileInput.current.click();
	}

	const handleChange = e => {
		const fileUploaded = e.target.files[0]		
		setFileImage(fileUploaded)
		setImage(URL.createObjectURL(fileUploaded))
	}

	return (
		<ImageContainer>
			<Image src={image} alt="" />
			{ edit && 
				<>
					<Input 
						type="file" 
						ref={hiddenFileInput}
		             	onChange={handleChange}
		             	style={{display:'none'}}
					/>		
					<Button onClick={handleClick}>Subir Imagen +</Button>			
				</>
			}			
		</ImageContainer>
	)
}

export default ImageSection