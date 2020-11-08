import React from 'react';
import ShowCaseContainer from '../components/ShowCaseContainer';
import SlideImageText from '../components/SlideImageText';
import '../stylesheets/Body.css';
import assets from '../others/asset_sources';

function Body(props) {
	const { screenWidth } = props;
	return (
		<div className="Body">
			<SlideImageText image={assets.Plate2} text="Info 1" />

			<ShowCaseContainer screenWidth={screenWidth} />

			<SlideImageText image={assets.Plate3} text="Footer" />
		</div>
	);
}
export default Body;
