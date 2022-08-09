import { Dispatch, SetStateAction, useState } from 'react'

const imageDefault = '/images/MainImage.png'

type ImageR = {
	image: string;
	setImage: Dispatch<SetStateAction<string>>;
	fileImage: File;
	setFileImage: Dispatch<SetStateAction<string | Blob>>;
};

export const useImage = <ImageR>(defaultImage: string) => {
	const [image, setImage] = useState(defaultImage.length === 0 ? imageDefault : defaultImage)
	const [fileImage, setFileImage] = useState<string | Blob>(new File([""], ""))

	return {
		image,
		setImage,
		fileImage, 
		setFileImage
	}
}