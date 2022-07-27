import React from 'react'

import {
	TopicsSection, TopicsUl, TopicList
} from './style'


type Topic = {
	category: string;
}

const Topics = ({ topics }: { topics: Topic[] }) => {

	return(
		<TopicsSection>							
			<TopicsUl>
				{topics?.map((topic, index)=>(
					<TopicList key={index} href={`/blogs/${topic.category}`}><a>{topic.category}</a></TopicList>
				))}									
			</TopicsUl>
		</TopicsSection>
	)
}

export default Topics