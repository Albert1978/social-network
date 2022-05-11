import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

let dialogs = [
	{ id: 1, name: 'Dimych' },
	{ id: 2, name: 'Andrey' },
	{ id: 3, name: 'Sveta' },
	{ id: 4, name: 'Viktor' },
	{ id: 5, name: 'Valera' },
]

let dialogsElement = dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

let messeges = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'How is your it-kamasutra?' },
	{ id: 3, message: 'Yo' },
]

let messegeElements = messeges.map(m => <Message message={m.message} />)

const Dialogs = (props) => {
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