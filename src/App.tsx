import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";

import MuteButton from "./components/MuteButton";
import NavigateBar from "./components/NavigationBar";

function App() {
	const location = useLocation();

	// Navigation cachée sur "/" et "/home"
	const hideNavigation =
		location.pathname === "/" || location.pathname === "/home";

	// MuteButton caché uniquement sur "/"
	const hideMuteButton = location.pathname === "/";

	// === AUDIO GLOBAL === //
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isMuted, setIsMuted] = useState(true);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		audio.volume = 0.4;
		audio.muted = true;
		audio.play().catch(() => {});

		const handleStartMusic = () => {
			audio.muted = false;
			setIsMuted(false);
			audio.play().catch(() => {});
		};

		window.addEventListener("start-music", handleStartMusic);

		return () => {
			window.removeEventListener("start-music", handleStartMusic);
		};
	}, []);

	const toggleMute = () => {
		const audio = audioRef.current;
		if (!audio) return;

		const newMuted = !isMuted;
		setIsMuted(newMuted);
		audio.muted = newMuted;

		if (!newMuted) audio.play().catch(() => {});
	};

	return (
		<>
			{/* Audio global */}
			<audio ref={audioRef} src="/sounds/TitleTheme.mp3" loop>
				<track kind="captions" src="" label="no captions available" />
			</audio>

			{/* Bouton mute, masqué uniquement sur "/" */}
			{!hideMuteButton && (
				<MuteButton isMuted={isMuted} toggleMute={toggleMute} />
			)}

			{/* Navigation masquée sur "/" et "/home" */}
			{!hideNavigation && <NavigateBar />}

			{/* Pages */}
			<Outlet />
		</>
	);
}

export default App;
