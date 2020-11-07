import React from 'react';
import Fade from 'react-reveal/Fade';
import ShowCaseContainer from '../components/ShowCaseContainer';
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

			<ShowCaseContainer screenWidth={screenWidth} />

			<div className="bodyInfoBar">
				<img style={{ transform: `translateY(${scrollOffset * -0.2 + 100}px)` }} className="bodyInfoBar-image" src={assets.Plate1} alt="gateau" />
			</div>

		</div>
	);
}
export default Body;
