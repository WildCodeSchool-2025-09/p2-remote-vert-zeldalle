import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./Home.css";
import HomeMuteOff from "../assets/home-picture/HomeButtonMuteOff.png";
import homeButton from "../assets/home-picture/homeButton.webp";
import HomeMuteOn from "../assets/home-picture/homeButtonMuteOn.png";
import homeSurtitle from "../assets/home-picture/homeSurtitle.png";
import homeSymbolTriforce from "../assets/home-picture/homeSymbolTriforce.png";
import CookingPot3D from "../components/CookingPot3D";

function Home() {
	const navigate = useNavigate();
	const goToInventory = () => {
		navigate("/inventaire");
	};

	// Audio reference
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isMuted, setIsMuted] = useState(true);

	// Autoplay compatible mobile
	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		audio.volume = 0.4;
		audio.muted = true;

		audio.play().catch(() => {});
	}, []);

	// Toggle mute
	const toggleMute = () => {
		const audio = audioRef.current;
		if (!audio) return;

		const newMuted = !isMuted;
		setIsMuted(newMuted);
		audio.muted = newMuted;

		// Si on UNMUTE, on s'assure que la musique joue
		if (!newMuted) {
			audio.play().catch(() => {});
		}
	};

	return (
		<>
			{/* MUSIC */}
			<audio ref={audioRef} src="/sounds/TitleTheme.mp3" loop>
				<track kind="captions" />
			</audio>

			{/* MUTE BUTTON */}
			<button className="homeButtonMute" type="button" onClick={toggleMute}>
				<img
					src={isMuted ? HomeMuteOff : HomeMuteOn}
					alt={isMuted ? "Muted" : "Sound on"}
				/>
			</button>

			<div className="HomeContainer">
				<div className="homeIntro">
					<h1 className="homeTitle">
						<img src={homeSurtitle} alt="Zeldalle" />
					</h1>
				</div>

				<div className="homeMain">
					<div className="homeCards">
						<img src={homeSymbolTriforce} alt="Symbole Triforce" />

						<CookingPot3D />

						<button
							className="homeButtonEnter"
							type="button"
							onClick={goToInventory}
						>
							<div className="shine-wrapper">
								<img src={homeButton} alt="Enter" />
							</div>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
