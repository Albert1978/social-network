import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog + ' ' + s.active}>
					<NavLink to='/dialogs/1'>Dimych</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/2'>Andrey</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/3'>Sveta</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/4'>Sveta</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/5'>Viktor</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to='/dialogs/6'>Valera</NavLink>
				</div>
			</div>
			<div className={s.masseges}>
				<div className={s.massege}>
					Hi
				</div>
				<div className={s.massege}>
					How is your it-kamasutra?
				</div>
				<div className={s.massege}>
					Yo
				</div>
			</div>
		</div>
	)
}

export default Dialogs;