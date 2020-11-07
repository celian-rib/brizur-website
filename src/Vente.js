import React from 'react';
import './stylesheets/vente.css';
import assets from './others/asset_sources';

function Vente() {
	return (
		<div className="Vente">
			<div className="vente-header">
				<img src={assets.BrizureLogo} alt="background" className="vente-logo" />
				<h1>BRIZUR</h1>
			</div>
		</div>
	);
}

export default Vente;
