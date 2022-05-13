import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ state }) => {
	return (
		<div>
			<ProfileInfo />
			<div>
				<MyPosts posts={state.posts} />
			</div>
		</div>
	)
}

export default Profile;