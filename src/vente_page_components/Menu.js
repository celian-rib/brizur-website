/* eslint-disable */
import React from 'react';
import '../stylesheets/menu.css';

function Menu() {
	return (
		<div className="Menu">
			<div className="mainMenuContent">
				<div className="menuPart">
					<h1>Entrée</h1>
					<h2>La Tatin</h2>
					<h3>Rosace de butternut, crème montée au chèvre</h3>
				</div>
				<div className="menuPart">
					<h1>Plat</h1>
					<h2>Le Riz</h2>
					<h3>Risotto pistache, salade de fenouil, tuile de parmesan, éclats de pistaches</h3>
				</div>
				<div className="menuPart">
					<h1>Dessert</h1>
					<h2>Le Jivara</h2>
					<h3>Crémeux jivara, crumble et sponge cake cacao, tuile au grué</h3>
				</div>
			</div>
			<div className="priceContainer">
				<div className="priceBox">
					<h3>ENTREE - PLAT</h3>
					<h5>ou</h5>
					<h3>PLAT - DESSERT</h3>
					<h2>16 €</h2>
				</div>
				<div className="priceBox">
					<h3>ENTREE - PLAT - DESSERT</h3>
					<h2>20 €</h2>
				</div>
			</div>
        </div>
	);
}

export default Menu;
