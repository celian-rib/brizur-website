import { React } from 'react';
// import Fade from 'react-reveal/Fade';
import '../stylesheets/slideImageText.css';
import '../stylesheets/timetable.css';

function SlideImageText(props) {

	const {
		text, image, offset, moreInfo
	} = props;

	return (
		<div className="slideImageContainer">
			<img style={{ transform: `translateY(${offset * 0.2 - 150}px)` }} className="slideImageContainer-image" src={image} alt="gateau" />
			{/* <Fade right> */}
			{ moreInfo
				? (
					<div className="timetable">
						<div className="timetableContainer">
							<h2>Horaires d&lsquo;ouverture</h2>
							<h2>12h - 16h
								<h4>(Dernière prise de commande à 14h00)</h4>
							</h2>
							<h2>19h30 - 23h
								<h4>(Dernière prise de commande à 21h30)</h4>
							</h2>
						</div>
						<div className="timetableContainer">
							<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
							<h2>Ou nous trouver ?</h2>
							<a href="https://www.google.com/maps/place/2+Rue+Tustal,+33000+Bordeaux/@44.8384437,-0.576585,17z/data=!3m1!4b1!4m5!3m4!1s0xd5527c5113685f7:0x2cbe8e3a4cbd0adf!8m2!3d44.8384437!4d-0.5743963" className="fa fa-street-view"> </a>
							<a href="https://www.google.com/maps/place/2+Rue+Tustal,+33000+Bordeaux/@44.8384437,-0.576585,17z/data=!3m1!4b1!4m5!3m4!1s0xd5527c5113685f7:0x2cbe8e3a4cbd0adf!8m2!3d44.8384437!4d-0.5743963">
								<h3>
									2 rue Tustal Bordeaux
								</h3>
							</a>

						</div>
					</div>
				)
				: <h2>{text}</h2>}
			{/* </Fade> */}
		</div>
	);
}

export default SlideImageText;
