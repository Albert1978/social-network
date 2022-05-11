import s from '../Dialogs.module.css';



const Message = ({ message }) => {
	return (
		<div className={s.massege}>
			{message}
		</div>
	)
}

export default Message;