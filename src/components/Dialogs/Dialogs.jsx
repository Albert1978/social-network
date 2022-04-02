import s from './Dialogs.module.css';
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

const Message = ({ message }) => {
	return (
		<div className={s.massege}>
			{message}
		</div>
	)
}

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name='Dimych' id='1' />
				<DialogItem name='Andrey' id='2' />
				<DialogItem name='Sveta' id='3' />
				<DialogItem name='Viktor' id='4' />
				<DialogItem name='Valera' id='5' />
				<DialogItem name='Dimych' id='6' />
			</div>
			<div className={s.masseges}>
				<Message message='Hi' />
				<Message message='How is your it-kamasutra?' />
				<Message message='Yo' />
			</div>
		</div>
	)
}

export default Dialogs;