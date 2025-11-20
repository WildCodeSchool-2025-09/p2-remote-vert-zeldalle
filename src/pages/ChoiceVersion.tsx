import { useNavigate } from "react-router-dom";
import "./ChoiceVersion.css";
import cuisineLink from "../assets/ChoiceVersionPicture/cuisineLink.jpg";

export default function ChoiceVersion() {
	const navigate = useNavigate();

	const startBreathVersion = () => {
		// 🔥 Déclenche la musique dans MuteButton
		window.dispatchEvent(new Event("start-music"));

		// Navigue vers la Home
		navigate("/home");
	};

	return (
		<main className="choiceScreen" aria-labelledby="choice-title">
			<h1 id="choice-title" className="choiceTitle">
				Bienvenue sur Zeldalle
			</h1>

			<img
				src={cuisineLink}
				alt="Illustration de Link qui cuisine un repas"
				className="choiceImage"
			/>

			<section className="choiceButtons">
				<button
					type="button"
					className="choiceBtn"
					onClick={startBreathVersion}
				>
					Zelda Breath of the Wild
				</button>

				<button
					type="button"
					className="choiceBtn disabled"
					disabled
					aria-disabled="true"
				>
					Zelda Tears of the Kingdom <span>(maintenance)</span>
				</button>
			</section>
		</main>
	);
}
