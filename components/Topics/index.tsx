import React from 'react'

import {
	TopicsSection, TopicsUl, TopicList
} from './style'

import Linked from 'next/link'


type Topic = {
	category: string;
}

const Topics = ({ topics }: { topics: Topic[] }) => {

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