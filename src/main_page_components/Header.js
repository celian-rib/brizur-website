import React from 'react';
import '../stylesheets/DownArrow.css';
import '../stylesheets/Header.css';
import Fade from 'react-reveal/Fade';
import Carousel from '../components/HeaderInfoCarousel';
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
				<a href=" ">
					<h2>
						RÉSERVER UNE TABLE
					</h2>
				</a>
			</div>
			<div className="info">
				<div className="HeaderInfo">
					<Fade duration={2000} right>
						<h1>Quand la pâtisserie et le végétal s&lsquo;unissent pour créer un repas</h1>
						<div className="separator" />
						<Carousel />
						{/* <h4>
							Entrez dans l’univers de notre restaurant bistronomique
							qui casse les codes pour vous délivrer une expérience inédite. <br />
							Notre mission, faire rentrer les desserts dans une nouvelle dimension. <br />
							Nos chefs emmènent la pâtisserie au sommet de son art,
							dans un défilé de textures et d’associations déclinées en salé pour les entrées et les plats. <br />
							Nos desserts restent sucrés et triomphants de gourmandise. <br />
							Les maîtres-mots :
							déstructuré, pour le dressage de nos plats, et végétal pour notre menu se basant
							sur les fruits, légumes et plantes. Chez nous, le dessert est un moyen d’expression sans limite !
						</h4> */}
					</Fade>
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
