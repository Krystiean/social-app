import '../views/Home.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Post from '../components/Post'

const Home = (props) => {
	const [posts, setPosts] = useState([])

	const getLatestPosts = () => {
		axios
			.post('https://akademia108.pl/api/social-app/post/latest', {
				mode: 'cors',
			})
			.then((res)=> {
				setPosts(res.data)
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const getNextPosts = () => {
		axios
			.post('https://akademia108.pl/api/social-app/post/older-then', {
				mode: 'cors',
				date: posts[posts.length - 1].created_at,
			})
			.then((res)=> {
				setPosts(posts.concat(res.data))
			})
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getLatestPosts()
	}, [props.user]);

	return (
		<div className="home">
			<div className='postList'>
				{posts.map((post) => {
					return (
						<div key={post.id}>
							<Post post={post} />
						</div>
					)
				})}
				<button className='btn loadMore' onClick={getNextPosts}>Load more</button>
			</div>
		</div>
	)
}

export default Home