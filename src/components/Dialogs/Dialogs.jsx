import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';




const Dialogs = ({ state }) => {

	let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
	let messegeElements = state.messeges.map(m => <Message message={m.message} />)


	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElement}
			</div>
			<div className={s.masseges}>
				{messegeElements}
			</div>
		</div>
	)
}

export default Dialogs;