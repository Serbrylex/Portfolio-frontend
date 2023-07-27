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
import { TbBrandNextjs, TbBrandCypress } from 'react-icons/tb'
import { MdOutlineWeb } from 'react-icons/md'

// Styles

import {
	LastSectionContainer, LastSectionContainerTitle,
	LastSectionContainerContent, LastSection, LastSectionList, IconContainer,
	SectionSubtitle, TitleIcon
} from './style'

type StackType = {
	title: string,
	icon: JSX.Element
}

const ToolsInterestings = () => {

    const handleCreateObject = (title: string, icon: JSX.Element) => {
        return { title, icon }
    }
	const Stack : StackType[] = [
        handleCreateObject('React', <FaReact/>),
        handleCreateObject('Next js', <TbBrandNextjs />),
        handleCreateObject('Django', <SiDjango />),
        handleCreateObject('JavaScript', <SiJavascript />),
        handleCreateObject('Python', <SiPython />),
        handleCreateObject('English B1', <FaFont />),
        handleCreateObject('MySQL', <GrMysql />),
        handleCreateObject('Mongo DB', <SiMongodb />),
        handleCreateObject('Responsive Web', <BsPhone />),
        handleCreateObject('Scraping', <MdOutlineWeb />),
        handleCreateObject('Git and GitHub', <AiOutlineGithub />),
        handleCreateObject('HTML5', <AiOutlineHtml5 />),
        handleCreateObject('CSS', <SiCss3 />),
        handleCreateObject('Jest', <BiTestTube />),
        handleCreateObject('Cypress', <TbBrandCypress />),
        handleCreateObject('Selenium', <FaFirefox />),
        handleCreateObject('Node js', <GrNode />),
        handleCreateObject('Logical thinking', <AiOutlineBook />),
	]
	const Interestings : StackType[] = [
        handleCreateObject('Read', <AiOutlineBook />),
        handleCreateObject('Science', <GiMaterialsScience />),
        handleCreateObject('Entrepreneur', <SiSpacex />),
        handleCreateObject('Space', <BiRocket />),
        handleCreateObject('Web Development', <VscServerProcess />),
        handleCreateObject('Stoicism', <BiBrain />),
        handleCreateObject('Languages', <SiDuolingo />),
        handleCreateObject('I love music', <FiHeadphones />),
        handleCreateObject('Maths', <AiOutlineBook />),
        handleCreateObject('AI', <GiRobotAntennas />),
        handleCreateObject('Cryptocurrency', <SiEthereum />),
        handleCreateObject('Machine Learnig', <SiPython />),
        handleCreateObject('Big Data', <GiDatabase />),
        handleCreateObject('Engineering', <BiRocket />),
	]

	return(
		<LastSection color="true" id="interestings">
			<LastSectionContainer>
				<LastSectionContainerTitle>
					<SectionSubtitle>Tools</SectionSubtitle>
				</LastSectionContainerTitle>
		 		<LastSectionContainerContent>
					{Stack.map(( item, ind ) => (
						<LastSectionList key={ind}>
							<IconContainer>
								{item.icon}
							</IconContainer>
							<TitleIcon>
								{item.title}
							</TitleIcon>
						</LastSectionList>
					))}
				</LastSectionContainerContent>
			</LastSectionContainer>

			<LastSectionContainer>
				<LastSectionContainerTitle>
					<SectionSubtitle>Interestings</SectionSubtitle>
				</LastSectionContainerTitle>
				<LastSectionContainerContent>						
					{Interestings.map(( item, ind ) => (
						<LastSectionList key={ind}>
							<IconContainer>
								{item.icon}
							</IconContainer>
							<TitleIcon>
								{item.title}
							</TitleIcon>
						</LastSectionList>
					))}
				</LastSectionContainerContent>
			</LastSectionContainer>
		</LastSection>
	)
}

export default ToolsInterestings