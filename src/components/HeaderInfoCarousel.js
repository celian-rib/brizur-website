import { React } from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../stylesheets/carousel.css';

function HeaderInfoCarousel() {
	return (
		<Carousel className="carousel-container" showArrows showIndicators>
			<div>
				<p className="legend">Legend 1</p>
			</div>
			<div>
				<p className="legend">Legend 2</p>
			</div>
			<div>
				<p className="legend">Legend 3</p>
			</div>
		</Carousel>
	);
}
export default HeaderInfoCarousel;
