import React from 'react';

import '../stylesheets/DownArrow.css';
import '../stylesheets/Header.css';
import Fade from 'react-reveal/Fade';
import assets from '../others/asset_sources';

function Header() {
	return (
		<div className="Header">
			<div className="Title">
				<div className="BackgroundImageContainer">
					<img src={assets.Plate7} alt="background" className="BackgroundImage" />
				</div>
				<img src={assets.BrizureLogo} alt="background" className="Logo" />
				<h1 id="BizurTitle">BRIZUR</h1>
				<h6 id="BizurSubTitle">VÉGÉTAL ET SUCRÉ</h6>
				<a href="https://bookings.zenchef.com/results?rid=349936&type=web&pid=1001&lang=fr&fullscreen=1">
					<h2>
						RÉSERVATION
					</h2>
				</a>
			</div>
			<div className="info">
				<div className="HeaderInfo">
					<Fade duration={2000} left>
						<h1>Quand la pâtisserie et le végétal s&lsquo;unissent pour créer un repas</h1>
						<div className="separator" />
					</Fade>
					<p>
						{/* Entrez dans l’univers de notre restaurant bistronomique
						qui casse les codes pour vous délivrer une expérience inédite. */}
						Notre mission, faire rentrer les desserts dans une nouvelle dimension. Les maîtres-mots :
						déstructuré, pour le dressage de nos plats, et végétal pour notre menu se basant
						sur les fruits, légumes et plantes. Chez nous, le dessert est un moyen d’expression sans limite!
					</p>
				</div>
				<div className="HeaderArrow">
					<div className="chevron" />
					<div className="chevron" />
					<div className="chevron" />
				</div>
			</div>
		</div>
	);
}
export default Header;
