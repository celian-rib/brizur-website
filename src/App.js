import './App.css';
import './stylesheets/DownArrow.css';
import './stylesheets/Header.css'

import BrizureLogo from './assets/BrizureLogo.png'
import Plate1 from './assets/foodAssets/plate1.png'
import Plate2 from './assets/foodAssets/plate2.png'
import Plate3 from './assets/foodAssets/plate3.png'
import Plate4 from './assets/foodAssets/plate4.png'
import Plate5 from './assets/foodAssets/plate5.png'
import Plate6 from './assets/foodAssets/plate6.png'
import Plate7 from './assets/foodAssets/plate7.png'
import BarProp1 from './assets/foodAssets/bar_prop1.png'
import BarProp2 from './assets/foodAssets/bar_prop2.png'
import BarProp3 from './assets/foodAssets/bar_prop3.png'
import Cooking1 from './assets/foodAssets/cooking1.jpg'
import Cooking2 from './assets/foodAssets/cooking2.jpg'
import Cooking3 from './assets/foodAssets/cooking3.jpg'
import Cooking4 from './assets/foodAssets/cooking4.jpg'
import Cooking5 from './assets/foodAssets/cooking5.jpg'
import Cooking6 from './assets/foodAssets/cooking6.jpg'

import ShowCaseElement from './components/ShowcaseElement'
import Fade from 'react-reveal/Fade';
import { useState, useEffect } from 'react';

function App() {
	const { height, width } = useWindowDimensions();
	
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

			<div className="Header">
				<div className="Title">
					<img src={Plate7} alt="background" className="BackgroundImage"></img>
					<img src={BrizureLogo} alt="background" className="Logo"></img>
					<h1 id="BizurTitle">BRIZUR</h1>
					<h6 id="BizurSubTitle">RESTAURANT DE DESSERTS</h6>
					<a href="#showcase">
						<h2>
							NOS PLATS
						</h2>
					</a>
				</div>
				<div className="info">
					<div className="HeaderInfo">
						<Fade duration={2000} right cascade>
							<h1>Veniam eu voluptate aute proident reprehenderit est est.</h1>
							<div className="separator"></div>
							<h4>Eiusmod consectetur cupidatat sit occaecat ait incididunt. Labore commodo excepteur reprehense non tempor irure proident pariatur laboris laborum aute. Laborum nostrud dolore sit duis consequat anim irure ipsum sint ut eiusmod magna. Velit nulla officia officia dolor eu veniam sint ipsum nisi.</h4>
						</Fade>
					</div>
					<div class="HeaderArrow">
						<div class="chevron"></div>
						<div class="chevron"></div>
						<div class="chevron"></div>
					</div>
				</div>
			</div>
			<div className='Body'>
				<div className="info2">
					<img style={{transform: `translateY(${offset * 0.2 - 100}px)`}} className="info2-image" src={Plate2} alt="gateau" />
					<Fade right cascade>
						<h2>Qui ut desnderit sinNolor deserunt. Dolordolor incididunt voluptate laborum. Minim laboris deserunt commodo reprehenderit magna ea deserunt sunt ut aute pariatur ut laboris. Veniam ad ea esse mollit culpa qui reprehenderit ullamco do nostrud nisi officia esse culpa. Eiusmod aliqua reprehenderit labore esse tempor elit ad.</h2>
					</Fade>
				</div>

				<div className="showCase">
					<ShowCaseElement screenWidth={width} src={Plate1} />
					<ShowCaseElement screenWidth={width} src={Plate6} />
					<ShowCaseElement screenWidth={width} src={Plate4} />
					<ShowCaseElement screenWidth={width} src={Cooking1} />
					<ShowCaseElement screenWidth={width} src={Cooking4} isBtn={true} />
					<ShowCaseElement screenWidth={width} src={Cooking2} last={true} />
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
