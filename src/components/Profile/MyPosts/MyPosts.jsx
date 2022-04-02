import s from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
	{ id: 1, message: 'Hi, how are you?', countLiks: 10 },
	{ id: 12, message: "It's my first post", countLiks: 115 },
]

let postElements = posts.map(p => <Post message={p.message} count={p.countLiks} />)

const MyPosts = () => {
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