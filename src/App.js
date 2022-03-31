import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Musick from './components/Musick/Musick';
import Settings from './components/Settings/Settings';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<NavBar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='/profile' element={<Profile />} />
					<Route path='/dialogs' element={<Dialogs />} />
					<Route path='/news' element={<News />} />
					<Route path='/musick' element={<Musick />} />
					<Route path='/settings' element={<Settings />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
