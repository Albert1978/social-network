import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => isActive ? s.activeLink : '';

const DialogItem = ({ name, id }) => {
	let path = `/dialogs/${id}`
	return (
		<div className={s.dialog}>
			<NavLink to={path} className={setActive}>{name}</NavLink>
		</div>
	)
}

export default DialogItem;