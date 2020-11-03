import { React, useState, useEffect } from 'react';
import './App.css';
import Header from './main_page_components/Header';
import Body from './main_page_components/Body';
import Footer from './main_page_components/Footer';

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

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset);
		};
	}, []);

	return (
		<div className="App">
			<link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet" />

			<Header />
			<Body scrollOffset={offset} screenWidth={width} />
			<Footer />
		</div>
	);
}

export default App;
