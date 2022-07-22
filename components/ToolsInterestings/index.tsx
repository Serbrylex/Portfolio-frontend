import React from 'react'

// Assets
import { FaReact, FaFont, FaFirefox } from 'react-icons/fa'
import { SiEthereum, SiDjango, SiJavascript, SiPython, SiMongodb, SiSpacex, SiCss3, SiDuolingo } from 'react-icons/si'
import { GrMysql, GrNode } from 'react-icons/gr'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineBook, AiOutlineGithub, AiOutlineHtml5 } from 'react-icons/ai'
import { GiMaterialsScience, GiRobotAntennas, GiDatabase } from 'react-icons/gi'
import { BiRocket, BiBrain, BiTestTube } from 'react-icons/bi'
import { VscServerProcess } from 'react-icons/vsc'
import { FiHeadphones } from 'react-icons/fi'

// Styles

import {
	LastSectionContainer, LastSectionContainerTitle, DownloadButton,
	LastSectionContainerContent, LastSection, LastSectionList, IconContainer,
	SectionSubtitle
} from './style'

const ToolsInterestings = () => {

	return(
		<LastSection color="true">
			<LastSectionContainer>
				<LastSectionContainerTitle>
					<SectionSubtitle>Tools</SectionSubtitle>
				</LastSectionContainerTitle>
		 		<LastSectionContainerContent>						
					<LastSectionList>
						<IconContainer>
							<FaReact />
						</IconContainer>
						React
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<SiDjango />
						</IconContainer>
						Django
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<SiJavascript />
						</IconContainer>
						JavaScript
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<SiPython />
						</IconContainer>
						Python
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<FaFont />
						</IconContainer>
						English C1
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<GrMysql />
						</IconContainer>
						MySQL
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<SiMongodb/>
						</IconContainer>
						Mongo DB
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<BsPhone/>
						</IconContainer>
						Responsive Web
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<SiPython />
						</IconContainer>
						Scraping
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<AiOutlineGithub />
						</IconContainer>
						Git and GitHub
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<AiOutlineHtml5 />
						</IconContainer>
						HTML5
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<SiCss3 />
						</IconContainer>
						CSS
					</LastSectionList>

					<LastSectionList>
						<IconContainer>
							<BiTestTube />
						</IconContainer>
						Jest
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<FaFirefox />
						</IconContainer>
						Selenium
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<GrNode />
						</IconContainer>
						Node js
					</LastSectionList>
					<LastSectionList>
						<IconContainer>
							<AiOutlineBook />
						</IconContainer>
						Logical thinking
					</LastSectionList>
				</LastSectionContainerContent>
			</LastSectionContainer>

			<LastSectionContainer>
				<LastSectionContainerTitle>
					<SectionSubtitle>Interestings</SectionSubtitle>
				</LastSectionContainerTitle>
				<LastSectionContainerContent>						
					<LastSectionList>
						<IconContainer>
							<AiOutlineBook />
						</IconContainer>
							Read
						</LastSectionList>
						<LastSectionList>
						<IconContainer>
							<GiMaterialsScience />
						</IconContainer>
							Science
						</LastSectionList>
						<LastSectionList>
						<IconContainer>
							<SiSpacex />
						</IconContainer>
							Entrepreneur
						</LastSectionList>
						<LastSectionList>
						<IconContainer>
							<BiRocket />
						</IconContainer>
							Space
						</LastSectionList>
						<LastSectionList>
						<IconContainer>
								<VscServerProcess />
						</IconContainer>
							Web Development
						</LastSectionList>
						<LastSectionList>
						<IconContainer>
								<BiBrain />
						</IconContainer>
							Stoicism
						</LastSectionList>
						<LastSectionList>
						<IconContainer>
								<SiDuolingo/>
						</IconContainer>
							Languages
						</LastSectionList>
						<LastSectionList>
							<IconContainer>
								<FiHeadphones />
							</IconContainer>
							I love music
						</LastSectionList>

						<LastSectionList>
							<IconContainer>
								<AiOutlineBook />
							</IconContainer>
							Maths
						</LastSectionList>
						<LastSectionList>
							<IconContainer>
								<GiRobotAntennas />
							</IconContainer>
							IA
						</LastSectionList>
						<LastSectionList>
							<IconContainer>
								<SiEthereum />
							</IconContainer>
							Cryptocurrency
						</LastSectionList>
						<LastSectionList>
							<IconContainer>
								<SiPython />
							</IconContainer>
							Machine Learnig
						</LastSectionList>
						<LastSectionList>
							<IconContainer>
								<GiDatabase />
							</IconContainer>
							Big Data											
						</LastSectionList>
						<LastSectionList>
							<IconContainer>
								<BiRocket />
							</IconContainer>											
							Engineering
						</LastSectionList>
				</LastSectionContainerContent>
			</LastSectionContainer>
		</LastSection>
	)
}

export default ToolsInterestings