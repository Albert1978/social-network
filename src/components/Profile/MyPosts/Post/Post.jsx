import s from './Post.module.css';

const Post = () => {
	return (

		<div className={s.item}>
			<img src="https://www.kinonews.ru/insimgs/2021/newsimg/newsimg98663.jpg" alt="avatar" />
			Post1
			<div>
				<span>Like</span>
			</div>

		</div>
	)
}

export default Post;