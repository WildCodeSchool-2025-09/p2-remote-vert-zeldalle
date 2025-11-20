import "./Home.css";

import homeButton from "../assets/home-picture/homeButton.webp";
import homeSurtitle from "../assets/home-picture/homeSurtitle.png";
import homeSymbolTriforce from "../assets/home-picture/homeSymbolTriforce.png";

import { Link } from "react-router-dom";
import CookingPot3DOk from "../components/home/CookingPot3DOk";

export default function Home() {
	return (
		<div className="HomeContainer">
			<div className="homeIntro">
				<h1 className="homeTitle">
					<img src={homeSurtitle} alt="Zeldalle" />
				</h1>
			</div>

			<div className="homeMain">
				<div className="homeCards">
					<img src={homeSymbolTriforce} alt="Symbole Triforce" />

					<CookingPot3DOk />

					<Link to="/inventory" className="homeButtonEnter">
						<img src={homeButton} alt="Enter" />
					</Link>
				</div>
			</div>
		</div>
	);
}
