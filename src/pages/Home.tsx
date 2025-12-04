import "./Home.css";
import { Link } from "react-router-dom";
import CookingPot3DOk from "../components/CookingPot3DOk";
import homeButton from "../components/assets/homeButton.webp";
import homeSurtitle from "../components/assets/homeSurtitle.png";
import homeSymbolTriforce from "../components/assets/homeSymbolTriforce.png";

export default function Home() {
	return (
		<div className="home-container">
			<div className="home-intro">
				<h1 className="home-title">
					<img src={homeSurtitle} alt="Zeldalle" />
				</h1>
			</div>

			<div className="home-main">
				<div className="home-cards">
					<img src={homeSymbolTriforce} alt="Symbole Triforce" />

					<CookingPot3DOk />

					<Link to="/app/inventory" className="home-button-enter">
						<img src={homeButton} alt="Enter" />
					</Link>
				</div>
			</div>
		</div>
	);
}
