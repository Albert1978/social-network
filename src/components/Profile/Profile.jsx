import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img src='https://pbs.twimg.com/media/FFWoVyqX0AU31qj?format=jpg&name=4096x4096' />
			</div>
			<div>
				ava + description
			</div>
			<div>
				<MyPosts />
			</div>
		</div>
	)
}

export default Profile;