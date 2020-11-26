/* eslint-disbale */
import { React, useState, useEffect } from 'react';
import {
	Link
} from 'react-router-dom';
import SlideImageText from './components/SlideImageText';
import './stylesheets/vente.css';
import assets from './others/asset_sources';

function Vente() {

	const [offset, setOffset] = useState(0);

	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset);
		};
	}, []);

	return (
		<div className="Vente">
			<Link href="/" className="vente-banner">
				<img src={assets.BrizureLogo} alt="background" className="vente-logo" />
				<h1>BRIZUR</h1>
			</Link>
			<SlideImageText offset={offset} image={assets.Plate4} text="Decouvrez nos plats" />
			<div className="vente-body">
				<img src={assets.Menu} alt="Menu du restaurant" />
			</div>
		</div>
	);
}

export default Vente;
