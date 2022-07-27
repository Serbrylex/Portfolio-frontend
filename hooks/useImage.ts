import { useState } from 'react'

import imageDefault from '@public/images/MainImage.png'


export const useImage = ({ defaultImage = imageDefault }) => {
	const [image, setImage] = useState(defaultImage)
	const [fileImage, setFileImage] = useState('')

	return {
		image,
		setImage,
		fileImage, 
		setFileImage
	}
}