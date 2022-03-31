import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
	return (
		<div>
			<div>
				<img src='https://html5css.ru/css/img_lights.jpg' />
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