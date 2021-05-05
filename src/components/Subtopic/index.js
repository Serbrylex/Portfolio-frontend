import ImageSection from '../../components/ImageSection'

import {
	SubtitleSection, ParagraphSectionOne, InputTitle, HTitle, TextArea, ParagraphResponse
} from './style'

const Subtopic = ({ subtitle, paragraphOne, paragraphTwo, paragraphThree, paragraphFour, paragraphFive, imagenOne, imagenTwo, imagenThree, imagenFour, imagenFive, url }) => {	
	
	return(
		<>
			<SubtitleSection>
				{subtitle.show ? 
					<InputTitle 
						type="text" 									
						onBlur={() => subtitle.setShow(false)}									
						{...subtitle}
					/> : 
					<HTitle onClick={() => subtitle.setShow(true)}>{subtitle.value}</HTitle>
				}
			</SubtitleSection>
			<ParagraphSectionOne>
				{paragraphOne.show ? 
					<TextArea 
						type="text" 									
						onBlur={() => paragraphOne.setShow(false)}									
						{...paragraphOne}
					/> : 
					<ParagraphResponse onClick={() => paragraphOne.setShow(true)}>{paragraphOne.value}</ParagraphResponse>
				}				
			</ParagraphSectionOne>
			<ImageSection {...imagenOne} />	 		
			<ParagraphSectionOne>
				{paragraphTwo.show ? 
					<TextArea 
						type="text" 									
						onBlur={() => paragraphTwo.setShow(false)}									
						{...paragraphTwo}
					/> : 
					<ParagraphResponse onClick={() => paragraphTwo.setShow(true)}>{paragraphTwo.value}</ParagraphResponse>
				}				
			</ParagraphSectionOne>
			<ImageSection {...imagenTwo} />
			<ParagraphSectionOne>
				{paragraphThree.show ? 
					<TextArea 
						type="text" 									
						onBlur={() => paragraphThree.setShow(false)}									
						{...paragraphThree}
					/> : 
					<ParagraphResponse onClick={() => paragraphThree.setShow(true)}>{paragraphThree.value}</ParagraphResponse>
				}				
			</ParagraphSectionOne>
			<ImageSection {...imagenThree} />
			<ParagraphSectionOne>
				{paragraphFour.show ? 
					<TextArea 
						type="text" 									
						onBlur={() => paragraphFour.setShow(false)}									
						{...paragraphFour}
					/> : 
					<ParagraphResponse onClick={() => paragraphFour.setShow(true)}>{paragraphFour.value}</ParagraphResponse>
				}				
			</ParagraphSectionOne>
			<ImageSection {...imagenFour} />
			<ParagraphSectionOne>
				{paragraphFive.show ? 
					<TextArea 
						type="text" 									
						onBlur={() => paragraphFive.setShow(false)}									
						{...paragraphFive}
					/> : 
					<ParagraphResponse onClick={() => paragraphFive.setShow(true)}>{paragraphFive.value}</ParagraphResponse>
				}				
			</ParagraphSectionOne>
			<ImageSection {...imagenFive} />
		</>		
	)

}

export default Subtopic