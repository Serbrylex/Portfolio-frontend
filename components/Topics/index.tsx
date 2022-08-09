import React from 'react'

import {
	TopicsSection, TopicsUl, TopicList
} from './style'

import Linked from 'next/link'


const Topics = ({ topics }: { topics: TTopic[] }) => {

	return( 
		<TopicsSection>							
			<TopicsUl>
				{topics?.map((topic, index)=>(	
					<Linked key={index} href={`/blogs/${topic.category}`}>
						<TopicList>{topic.category}</TopicList>
					</Linked>
				))}									
			</TopicsUl>
		</TopicsSection>
	)
}

export default Topics