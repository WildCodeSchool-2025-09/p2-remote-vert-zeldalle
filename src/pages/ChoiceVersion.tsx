import { useNavigate } from "react-router-dom";
import "./ChoiceVersion.css";
import cuisineLink from "../components/assets/chaudronchoiceversion.png";

export default function ChoiceVersion() {
	const navigate = useNavigate();

	const startBreathVersion = () => {
		
		window.dispatchEvent(new Event("start-music"));

		
		navigate("/home");
	};

	return (
		<main className="choice-Screen" aria-labelledby="choice-title">

  <div className="choice-Content">

    <img
      src={cuisineLink}
      alt="Zeldalle"
      className="choice-Image"
    />

    <section className="choice-Buttons">
      <button
        type="button"
        className="choice-Btn"
        onClick={startBreathVersion}
      >
        Zelda Breath of the Wild
      </button>

      <button
        type="button"
        className="choice-Btn disabled"
        disabled
        aria-disabled="true"
      >
        Zelda Tears of the Kingdom <span>(maintenance)</span>
      </button>
    </section>

  </div>

</main>
	);
}	