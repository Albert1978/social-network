import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let dialogs = [
	{ id: 1, name: 'Dimych' },
	{ id: 2, name: 'Andrey' },
	{ id: 3, name: 'Sveta' },
	{ id: 4, name: 'Viktor' },
	{ id: 5, name: 'Valera' },
]
let messeges = [
	{ id: 1, message: 'Hi' },
	{ id: 2, message: 'How is your it-kamasutra?' },
	{ id: 3, message: 'Yo' },
]
let posts = [
	{ id: 1, message: 'Hi, how are you?', countLiks: 10 },
	{ id: 12, message: "It's my first post", countLiks: 115 },
]

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App dialogs={dialogs} messeges={messeges} posts={posts} />
		</BrowserRouter>

	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
