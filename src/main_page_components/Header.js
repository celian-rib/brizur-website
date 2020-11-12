import React from 'react';
import {
	Link
} from 'react-router-dom';

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
				<Link to="/reservation">
					<h2>
						RÉSERVER UNE TABLE
					</h2>
				</Link>
			</div>
			<div className="info">
				<div className="HeaderInfo">
					<Fade duration={2000} left>
						<h1>Quand la pâtisserie et le végétal s&lsquo;unissent pour créer un repas</h1>
						<div className="separator" />
					</Fade>
					<Carousel />
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
