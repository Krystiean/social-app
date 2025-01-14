import axios from 'axios'
import '../components/AddPost.css'
import { useState } from 'react'

const AddPost = props => {
	const [postContent, setPostContent] = useState('')

    const addPost = (e) => {
        e.preventDefault();

        if(!postContent) {
            return;
        }

        axios.post('https://akademia108.pl/api/social-app/post/add', {
            mode: 'cors',
            content: postContent,
        })
        .then((res) => {
            props.getPrevPosts();
            setPostContent('')
        })
        .catch((error) => {
            console.log(error);
        });
    }

	return (
		<form className='addPostForm' onSubmit={addPost}>
			<textarea placeholder='Add post...' onChange={e => setPostContent(e.target.value)} value={postContent}></textarea>
			<button className='btn'>Add</button>
		</form>
	)
}

export default AddPost
