import '../stylesheets/showcaseElement.css'
import Fade from 'react-reveal/Fade';





function ShowcaseElement(props) {
	
	return (
		<Fade left cascade>
			{
			props.last&&props.screenWidth<900?
				<div/>
			:(
				props.screenWidth>900||!props.isBtn?
					<div className="showcaseContainer">
							<img src={props.src} alt="gateau" className="showCaseImg"></img>
							{props.isBtn?
								<div className="showcaseBtn">
									<h1>BRIZUR s'emporte</h1>
									<h3>De 12H à 18H</h3>
									<a href=" ">
										<h2>VOIR</h2>
									</a>
								</div>
							:
							null
							// <div className="overlay">
							// 	<h4>Name</h4>
							// </div>
						}
					</div>
				:
				<div></div>
			)
			}
		</Fade>
	);
}

export default ShowcaseElement;