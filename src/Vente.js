/* eslint-disable */
import { React, useState, useEffect } from 'react';
import {
	Link
} from 'react-router-dom';
import SlideImageText from './components/SlideImageText';
import Menu from './vente_page_components/Menu';
import Form from './vente_page_components/FormVente';
import './stylesheets/vente.css';
import assets from './others/asset_sources';

function Vente() {

	const [offset, setOffset] = useState(0);

	useEffect(() => {
		window.scrollTo(0, 0);
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
			{/* <SlideImageText offset={offset} image={assets.Plate4} text="Brizur s’invite chez vous !" /> */}
			<div className="vente-body">
				<h1>Brizur s'invite chez vous !</h1>
				<Menu></Menu>
				<Form></Form>
			</div>
		</div>
	);
}

export default Vente;
