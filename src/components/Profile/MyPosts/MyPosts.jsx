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
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	)
}

export default MyPosts;