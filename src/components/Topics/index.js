import React from 'react'

import {
	TopicsSection, TopicsUl, TopicList
} from './style'

const Topics = ({ topics }) => {

	return(
		<TopicsSection>							
			<TopicsUl>
				{topics?.map((topic, index)=>(
					<TopicList key={index} to={`/blogs/${topic.category}`}>{topic.category}</TopicList>
				))}									
			</TopicsUl>
		</TopicsSection>
	)
}

export default Topics