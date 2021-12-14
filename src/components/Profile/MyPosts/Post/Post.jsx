import s from './Post.module.css';

const Post = (props) => {
	return (

		<div className={s.item}>
			<img src="https://www.kinonews.ru/insimgs/2021/newsimg/newsimg98663.jpg" alt="avatar" />
			{props.message}
			<div>
				<span>Like: {props.count}</span>
			</div>

		</div>
	)
}

export default Post;