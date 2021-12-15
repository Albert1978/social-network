import s from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => isActive ? s.activeLink : '';

const NavBar = () => {
	return (
		<nav className={s.nav}>
			<div className={s.item}>
				<NavLink to='/profile' className={setActive}>Profile</NavLink>
			</div>
			<div className={s.item}>
				<NavLink to='/dialogs' className={setActive}>Messages</NavLink>
			</div>
			<div className={s.item}>
				<a>News</a>
			</div>
			<div className={s.item}>
				<a>Musick</a>
			</div>
			<div className={s.item}>
				<a>Settings</a>
			</div>
		</nav>
	)
	// activeClassName={s.activeLink}
	// className={({ isActive }) => isActive ? 'activeLink' : ''}
}

export default NavBar;