/* eslint-disable */

import Carousel from './components/HeaderInfoCarousel';




import { React, useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import './App.css';
import ReactModal from 'react-modal';
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
	return (
		<Router>
			<div>
				{/* A <Switch> looks through its children <Route>s and
					renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/reservation">
						<Shop />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function Home() {
	const { width } = useWindowDimensions();

	return (
		<div className="App">
			<link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet" />
	
			<Header />
			<Body screenWidth={width} />
			<Footer />
			
		</div>
	);
}

function Shop() {
	return (
		<div className="App">
			<link href="https://fonts.googleapis.com/css2?family=Marcellus&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300&display=swap" rel="stylesheet" />
			<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet" />
	
			<Vente></Vente>
		</div>
	);
}

export default App;
