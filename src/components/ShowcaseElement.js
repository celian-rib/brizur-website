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
	return (
		<Fade left>
			<div className={(screenWidth < 900 && isBtn) ? 'showCaseBtnContainer' : 'showCaseItem'}>
				<img src={src} alt="gateau" className="showCaseImg" />
				{isBtn
					? (
						<div className="showcaseBtn">
							<h1>BRIZUR s&lsquo;emporte</h1>
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
