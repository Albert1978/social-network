import s from './MyPosts.module.css';
import Post from './Post/Post'
const MyPosts = () => {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>add post</button>
			</div>
			<div className='posts'>
				<Post message='Hi, how are you?' count='10' />
				<Post message="It's my first post" count='15' />
			</div>
		</div>
	)
}

export default MyPosts;