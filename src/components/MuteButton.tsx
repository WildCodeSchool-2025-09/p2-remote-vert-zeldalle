import HomeMuteOff from "../components/assets/homeButtonMuteOff.png";
import HomeMuteOn from "../components/assets/homeButtonMuteOn.png";

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
