/* eslint-disable */






import { React, useState, useEffect } from 'react';
import './App.css';
// import ReactModal from 'react-modal';
import Header from './main_page_components/Header';
import Body from './main_page_components/Body';
import Footer from './main_page_components/Footer';

import Vente from './Vente';

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height
	};
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}

function App() {

	const { width } = useWindowDimensions();

	const [offset, setOffset] = useState(0);

	// const [modalOpen, setModalOpen] = useState(true);

	// const customStyles = {

	// 	content: {
	// 		top: '50%',
	// 		left: '50%',
	// 		right: 'auto',
	// 		bottom: 'auto',
	// 		marginRight: '-50%',
	// 		transform: 'translate(-50%, -50%)'
	// 	}
	// };

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset);
		};
	}, []);

	return (
		<div className="App">
			{/* <ReactModal style={customStyles} isOpen={modalOpen}>
				<div>Site en développement</div>
				<button type="button" onClick={() => { setModalOpen(false); }}>close</button>
				<a href="https://github.com/celian-rib/Brizur_Web">Voir repository</a>
			</ReactModal> */}
			<link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet" />

			<Vente />

			{/* <Header />
			<Body scrollOffset={offset} screenWidth={width} />
			<Footer /> */}
		</div>
	);
}

export default App;
