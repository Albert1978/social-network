import s from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = ({ posts }) => {

	let postElements = posts.map(p => <Post message={p.message} count={p.countLiks} />)

	return (
		<div className={s.myPosts}>
			<h3>My posts</h3>
			<div>
				<div><textarea></textarea></div>
				<button>add post</button>
			</div>
			<div className={s.posts}>
				{postElements}
			</div>
		</div>
	)
}

export default MyPosts;