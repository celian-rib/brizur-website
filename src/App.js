import './App.css';

import { useState, useEffect } from 'react';

import Header from './main_page_components/Header.js'
import Body from './main_page_components/Body.js'
import Footer from './main_page_components/Footer.js'

function App() {

	const { width } = useWindowDimensions();

	const [offset, setOffset] = useState(0)

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset)
		}
	}, [])

	return (
		<div className="App">
			<link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"></link>

			<Header></Header>
			<Body scrollOffset={offset} screenWidth={width}></Body>
			<Footer></Footer>
		</div>
	);
}

export default App;

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
