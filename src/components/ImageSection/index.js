import { useRef } from 'react'

import {
	ImageContainer, Image, Button, Input
} from './style'

import { useTranslation } from '../../hooks/useTranslation'

const ImageSection = ({ edit = true, image, setImage, setFileImage}) => {
	
	const hiddenFileInput = useRef(null);	
	const { words } = useTranslation({ component: "image_section" })

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
					<Button onClick={handleClick}>{words.upload_image} +</Button>			
				</>
			}			
		</ImageContainer>
	)
}

export default ImageSection