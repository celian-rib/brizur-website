import React from 'react';
import {
	Link
} from 'react-router-dom';
import './stylesheets/vente.css';
import assets from './others/asset_sources';

function Vente() {
	return (
		<div className="Vente">
			<Link to="/">
				<div className="vente-banner">
					<img src={assets.BrizureLogo} alt="background" className="vente-logo" />
					<h1>BRIZUR</h1>
				</div>
			</Link>
			<div className="vente-header">
				<img src={assets.Plate2} alt="background" className="BackgroundImage" />
			</div>
		</div>
	);
}

export default Vente;
