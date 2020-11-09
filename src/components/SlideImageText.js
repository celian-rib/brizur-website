import { React } from 'react';
import Fade from 'react-reveal/Fade';
import '../stylesheets/slideImageText.css';

function SlideImageText(props) {

	const { text, image, offset } = props;

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
