import { React, useEffect, useState } from 'react';
import ShowCaseContainer from '../components/ShowCaseContainer';
import SlideImageText from '../components/SlideImageText';
import '../stylesheets/Body.css';
import assets from '../others/asset_sources';

function Body(props) {
	const { screenWidth } = props;

	const [offset, setOffset] = useState(0);

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset);
		};
	}, []);

	return (
		<div className="Body">
			<SlideImageText offset={offset} image={assets.Plate2} text="BRIZUR est un projet de création de restaurant de quatre étudiants. Nous sommes sommes à l’école de gastronomie française Ferrandi à Bordeaux et nous nommons Adrien, Coline, Léa et Mona. Notre projet est pour l’instant fictif mais pourrait devenir réalité ! Nous croisons les doigts pour être sélectionnés et être appliqués au restaurant de Ferrandi en janvier. Nous espérons vous voir bientôt !" />

			<ShowCaseContainer screenWidth={screenWidth} />

			<SlideImageText moreInfo offset={offset} image={assets.Plate3} text="Du mercredi au dimanche" />
		</div>
	);
}
export default Body;
