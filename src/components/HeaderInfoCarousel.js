/* eslint-disable */
import { React } from 'react';

import '../stylesheets/carousel.css';

function HeaderInfoCarousel() {
	return (
		<div className="header-carousel-container">
			<div className="fade-blocker" />
			<div className="fade-blocker-left" />
				<div className="carousel-item">
					<div className="text-container">
						<h4>
							Entrez dans l’univers de notre restaurant bistronomique
							qui casse les codes pour vous délivrer une expérience inédite.
						</h4>
					</div>
				</div>
				<div className="carousel-item">
					<div className="text-container">
						<h4>
							Notre mission, faire rentrer les desserts dans une nouvelle dimension.
							Nos chefs emmènent la pâtisserie au sommet de son art,
							dans un défilé de textures et d’associations déclinées en salé pour les entrées et les plats.
						</h4>
					</div>
				</div>
				<div className="carousel-item">
					<div className="text-container">
						<h4>
							Nos desserts restent sucrés et triomphants de gourmandise. <br />
							Les maîtres-mots :
							déstructuré, pour le dressage de nos plats, et végétal pour notre menu se basant
							sur les fruits, légumes et plantes. Chez nous, le dessert est un moyen d’expression sans limite !
						</h4>
					</div>
				</div>
		</div>
	);
}
export default HeaderInfoCarousel;

{/* Entrez dans l’univers de notre restaurant bistronomique
qui casse les codes pour vous délivrer une expérience inédite.
Notre mission, faire rentrer les desserts dans une nouvelle dimension.
Nos chefs emmènent la pâtisserie au sommet de son art,
dans un défilé de textures et d’associations déclinées en salé pour les entrées et les plats.
Nos desserts restent sucrés et triomphants de gourmandise. <br />
Les maîtres-mots :
déstructuré, pour le dressage de nos plats, et végétal pour notre menu se basant
sur les fruits, légumes et plantes. Chez nous, le dessert est un moyen d’expression sans limite ! */}