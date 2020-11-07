import { React, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import assets from '../others/asset_sources';

function SlideImageText() {
	const [offset, setOffset] = useState(0);
	useEffect(() => {
		window.onscroll = () => {
			setOffset(window.pageYOffset);
		};
	}, []);
	return (
		<div className="bodyInfoBar">
			<img style={{ transform: `translateY(${offset * 0.2 - 100}px)` }} className="bodyInfoBar-image" src={assets.Plate2} alt="gateau" />
			<Fade right cascade>
				<h2>Qui ut desnderit sinNolor deserunt. Dolordolor incididunt voluptate laborum. Minim laboris deserunt commodo reprehenderit magna ea deserunt sunt ut aute pariatur ut laboris. Veniam ad ea esse mollit culpa qui reprehenderit ullamco do nostrud nisi officia esse culpa. Eiusmod aliqua reprehenderit labore esse tempor elit ad.</h2>
			</Fade>
		</div>
	);
}

export default SlideImageText;
