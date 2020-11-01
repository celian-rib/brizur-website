import './App.css';
import './stylesheets/DownArrow.css';
import './stylesheets/Header.css'

import assets from './others/asset_sources.js'

import Header from './main_page_components/Header.js'

import ShowCaseElement from './components/ShowcaseElement'
import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react';

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
			<div className='Body'>
				<div className="info2">
					<img style={{transform: `translateY(${offset * 0.2 - 100}px)`}} className="info2-image" src={assets.Plate2} alt="gateau" />
					<Fade right cascade>
						<h2>Qui ut desnderit sinNolor deserunt. Dolordolor incididunt voluptate laborum. Minim laboris deserunt commodo reprehenderit magna ea deserunt sunt ut aute pariatur ut laboris. Veniam ad ea esse mollit culpa qui reprehenderit ullamco do nostrud nisi officia esse culpa. Eiusmod aliqua reprehenderit labore esse tempor elit ad.</h2>
					</Fade>
				</div>

				<div className="showCase">
					<ShowCaseElement screenWidth={width} src={assets.Plate1} />
					<ShowCaseElement screenWidth={width} src={assets.Plate6} />
					<ShowCaseElement screenWidth={width} src={assets.Plate4} />
					<ShowCaseElement screenWidth={width} src={assets.Cooking1} />
					<ShowCaseElement screenWidth={width} src={assets.Cooking4} isBtn={true} />
					<ShowCaseElement screenWidth={width} src={assets.Cooking2} last={true} />
				</div>
				{
					width<900?
						<div className="smallScreenShowCaseBtn">
							<div className="showcaseBtn">
								<h1>BRIZUR s'emporte</h1>
								<h3>De 12H à 18H</h3>
								<a href=" ">
									<h2>VOIR</h2>
								</a>
							</div>
						</div>
					:
						<div/>
				}
			</div>
			<div className="Footer">
				<div className="footerInfo"></div>
			</div>
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
