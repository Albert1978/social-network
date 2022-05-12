import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts }) => {
	return (
		<div>
			<ProfileInfo />
			<div>
				<MyPosts posts={posts} />
			</div>
		</div>
	)
}

export default Profile;