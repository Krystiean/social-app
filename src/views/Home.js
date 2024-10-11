import axios from 'axios'
import { useEffect, useState } from 'react'
import Post from '../components/Post'

const Home = () => {
	const [posts, setPosts] = useState([])

	const getLatestPosts = () => {
		axios
			.post('https://akademia108.pl/api/social-app/post/latest', {
				mode: 'cors',
			})
			.then(res => {
				setPosts(res.data)
                // console.log(res.data[0].content)
			})
	}

	useEffect(() => {
		console.log('useEffect')
		getLatestPosts()
	}, [])

	return (
		<div className='postList'>
			{posts && posts.map(post => {
				return <Post post={post} />
			})}
		</div>
	)
}

export default Home