import { React, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../stylesheets/slideImageText.css';

function SlideImageText(props) {

	const { text, image } = props;

	const [offset, setOffset] = useState(0);

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset);
		};
	}, []);

	return (
		<div className="slideImageContainer">
			<img style={{ transform: `translateY(${offset * 0.2 - 100}px)` }} className="slideImageContainer-image" src={image} alt="gateau" />
			<Fade right cascade>
				<h2>{text}</h2>
			</Fade>
		</div>
	);
}

export default SlideImageText;
