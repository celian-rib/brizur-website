import React from 'react';
import Fade from 'react-reveal/Fade';
import ShowCaseElement from '../components/ShowcaseElement';
import assets from '../others/asset_sources';
import '../stylesheets/Body.css';

function Body(props) {
	const { screenWidth, scrollOffset } = props;
	return (
		<div className="Body">
			<div className="bodyInfoBar">
				<img style={{ transform: `translateY(${scrollOffset * 0.2 - 100}px)` }} className="bodyInfoBar-image" src={assets.Plate2} alt="gateau" />
				<Fade right cascade>
					<h2>Qui ut desnderit sinNolor deserunt. Dolordolor incididunt voluptate laborum. Minim laboris deserunt commodo reprehenderit magna ea deserunt sunt ut aute pariatur ut laboris. Veniam ad ea esse mollit culpa qui reprehenderit ullamco do nostrud nisi officia esse culpa. Eiusmod aliqua reprehenderit labore esse tempor elit ad.</h2>
				</Fade>
			</div>

			<div className="showCase">
				<ShowCaseElement screenWidth={screenWidth} src={assets.Plate1} />
				<ShowCaseElement screenWidth={screenWidth} src={assets.Plate6} />
				<ShowCaseElement screenWidth={screenWidth} src={assets.Plate4} />
				<ShowCaseElement screenWidth={screenWidth} src={assets.Cooking1} />
				<ShowCaseElement screenWidth={screenWidth} src={assets.Cooking4} isBtn />
				<ShowCaseElement screenWidth={screenWidth} src={assets.Cooking2} last />
			</div>
			{
				screenWidth < 900
					? (
						<div className="smallScreenShowCaseBtn">
							<img src={assets.Cooking4} alt="gateau" />
							<div className="showcaseBtn">
								<h1>BRIZUR s&lsquo;emporte</h1>
								<h3>De 12H à 18H</h3>
								<a href=" ">
									<h2>VOIR</h2>
								</a>
							</div>
						</div>
					)
					:					<div />
			}
			<div className="THENTODO" />
		</div>
	);
}
export default Body;
