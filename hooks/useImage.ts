import { Dispatch, SetStateAction, useState } from 'react'
import { Blob } from 'buffer';

const imageDefault = '/images/MainImage.png'

type ImageR = {
	image: string;
	setImage: Dispatch<SetStateAction<string>>;
	fileImage: string | Blob;
	setFileImage: Dispatch<React.SetStateAction<string | Blob>>;
};

export const useImage = <ImageR>(defaultImage: string) => {
	const [image, setImage] = useState(defaultImage.length === 0 ? imageDefault : defaultImage)
	const [fileImage, setFileImage] = useState<string | Blob>(new Blob(['']))

	return {
		image,
		setImage,
		fileImage, 
		setFileImage
	}
}