import { React } from 'react';
import Fade from 'react-reveal/Fade';
import '../stylesheets/slideImageText.css';

function SlideImageText(props) {

	const {
		text, image, offset, moreInfo
	} = props;

	return (
		<div className="slideImageContainer">
			<img style={{ transform: `translateY(${offset * 0.2 - 150}px)` }} className="slideImageContainer-image" src={image} alt="gateau" />
			<Fade right>
				{ moreInfo
					? (
						<div>
							<h4>Horaires d&lsquo;ouverture</h4>
							<h4>12h - 16h</h4>
							<h8>(dernière prise de commande à 14h00)</h8>
							<h4>19h30 - 23h</h4>
							<h8>(dernière prise de commande à 21h30)</h8>
							{/* <h6>La vente à emporter et nos pâtisseries boutiques sont disponibles chaque jour selon nos horaires d&lsquo;ouverture</h6> */}
						</div>
					)
					: <h2>{text}</h2>}
			</Fade>
		</div>
	);
}

export default SlideImageText;
