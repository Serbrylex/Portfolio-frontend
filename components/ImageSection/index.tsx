import { useRef, MutableRefObject, Dispatch, SetStateAction } from 'react'

import {
	ImageContainer, Image, Button, Input
} from './style'

import { useTranslation } from '@hooks/useTranslation'

type File = {
	'name': string
}

const ImageSection = ({ edit = true, image, setImage=()=>{}, setFileImage=()=>{}}: {
	edit: boolean,
	image: string,
	setImage: Dispatch<SetStateAction<string>>,
	setFileImage: Dispatch<SetStateAction<string | Blob>>,
}) => {
	
	const hiddenFileInput: MutableRefObject<any> = useRef(null);	
	const { words } = useTranslation({ component: "image_section", container: '' })

	const handleClick = (e: any) => {
		hiddenFileInput.current.click();
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (edit) {
			if (e.target.files != null) {				
				const fileUploaded: Blob | string = e.target.files[0]  
				console.log(fileUploaded)           		
				setFileImage(fileUploaded)
				setImage(URL.createObjectURL(fileUploaded))		

				const reader = new FileReader();
				reader.onload = () => {
					setImage(reader.result as string)
				};
				reader.readAsDataURL(fileUploaded);
			}
		}
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