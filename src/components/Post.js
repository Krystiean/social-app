import React from 'react'

const Post = (props) => {
	console.log(props.post)

	return (
		<div className='postList'>
			<div className='title'>
                {/* {props.post.content} */}
            </div>
		</div>
	)
}

export default Post
