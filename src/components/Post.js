import React from 'react'

const Post = (props) => {
	console.log(props.post.id)

	return (
		<div className='post'>
			<div className='title'>
                {props.post.content}
            </div>
		</div>
	)
}

export default Post
