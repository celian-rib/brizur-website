import React from 'react';
import ShowCaseContainer from '../components/ShowCaseContainer';
import SlideImageText from '../components/SlideImageText';
import '../stylesheets/Body.css';

function Body(props) {
	const { screenWidth } = props;
	return (
		<div className="Body">
			<SlideImageText />

			<ShowCaseContainer screenWidth={screenWidth} />

			<SlideImageText />
		</div>
	);
}
export default Body;
