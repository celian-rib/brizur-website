/* eslint-disable */
import React from 'react';
import ShowCaseElement from './ShowcaseElement';
import assets from '../others/asset_sources';
import '../stylesheets/showCaseContainer.css';
import '../stylesheets/Body.css';

function ShowCaseContainer(props) {
	const { screenWidth } = props;
	return (
		<div className="showCase">
			<ShowCaseElement screenWidth={screenWidth} src={assets.Plate1} />
			<ShowCaseElement screenWidth={screenWidth} src={assets.Plate6} />
			<ShowCaseElement screenWidth={screenWidth} src={assets.Plate4} />
			<ShowCaseElement screenWidth={screenWidth} src={assets.Cooking1} />
			<ShowCaseElement screenWidth={screenWidth} src={assets.Cooking4} isBtn />
			<ShowCaseElement screenWidth={screenWidth} src={assets.Cooking2} last />
		</div>
	);
}

export default ShowCaseContainer;
