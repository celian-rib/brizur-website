import React from 'react';
import '../stylesheets/DownArrow.css';
import '../stylesheets/Header.css';

import Fade from 'react-reveal/Fade';
import assets from '../others/asset_sources';

function Header() {
	return (
		<div className="Header">
			<div className="Title">
				<img src={assets.Plate7} alt="background" className="BackgroundImage" />
				<img src={assets.BrizureLogo} alt="background" className="Logo" />
				<h1 id="BizurTitle">BRIZUR</h1>
				<h6 id="BizurSubTitle">VÉGÉTAL ET SUCRÉ</h6>
				<a href="#showcase">
					<h2>
						NOS PLATS
					</h2>
				</a>
			</div>
			<div className="info">
				<div className="HeaderInfo">
					<Fade duration={2000} right cascade>
						<h1>Veniam eu voluptate aute proident reprehenderit est est.</h1>
						<div className="separator" />
						<h4>Eiusmod consectetur cupidatat sit occaecat ait incididunt. Labore commodo excepteur reprehense non tempor irure proident pariatur laboris laborum aute. Laborum nostrud dolore sit duis consequat anim irure ipsum sint ut eiusmod magna. Velit nulla officia officia dolor eu veniam sint ipsum nisi.</h4>
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
