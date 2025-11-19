import { useEffect, useRef, useState } from "react";
import "./Home.css";

import HomeMuteOff from "../assets/home-picture/HomeButtonMuteOff.png";
import homeButton from "../assets/home-picture/homeButton.webp";
import HomeMuteOn from "../assets/home-picture/homeButtonMuteOn.png";
import homeSurtitle from "../assets/home-picture/homeSurtitle.png";
import homeSymbolTriforce from "../assets/home-picture/homeSymbolTriforce.png";

import { Link } from "react-router-dom";
import CookingPot3DOk from "../components/home/CookingPot3DOk";

function Home() {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isMuted, setIsMuted] = useState(true);

	// Play music on load (autoplay fix mobile)
	useEffect(() => {
		if (!audioRef.current) return;

		audioRef.current.volume = 0.4;
		audioRef.current.muted = true;
		audioRef.current.play().catch(() => {});
	}, []);

	// Toggle mute / unmute
	const toggleMute = () => {
		if (!audioRef.current) return;

		const newMuted = !isMuted;
		setIsMuted(newMuted);

		audioRef.current.muted = newMuted;

		if (!newMuted) {
			audioRef.current.play().catch(() => {});
		}
	};

	return (
		<>
			<audio ref={audioRef} src="/sounds/TitleTheme.mp3" loop>
				<track kind="captions" src="" />
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

						<CookingPot3DOk />

						<Link to="/inventory" className="homeButtonEnter">
							<img src={homeButton} alt="Enter" />
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
