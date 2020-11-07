import React from 'react';
import '../stylesheets/Footer.css';

function Footer() {
	return (
		<div className="Footer">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
			<div className="social">
				<a href="https://www.instagram.com/brizur_restaurant/" className="fa fa-instagram"> </a>
				<a href=" " className="fa fa-facebook"> </a>
			</div>
			<div className="legal-infos">
				<a id="license" rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">©2020 <h5>Riboulet Célian</h5></a>
				<a id="mentions-legales" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Mentions légales</a>
			</div>
		</div>
	);
}
export default Footer;
