import s from './Profile.module.css';

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
				My posts
				<div>
					New post
				</div>
				<div className='posts'>
					<div className={s.item}>post1</div>
					<div className={s.item}>post2</div>
				</div>
			</div>

		</div>
	)
}

export default Profile;