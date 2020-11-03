import React from 'react';
import '../stylesheets/showcaseElement.css';
import Fade from 'react-reveal/Fade';

function ShowcaseElement(props) {
	const {
		last,
		screenWidth,
		src,
		isBtn
	} = props;

	if (last && screenWidth < 900) {
		return null;
	}
	if (screenWidth < 900 && isBtn) {
		return null;
	}
	return (
		<Fade left>
			<div className="showcaseContainer">
				<img src={src} alt="gateau" className="showCaseImg" />
				{isBtn
					? (
						<div className="showcaseBtn">
							<h1>BRIZUR &lsquo; emporte</h1>
							<h3>De 12H à 18H</h3>
							<a href=" ">
								<h2>VOIR</h2>
							</a>
						</div>
					)
					: null}
			</div>
		</Fade>
	);
}

export default ShowcaseElement;
