import HomeMuteOff from "../assets/home-picture/HomeButtonMuteOff.png";
import HomeMuteOn from "../assets/home-picture/HomeButtonMuteOn.png";

export default function MuteButton({
	isMuted,
	toggleMute,
}: {
	isMuted: boolean;
	toggleMute: () => void;
}) {
	return (
		<button className="homeButtonMute" type="button" onClick={toggleMute}>
			<img
				src={isMuted ? HomeMuteOff : HomeMuteOn}
				alt={isMuted ? "Muted" : "Sound on"}
			/>
		</button>
	);
}
